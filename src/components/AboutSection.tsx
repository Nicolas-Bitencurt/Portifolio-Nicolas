import { Code2, Server, Database, Smartphone } from "lucide-react";

const skills = [
  { icon: Code2, label: "Frontend", description: "React, CSS, TypeScript, Tailwind" },
  { icon: Server, label: "Backend", description: "Node.js, Python, Java, APIs" },
  { icon: Database, label: "Database", description: "PostgreSQL, MongoDB, MySQL, Docker" },
  { icon: Smartphone, label: "Mobile", description: "Flutter, Dart" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">
        <span className="text-primary font-normal">01.</span> Sobre Mim
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            Olá! Sou <span className="text-foreground font-medium">Nicolas</span>, um profissional de TI 
            apaixonado por tecnologia e desenvolvimento de software. Com experiência em diversas áreas 
            da tecnologia, busco sempre criar soluções eficientes e inovadoras.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Minha jornada na área de TI me permitiu trabalhar com diferentes tecnologias e 
            metodologias, sempre focando em entregar resultados de qualidade e agregar valor 
            aos projetos que participo.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Quando não estou codando, gosto de explorar novas tecnologias, contribuir para 
            projetos open source e compartilhar conhecimento com a comunidade.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.label}
              className="glass rounded-xl p-6 hover-lift group cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <skill.icon className="w-8 h-8 text-primary mb-4 group-hover:text-glow transition-all" />
              <h3 className="font-mono font-semibold text-foreground mb-1">{skill.label}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;