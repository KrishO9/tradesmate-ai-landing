
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CTA = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="cta" className="py-16 md:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-tradesmate-purple/20 to-tradesmate-light-gray opacity-25 -z-10"></div>
      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 reveal fade-bottom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Ready to Automate Your Service Business?
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-xl mx-auto mb-8">
            Start your free 14-day trial and see how TradesMate can transform your business operations
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-tradesmate-success-green p-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-gray-600">No credit card required</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-tradesmate-success-green p-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-gray-600">Cancel anytime</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-tradesmate-success-green p-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-gray-600">Full access to all features</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-tradesmate-success-green p-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-gray-600">Free setup assistance</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-gradient-to-r from-tradesmate-purple to-tradesmate-purple-dark hover:opacity-90 transition-opacity text-lg px-8"
            >
              Start Free Trial <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/contact?demo=true')}
              className="border-gray-300 text-gray-700 hover:bg-gray-100/50 text-lg"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
