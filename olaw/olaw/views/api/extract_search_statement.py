import os
import traceback
import json

from flask import current_app, jsonify, request
from openai import OpenAI
import ollama

from olaw.utils import list_available_models, get_limiter

API_EXTRACT_SEARCH_STATEMENT_RATE_LIMIT = os.environ["API_EXTRACT_SEARCH_STATEMENT_RATE_LIMIT"]


@current_app.route("/api/extract-search-statement", methods=["POST"])
@get_limiter().limit(API_EXTRACT_SEARCH_STATEMENT_RATE_LIMIT)
def post_extract_search_statement():
    """
    [POST] /api/extract-search-statement

    Uses an LLM to analyze a message and, if a legal question is detected:
    - Indicate what API is best suited for that query
    - Returns a search statement for said API.

    Edit EXTRACT_SEARCH_STATEMENT_PROMPT to alter behavior.

    Accepts JSON body with the following properties:
    - "model": One of the models /api/models lists (required)
    - "message": User prompt (required)
    - "temperature": Defaults to 0.0

    Returns JSON:
    - {"search_target": str, "search_statement": str}
    """
    available_models = list_available_models()
    input = request.get_json()
    model = ""
    message = ""
    temperature = 0.0
    prompt = os.environ["EXTRACT_SEARCH_STATEMENT_PROMPT"]
    output = ""
    timeout = 30

    #
    # Check that "model" was provided and is available
    #
    if "model" not in input:
        return jsonify({"error": "No model provided."}), 400

    if input["model"] not in available_models:
        return jsonify({"error": "Requested model is invalid or not available."}), 400

    model = input["model"]

    #
    # Check that "message" was provided
    #
    if "message" not in input:
        return jsonify({"error": "No message provided."}), 400

    message = str(input["message"]).strip()

    if not message:
        return jsonify({"error": "Message cannot be empty."}), 400

    #
    # Validate "temperature" if provided
    #
    if "temperature" in input:
        try:
            temperature = float(input["temperature"])
            assert temperature >= 0.0
        except Exception:
            return (
                jsonify({"error": "temperature must be a float superior or equal to 0.0."}),
                400,
            )

    #
    # Ask model to filter out and extract search query
    #
    prompt = f"{prompt}\n{message}"

    try:
        # Ollama
        if model.startswith("ollama"):
            ollama_client = ollama.Client(
                host=os.environ["OLLAMA_API_URL"],
                timeout=timeout,
            )

            response = ollama_client.chat(
                model=model.replace("ollama/", ""),
                options={"temperature": temperature},
                format="json",
                messages=[{"role": "user", "content": prompt}],
            )

            output = response["message"]["content"]
        # OpenAI / OpenAI-compatible
        else:
            openai_client = OpenAI()

            response = openai_client.chat.completions.create(
                model=model.replace("openai/", ""),
                temperature=temperature,
                messages=[{"role": "user", "content": prompt}],
                response_format={"type": "json_object"},
                timeout=timeout,
            )

            output = json.loads(response.model_dump_json())["choices"][0]["message"]["content"]

    except Exception:
        current_app.logger.error(traceback.format_exc())
        return jsonify({"error": f"Could not run completion against {model}."}), 500

    #
    # Check output format
    #
    try:
        output = json.loads(output)
        assert "search_statement" in output  # Will raise an exception if format is invalid
        assert isinstance(output["search_statement"], str) or output["search_statement"] is None
        assert isinstance(output["search_target"], str) or output["search_target"] is None
        assert len(output.keys()) == 2
    except Exception:
        current_app.logger.error(traceback.format_exc())
        return jsonify({"error": f"{model} returned invalid JSON."}), 500

    return jsonify(output), 200
