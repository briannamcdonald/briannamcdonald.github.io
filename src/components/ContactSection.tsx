import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Let's Connect</p>
          <h2 className="font-display text-4xl text-foreground mb-6">Get in Touch</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-10">
            <span>I'm always open to connect about interesting projects and ideas.</span>
            <span className="md:block"> Feel free to reach out!</span>
          </p>

          <a
            href="mailto:brmcdonald@mun.ca"
            className="inline-flex items-center gap-2 font-body bg-primary text-primary-foreground px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-sm tracking-wide mb-10"
          >
            <Mail className="w-4 h-4" />
            brmcdonald@mun.ca
          </a>

          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://github.com/briannamcdonald"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/briannamcdonald"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
