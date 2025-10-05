const OverOns = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8 text-primary">Over Ons</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-card rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-secondary mb-4">Onze Missie</h2>
              <p className="text-muted-foreground leading-relaxed">
                Saamakazunta is een stichting die zich inzet voor de ontwikkeling en het welzijn 
                van gemeenschappen in Suriname. Wij geloven in samenwerking en het versterken 
                van lokale gemeenschappen door educatie, culturele activiteiten en sociale projecten.
              </p>
            </div>

            <div className="bg-card rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-secondary mb-4">Onze Visie</h2>
              <p className="text-muted-foreground leading-relaxed">
                Een samenleving waarin iedereen de kans krijgt om zich te ontwikkelen en bij te 
                dragen aan een sterke, veerkrachtige gemeenschap. Wij streven naar duurzame 
                vooruitgang door middel van educatie, cultureel behoud en sociale cohesie.
              </p>
            </div>

            <div className="bg-card rounded-lg shadow-md p-8">
              <h2 className="text-secondary mb-4">Onze Waarden</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Gemeenschap en samenwerking staan centraal in alles wat we doen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Respect voor culturele diversiteit en erfgoed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Transparantie en integriteit in onze activiteiten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Duurzame ontwikkeling voor toekomstige generaties</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverOns;
