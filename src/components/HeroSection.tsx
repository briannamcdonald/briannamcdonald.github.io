import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative isolate min-h-screen flex items-center justify-center overflow-hidden">
      {/* Soft gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-sage-light/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blush/35 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/40 blur-3xl" />
      </div>

      <img
        src="/images/boquet.png"
        alt=""
        aria-hidden="true"
        className="hero-botanical-decoration hero-botanical-bouquet"
      />
      <img
        src="/images/tulips.png"
        alt=""
        aria-hidden="true"
        className="hero-botanical-decoration hero-botanical-tulips"
      />
      <img
        src="/images/fern.png"
        alt=""
        aria-hidden="true"
        className="hero-botanical-decoration hero-botanical-fern"
      />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6"
        >
          <span>Software Developer &</span>{" "}
          <span className="block md:inline">Designer</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight mb-6"
        >
          Brianna McDonald
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I like solving complex problems and making things look pretty.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="font-body bg-primary text-primary-foreground px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-sm tracking-wide"
          >
            View My Work
          </a>
          <a
            href="#about"
            className="font-body border border-border text-foreground px-8 py-3 rounded-full hover:bg-muted transition-colors text-sm tracking-wide"
          >
            About Me
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
