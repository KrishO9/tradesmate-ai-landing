
import { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Industries from '@/components/Industries';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import CareFeatures from '@/components/careFeatures';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({
    hero: null,
    features: null,
    industries: null,
    cta: null
  });

  // Initialize scroll reveal and set up intersection observer
  useEffect(() => {
    // Initialize scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });

    // Set up intersection observer for section transitions
    const options = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Assign refs and observe
    const sectionElements = document.querySelectorAll('section[id]');
    sectionElements.forEach(section => {
      const id = section.id || '';
      if (id) {
        sectionsRef.current[id] = section as HTMLElement;
        observer.observe(section);
      }
    });

    // Add scroll event for reveal animations
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

    return () => {
      // Clean up
      sectionElements.forEach(section => {
        observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section id="hero" className={`transition-opacity duration-500 ${activeSection === 'hero' ? 'opacity-100' : 'opacity-70'}`}>
          <Hero />
        </section>
        <section id="features" className={`transition-opacity duration-500 ${activeSection === 'features' ? 'opacity-100' : 'opacity-70'}`}>
          <Features />
        </section>
        <section id="care-features" className={`transition-opacity duration-500 ${activeSection === 'care-features' ? 'opacity-100' : 'opacity-70'}`}>
          <CareFeatures />
        </section>
        <section id="industries" className={`transition-opacity duration-500 ${activeSection === 'industries' ? 'opacity-100' : 'opacity-70'}`}>
          <Industries />
        </section>
        <section id="cta" className={`transition-opacity duration-500 ${activeSection === 'cta' ? 'opacity-100' : 'opacity-70'}`}>
          <CTA />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
