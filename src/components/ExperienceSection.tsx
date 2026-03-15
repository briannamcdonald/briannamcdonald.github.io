import { KeyboardEvent, MouseEvent, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  dateRange: string;
  description: ReactNode;
  url: string;
  current?: boolean;
}

const currentRole: Experience = {
  company: "SiftMed",
  role: "Full Stack Developer",
  dateRange: "2024 - Present",
  description: "Building AI-powered medical review tools with a focus on thoughtful product design and user experience.",
  url: "https://www.siftmed.ca/",
};

const pastRoles: Experience[] = [
  {
    company: "Virtual Marine",
    role: "Research Software Developer",
    dateRange: "2023 - 2024",
    description: "Led machine learning research projects for enhancing the capabilities of marine simulators.",
    url: "https://www.virtualmarine.ca/",
  },
  {
    company: "Mysa",
    role: "Embedded Software Developer",
    dateRange: "2022",
    description: "Developed firmware for smart thermostats.",
    url: "https://getmysa.com/",
  },
  {
    company: "Compusult Limited",
    role: "Software Developer",
    dateRange: "2021 - 2022",
    description: (
      <>
        Worked on AI, computer vision, and geospatial projects, including the MVP for{" "}
        <a href="#project-prims" className="text-primary underline-offset-4 hover:underline">
          PRIMS
        </a>
        .
      </>
    ),
    url: "https://www.compusult.com/",
  },
  {
    company: "NL Eats",
    role: "Front-End Web Developer",
    dateRange: "2020 - 2021",
    description: "Built the front end of an inventory management system for food banks.",
    url: "https://nleats.com/",
  },
];

const experiences: Experience[] = [
  { ...currentRole, current: true },
  ...pastRoles.map((role) => ({ ...role, current: false })),
];

const ExperienceSection = () => {
  const openCompanySite = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardClick = (event: MouseEvent<HTMLDivElement>, url: string) => {
    const target = event.target as HTMLElement;
    if (target.closest("a")) {
      return;
    }

    openCompanySite(url);
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>, url: string) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    openCompanySite(url);
  };

  return (
    <section id="experience" className="pt-12 pb-24 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-14">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Where I've Worked</p>
          <h2 className="font-display text-4xl text-foreground">Experience</h2>
        </div>

        <div className="space-y-5">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="grid items-center grid-cols-[2rem_1fr] gap-x-4 md:grid-cols-[8.5rem_2.5rem_1fr] md:gap-x-6"
            >
              <div className="hidden md:block">
                <p className="font-body text-xs tracking-[0.24em] uppercase text-muted-foreground">
                  {exp.dateRange}
                </p>
              </div>

              <div className="relative flex items-center justify-center self-stretch">
                {index > 0 ? (
                  <div className="absolute bottom-1/2 left-1/2 h-[calc(50%+1.25rem)] w-px -translate-x-1/2 bg-border/80" />
                ) : null}
                {index < experiences.length - 1 ? (
                  <div className="absolute left-1/2 top-1/2 h-[calc(50%+1.25rem)] w-px -translate-x-1/2 bg-border/80" />
                ) : null}
                <div
                  className={`relative z-10 h-3 w-3 rounded-full border ${
                    exp.current
                      ? "border-primary/40 bg-primary shadow-[0_0_0_6px_hsl(var(--accent)/0.48)]"
                      : "border-primary/30 bg-background"
                  }`}
                />
              </div>

              <div
                className={`group relative block cursor-pointer overflow-hidden rounded-2xl px-6 py-5 transition-all duration-300 hover:shadow-sm ${
                  exp.current
                    ? "bg-gradient-to-br from-primary/10 via-accent to-secondary/30"
                    : "border bg-background hover:border-primary/30"
                }`}
                role="link"
                tabIndex={0}
                aria-label={`Open ${exp.company} website`}
                onClick={(event) => handleCardClick(event, exp.url)}
                onKeyDown={(event) => handleCardKeyDown(event, exp.url)}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-5 right-5 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  <ArrowUpRight className="h-4 w-4 text-primary" />
                </span>

                <span
                  className={`mb-3 inline-block rounded-full px-3 py-1 font-body text-[10px] tracking-widest uppercase md:hidden ${
                    exp.current
                      ? "bg-background/80 text-primary backdrop-blur-sm"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {exp.dateRange}
                </span>

                <h3
                  className={`mb-1 text-foreground ${
                    exp.current ? "font-display text-2xl" : "font-display text-lg"
                  }`}
                >
                  {exp.role} <span className="text-primary">· {exp.company}</span>
                </h3>
                <p
                  className={`font-body text-muted-foreground ${
                    exp.current ? "text-sm" : "text-xs"
                  }`}
                >
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
