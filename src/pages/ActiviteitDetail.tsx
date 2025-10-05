import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowLeft, Play } from "lucide-react";
import { useState } from "react";

interface Media {
  type: "image" | "video";
  url: string;
}

interface Activiteit {
  id: number;
  titel: string;
  datum: string;
  locatie: string;
  beschrijving: string;
  volledigeBeschrijving?: string;
  media?: Media[];
}

const ActiviteitDetail = () => {
  const { id } = useParams();
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const activiteiten: Activiteit[] = [
    {
      id: 1,
      titel: "Saamaka Jongeren Congres 2024",
      datum: "20 September 2024",
      locatie: "Congreshal, Paramaribo",
      beschrijving: "Belangrijk congres voor Saamaka jongeren met onderwerpen: Oil en Gas, Toerisme, ICT, Persoonlijke groei en ontwikkeling, en Identiteit.",
      volledigeBeschrijving: "Het Saamaka Jongeren Congres 2024 was een succesvol evenement met als thema 'Stronger relationships move us forward'. Het congres bracht jonge Saamaka leiders samen om te discussiëren over belangrijke onderwerpen zoals Oil en Gas, Toerisme, ICT, Persoonlijke groei en ontwikkeling, en Identiteit. De deelnemers konden netwerken, leren van experts en hun visie delen over de toekomst van de Saamaka gemeenschap.",
      media: [
        { type: "image", url: "/activiteiten/congres-2024-1.jpeg" },
        { type: "image", url: "/activiteiten/congres-2024-2.jpeg" },
        { type: "image", url: "/activiteiten/congres-2024-3.jpeg" },
        { type: "video", url: "/activiteiten/congres-2024-video-1.mp4" },
        { type: "video", url: "/activiteiten/congres-2024-video-2.mp4" },
        { type: "video", url: "/activiteiten/congres-2024-video-3.mp4" },
        { type: "video", url: "/activiteiten/congres-2024-video-4.mp4" },
      ],
    },
    {
      id: 2,
      titel: "Saamaka Jongeren Symposium en Boeklancering",
      datum: "November 2023",
      locatie: "Suriname",
      beschrijving: "Lancering van het boek met bijdragen van 14 Saamaka academici.",
      volledigeBeschrijving: "Lancering van het boek met bijdragen van 14 Saamaka academici, inclusief Genia J. Lank-Corinde, Jerry Finisie, Wilco Finisie, Franklin Jabini en anderen. Het boek behandelt de formatie van de stam, ontmoetingen met de buitenwereld, en hedendaagse uitdagingen.",
    },
  ];

  const activiteit = activiteiten.find((a) => a.id === Number(id));

  if (!activiteit) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Activiteit niet gevonden</h1>
          <Button asChild>
            <Link to="/onze-activiteiten">Terug naar activiteiten</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/onze-activiteiten">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Terug naar activiteiten
            </Link>
          </Button>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {activiteit.titel}
              </h1>
              
              <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{activiteit.datum}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>{activiteit.locatie}</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {activiteit.volledigeBeschrijving || activiteit.beschrijving}
                </p>
              </div>
            </CardContent>
          </Card>

          {activiteit.media && activiteit.media.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-6">
                Foto's en Video's
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {activiteit.media.map((item, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity relative group"
                    onClick={() => setSelectedMedia(item.url)}
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.url}
                        alt={`${activiteit.titel} - ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="relative w-full h-full">
                        <video
                          src={item.url}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <Play className="h-12 w-12 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedMedia && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMedia(null)}
            >
              <div className="relative max-w-6xl w-full">
                <Button
                  variant="ghost"
                  className="absolute -top-12 right-0 text-white hover:text-white"
                  onClick={() => setSelectedMedia(null)}
                >
                  Sluiten
                </Button>
                {selectedMedia.endsWith(".mp4") ? (
                  <video
                    src={selectedMedia}
                    controls
                    autoPlay
                    className="w-full max-h-[80vh] rounded-lg"
                  />
                ) : (
                  <img
                    src={selectedMedia}
                    alt="Volledig scherm"
                    className="w-full max-h-[80vh] object-contain rounded-lg"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActiviteitDetail;
