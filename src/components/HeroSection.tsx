import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Gradient orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 text-center">
        <p className="font-mono text-primary text-sm md:text-base mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
          {"// Olá, eu sou"}
        </p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
          <span className="gradient-text">Nicolas Bitencurt</span>
        </h1>
        
        <div className="font-mono text-lg md:text-2xl text-muted-foreground mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
          <span className="text-primary">&gt;</span> Profissional de TI
          <span className={`ml-1 inline-block w-3 h-6 bg-primary ${showCursor ? "opacity-100" : "opacity-0"}`} />
        </div>

        <p className="text-muted-foreground max-w-lg mx-auto mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
          Desenvolvedor apaixonado por criar soluções tecnológicas inovadoras e experiências digitais impactantes.
        </p>

        <div className="flex gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: "1s" }}>
          <a
            href="Projects"
            className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover-lift box-glow hover:box-glow-strong transition-all duration-300"
          >
            Ver Projetos
          </a>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        aria-label="Scroll para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;