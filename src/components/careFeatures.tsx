import { PhoneIncoming, BarChart3, Zap, SmilePlus } from 'lucide-react';
import { useEffect } from 'react';

interface CareCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  delay: string;
}

const CareCard = ({ icon, title, description, delay }: CareCardProps) => (
  <div className={`reveal fade-bottom ${delay} bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300`}>
    <div className="p-3 bg-tradesmate-light-gray rounded-lg inline-block mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const CareFeatures = () => {
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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="care-features" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="reveal fade-bottom text-center mb-16">
        <h2 className="text-tradesmate-purple text-2xl md:text-3xl font-bold uppercase mb-2">Never Miss a Call</h2>
        <h3 className="text-3xl md:text-4xl font-bold">Ensure your customers are always taken care of</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <CareCard
            icon={<PhoneIncoming className="text-tradesmate-purple" size={24} />}
            title="Never miss a call again"
            description="Forget poor-quality after-hours call centers. Let our AI answer calls, book jobs, and capture every opportunity 24/7."
            delay="delay-100"
          />
          <CareCard
            icon={<BarChart3 className="text-tradesmate-purple" size={24} />}
            title="Real-time performance insights"
            description="Get visibility into your team’s call handling, bookings, and response time with smart metrics and alerts."
            delay="delay-200"
          />
          <CareCard
            icon={<Zap className="text-tradesmate-purple" size={24} />}
            title="Smart follow-ups"
            description="AI automatically follows up with customers who didn’t book on the first call — turning maybe into yes."
            delay="delay-300"
          />
          <CareCard
            icon={<SmilePlus className="text-tradesmate-purple" size={24} />}
            title="Tailored for your trade"
            description="Whether you’re a plumber or an electrician, our AI is built to fit your workflow — no tech headaches."
            delay="delay-400"
          />
        </div>
      </div>
    </section>
  );
};

export default CareFeatures;
