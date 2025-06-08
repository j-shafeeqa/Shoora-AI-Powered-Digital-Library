
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20 px-4 bg-gray-50">
        <div className="text-center max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
                <AlertCircle className="text-red-500 h-10 w-10" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold mb-4 text-gray-800">404</h1>
            <p className="text-xl text-gray-600 mb-6">Oops! We couldn't find the page you're looking for.</p>
            
            <div className="text-gray-600 mb-8">
              <p>The page you requested may have been moved, deleted, or never existed.</p>
            </div>
            
            <Link to="/" className="shoora-btn-primary inline-flex">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Return to Home
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 p-6 bg-white rounded-lg shadow-sm"
          >
            <h2 className="text-lg font-semibold mb-2">Looking for legal resources?</h2>
            <p className="text-gray-600 mb-4">
              Try one of these popular destinations instead:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/library" className="text-shoora-gold hover:underline">Legal Library</Link>
              <Link to="/assistant" className="text-shoora-gold hover:underline">Legal Assistant</Link>
              <Link to="/court-simulation" className="text-shoora-gold hover:underline">Court Simulation</Link>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
