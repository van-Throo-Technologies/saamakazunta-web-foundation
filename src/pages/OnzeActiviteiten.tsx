import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Image as ImageIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const OnzeActiviteiten = () => {
  const eerdereActiviteiten = [
    {
      id: 1,
      titel: "Activiteit Titel 1",
      datum: "DD-MM-YYYY",
      locatie: "Locatie",
      beschrijving: "Beschrijving van de activiteit komt hier. Details over wat er gebeurd is en wie er aanwezig waren.",
    },
    {
      id: 2,
      titel: "Activiteit Titel 2",
      datum: "DD-MM-YYYY",
      locatie: "Locatie",
      beschrijving: "Beschrijving van de activiteit komt hier. Details over wat er gebeurd is en wie er aanwezig waren.",
    },
    {
      id: 3,
      titel: "Activiteit Titel 3",
      datum: "DD-MM-YYYY",
      locatie: "Locatie",
      beschrijving: "Beschrijving van de activiteit komt hier. Details over wat er gebeurd is en wie er aanwezig waren.",
    },
  ];

  const opkomendeEvenementen = [
    {
      id: 1,
      titel: "Evenement Titel 1",
      datum: "DD-MM-YYYY",
      tijd: "HH:MM",
      locatie: "Locatie",
      beschrijving: "Beschrijving van het aanstaande evenement.",
    },
    {
      id: 2,
      titel: "Evenement Titel 2",
      datum: "DD-MM-YYYY",
      tijd: "HH:MM",
      locatie: "Locatie",
      beschrijving: "Beschrijving van het aanstaande evenement.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="mb-4 text-primary text-center">Onze Activiteiten</h1>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            Ontdek onze eerdere activiteiten en blijf op de hoogte van aankomende evenementen.
          </p>

          {/* Opkomende Evenementen */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-semibold text-primary">Agenda</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {opkomendeEvenementen.map((evenement) => (
                <Card key={evenement.id} className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl text-primary">{evenement.titel}</CardTitle>
                      <Badge className="bg-primary text-primary-foreground">Binnenkort</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{evenement.datum}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{evenement.tijd}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{evenement.locatie}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{evenement.beschrijving}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Eerdere Activiteiten */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <ImageIcon className="h-8 w-8 text-secondary" />
              <h2 className="text-3xl font-semibold text-secondary">Eerdere Activiteiten</h2>
            </div>
            
            <div className="space-y-8">
              {eerdereActiviteiten.map((activiteit, index) => (
                <Card key={activiteit.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`grid md:grid-cols-2 gap-6 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                      {/* Image Placeholder */}
                      <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                        <div className="aspect-video bg-muted flex items-center justify-center">
                          <ImageIcon className="h-16 w-16 text-muted-foreground" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`p-6 md:p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                        <h3 className="text-2xl font-semibold text-secondary mb-4">
                          {activiteit.titel}
                        </h3>
                        <div className="space-y-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{activiteit.datum}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{activiteit.locatie}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {activiteit.beschrijving}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OnzeActiviteiten;
