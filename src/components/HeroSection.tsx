
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center section-padding overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface to-accent/20 opacity-90" />
      </div>
      
      <div className="container relative z-10 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
            Your Success, Our Priority
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold heading-gradient">
            Master Your BTech/BE Subjects with Expert Tutors
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-dark max-w-2xl mx-auto">
            Flexible, expert-led tuition covering all universities, branches, and subjects. Learn at your own pace and excel in your engineering journey.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="btn-primary">Book a Free Trial Lesson</Button>
            <Button className="btn-secondary">Explore Courses</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
