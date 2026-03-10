import SideNav from "@/components/SideNav";
import TrailLine from "@/components/TrailLine";
import FadeSection from "@/components/FadeSection";
import profileImg from "@/assets/profile.png";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <TrailLine />
      <SideNav />

      <main className="max-w-[720px] mx-auto px-6 lg:px-0">
        {/* Hero / Name */}
        <header className="min-h-screen flex flex-col justify-center" id="about">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
            <div className="flex-1">
              <FadeSection>
                <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-12">
                  Injamam
                  <br />
                  Mulhasan
                  <br />
                  <span className="italic text-primary">Siddiqui</span>
                </h1>
              </FadeSection>
              <FadeSection delay={300}>
                <p className="font-mono text-sm text-foreground/80 max-w-[480px] leading-relaxed">
                  Computer Science student exploring the intersections of algorithms, data structures, and data science. 
                  Currently in my second year at Aliah University, building foundational systems and chasing deeper patterns in data.
                </p>
              </FadeSection>
            </div>
            <FadeSection delay={200} className="flex justify-center md:justify-end">
              <div className="profile-photo-wrapper">
                <div className="profile-photo-ring">
                  <img
                    src={profileImg}
                    alt="Injamam Mulhasan Siddiqui"
                    className="profile-photo"
                  />
                </div>
              </div>
            </FadeSection>
          </div>
          <FadeSection delay={500}>
            <div className="mt-8 font-mono text-xs text-muted-foreground animate-bounce-subtle">
              scroll to explore ↓
            </div>
          </FadeSection>
        </header>

        {/* Education */}
        <div className="py-32" id="education">
          <FadeSection>
            <h2 className="section-heading font-heading text-4xl md:text-5xl mb-12">Education</h2>
          </FadeSection>
          <FadeSection delay={150}>
            <div className="card-elevated border-l-2 border-primary/40 pl-6 py-6 pr-6">
              <p className="font-mono text-xs text-primary/80 uppercase tracking-widest mb-2">2nd Year · Ongoing</p>
              <p className="font-heading text-2xl mb-2">Aliah University</p>
              <p className="font-mono text-sm text-foreground/70">
                Bachelor of Computer Science — Building a strong foundation in computational thinking, 
                data structures, and the mathematics underpinning modern data science.
              </p>
            </div>
          </FadeSection>
        </div>

        {/* Skills */}
        <div className="py-32" id="skills">
          <FadeSection>
            <h2 className="section-heading font-heading text-4xl md:text-5xl mb-16">Skills</h2>
          </FadeSection>

          <div className="space-y-12">
            <FadeSection delay={100}>
              <p className="font-mono text-xs text-primary/80 uppercase tracking-widest mb-4">Languages</p>
              <div className="flex flex-wrap gap-3">
                {["C", "Python"].map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </FadeSection>

            <FadeSection delay={200}>
              <p className="font-mono text-xs text-primary/80 uppercase tracking-widest mb-4">Tools & Technologies</p>
              <div className="flex flex-wrap gap-3">
                {["Git", "VS Code", "Linux"].map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </FadeSection>

            <FadeSection delay={300}>
              <p className="font-mono text-xs text-primary/80 uppercase tracking-widest mb-4">Other</p>
              <div className="flex flex-wrap gap-3">
                {["Problem Solving", "Algorithms", "Data Structures"].map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </FadeSection>
          </div>
        </div>

        {/* Projects */}
        <div className="py-32" id="projects">
          <FadeSection>
            <h2 className="section-heading font-heading text-4xl md:text-5xl mb-16">Projects</h2>
          </FadeSection>

          <div className="grid gap-8">
            {/* Project 1 */}
            <FadeSection delay={150}>
              <div className="project-card group">
                <p className="font-mono text-xs text-primary/80 uppercase tracking-widest mb-3">C</p>
                <h3 className="font-heading text-3xl mb-4 group-hover:text-primary transition-colors duration-300">Calculator</h3>
                <p className="font-mono text-sm text-foreground/70 max-w-[520px] leading-relaxed">
                  A fundamental mathematical calculator built from scratch in C. 
                  An exercise in understanding low-level computation, operator precedence, and clean input handling.
                </p>
              </div>
            </FadeSection>

            {/* Project 2 */}
            <FadeSection delay={250}>
              <div className="project-card group">
                <p className="font-mono text-xs text-primary/80 uppercase tracking-widest mb-3">HTML · CSS</p>
                <h3 className="font-heading text-3xl mb-4 group-hover:text-primary transition-colors duration-300">YouTube Clone</h3>
                <p className="font-mono text-sm text-foreground/70 max-w-[520px] leading-relaxed">
                  A pixel-accurate recreation of YouTube's frontend interface. 
                  A study in layout systems, responsive design, and translating complex UI patterns into clean markup.
                </p>
              </div>
            </FadeSection>
          </div>
        </div>

        {/* Achievements */}
        <div className="py-32" id="achievements">
          <FadeSection>
            <h2 className="font-heading text-4xl md:text-5xl mb-12">Achievements</h2>
          </FadeSection>
          <FadeSection delay={150}>
            <div className="border-l border-primary/30 pl-6">
              <p className="font-heading text-2xl mb-2">CLUB404</p>
              <p className="font-mono text-sm text-foreground/70">
                Core team member — Contributing to the university's technical community, 
                organizing events and fostering collaborative learning among peers.
              </p>
            </div>
          </FadeSection>
        </div>

        {/* Contact */}
        <div className="py-32 pb-48" id="contact">
          <FadeSection>
            <h2 className="font-heading text-4xl md:text-5xl mb-16">Contact</h2>
          </FadeSection>

          <FadeSection delay={100}>
            <div className="space-y-4 font-mono text-sm">
              <a href="mailto:siddiquibibiaisha1001@gmail.com" className="link-hover block">
                siddiquibibiaisha1001@gmail.com
              </a>
              <a href="https://github.com/Injamam-siddiqui" target="_blank" rel="noopener noreferrer" className="link-hover block">
                github.com/Injamam-siddiqui
              </a>
              <a href="https://www.linkedin.com/in/inzamam-siddiqui-854a73385/" target="_blank" rel="noopener noreferrer" className="link-hover block">
                linkedin.com/in/inzamam-siddiqui
              </a>
              <a href="https://leetcode.com/u/injamam_siddiqui/" target="_blank" rel="noopener noreferrer" className="link-hover block">
                leetcode.com/u/injamam_siddiqui
              </a>
            </div>
          </FadeSection>

          <FadeSection delay={300}>
            <p className="mt-24 font-mono text-xs text-muted-foreground">
              © 2026 Injamam Mulhasan Siddiqui
            </p>
          </FadeSection>
        </div>
      </main>
    </div>
  );
};

export default Index;
