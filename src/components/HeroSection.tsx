import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative isolate min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Soft gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-28 -right-28 h-[320px] w-[320px] rounded-full bg-sage-light/55 blur-3xl sm:-top-40 sm:-right-40 sm:h-[600px] sm:w-[600px] sm:bg-sage-light/60" />
        <div className="absolute -bottom-28 -left-28 h-[280px] w-[280px] rounded-full bg-blush/30 blur-3xl sm:-bottom-40 sm:-left-40 sm:h-[500px] sm:w-[500px] sm:bg-blush/35" />
        <div className="absolute hidden h-[400px] w-[400px] rounded-full bg-accent/40 blur-3xl sm:block sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2" />
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
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6">
          <span>Software Developer &</span>{" "}
          <span className="block md:inline">Designer</span>
        </p>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight mb-6">
          Brianna McDonald
        </h1>

        <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          I like solving complex problems and making things look pretty.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="font-body border border-primary bg-primary text-primary-foreground px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-sm tracking-wide"
          >
            View My Work
          </a>
          <a
            href="#about"
            className="font-body border border-border bg-background/65 text-foreground px-8 py-3 rounded-full hover:bg-muted/65 transition-colors text-sm tracking-wide"
          >
            About Me
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="w-5 h-5 sm:motion-safe:animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
