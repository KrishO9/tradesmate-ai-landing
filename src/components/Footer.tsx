
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">TradesMate</h3>
            <p className="mb-6">24/7 AI Agents for Service Businesses</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/tradesmate/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-tradesmate-purple transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="mt-4 text-gray-400">Contact: Daniel@tradesmate.live</p>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 TradesMate. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
