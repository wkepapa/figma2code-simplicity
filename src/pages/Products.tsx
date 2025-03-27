
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

const Products = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: "Human OS",
      description: "An operating system designed for natural human interaction.",
      image: "bg-gradient-to-br from-blue-50 to-indigo-100",
      tag: "Platform"
    },
    {
      id: 2,
      name: "Focus Suite",
      description: "Tools that help you stay focused and mindful in a distracted world.",
      image: "bg-gradient-to-br from-green-50 to-emerald-100",
      tag: "Productivity"
    },
    {
      id: 3,
      name: "Connect",
      description: "Meaningful digital communication that strengthens relationships.",
      image: "bg-gradient-to-br from-purple-50 to-pink-100",
      tag: "Communication"
    }
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-fade-in">
              Our Products
            </h1>
            <p className="text-lg text-gray-600 animate-fade-in">
              We build tools that enhance human capability while respecting human limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-subtle transition-all duration-300 hover:shadow-elevation hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`aspect-[4/3] ${product.image} flex items-center justify-center`}>
                  <span className="py-1 px-3 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium">
                    {product.tag}
                  </span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <Button 
                    variant="link" 
                    className="group"
                  >
                    Learn more <ArrowRight size={14} className="ml-1 inline transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-100 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4">Custom Solutions</h2>
            <p className="text-gray-700 mb-6">
              Need something tailored to your specific needs? Our team works with organizations to create custom human-centered solutions.
            </p>
            <Button variant="primary">Contact Us</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
