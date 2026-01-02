const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm font-mono">
          <span className="text-primary">&lt;/&gt;</span> Desenvolvido por{" "}
          <span className="text-foreground">Nicolas</span>
        </p>
        <p className="text-muted-foreground text-sm">
          © {currentYear} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;