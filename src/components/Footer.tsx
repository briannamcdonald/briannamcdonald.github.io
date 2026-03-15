const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Brianna McDonald
        </p>
      </div>
    </footer>
  );
};

export default Footer;
