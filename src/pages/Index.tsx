import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Target } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--hero-gradient)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-primary animate-fade-in">
              Welkom bij Saamakazunta
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Samen bouwen we aan een sterke gemeenschap in Suriname door middel van 
              educatie, cultuur en sociale ontwikkeling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg group">
                <Link to="/over-ons">
                  Leer Ons Kennen
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link to="/contact">
                  Neem Contact Op
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-12 text-secondary">Onze Kernwaarden</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-primary">Gemeenschap</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Samen sterk door verbinding en samenwerking binnen onze gemeenschap.
                </p>
              </div>

              <div className="bg-background rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-secondary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="mb-3 text-secondary">Inclusiviteit</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Iedereen is welkom en heeft recht op kansen voor persoonlijke ontwikkeling.
                </p>
              </div>

              <div className="bg-background rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-3 text-accent">Duurzaamheid</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bouwen aan een betere toekomst voor de volgende generaties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="mb-4 text-white">Doe Met Ons Mee</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Word onderdeel van onze missie en help ons bouwen aan een betere toekomst 
              voor gemeenschappen in Suriname.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/contact">
                Start Vandaag
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
