import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Book, Search, Scale, Accessibility, UserCheck, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-6xl font-bold mb-6"
                >
                  <span className="text-shoora-gold">Shoora:</span> The Ultimate <br />
                  AI Library at Your <br />
                  Fingertips
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-gray-600 mb-8 text-lg"
                >
                  Your AI-powered Library gateway to legal research, case laws, and
                  training resources—fast, intelligent, and reliable. Leverage AI-driven
                  search, precedent-based insights, smart recommendations, and real-
                  time legal updates to navigate the legal landscape effortlessly.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <button 
                    onClick={() => navigate('/library')}
                    className="shoora-btn-primary"
                  >
                    Start now <span aria-hidden="true">→</span>
                  </button>
                  
                  <button
                    onClick={() => navigate('/about')}
                    className="shoora-btn-secondary"
                  >
                    Learn more
                  </button>
                </motion.div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:mt-12">
                  <FeatureCard
                    icon={Book}
                    title="Unified Legal Library"
                    description="Access comprehensive legal resources in one centralized location."
                    delay={0.3}
                  />
                  
                  <div className="mt-8">
                    <FeatureCard
                      icon={Search}
                      title="RAG-Powered Search"
                      description="Find relevant legal materials with advanced semantic search."
                      delay={0.5}
                    />
                  </div>
                </div>
                
                <div>
                  <FeatureCard
                    icon={Scale}
                    title="Court Simulation"
                    description="Experience interactive courtroom training scenarios."
                    delay={0.4}
                  />
                  
                  <div className="mt-8">
                    <FeatureCard
                      icon={Accessibility}
                      title="AI Accessibility"
                      description="Legal resources made accessible for everyone with AI assistance."
                      delay={0.6}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4 md:px-8 bg-shoora-gray">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Shoora?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our platform offers unparalleled legal research capabilities, powered by cutting-edge AI technology.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="bg-shoora-gold/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <Book className="text-shoora-gold h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Comprehensive Library</h3>
                <p className="text-gray-600">
                  Access thousands of legal resources, including case law, statutes, regulations, and scholarly articles, all in one place.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="bg-shoora-gold/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <Scale className="text-shoora-gold h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Interactive Court Simulation</h3>
                <p className="text-gray-600">
                  Practice your legal skills with our virtual court simulation and get real-time feedback to improve your arguments and understanding.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="bg-shoora-gold/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <Accessibility className="text-shoora-gold h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered Accessibility</h3>
                <p className="text-gray-600">
                  Inclusive legal resources with AI-powered tools that make content accessible for everyone, regardless of their abilities.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="bg-shoora-gold/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <UserCheck className="text-shoora-gold h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalized Recommendations</h3>
                <p className="text-gray-600">
                  Get tailored legal resource suggestions based on your interests, research history, and professional needs.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="bg-shoora-gold/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <Search className="text-shoora-gold h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Intelligent Search</h3>
                <p className="text-gray-600">
                  Our AI-powered search understands legal terminology and context, delivering more relevant results than traditional search engines.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 bg-shoora-gold/10">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-4"
                  >
                    Ready to revolutionize your legal research?
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-600 mb-6"
                  >
                    Join thousands of legal professionals who are already using Shoora to streamline their workflow and make more informed decisions.
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    onClick={() => navigate('/signup')}
                    className="shoora-btn-primary"
                  >
                    Get Started Today
                  </motion.button>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-shoora-gray rounded-xl p-6 shadow-inner"
                >
                  <div className="text-center">
                    <p className="font-semibold text-xl mb-4">What our users say</p>
                    <div className="italic text-gray-600 mb-6">
                      "Shoora has completely transformed how I approach legal research. The AI-powered search and recommendations have saved me countless hours and helped me find precedents I would have missed otherwise."
                    </div>
                    <div className="font-medium">Sarah J., Corporate Attorney</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
