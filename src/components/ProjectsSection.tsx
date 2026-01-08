import { ExternalLink, Github, Folder } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Projeto API Biblioteca",
    description: "Uma aplicação RESTful completa para gerenciamento de biblioteca desenvolvida em Java com Spring Boot 3.5.8, incluindo autenticação JWT, Swagger, migrations com Flyway e segurança implementada.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    github: "https://github.com/Nicolas-Bitencurt/Projeto_API_Biblioteca",
  },
  {
    title: "Controle de Estacionamento",
    description: "Uma aplicação web para gerenciar o controle de entrada e saída de veículos em um estacionamento.",
    technologies: ["JavaScript", "React", "CSS"],
    github: "https://github.com/Nicolas-Bitencurt/Controle-de-Estacionamento-",
    demo: "estacionecomreact.netlify.app",
  },
  {
    title: "TicTocToe - Jogo da Velha",
    description: "Este projeto implementa um Jogo da Velha Distribuído usando Java com Sockets TCP e threads para demonstrar comunicação entre processos e concorrência em sistemas distribuídos.",
    technologies: ["Java", "Kafka", "Socket TCP", "Threads"],
    github: "https://github.com/Nicolas-Bitencurt/TicTocToe---Jogo-da-Velha",
  },
  {
    title: "Cafeteria",
    description: "UM sistema em Java para gerenciar pedidos e estoque em uma cafeteria, com interface gráfica desenvolvida em JavaFX.",
    technologies: ["Java", "PostgreSQL", "JavaFX"],
    github: "https://github.com/Nicolas-Bitencurt/Cafeteria-Java",
  },
  {
    title: "Flutter Store",
    description: "Um aplicativo móvel de e-commerce desenvolvido com Flutter, apresentando uma interface amigável e funcionalidades essenciais para compras online.",
    technologies: ["Flutter", "Dart", "C++", "Swift"],
    github: "https://github.com/Nicolas-Bitencurt/Avalia-o_Flutter",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <div
      className="glass rounded-xl p-4 sm:p-6 hover-lift group relative overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <Folder className="w-7 sm:w-10 h-7 sm:h-10 text-primary" />
          <div className="flex gap-2 sm:gap-3">
            {project.github && (
              <a
                href={project.github}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} className="sm:w-5 sm:h-5" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Demo"
              >
                <ExternalLink size={18} className="sm:w-5 sm:h-5" />
              </a>
            )}
          </div>
        </div>

        <h3 className="font-mono font-semibold text-base sm:text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 sm:mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-primary/80 bg-primary/10 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">
        <span className="text-primary font-normal">02.</span> Projetos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;