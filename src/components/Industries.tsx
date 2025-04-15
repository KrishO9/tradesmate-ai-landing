// components/Industries.tsx - Updated with Autoplay

import * as React from "react"; // Import React
import {
  Droplets, Flame, Wrench, Construction, Lightbulb, Trash2,
  Paintbrush, Home, Sprout, Shield, Building, ParkingSquare
} from 'lucide-react';

// Import the Autoplay plugin
import Autoplay from "embla-carousel-autoplay";

// Import your Carousel components (adjust path if necessary)
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'; // Make sure this path is correct

interface IndustryCardProps {
  icon: React.ReactElement;
  title: string;
}

// Use React.memo for potential performance optimization of the card
const IndustryCard = React.memo(({ icon, title }: IndustryCardProps) => (
  // Ensure card takes full height of its container and center content
  <div className="flex h-full flex-col items-center justify-center bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-tradesmate-purple/30 transition-all duration-200 w-full"> {/* Use w-full */}
    <div className="p-3 bg-gray-100 rounded-full mb-3 md:mb-4"> {/* Example background color */}
      {/* Clone icon to easily add classes/size */}
      {React.cloneElement(icon, { size: 24, className: "text-purple-600" })} {/* Example color */}
    </div>
    <h3 className="font-medium text-gray-800 text-center text-sm md:text-base leading-tight">{title}</h3>
  </div>
));
IndustryCard.displayName = 'IndustryCard'; // Helps in React DevTools

const Industries = () => {
  // --- Autoplay Plugin Refs ---
  // Use useRef to keep the plugin instance stable across renders
  // Configure autoplay options here
  const autoplayPlugin1 = React.useRef(
    Autoplay({
      delay: 1200, // Delay between transitions (ms)
      stopOnInteraction: false, // Continue playing even after user interaction
      stopOnMouseEnter: true,  // Pause when mouse enters the carousel area
      playOnInit: true,         // Start playing automatically
    })
  );

  const autoplayPlugin2 = React.useRef(
    Autoplay({
      delay: 1200, // Slightly different speed for variation
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true,
      direction: 'backward', // Make this one scroll the other way
    })
  );

  // --- Industry Data ---
  const industries1 = React.useMemo(() => [ // Memoize data arrays
    { title: "Plumbing", icon: <Droplets /> },
    { title: "HVAC", icon: <Flame /> },
    { title: "Electrical", icon: <Lightbulb /> },
    { title: "Landscaping", icon: <Sprout /> },
    { title: "Cleaning", icon: <Home /> },
    { title: "Pest Control", icon: <Shield /> },
    // Add more if needed for visual seamlessness
  ], []);

  const industries2 = React.useMemo(() => [
    { title: "Construction", icon: <Construction /> },
    { title: "Waste Mgmt", icon: <Trash2 /> }, // Shortened
    { title: "Painting", icon: <Paintbrush /> },
    { title: "General Repair", icon: <Wrench /> },
    { title: "Property Mgmt", icon: <Building /> }, // Shortened
    { title: "Auto Services", icon: <ParkingSquare /> },
    // Add more if needed
  ], []);

  // Duplicate for seamless visual looping effect when loop: true is active
  // Embla handles the mechanism, but visually more items help hide the "wrap"
  const duplicatedIndustries1 = React.useMemo(() => [...industries1, ...industries1, ...industries1], [industries1]);
  const duplicatedIndustries2 = React.useMemo(() => [...industries2, ...industries2, ...industries2], [industries2]);

  return (
    // Add overflow-hidden to prevent layout shifts or accidental scrollbars
    <section id="industries" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4"> {/* Add horizontal padding to container */}
        <div className="reveal fade-bottom mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Target Industries</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
            Built for trades professionals who want to grow their business
          </p>
        </div>

        {/* --- Carousel 1 (Forward) --- */}
        <div className="mb-8 reveal fade-bottom">
          <Carousel
            opts={{
              align: "start", // Align items from the start
              loop: true,     // Enable infinite looping *required* for seamless autoplay
              // dragFree: true, // Optional: Allows continuous dragging like a conveyor belt
            }}
            plugins={[autoplayPlugin1.current]} // Pass the AUTOPLAY PLUGIN instance
            className="w-full" // Ensure carousel takes full width
            // Add ARIA labels for accessibility
            aria-roledescription="carousel"
            aria-label="Supported industries carousel"
          >
            {/* Adjust margin based on item padding for spacing */}
            <CarouselContent className="-ml-2 md:-ml-4">
              {duplicatedIndustries1.map((industry, index) => (
                <CarouselItem
                  key={`${industry.title}-1-${index}`}
                  // Control item width: Shows ~5-7 items on larger screens
                  className="pl-2 md:pl-4 basis-1/2 xs:basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-[14%]"
                  aria-roledescription="slide"
                  aria-label={`Industry: ${industry.title}`}
                >
                  {/* p-1 provides a small gap around the card inside the item */}
                  <div className="p-1 h-full">
                    <IndustryCard icon={industry.icon} title={industry.title} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Prev/Next buttons are usually hidden for pure autoplay marquees */}
            {/* <CarouselPrevious /> <CarouselNext /> */}
          </Carousel>
        </div>

        {/* --- Carousel 2 (Backward) --- */}
        <div className="reveal fade-bottom">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              // dragFree: true, // Optional
            }}
            plugins={[autoplayPlugin2.current]} // Pass the SECOND AUTOPLAY PLUGIN
            className="w-full"
            aria-roledescription="carousel"
            aria-label="More supported industries carousel"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {duplicatedIndustries2.map((industry, index) => (
                 <CarouselItem
                   key={`${industry.title}-2-${index}`}
                   className="pl-2 md:pl-4 basis-1/2 xs:basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-[14%]"
                   aria-roledescription="slide"
                   aria-label={`Industry: ${industry.title}`}
                 >
                   <div className="p-1 h-full">
                     <IndustryCard icon={industry.icon} title={industry.title} />
                   </div>
                 </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Industries;