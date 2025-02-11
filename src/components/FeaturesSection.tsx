
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Clock, Award } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Study Material",
    description: "Access detailed notes, video lectures, and practice problems for all subjects",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from experienced professors from top universities",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Choose your preferred time slots for personalized learning",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "High success rate with personalized attention and regular assessments",
  },
];

const FeaturesSection = () => {
  return (
    <div className="section-padding bg-surface-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-neutral-dark max-w-2xl mx-auto">
            We provide comprehensive support to help you excel in your engineering journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 glass card-hover">
              <div className="mb-4 inline-block p-3 rounded-lg bg-secondary/10">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-dark">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
