
import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type TestimonialProps = {
  name: string;
  role?: string;
  content: string;
  rating: number;
};

const Testimonial = ({ name, role, content, rating }: TestimonialProps) => {
  return (
    <Card className="h-full border border-gray-100 shadow-subtle transition-all duration-300 hover:shadow-elevation">
      <CardContent className="p-6">
        <div className="flex mb-2">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Star
                key={index}
                size={16}
                className={`${
                  index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
                }`}
              />
            ))}
        </div>
        <p className="text-gray-700 mb-4">{content}</p>
        <div className="mt-auto">
          <p className="font-medium">{name}</p>
          {role && <p className="text-sm text-gray-500">{role}</p>}
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Community Partner",
      content: "The Human Team Foundation has been instrumental in helping our community access technological resources. Their dedication to creating human-centered solutions has made a real difference.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Volunteer",
      content: "I've been volunteering with the foundation for over a year now, and it's been incredibly rewarding. Their approach to technology that respects human limits is truly inspiring.",
      rating: 5
    },
    {
      name: "Arjun Patel",
      role: "Beneficiary",
      content: "The foundation's digital literacy program helped me gain essential skills I needed for my career. Their patient, human-centered approach to teaching made all the difference.",
      rating: 4
    },
    {
      name: "Meera Desai",
      role: "Education Partner",
      content: "We've partnered with Human Team on several educational initiatives. Their focus on creating technology that enhances rather than distracts from learning is exactly what our students need.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="page-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">What People Are Saying</h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in">
            Hear from the communities, volunteers, and partners we've worked with.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
