
import { 
  Droplets, Flame, Wrench, Construction, Lightbulb, Trash2, 
  Paintbrush, Home, Sprout, Shield, Building, ParkingSquare
} from 'lucide-react';
import { useEffect } from 'react';

interface IndustryCardProps {
  icon: React.ReactElement;
  title: string;
}

const IndustryCard = ({ icon, title }: IndustryCardProps) => (
  <div className="flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-tradesmate-purple/30 transition-all duration-200">
    <div className="p-3 bg-tradesmate-light-gray rounded-full mb-4">
      {icon}
    </div>
    <h3 className="font-medium text-gray-800">{title}</h3>
  </div>
);

const Industries = () => {
  const industries = [
    { title: "Plumbing", icon: <Droplets className="text-tradesmate-purple" size={24} /> },
    { title: "HVAC", icon: <Flame className="text-tradesmate-purple" size={24} /> },
    { title: "Electrical", icon: <Lightbulb className="text-tradesmate-purple" size={24} /> },
    { title: "Landscaping", icon: <Sprout className="text-tradesmate-purple" size={24} /> },
    { title: "Cleaning", icon: <Home className="text-tradesmate-purple" size={24} /> },
    { title: "Pest Control", icon: <Shield className="text-tradesmate-purple" size={24} /> },
    { title: "Construction", icon: <Construction className="text-tradesmate-purple" size={24} /> },
    { title: "Waste Management", icon: <Trash2 className="text-tradesmate-purple" size={24} /> },
    { title: "Painting", icon: <Paintbrush className="text-tradesmate-purple" size={24} /> },
    { title: "General Repair", icon: <Wrench className="text-tradesmate-purple" size={24} /> },
    { title: "Property Management", icon: <Building className="text-tradesmate-purple" size={24} /> },
    { title: "Auto Services", icon: <ParkingSquare className="text-tradesmate-purple" size={24} /> },
  ];

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
    <section id="industries" className="py-16 md:py-24 bg-gray-50 px-4">
      <div className="container mx-auto">
        <div className="reveal fade-bottom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Target Industries</h2>
          <p className="text-xl text-gray-600 text-center max-w-xl mx-auto mb-12">
            Built for trades professionals who want to grow their business
          </p>
        </div>
        
        <div className="reveal fade-bottom grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={index} 
              icon={industry.icon} 
              title={industry.title} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
