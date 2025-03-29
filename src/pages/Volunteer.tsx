
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { HandHelping, Clock, Users, MessageSquare, CheckCircle } from "lucide-react";
import ImageShowcase from "@/components/ImageShowcase";
import { useToast } from "@/components/ui/use-toast";

const Volunteer = () => {
  const { toast } = useToast();
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: "",
    experience: "",
    availability: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const volunteerOpportunities = [
    {
      id: 1,
      title: "Community Outreach",
      description: "Help us connect with communities and spread awareness about our initiatives.",
      icon: <Users className="text-blue-500" />
    },
    {
      id: 2,
      title: "Technical Support",
      description: "Assist with technical aspects of our projects and provide support to users.",
      icon: <MessageSquare className="text-purple-500" />
    },
    {
      id: 3,
      title: "Event Coordination",
      description: "Help organize and manage events, workshops and community gatherings.",
      icon: <Clock className="text-green-500" />
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Volunteer Application Submitted",
        description: "Thank you for your interest! We'll contact you soon.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interests: "",
        experience: "",
        availability: ""
      });
    }, 1500);
  };

  return (
    <Layout>
      <ImageShowcase 
        variant="banner"
        title="Volunteer With Us" 
        description="Join our team and make a difference in communities across India"
      />
      
      <section className="py-16 md:py-24">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-fade-in">
              Join Our Volunteer Team
            </h1>
            <p className="text-lg text-gray-600 animate-fade-in">
              We're looking for passionate individuals who want to make a difference. Your time and skills can help us create positive change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card 
                key={opportunity.id}
                className="border border-gray-100 shadow-subtle transition-all duration-300 hover:shadow-elevation hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                    {opportunity.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
                  <p className="text-gray-700">
                    {opportunity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Why Volunteer With Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Make a meaningful impact in communities across India</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Develop new skills and gain valuable experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Connect with like-minded individuals and expand your network</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Flexible time commitment based on your availability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Be part of an organization that values human-centered approach</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-subtle animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6">Volunteer Application</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="interests">Areas of Interest</Label>
                  <Input 
                    id="interests" 
                    name="interests" 
                    value={formData.interests} 
                    onChange={handleInputChange} 
                    placeholder="E.g., Technical, Events, Community Outreach" 
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="experience">Relevant Experience</Label>
                  <Input 
                    id="experience" 
                    name="experience" 
                    value={formData.experience} 
                    onChange={handleInputChange} 
                    placeholder="Briefly describe your background" 
                  />
                </div>
                <div>
                  <Label htmlFor="availability">Availability</Label>
                  <Input 
                    id="availability" 
                    name="availability" 
                    value={formData.availability} 
                    onChange={handleInputChange} 
                    placeholder="E.g., Weekends, 5 hours/week" 
                    required 
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full mt-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4">Have Questions?</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about volunteering with us, please don't hesitate to reach out. We're here to help!
            </p>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Volunteer;
