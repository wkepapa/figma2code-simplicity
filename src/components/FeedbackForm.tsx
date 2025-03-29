
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Button from "@/components/Button";
import { useToast } from "@/components/ui/use-toast";
import { Star } from "lucide-react";

const FeedbackForm = () => {
  const { toast } = useToast();
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  const handleMouseEnter = (hoveredValue: number) => {
    setHoveredRating(hoveredValue);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a star rating before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Feedback Submitted",
        description: "Thank you for sharing your feedback with us!",
      });
      setIsSubmitting(false);
      // Reset form
      setRating(0);
      setFeedback("");
      setName("");
      setEmail("");
    }, 1500);
  };

  return (
    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-subtle">
      <h3 className="text-2xl font-semibold mb-6">Share Your Feedback</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label className="block mb-2">How would you rate your experience?</Label>
          <div className="flex items-center gap-1 mb-1">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => handleStarClick(value)}
                onMouseEnter={() => handleMouseEnter(value)}
                onMouseLeave={handleMouseLeave}
                className="text-2xl focus:outline-none transition-colors duration-200"
              >
                <Star
                  size={30}
                  className={`${
                    value <= (hoveredRating || rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  } transition-colors duration-200`}
                />
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-1">
            {rating > 0 ? `You selected ${rating} star${rating !== 1 ? 's' : ''}` : 'Click to rate'}
          </p>
        </div>
        
        <div>
          <Label htmlFor="feedback">Your Feedback</Label>
          <textarea
            id="feedback"
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Please share your thoughts or suggestions..."
            required
          ></textarea>
        </div>
        
        <div>
          <Label htmlFor="name">Your Name</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Feedback"}
        </Button>
      </form>
    </div>
  );
};

export default FeedbackForm;
