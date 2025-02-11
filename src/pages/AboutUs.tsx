
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-surface">
      <div className="container mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold heading-gradient text-center">About Us</h1>
          
          <div className="space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">Our Mission & Vision</h2>
              <p className="text-neutral-dark">
                We are dedicated to helping BTech/BE students succeed effortlessly through flexible learning solutions. Our vision is to make quality engineering education accessible to all students.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">Expert Tutors</h2>
              <p className="text-neutral-dark">
                Our faculty comprises experienced professionals from top universities, ensuring you receive the highest quality education and guidance throughout your engineering journey.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">Why Choose Us?</h2>
              <ul className="list-disc list-inside space-y-2 text-neutral-dark">
                <li>Personalized coaching tailored to your needs</li>
                <li>Comprehensive study materials and PDFs</li>
                <li>Regular test series and assessments</li>
                <li>Flexible scheduling to fit your timeline</li>
                <li>Dedicated doubt-solving sessions</li>
              </ul>
            </section>
          </div>

          <div className="text-center pt-8">
            <Button className="btn-primary">Start Learning Today</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
