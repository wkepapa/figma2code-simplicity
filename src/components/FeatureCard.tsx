
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  className?: string;
};

const FeatureCard = ({ 
  title, 
  description, 
  icon,
  delay = 0,
  className,
}: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (cardRef.current) {
      setTimeout(() => {
        cardRef.current?.classList.add("animate-fade-in");
      }, delay);
    }
  }, [delay]);

  return (
    <div 
      ref={cardRef} 
      className={cn(
        "feature-card opacity-0",
        className
      )}
    >
      <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-xl bg-gray-50 text-gray-900">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
