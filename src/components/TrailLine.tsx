import { useEffect, useState } from "react";

const TrailLine = () => {
  const [height, setHeight] = useState(0);
  const [glowing, setGlowing] = useState(false);

  useEffect(() => {
    let lastSection = "";
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / docHeight, 1);
      setHeight(progress * 100);

      // Detect section changes for glow pulse
      const sections = ["about", "education", "skills", "projects", "achievements", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= -50 && rect.top <= 150 && id !== lastSection) {
            lastSection = id;
            setGlowing(true);
            setTimeout(() => setGlowing(false), 600);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`trail-line transition-shadow duration-500 ${glowing ? "trail-glow" : ""}`}
      style={{ height: `${height}vh` }}
    />
  );
};

export default TrailLine;
