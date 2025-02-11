
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Courses = () => {
  return (
    <div className="min-h-screen bg-surface">
      <div className="container mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold heading-gradient text-center">Our Courses</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First Semester */}
            <div className="glass p-6 rounded-lg card-hover">
              <h3 className="text-xl font-semibold text-primary mb-4">First Semester</h3>
              <ul className="space-y-2 text-neutral-dark mb-6">
                <li>Engineering Mathematics I</li>
                <li>Engineering Physics</li>
                <li>Basic Electronics</li>
                <li>Programming Fundamentals</li>
              </ul>
              <Button className="btn-primary w-full">Enroll Now</Button>
            </div>

            {/* Second Semester */}
            <div className="glass p-6 rounded-lg card-hover">
              <h3 className="text-xl font-semibold text-primary mb-4">Second Semester</h3>
              <ul className="space-y-2 text-neutral-dark mb-6">
                <li>Engineering Mathematics II</li>
                <li>Engineering Chemistry</li>
                <li>Digital Electronics</li>
                <li>Data Structures</li>
              </ul>
              <Button className="btn-primary w-full">Enroll Now</Button>
            </div>

            {/* Third Semester */}
            <div className="glass p-6 rounded-lg card-hover">
              <h3 className="text-xl font-semibold text-primary mb-4">Third Semester</h3>
              <ul className="space-y-2 text-neutral-dark mb-6">
                <li>Advanced Mathematics</li>
                <li>Computer Networks</li>
                <li>Database Management</li>
                <li>Object-Oriented Programming</li>
              </ul>
              <Button className="btn-primary w-full">Enroll Now</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
