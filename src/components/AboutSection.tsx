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
  
  {/* Aqui entraria sua imagem ou ilustração decorativa na segunda coluna do grid */}
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