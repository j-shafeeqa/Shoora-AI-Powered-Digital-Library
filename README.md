# ⚖️ Shoora: AI-Powered Digital Legal Library

![Shoora Banner](https://github.com/user-attachments/assets/3bbb098d-4a69-4f37-91af-27a818ff14c3)

<p align="center">
  <img src="https://img.shields.io/badge/WINNER-UAE%20Hackathon%202025%20(Pioneers%20Track)-purple?style=for-the-badge&logo=github" alt="UAE Hackathon Winner Badge" />
</p>

> 🏆 **Shoora** was crowned the **Winner of UAE Hackathon 2025 (Pioneers Track)** among hundreds of innovative submissions across the country. We’re redefining legal intelligence with AI—starting in the UAE, built for the world.

Shoora is an AI-powered legal intelligence platform built to unify the UAE’s fragmented legal ecosystem. Designed for judicial trainees, legal professionals, and government institutions, Shoora brings together legislation, case law, and judicial training materials into a **central, searchable, and interactive legal library**.

## 🚀 Key Features

| Feature                     | Description                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| **Smart Legal Search**     | NLP + RAG powered deep search across legislation, case law, and training documents |
| **AI Court Simulation**    | Realistic case-based legal training simulator                               |
| **Multilingual Support**   | Supports English & Arabic, with roadmap for more                            |
| **Sign Language Mode**     | Accessibility-first with sign translation pipeline (prototype stage)        |
| **Conversational Assistant** | Legal Q&A bot built using spaCy, RAG, and rule-based logic                 |

## 🚀 Here’s Shoora in action

### 🔍 Smart Legal Search
![Smart Search Demo](https://github.com/user-attachments/assets/e55bb133-785d-4b79-90fd-1404df6244a6)

### ⚖️ AI-Powered Court Simulation
![Court Simulation](https://github.com/user-attachments/assets/d80c4b28-c6d4-41af-97dc-fb745bc9590c)

## 🧠 Technical Stack

| Layer               | Tools / Tech Used                                             |
|--------------------|---------------------------------------------------------------|
| **Backend**        | Python, FastAPI, MongoDB                                      |
| **NLP Pipeline**   | spaCy (NER), custom OCR, Retrieval-Augmented Generation (RAG) |
| **Data Ingestion** | BeautifulSoup, CourtListener API, UAE Open Data Portals       |
| **Frontend**       | HTML/CSS/JS (Prototype), Figma for UI mockups                 |
| **AI Components**  | Prompt-based search ranking, named entity linking, legal citation mapping |
| **Deployment**     | GitHub (demo), future-ready for containerization (Docker)     |

## 📚 Datasets Used

- 🇦🇪 [UAE Ministry of Justice Open Data](https://www.moj.gov.ae/en/open-data.aspx)  
- 🇦🇪 [UAE Legislation Portal](https://uaelegislation.gov.ae/en)  
- 🇦🇪 [Bayanat & FCSD Datasets](https://bayanat.ae)  
- 🌍 [Court Listener API](https://www.courtlistener.com/api/)

## 🛠 How It Works

1. **Data Collection & Preprocessing**
   - Scrape from official UAE legal portals
   - Clean & extract with OCR and BeautifulSoup
   - NLP pipeline for NER, context matching, and case linking

2. **Search Engine**
   - Uses a custom RAG setup to return relevant cases, laws, and training content
   - Query understanding enhanced via intent recognition

3. **Court Simulation Engine**
   - Users are placed in realistic legal scenarios
   - Decision trees and legal branching simulate courtroom logic

## 💼 Business Impact

- 🌍 Aligned with UAE 2031 vision for judicial modernization  
- 📈 Targets a $40B+ global legal tech market  
- 🎓 Pilot-ready for Judicial Training Institutes like UAE JTI  
- 🏛️ Modular SaaS model for government, university & law firm integration

## 🗓 Roadmap

| Phase                 | Milestone                                                   |
|----------------------|-------------------------------------------------------------|
| ✅ Month 1–2          | MVP development + NLP engine                                |
| 🔄 Month 3–6          | Summarization, multilingual support, conversational AI      |
| 🤝 Month 6–9          | Partnerships with MOJ, law firms, and universities          |
| 🚀 Month 10–12        | Nationwide launch & licensing rollout                       |

## 🔍 Competitive Edge

| Feature                      | Shoora ✅ | Westlaw | LexisNexis | LegAI |
|-----------------------------|-----------|---------|------------|-------|
| NLP-Powered Legal Search    | ✅        | ❌      | ✅         | ✅    |
| Court Simulation for Trainees | ✅        | ❌      | ❌         | ❌    |
| Arabic + English Support    | ✅        | ❌      | ✅         | ❌    |
| Built for Education         | ✅        | ❌      | ❌         | ❌    |
| Open Data Integration       | ✅        | ❌      | ❌         | ❌    |

## 📜 License

**All rights reserved.**  
This repository and its contents are the intellectual property of Team Innovisionaries.  
Use of this code, content, or designs without explicit permission is prohibited.

## 🏁 With Shoora, we're not just digitizing legal content—  
**We're redefining how justice is searched, learned, and served.**
