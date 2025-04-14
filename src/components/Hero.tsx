
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-gradient-to-b from-tradesmate-light-gray/30 to-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              24/7 AI Agents to Automate Your Service Business
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-xl">
              From Calls and Quotes to Invoices and Payments
            </p>
            <p className="mt-6 text-lg text-gray-500 max-w-lg">
              Handle customer calls, schedule jobs, send estimates, and collect payments — all from your phone
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('cta')}
                size="lg"
                className="bg-gradient-to-r from-tradesmate-purple to-tradesmate-purple-dark hover:opacity-90 transition-opacity text-lg"
              >
                Start Free Trial <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button 
                onClick={() => scrollToSection('features')}
                variant="outline" 
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-100/50 text-lg"
              >
                <PlayCircle className="mr-2" size={18} /> See How It Works
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center animate-fade-in delay-300">
            <div className="relative w-64 md:w-80">
              <div className="absolute -inset-4 bg-gradient-to-r from-tradesmate-purple to-tradesmate-purple-dark rounded-full opacity-20 blur-lg"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-tradesmate-light-gray p-4">
                {/* Simplified phone illustration */}
                <div className="h-96 rounded-2xl border border-gray-200 flex flex-col">
                  <div className="bg-gray-50 p-3 border-b border-gray-200">
                    <div className="w-24 h-2 bg-tradesmate-purple/30 rounded-full mx-auto"></div>
                  </div>
                  <div className="flex-1 p-4 flex flex-col justify-center items-center">
                    <div className="w-16 h-16 bg-tradesmate-purple/20 rounded-full flex items-center justify-center mb-4">
                      <div className="w-8 h-8 bg-tradesmate-purple rounded-full"></div>
                    </div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full mb-2"></div>
                    <div className="w-24 h-2 bg-gray-200 rounded-full mb-6"></div>
                    <div className="space-y-3 w-full px-4">
                      <div className="flex gap-2 items-start">
                        <div className="w-6 h-6 bg-tradesmate-purple/20 rounded-full flex-shrink-0"></div>
                        <div className="bg-tradesmate-light-gray p-2 rounded-lg rounded-tl-none flex-1">
                          <div className="w-full h-2 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex gap-2 items-start justify-end">
                        <div className="bg-tradesmate-purple/20 p-2 rounded-lg rounded-tr-none flex-1">
                          <div className="w-full h-2 bg-tradesmate-purple/40 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex gap-2 items-start">
                        <div className="w-6 h-6 bg-tradesmate-purple/20 rounded-full flex-shrink-0"></div>
                        <div className="bg-tradesmate-light-gray p-2 rounded-lg rounded-tl-none flex-1">
                          <div className="w-full h-2 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 border-t border-gray-200 flex justify-center">
                    <div className="w-12 h-4 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
