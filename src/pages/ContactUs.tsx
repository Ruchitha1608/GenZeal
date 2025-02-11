
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-surface">
      <div className="container mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold heading-gradient text-center">Contact Us</h1>
          
          <div className="glass p-8 rounded-lg">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-primary font-medium">Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-primary font-medium">Email</label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-primary font-medium">Message</label>
                <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
              </div>
              
              <Button className="btn-primary w-full">Send Message</Button>
            </form>
          </div>

          <div className="text-center space-y-4">
            <p className="text-neutral-dark">
              Or reach us directly at:
            </p>
            <p className="text-primary font-medium">
              📧 support@example.com
            </p>
            <p className="text-primary font-medium">
              📱 +1 234 567 890
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
