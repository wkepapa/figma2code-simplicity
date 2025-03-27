
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Button from "@/components/Button";
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
