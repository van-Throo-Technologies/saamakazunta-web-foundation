import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import merinaImage from "@/assets/merina-jessamy-eduards.jpeg";
import lenieImage from "@/assets/lenie-eduards.jpeg";
import elvisImage from "@/assets/elvis-pokie.jpeg";

const HetBestuur = () => {
  const bestuursleden = [
    {
      id: 1,
      naam: "Merina Jessamy-Eduards",
      functie: "Functie",
      beschrijving: "Korte beschrijving over het bestuurslid komt hier.",
      image: merinaImage,
    },
    {
      id: 2,
      naam: "Lenie Eduards",
      functie: "Functie",
      beschrijving: "Korte beschrijving over het bestuurslid komt hier.",
      image: lenieImage,
    },
    {
      id: 3,
      naam: "Drs. Elvis Pokie",
      functie: "Penningmeester",
      beschrijving: "Korte beschrijving over het bestuurslid komt hier.",
      image: elvisImage,
    },
    {
      id: 4,
      naam: "Naam Bestuurslid 4",
      functie: "Functie",
      beschrijving: "Korte beschrijving over het bestuurslid komt hier.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="mb-8 text-primary text-center">Het Bestuur</h1>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            Ons bestuur bestaat uit toegewijde leden die zich inzetten voor de ontwikkeling 
            en verheffing van de Saramaccaanse gemeenschap.
          </p>

          <div className="space-y-8">
            {bestuursleden.map((lid, index) => (
              <Card key={lid.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-2 gap-6 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                    {/* Image Placeholder */}
                    <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                      {lid.image ? (
                        <img
                          src={lid.image}
                          alt={lid.naam}
                          className="w-full h-full object-cover aspect-square"
                        />
                      ) : (
                        <div className="aspect-square bg-muted flex items-center justify-center">
                          <User className="h-24 w-24 text-muted-foreground" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className={`p-6 md:p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                      <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
                        {lid.naam}
                      </h2>
                      <p className="text-lg text-secondary font-medium mb-4">
                        {lid.functie}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {lid.beschrijving}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HetBestuur;
