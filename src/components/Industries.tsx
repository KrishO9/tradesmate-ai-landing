
import { 
  Droplets, Flame, Wrench, Construction, Lightbulb, Trash2, 
  Paintbrush, Home, Sprout, Shield, Building, ParkingSquare
} from 'lucide-react';
import { useEffect, useRef } from 'react';

interface IndustryCardProps {
  icon: React.ReactElement;
  title: string;
}

const IndustryCard = ({ icon, title }: IndustryCardProps) => (
  <div className="flex flex-col items-center justify-center bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-tradesmate-purple/30 transition-all duration-200 w-32 md:w-40 mx-2 my-2">
    <div className="p-3 bg-tradesmate-light-gray rounded-full mb-4">
      {icon}
    </div>
    <h3 className="font-medium text-gray-800 text-center">{title}</h3>
  </div>
);

const Industries = () => {
  const industries1 = [
    { title: "Plumbing", icon: <Droplets className="text-tradesmate-purple" size={24} /> },
    { title: "HVAC", icon: <Flame className="text-tradesmate-purple" size={24} /> },
    { title: "Electrical", icon: <Lightbulb className="text-tradesmate-purple" size={24} /> },
    { title: "Landscaping", icon: <Sprout className="text-tradesmate-purple" size={24} /> },
    { title: "Cleaning", icon: <Home className="text-tradesmate-purple" size={24} /> },
    { title: "Pest Control", icon: <Shield className="text-tradesmate-purple" size={24} /> },
  ];

  const industries2 = [
    { title: "Construction", icon: <Construction className="text-tradesmate-purple" size={24} /> },
    { title: "Waste Management", icon: <Trash2 className="text-tradesmate-purple" size={24} /> },
    { title: "Painting", icon: <Paintbrush className="text-tradesmate-purple" size={24} /> },
    { title: "General Repair", icon: <Wrench className="text-tradesmate-purple" size={24} /> },
    { title: "Property Management", icon: <Building className="text-tradesmate-purple" size={24} /> },
    { title: "Auto Services", icon: <ParkingSquare className="text-tradesmate-purple" size={24} /> },
  ];

  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll1 = () => {
      if (row1Ref.current) {
        if (row1Ref.current.scrollLeft >= row1Ref.current.scrollWidth / 2) {
          row1Ref.current.scrollLeft = 0;
        } else {
          row1Ref.current.scrollLeft += 1;
        }
      }
    };

    const scroll2 = () => {
      if (row2Ref.current) {
        if (row2Ref.current.scrollLeft <= 0) {
          row2Ref.current.scrollLeft = row2Ref.current.scrollWidth / 2;
        } else {
          row2Ref.current.scrollLeft -= 1;
        }
      }
    };

    const timer1 = setInterval(scroll1, 30);
    const timer2 = setInterval(scroll2, 30);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);

  // Create duplicated lists for infinite scroll effect
  const duplicatedIndustries1 = [...industries1, ...industries1];
  const duplicatedIndustries2 = [...industries2, ...industries2];

  return (
    <section id="industries" className="py-16 md:py-24 bg-gray-50 px-4">
      <div className="container mx-auto">
        <div className="reveal fade-bottom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Target Industries</h2>
          <p className="text-xl text-gray-600 text-center max-w-xl mx-auto mb-12">
            Built for trades professionals who want to grow their business
          </p>
        </div>
        
        <div className="relative mb-8 reveal fade-bottom">
          <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          <div 
            ref={row1Ref} 
            className="flex overflow-x-hidden whitespace-nowrap"
          >
            {duplicatedIndustries1.map((industry, index) => (
              <div key={`${industry.title}-${index}`} className="inline-block">
                <IndustryCard 
                  icon={industry.icon} 
                  title={industry.title} 
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative reveal fade-bottom">
          <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          <div 
            ref={row2Ref} 
            className="flex overflow-x-hidden whitespace-nowrap"
          >
            {duplicatedIndustries2.map((industry, index) => (
              <div key={`${industry.title}-${index}`} className="inline-block">
                <IndustryCard 
                  icon={industry.icon} 
                  title={industry.title} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
