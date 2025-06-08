
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Monitor, ArrowUpRight, Play, Volume1 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Accessibility = () => {
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [audioDescription, setAudioDescription] = useState(false);
  const [signLanguage, setSignLanguage] = useState(false);
  
  return (
    <div className={`min-h-screen flex flex-col ${highContrast ? 'bg-black text-white' : ''}`}>
      <Navbar />
      
      <main className="flex-grow">
        <div className={`py-12 px-4 ${highContrast ? 'bg-black text-white' : 'bg-white'}`}>
          <div className="container mx-auto max-w-6xl">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-center"
              style={{ fontSize: `${fontSize + 16}px` }}
            >
              AI-Powered Accessibility Features
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-center mb-12 max-w-3xl mx-auto"
              style={{ fontSize: `${fontSize}px` }}
            >
              Making legal resources accessible to everyone with cutting-edge AI technology.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
              {/* Left side - Video */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:col-span-7"
              >
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/46cd0a81-39fb-4a64-bcd0-54a08c1b08de.png" 
                      alt="Online Course Lecture" 
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="bg-white/80 hover:bg-white p-4 rounded-full text-shoora-gold">
                        <Play className="h-8 w-8 fill-current" />
                      </button>
                    </div>
                    
                    {audioDescription && (
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5">
                        <Volume1 className="h-4 w-4" />
                        <span>Audio Description</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-3" style={{ fontSize: `${fontSize + 4}px` }}>
                      View Our Legal Lecture Courses
                    </h2>
                    <p className="text-gray-700 mb-6" style={{ fontSize: `${fontSize}px` }}>
                      Explore our AI-powered legal lecture courses based on various UAE laws, enhanced with special accessibility controls to ensure an inclusive learning experience for everyone.
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <button className="text-shoora-gold hover:underline flex items-center gap-1">
                        View full transcript <ArrowUpRight className="h-4 w-4" />
                      </button>
                      <div className="flex items-center gap-3">
                        <button 
                          className={`p-2 rounded-full ${audioDescription ? 'bg-shoora-gold text-white' : 'bg-gray-200 text-gray-700'}`}
                          onClick={() => setAudioDescription(!audioDescription)}
                        >
                          {audioDescription ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
                        </button>
                        <button 
                          className={`p-2 rounded-full ${signLanguage ? 'bg-shoora-gold text-white' : 'bg-gray-200 text-gray-700'}`}
                          onClick={() => setSignLanguage(!signLanguage)}
                        >
                          <span className="text-lg px-0.5">👋</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Right side - Sign Language Interpreter */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="md:col-span-5"
              >
                {signLanguage ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
                  >
                    <img 
                      src="/lovable-uploads/8f73e578-f981-4218-a76c-126c7e577582.png" 
                      alt="Sign Language Interpreter" 
                      className="w-full flex-grow object-cover"
                    />
                    <div className="p-4 bg-black text-white">
                      <p className="text-center font-medium text-sm">
                        Sign Language Interpreter
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="bg-gray-200 rounded-lg h-full flex items-center justify-center">
                    <p className="text-gray-500 p-4 text-center">
                      Enable sign language interpretation to see the interpreter here
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
            
            {/* Accessibility Controls moved below the video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-16"
            >
              <div className={`rounded-lg overflow-hidden shadow-md p-6 ${highContrast ? 'bg-gray-900' : 'bg-white'}`}>
                <h2 className="text-xl font-semibold mb-6" style={{ fontSize: `${fontSize + 4}px` }}>
                  Accessibility Controls
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-medium mb-2" style={{ fontSize: `${fontSize}px` }}>
                      Font Size
                    </p>
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                        className="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center text-gray-700"
                      >
                        -
                      </button>
                      <div className="flex-grow h-2 bg-gray-200 rounded-full relative">
                        <div 
                          className="absolute h-full bg-shoora-gold rounded-full" 
                          style={{ width: `${((fontSize - 12) / 16) * 100}%` }}
                        ></div>
                      </div>
                      <button 
                        onClick={() => setFontSize(Math.min(28, fontSize + 2))}
                        className="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center text-gray-700"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="font-medium" style={{ fontSize: `${fontSize}px` }}>
                        High Contrast Mode
                      </p>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={highContrast}
                          onChange={() => setHighContrast(!highContrast)}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-shoora-gold"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="font-medium" style={{ fontSize: `${fontSize}px` }}>
                        Audio Description
                      </p>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={audioDescription}
                          onChange={() => setAudioDescription(!audioDescription)}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-shoora-gold"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="font-medium" style={{ fontSize: `${fontSize}px` }}>
                        Sign Language
                      </p>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={signLanguage}
                          onChange={() => setSignLanguage(!signLanguage)}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-shoora-gold"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-shoora-gold/10 rounded-xl p-8 mb-12"
            >
              <h2 className="text-2xl font-bold mb-4" style={{ fontSize: `${fontSize + 8}px` }}>
                Our Commitment to Accessibility
              </h2>
              <p className="text-gray-700 mb-6" style={{ fontSize: `${fontSize}px` }}>
                At Shoora, we believe legal knowledge should be accessible to everyone. Our platform incorporates the following accessibility features:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`p-5 rounded-lg ${highContrast ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                  <div className="text-shoora-gold mb-3">
                    <Monitor className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-2" style={{ fontSize: `${fontSize + 2}px` }}>
                    Visual Adjustments
                  </h3>
                  <p className="text-gray-600" style={{ fontSize: `${fontSize}px` }}>
                    Font size controls, high contrast mode, and color adjustments for users with visual impairments.
                  </p>
                </div>
                
                <div className={`p-5 rounded-lg ${highContrast ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                  <div className="text-shoora-gold mb-3">
                    <Volume2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-2" style={{ fontSize: `${fontSize + 2}px` }}>
                    Audio Features
                  </h3>
                  <p className="text-gray-600" style={{ fontSize: `${fontSize}px` }}>
                    Text-to-speech functionality, audio descriptions, and voice commands for those with hearing impairments.
                  </p>
                </div>
                
                <div className={`p-5 rounded-lg ${highContrast ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                  <div className="text-shoora-gold mb-3">
                    <span className="text-2xl">👋</span>
                  </div>
                  <h3 className="font-semibold mb-2" style={{ fontSize: `${fontSize + 2}px` }}>
                    Language Support
                  </h3>
                  <p className="text-gray-600" style={{ fontSize: `${fontSize}px` }}>
                    Sign language interpretation, simplified language options, and multi-language support for diverse users.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`rounded-xl p-8 ${highContrast ? 'bg-gray-900' : 'bg-white'} shadow-lg border border-gray-200`}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-3" style={{ fontSize: `${fontSize + 8}px` }}>
                    Need Personalized Assistance?
                  </h2>
                  <p className="text-gray-600 mb-6" style={{ fontSize: `${fontSize}px` }}>
                    Our accessibility team is here to help you with any specific accommodations you may need. Contact us to learn more about how we can support your unique needs.
                  </p>
                  <Button className="bg-shoora-gold hover:bg-shoora-gold/90 text-white">
                    Contact Our Accessibility Team
                  </Button>
                </div>
                
                <div className="md:w-1/3">
                  <img 
                    src="/lovable-uploads/f35bfca5-ff3c-4ba9-9969-0b0abe643183.png" 
                    alt="Accessibility Support" 
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Accessibility;
