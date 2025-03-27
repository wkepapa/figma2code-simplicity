
import React, { useEffect, useRef } from "react";
import Button from "./Button";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.classList.add("animate-fade-in");
    }
    
    setTimeout(() => {
      if (paragraphRef.current) {
        paragraphRef.current.classList.add("animate-fade-in");
      }
    }, 200);
    
    setTimeout(() => {
      if (buttonGroupRef.current) {
        buttonGroupRef.current.classList.add("animate-fade-in");
      }
    }, 400);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center py-16 md:py-24">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0"
          >
            Human-centered <br className="hidden sm:inline" /> 
            solutions for the future
          </h1>
          
          <p 
            ref={paragraphRef}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto opacity-0"
          >
            We build experiences that put people first. Our team combines 
            technology and design to create products that solve real human needs.
          </p>
          
          <div 
            ref={buttonGroupRef}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4 opacity-0"
          >
            <Button 
              variant="primary" 
              size="lg"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[20%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-blue-50 to-purple-50 opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -left-[20%] w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-green-50 to-blue-50 opacity-70 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
