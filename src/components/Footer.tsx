
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-shoora-offwhite py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-shoora-darkgray">Shoora</h3>
            <p className="text-gray-600 mb-4">
              AI-powered legal research platform. Simplifying legal research with cutting-edge technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gold hover:text-gold-dark">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gold hover:text-gold-dark">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gold hover:text-gold-dark">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gold hover:text-gold-dark">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-shoora-darkgray">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/library" className="text-gray-600 hover:text-gold">Legal Library</Link></li>
              <li><Link to="/assistant" className="text-gray-600 hover:text-gold">Legal Assistant</Link></li>
              <li><Link to="/court-simulation" className="text-gray-600 hover:text-gold">Court Simulation</Link></li>
              <li><Link to="/accessibility" className="text-gray-600 hover:text-gold">Accessibility Features</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-shoora-darkgray">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-gold">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gold">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-gold">Careers</Link></li>
              <li><Link to="/press" className="text-gray-600 hover:text-gold">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-shoora-darkgray">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-600 hover:text-gold">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-gold">Privacy Policy</Link></li>
              <li><Link to="/licensing" className="text-gray-600 hover:text-gold">Licensing Information</Link></li>
              <li><Link to="/cookies" className="text-gray-600 hover:text-gold">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Shoora. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link to="/signup" className="bg-[#D4AF37] text-white px-4 py-2 rounded hover:bg-[#D4AF37]/90 transition-colors">
              Sign up to read
            </Link>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="shoora-input pr-10"
              />
              <button className="absolute right-2 top-2.5 text-gold hover:text-gold-dark">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
