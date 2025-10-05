const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-2">Saamakazunta</h3>
            <p className="text-sm opacity-90">
              Stichting voor Gemeenschap en Ontwikkeling
            </p>
          </div>
          <div className="text-center md:text-right text-sm opacity-90">
            <p>&copy; {new Date().getFullYear()} Saamakazunta. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
