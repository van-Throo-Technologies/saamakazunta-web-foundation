import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const OverOns = () => {
  const uitdagingenData = [
    {
      categorie: "Onderwijs <GLO",
      Brokopondo: 60,
      Sipaliwini: 85,
    },
    {
      categorie: "Leidingwater",
      Brokopondo: 5,
      Sipaliwini: 2,
    },
    {
      categorie: "WC spoeling",
      Brokopondo: 24,
      Sipaliwini: 0,
    },
    {
      categorie: "Energie EBS",
      Brokopondo: 41,
      Sipaliwini: 0,
    },
    {
      categorie: "Werkloosheid",
      Brokopondo: 13.8,
      Sipaliwini: 19.3,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="mb-12 text-primary text-center">Over Ons</h1>
          
          <div className="space-y-8">
            {/* Wat doen wij */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">WAT doen wij?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Wij doen alles ter bevordering van duurzame ontwikkeling en verheffing van de Saramaccaners.
                </p>
              </CardContent>
            </Card>

            {/* Hoe doen wij dat */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">HOE doen wij dat?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Door middel van samenbundeling en samenwerking; conferenties; bevorderen van ondernemerschap, 
                  duurzame economische groei, volledige en productieve tewerkstelling; faciliteren van gesprekken 
                  met nationale en internationale organisaties voor duurzame ontwikkelingsprojecten; werven van fondsen.
                </p>
              </CardContent>
            </Card>

            {/* Wie dienen wij */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">WIE dienen wij?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Saramaccaners in traditionele woongebieden, districten, stad en diaspora en allen die vallen 
                  onder het gezag van de Saamaka gaama.
                </p>
              </CardContent>
            </Card>

            {/* Uitdagingen */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Uitdagingen Brokopondo & Sipaliwini</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p><strong>Onderwijs:</strong> 60% (Brokopondo) / 85% (Sipaliwini) lager dan GLO of geen</p>
                  <p><strong>Leidingwater binnenshuis:</strong> 5% (Brokopondo) / 2% (Sipaliwini)</p>
                  <p><strong>WC met waterspoeling:</strong> 24% (Brokopondo)</p>
                  <p><strong>Energie:</strong> 41% EBS / 26% (NH/RO, af en toe) (Brokopondo)</p>
                  <p><strong>Werkloosheid:</strong> 13,8% (Brokopondo) / 19,3% (Sipaliwini)</p>
                  <p className="text-destructive font-semibold">Ruim 57% leeft in armoede (Marrons)</p>
                </div>
                
                <div className="w-full h-[400px] mt-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={uitdagingenData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="categorie" 
                        angle={-45}
                        textAnchor="end"
                        height={100}
                        style={{ fontSize: '12px' }}
                      />
                      <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Brokopondo" fill="hsl(var(--primary))" />
                      <Bar dataKey="Sipaliwini" fill="hsl(var(--secondary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Oorzaken */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Oorzaken</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">1.</span>
                    <span><strong>Mentaliteit:</strong> geen samenwerking (verdeeld), geldingsdrang, geen doorzetting, faalangst</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">2.</span>
                    <span><strong>Politiek jaren 60:</strong> verdeeldheid, ondermijning traditioneel gezag</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">3.</span>
                    <span>Eigen arbeid vervangen door overheidsbaan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">4.</span>
                    <span>Trek jongeren naar Paramaribo na GLO</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">5.</span>
                    <span>Binnenlandse oorlog jaren 80</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Vermogen */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Vermogen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Bijdrage deelnemers; Subsidies van overheidswege en/of bijdragen van nationale en 
                  internationale organisaties en particulieren, donaties en giften. Consultaties, fondswerving.
                </p>
              </CardContent>
            </Card>

            {/* Strategie */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Strategie om doel te bereiken</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Het gebruik van massamedia, sociale media en persoonlijke contacten.
                </p>
              </CardContent>
            </Card>

            {/* Top concurrenten */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Top concurrenten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Politieke partijen, groepen en organisaties binnen de gemeenschap die niet willen samenwerken.
                </p>
              </CardContent>
            </Card>

            {/* Ons voordeel */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Ons voordeel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Stichting met deelnemers biedt vele mogelijkheden tot samenwerking; nieuw begin met een 
                  team zonder een besmet verleden.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverOns;
