import { useEffect, useState } from "react";

const sections = ["about", "education", "skills", "projects", "achievements", "contact"];

const SideNav = () => {
  const [active, setActive] = useState("about");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-5">
      {sections.map((s) => (
        <div key={s} className="flex items-center gap-3 group" onMouseEnter={() => setHoveredSection(s)} onMouseLeave={() => setHoveredSection(null)}>
          <span
            className={`font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
              hoveredSection === s || active === s ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
            } ${active === s ? "text-primary" : "text-muted-foreground"}`}
          >
            {s}
          </span>
          <button
            onClick={() => scrollTo(s)}
            className={`nav-dot ${active === s ? "active" : ""}`}
            aria-label={`Navigate to ${s}`}
          />
        </div>
      ))}
    </nav>
  );
};

export default SideNav;
