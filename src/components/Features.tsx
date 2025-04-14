
import { Phone, Calendar, FileText, CreditCard } from 'lucide-react';
import { useEffect } from 'react';

interface FeatureCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  animationDelay: string;
}

const FeatureCard = ({ icon, title, description, animationDelay }: FeatureCardProps) => (
  <div className={`reveal fade-bottom ${animationDelay} bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300`}>
    <div className="p-3 bg-tradesmate-light-gray rounded-lg inline-block mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
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
    <section id="features" className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="reveal fade-bottom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Key Features</h2>
          <p className="text-xl text-gray-600 text-center max-w-xl mx-auto mb-16">
            Streamline your service business with powerful automation tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard 
            icon={<Phone className="text-tradesmate-purple" size={24} />}
            title="AI Call Handling"
            description="Never miss a lead with 24/7 AI phone agents that handle customer calls and booking"
            animationDelay="delay-100"
          />
          
          <FeatureCard 
            icon={<Calendar className="text-tradesmate-purple" size={24} />}
            title="Smart Scheduling"
            description="Automatically organize your workday with intelligent job scheduling"
            animationDelay="delay-200"
          />
          
          <FeatureCard 
            icon={<FileText className="text-tradesmate-purple" size={24} />}
            title="Instant Estimates"
            description="Create and send professional quotes directly from your phone"
            animationDelay="delay-300"
          />
          
          <FeatureCard 
            icon={<CreditCard className="text-tradesmate-purple" size={24} />}
            title="Payment Collection"
            description="Get paid faster with automated invoicing and payment processing"
            animationDelay="delay-400"
          />
        </div>
        
        <div className="mt-16 reveal fade-bottom">
          <div className="bg-tradesmate-light-gray rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-center mb-6">How TradesMate Works</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-tradesmate-purple flex items-center justify-center text-white font-bold mb-4">1</div>
                <h4 className="font-medium mb-2">Set Up Your AI Agent</h4>
                <p className="text-gray-600">Configure your AI assistant to handle calls and schedules based on your preferences</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-tradesmate-purple flex items-center justify-center text-white font-bold mb-4">2</div>
                <h4 className="font-medium mb-2">Automate Customer Interactions</h4>
                <p className="text-gray-600">Let the AI handle customer calls, bookings, and follow-ups</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-tradesmate-purple flex items-center justify-center text-white font-bold mb-4">3</div>
                <h4 className="font-medium mb-2">Focus on Your Work</h4>
                <p className="text-gray-600">Spend more time on jobs and less time on admin tasks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
