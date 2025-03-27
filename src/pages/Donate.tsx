
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, CreditCard, Users } from "lucide-react";

const Donate = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const donationOptions = [
    {
      id: 1,
      name: "Monthly Supporter",
      amount: "$10",
      description: "Join our community of monthly supporters helping sustain our work.",
      icon: <Heart className="text-red-500" />,
      period: "monthly"
    },
    {
      id: 2,
      name: "Annual Donor",
      amount: "$100",
      description: "Make a bigger impact with an annual contribution to our mission.",
      icon: <Users className="text-blue-500" />,
      period: "yearly",
      featured: true
    },
    {
      id: 3,
      name: "One-time Gift",
      amount: "Custom",
      description: "Support our work with a one-time donation of any amount.",
      icon: <CreditCard className="text-green-500" />,
      period: "once"
    }
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-fade-in">
              Support Our Mission
            </h1>
            <p className="text-lg text-gray-600 animate-fade-in">
              Your contribution helps us build technology that puts humans first and creates positive change in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {donationOptions.map((option, index) => (
              <Card 
                key={option.id}
                className={`border border-gray-100 shadow-subtle transition-all duration-300 hover:shadow-elevation hover:-translate-y-1 animate-fade-in ${option.featured ? 'ring-2 ring-black ring-opacity-5' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center mb-3">
                      {option.icon}
                    </div>
                    <div className="text-2xl font-bold">{option.amount}</div>
                  </div>
                  <CardTitle className="text-xl">{option.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {option.period === "monthly" && "Billed monthly"}
                    {option.period === "yearly" && "Billed annually"}
                    {option.period === "once" && "One-time payment"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    {option.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant={option.featured ? "primary" : "outline"} 
                    className="w-full"
                  >
                    Donate {option.period !== "once" ? "Now" : ""}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-100 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4">Other Ways to Support</h2>
            <p className="text-gray-700 mb-6">
              Beyond financial contributions, you can support our mission by volunteering, spreading the word about our work, or collaborating with us on projects.
            </p>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
