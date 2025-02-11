
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/your_number_here"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50"
      >
        <Button className="btn-primary flex items-center gap-2">
          <WhatsappIcon className="w-5 h-5" />
          <span>Chat with Us</span>
        </Button>
      </a>
    </div>
  );
};

export default Index;
