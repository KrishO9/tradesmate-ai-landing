
import { useEffect } from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  animationDelay: string;
}

const TestimonialCard = ({ quote, name, role, company, industry, animationDelay }: TestimonialProps) => (
  <div className={`reveal fade-bottom ${animationDelay} bg-white rounded-xl p-8 shadow-sm border border-gray-100`}>
    <div className="mb-6">
      <svg className="h-8 w-8 text-tradesmate-purple/30" fill="currentColor" viewBox="0 0 32 32">
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
    </div>
    <p className="text-gray-700 mb-6">{quote}</p>
    <div>
      <p className="font-semibold text-gray-800">{name}</p>
      <p className="text-gray-500 text-sm">{role}, {company}</p>
      <p className="text-tradesmate-purple text-sm mt-1">{industry}</p>
    </div>
  </div>
);

const Testimonials = () => {
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
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 px-4">
      <div className="container mx-auto">
        <div className="reveal fade-bottom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Trades Professionals Say</h2>
          <p className="text-xl text-gray-600 text-center max-w-xl mx-auto mb-16">
            Join hundreds of service businesses already using TradesMate
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="TradesMate has completely transformed how I run my plumbing business. The AI takes care of booking jobs while I'm busy on site, and I've seen a 30% increase in bookings since using it."
            name="Michael Johnson"
            role="Owner"
            company="Johnson's Plumbing"
            industry="Plumbing Services"
            animationDelay="delay-100"
          />
          
          <TestimonialCard
            quote="As an electrician, I was losing jobs because I couldn't answer calls while working. Now TradesMate handles all my calls, sends quotes, and even follows up with customers. It's like having a full-time receptionist."
            name="Sarah Williams"
            role="Founder"
            company="Williams Electrical"
            industry="Electrical Services"
            animationDelay="delay-200"
          />
          
          <TestimonialCard
            quote="The automated payment system has cut my admin time in half. I can send invoices instantly after completing a job, and customers can pay right away. Cash flow has never been better."
            name="David Rodriguez"
            role="Owner"
            company="Rodriguez HVAC"
            industry="HVAC Services"
            animationDelay="delay-300"
          />
        </div>
        
        <div className="mt-16 reveal fade-bottom">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="bg-white h-12 w-32 rounded-md flex items-center justify-center shadow-sm">
              <div className="text-lg font-semibold text-gray-400">ServicePro</div>
            </div>
            <div className="bg-white h-12 w-32 rounded-md flex items-center justify-center shadow-sm">
              <div className="text-lg font-semibold text-gray-400">TechTrade</div>
            </div>
            <div className="bg-white h-12 w-32 rounded-md flex items-center justify-center shadow-sm">
              <div className="text-lg font-semibold text-gray-400">BuildCorp</div>
            </div>
            <div className="bg-white h-12 w-32 rounded-md flex items-center justify-center shadow-sm">
              <div className="text-lg font-semibold text-gray-400">RepairNow</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
