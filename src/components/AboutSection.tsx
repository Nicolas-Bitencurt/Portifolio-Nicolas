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

      <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0">
        <div className="space-y-4 sm:space-y-6">
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            Olá! Sou <span className="text-foreground font-medium">Nicolas</span>, profissional de TI em uma multinacional e desenvolvedor Fullstack apaixonado por transformar desafios em soluções escaláveis. 
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            Com experiência sólida em <span className="text-foreground">Frontend, Backend e Bancos de Dados</span>, foco em unir visão técnica e senso de solução para entregar aplicações seguras e eficientes, sempre priorizando a qualidade e a inovação em cada linha de código.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Minha jornada é marcada pela evolução constante: compartilho meus projetos no GitHub — desde sistemas complexos a sites corporativos — e contribuo para o ecossistema de tecnologia através de projetos open source e troca de conhecimento com a comunidade.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Estou sempre em busca de expandir minha influência na área e conectar-me a projetos que valorizam colaboração, desenvolvimento contínuo e tecnologia de ponta.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 px-4 sm:px-0">
          {skills.map((skill, index) => (
            <div
              key={skill.label}
              className="glass rounded-xl p-3 sm:p-6 hover-lift group cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <skill.icon className="w-6 sm:w-8 h-6 sm:h-8 text-primary mb-2 sm:mb-4 group-hover:text-glow transition-all" />
              <h3 className="font-mono font-semibold text-xs sm:text-base text-foreground mb-1">{skill.label}</h3>
              <p className="text-xs text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default AboutSection;