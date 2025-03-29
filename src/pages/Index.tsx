
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Button from "@/components/Button";
import ImageShowcase from "@/components/ImageShowcase";
import { ArrowRight } from "lucide-react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Hero />
      <Features />
      
      <ImageShowcase 
        title="Impact Through Innovation" 
        description="See how our solutions are making a difference in communities across India" 
        variant="banner" 
        className="mt-16" 
      />
      
      <section className="py-20">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 animate-fade-in">Our Approach</h2>
              <p className="text-gray-700 mb-6 animate-fade-in">
                We believe in creating technology that respects human dignity and enhances our natural capabilities. Our team works closely with communities to understand their unique needs and develop solutions that truly serve them.
              </p>
              <p className="text-gray-700 mb-6 animate-fade-in">
                By combining deep technical expertise with empathetic design, we build products that feel intuitive and enhance quality of life without demanding constant attention.
              </p>
              <Button variant="primary" className="animate-fade-in">
                Learn Our Process
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80" 
                alt="People collaborating on a project" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <ImageShowcase 
        title="Our Impact" 
        description="Supporting communities through sustainable technology" 
        variant="grid" 
      />
      
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight animate-fade-in">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-fade-in">
              Join thousands of organizations building human-centered products with us.
            </p>
            <div className="mt-10 animate-fade-in">
              <Button 
                variant="primary" 
                size="lg"
                className="group"
              >
                Get Started <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
