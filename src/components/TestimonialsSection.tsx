
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "BTech Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
    content: "The personalized attention and flexible scheduling helped me clear my backlogs with confidence.",
    rating: 5,
  },
  {
    name: "Rahul Kumar",
    role: "BE Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
    content: "Expert faculty and comprehensive study material made complex subjects easy to understand.",
    rating: 5,
  },
  {
    name: "Aisha Patel",
    role: "BTech Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100",
    content: "The practice tests and doubt-solving sessions were incredibly helpful for exam preparation.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <div className="section-padding bg-surface">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Students Say
          </h2>
          <p className="text-neutral-dark max-w-2xl mx-auto">
            Join thousands of successful students who transformed their academic journey with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 glass card-hover">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-dark">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-neutral-dark">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
