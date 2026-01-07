import { Github, Linkedin, Mail, Twitter, Send } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Nicolas-Bitencurt", username: "Nicolas-Bitencurt" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/nicolas-bitencurt/", username: "Nicolas Bitencurt" },
  { icon: Mail, label: "Email", href: "mailto:nicolasbitencurt6@gmail.com", username: "nicolasbitencurt6@gmail.com" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">
        <span className="text-primary font-normal">02.</span> Contato
      </h2>

      <div className="max-w-4xl mx-auto text-center"> {/* Aumentei um pouco o max-w para os cards respirarem */}
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Estou sempre aberto a novas oportunidades e conexões. Sinta-se à vontade para entrar em 
          contato comigo através das redes sociais ou por e-mail!
        </p>

        {/* ALTERAÇÃO AQUI: De grid para flex e justify-center */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-6 hover-lift group text-center min-w-[160px] flex-1 sm:flex-none"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <link.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:animate-pulse-glow transition-all" />
              <h3 className="font-medium text-foreground mb-1">{link.label}</h3>
              <p className="text-xs text-muted-foreground font-mono">{link.username}</p>
            </a>
          ))}
        </div>

        <a
          href="mailto:nicolasbitencurt6@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover-lift box-glow hover:box-glow-strong transition-all duration-300 text-lg"
        >
          <Send size={20} />
          Vamos Conversar
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
