
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import MapComponent from "@/components/MapComponent";
import ImageShowcase from "@/components/ImageShowcase";

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="page-container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-fade-in">
              Our Story
            </h1>
            
            <div className="space-y-6 text-gray-700 animate-fade-in">
              <p className="text-lg">
                Human Team was founded with a simple yet powerful belief: technology should serve people, not the other way around. In a world where digital products often seem designed for machines rather than humans, we set out to create a different approach.
              </p>
              
              <p>
                Our team combines expertise in design, engineering, and human behavior to create products that respect human attention, privacy, and well-being. We believe that the best technology feels invisible—it enhances our capabilities without demanding our constant attention.
              </p>
              
              <p>
                Since our founding, we've partnered with organizations of all sizes to bring this human-centered philosophy to life in their products and services. Our work spans industries, but our approach remains consistent: we start with human needs and build technology to serve them.
              </p>
            </div>

            <ImageShowcase 
              title="Our Team" 
              description="Meet the people behind Human Team Foundation" 
              variant="grid" 
              className="my-12" 
            />
            
            <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-100 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-medium">1</div>
                  <div>
                    <h3 className="font-medium">Human Dignity First</h3>
                    <p className="text-gray-600 mt-1">We design for human dignity, autonomy, and well-being above all else.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-medium">2</div>
                  <div>
                    <h3 className="font-medium">Thoughtful Innovation</h3>
                    <p className="text-gray-600 mt-1">We embrace new technologies while carefully considering their human impact.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-medium">3</div>
                  <div>
                    <h3 className="font-medium">Simplicity in Complexity</h3>
                    <p className="text-gray-600 mt-1">We strive to make complex systems feel simple and intuitive for users.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold mb-6">Find Us</h2>
            <MapComponent />
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 text-center animate-fade-in">
            <Button variant="primary" size="lg">
              Join Our Team
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
