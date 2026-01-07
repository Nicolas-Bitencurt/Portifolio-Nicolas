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
    title: "E-commerce Platform",
    description: "Plataforma de e-commerce escalável com sistema de pagamentos integrado e gestão de inventário.",
    technologies: ["Next.js", "Stripe", "MongoDB", "AWS"],
    github: "#",
    demo: "#",
  },
  {
    title: "App Mobile",
    description: "Aplicativo mobile multiplataforma para gerenciamento de tarefas e produtividade pessoal.",
    technologies: ["React Native", "Firebase", "TypeScript"],
    github: "#",
  },
  {
    title: "API RESTful",
    description: "API robusta para integração de sistemas com autenticação JWT e documentação OpenAPI.",
    technologies: ["Python", "FastAPI", "Redis", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Painel de análise de dados com visualizações interativas e processamento em tempo real.",
    technologies: ["Vue.js", "D3.js", "Python", "Kafka"],
    demo: "#",
  },
  {
    title: "Automação DevOps",
    description: "Pipeline de CI/CD completo com infraestrutura como código e monitoramento integrado.",
    technologies: ["Terraform", "Kubernetes", "GitHub Actions", "Prometheus"],
    github: "#",
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