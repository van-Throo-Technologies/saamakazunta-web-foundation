import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Image as ImageIcon, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const OnzeActiviteiten = () => {
  const eerdereActiviteiten = [
    {
      id: 1,
      titel: "Saamaka Jongeren Congres 2024",
      datum: "20 September 2024",
      locatie: "Congreshal, Paramaribo",
      beschrijving: "Succesvol congres voor Saamaka jongeren met onderwerpen: Oil en Gas, Toerisme, ICT, Persoonlijke groei en ontwikkeling, en Identiteit. Thema: 'Stronger relationships move us forward'.",
      hasMedia: true,
    },
    {
      id: 2,
      titel: "Saamaka Jongeren Symposium en Boeklancering",
      datum: "November 2023",
      locatie: "Suriname",
      beschrijving: "Lancering van het boek met bijdragen van 14 Saamaka academici, inclusief Genia J. Lank-Corinde, Jerry Finisie, Wilco Finisie, Franklin Jabini en anderen. Het boek behandelt de formatie van de stam, ontmoetingen met de buitenwereld, en hedendaagse uitdagingen.",
      hasMedia: false,
    },
    {
      id: 3,
      titel: "Herdenkingsdienst Goudmijn Ramp",
      datum: "November 2023",
      locatie: "Suriname",
      beschrijving: "Speciale herdenkingsdienst ter nagedachtenis aan de slachtoffers van de goudmijn ramp.",
      hasMedia: false,
    },
    {
      id: 4,
      titel: "DNA Bespreking te Torarica",
      datum: "24-26 Juni 2023",
      locatie: "Hotel Torarica, Paramaribo",
      beschrijving: "Belangrijke bespreking over vernieuwingen binnen VSG en samenwerking met Tropenbos. Tevens werden de beste geslaagde leerlingen van Brokopondo en Atjoni gehonoreerd met elk SRD 500.",
      hasMedia: false,
    },
    {
      id: 5,
      titel: "Slavernij Verleden en Studie Motivatie",
      datum: "10 Juli 2023",
      locatie: "Mulo Brokopondo",
      beschrijving: "Lezingen door Helmut Gezius, Selcius Poeketie en Lourencina Adams over het slavernij verleden en studiemotivatie voor jongeren.",
      hasMedia: false,
    },
    {
      id: 6,
      titel: "Motivatie Sessie Leerlingen Atjoni",
      datum: "2023",
      locatie: "Koina Kondre",
      beschrijving: "Motiverende sessie voor leerlingen van Atjoni, gericht op onderwijsontwikkeling en toekomstperspectief.",
      hasMedia: false,
    },
    {
      id: 7,
      titel: "Online Lezingenreeks 2022",
      datum: "April - Augustus 2022",
      locatie: "Online (Google Meet)",
      beschrijving: "Serie online lezingen met o.a. Drs. Raymond Landveld over duurzame ontwikkeling, Drs. Ronnie Asabina en hoofdkapitein Henry Kaffe over ondernemerschap, Drs. John Goedschalk over duurzame houtkap, en Drs. Asiskumar Gajadien over Wet Collectieve Rechten.",
      hasMedia: false,
    },
    {
      id: 8,
      titel: "Overstromingshulp Balingsoela",
      datum: "2022",
      locatie: "Balingsoela",
      beschrijving: "Noodhulp van SRD 9.205,- voor GLO Balingsoela na overstroming. Ook SRD 1.000,- uitgekeerd aan beste geslaagde leerlingen Mulo Atjoni.",
      hasMedia: false,
    },
    {
      id: 9,
      titel: "Seminaar Gezagdragers Brokopondo",
      datum: "Oktober 2021",
      locatie: "Brokopondo",
      beschrijving: "Belangrijk seminaar voor gezagdragers van het district Brokopondo, gericht op gemeenschapsontwikkeling en samenwerking.",
      hasMedia: false,
    },
    {
      id: 10,
      titel: "Seminaar Leerkrachten Boven Suriname",
      datum: "September 2021",
      locatie: "Boven Suriname",
      beschrijving: "Professionele ontwikkelingsseminaar voor leerkrachten werkzaam in het binnenland van Suriname.",
      hasMedia: false,
    },
    {
      id: 11,
      titel: "Bezoek aan de Gaama",
      datum: "September 2021",
      locatie: "Asindohopo",
      beschrijving: "Officieel bezoek aan de Gaama der Saramaccaners te Asindohopo voor overleg en het versterken van de band met het traditioneel gezag.",
      hasMedia: false,
    },
  ];

  const opkomendeEvenementen: any[] = [];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="mb-4 text-primary text-center">Onze Activiteiten</h1>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            Ontdek onze eerdere activiteiten en blijf op de hoogte van aankomende evenementen.
          </p>

          {/* Opkomende Evenementen - Only show if there are any */}
          {opkomendeEvenementen.length > 0 && (
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
          )}

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
                        {activiteit.hasMedia && (
                          <Button asChild variant="outline" size="sm" className="mt-4">
                            <Link to={`/activiteit/${activiteit.id}`}>
                              Bekijk foto's en video's
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        )}
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
