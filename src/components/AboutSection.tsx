import { MapPin, Briefcase, GraduationCap, Trophy, BookOpen, Lightbulb, Star, Medal } from "lucide-react";

const skills = [
  "TypeScript", "React", "Python", "LLM Systems", "CSS", "C++", "Figma",
  "AWS", "Docker", "SQL", "Scikit-learn", "TensorFlow",
  "Unity", "Django",
];

const awards = [
  { title: "Science Co-op Student of the Year", year: "2022", icon: Trophy },
  { title: "Dean of Science Book Prize for Computer Science", year: "2021", icon: BookOpen },
  { title: "Best Innovation, Technology, & Exploration Talk at the SEA Research Conference", year: "2022", icon: Lightbulb },
  { title: "Dean's List", year: "2019 & 2020 & 2023", icon: Star },
  { title: "2nd Place, Hack Frost NL Hackathon", year: "2021", icon: Medal },
];

const AboutSection = () => {
  return (
    <section id="about" className="pt-24 pb-12 px-6 bg-card">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">A Bit About Me</p>
          <h2 className="font-display text-4xl text-foreground">About</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-10 items-start">
          <div className="mx-auto grid w-full max-w-md grid-cols-[minmax(0,8.5rem)_1fr] items-center gap-4 rounded-[1.75rem] border border-border/70 bg-background/80 p-4 shadow-sm max-[375px]:mx-[-2rem] max-[375px]:w-[calc(100%+4rem)] max-[375px]:max-w-none sm:max-w-lg sm:grid-cols-[minmax(0,9.5rem)_1fr] sm:gap-5 sm:p-5 md:mx-0 md:block md:max-w-none md:space-y-4 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-sage-light md:aspect-square">
              <img
                src="/images/picture.jpg"
                alt="Brianna McDonald"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              {[
                { icon: MapPin, text: "St. John's, NL" },
                { icon: Briefcase, text: "SiftMed" },
                { icon: GraduationCap, text: "B.Sc. CS · 4.0\u00A0GPA" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span className="font-body text-sm text-muted-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <p className="font-body text-muted-foreground leading-relaxed">
                I'm a Full Stack Developer at{" "}
                <a href="https://www.siftmed.ca/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  SiftMed
                </a>
                , building AI-powered medical review tools. I have an Honours degree in Computer Science from MUN and over 5 years of industry experience.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                I like working at the intersection of engineering and design, especially on problems that need both deep technical thinking and creativity.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg text-foreground mb-3">Skills & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-xs tracking-wide bg-blush text-secondary-foreground px-3 py-1.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg text-foreground mb-3">Honours & Awards</h3>
              <div className="space-y-1.5">
                {awards.map((award, i) => {
                  const Icon = award.icon;
                  return (
                    <div
                      key={award.title}
                      className="group flex items-center gap-2.5 rounded-lg border border-border bg-background px-3 py-2 hover:border-primary/30 transition-colors duration-300"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-md bg-gradient-to-br from-primary/15 to-accent flex items-center justify-center group-hover:from-primary/25 transition-colors">
                        <Icon className="w-3 h-3 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="font-body text-sm font-medium text-foreground leading-snug">
                          {award.title}
                          {award.subtitle && (
                            <span className="text-muted-foreground font-normal"> · {award.subtitle}</span>
                          )}
                        </span>
                      </div>
                      {award.year && (
                        <span className="flex-shrink-0 font-body text-sm font-medium tracking-wide text-primary/70">
                          {award.year}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
