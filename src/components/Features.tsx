
import React from "react";
import FeatureCard from "./FeatureCard";
import { Users, Shield, Sparkles, BarChart3 } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight animate-fade-in">
            Designed for humans
          </h2>
          <p className="mt-4 text-lg text-gray-600 animate-fade-in">
            Our approach focuses on creating products that enhance human potential
            and simplify complex challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Users size={24} />}
            title="Human-Centered"
            description="We design with real people and their needs at the center of our process."
            delay={100}
          />
          <FeatureCard
            icon={<Shield size={24} />}
            title="Privacy-First"
            description="Your data and privacy are protected with our secure systems."
            delay={200}
          />
          <FeatureCard
            icon={<Sparkles size={24} />}
            title="Intuitive Design"
            description="Simple, elegant interfaces that feel natural and easy to use."
            delay={300}
          />
          <FeatureCard
            icon={<BarChart3 size={24} />}
            title="Data-Informed"
            description="We use data responsibly to improve experiences and outcomes."
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
