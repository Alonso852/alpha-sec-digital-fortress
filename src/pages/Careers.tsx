import { Rocket, Heart, Users, Zap, Coffee, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const positions = [
  {
    title: "Pentester Junior/Confirmé",
    type: "CDI",
    location: "Paris / Télétravail partiel",
    description: "Rejoignez notre équipe de hackers éthiques pour identifier et corriger les vulnérabilités de nos clients.",
  },
  {
    title: "Ingénieur SOC",
    type: "CDI",
    location: "Paris",
    description: "Surveillez et protégez les infrastructures de nos clients 24/7 au sein de notre Security Operations Center.",
  },
  {
    title: "Consultant Cybersécurité",
    type: "CDI",
    location: "Paris / Télétravail partiel",
    description: "Accompagnez nos clients dans la mise en place de leur stratégie de cybersécurité et la conformité réglementaire.",
  },
  {
    title: "Formateur en Cybersécurité",
    type: "CDI / Freelance",
    location: "Paris / Télétravail",
    description: "Transmettez votre passion pour la cybersécurité en formant les équipes de nos clients aux bonnes pratiques.",
  },
];

const benefits = [
  {
    icon: Rocket,
    title: "Projets stimulants",
    description: "Travaillez sur des missions variées et challengeantes auprès de clients de différents secteurs.",
  },
  {
    icon: BookOpen,
    title: "Formation continue",
    description: "Budget formation généreux, certifications prises en charge (OSCP, CEH, etc.) et veille technologique active.",
  },
  {
    icon: Users,
    title: "Équipe soudée",
    description: "Ambiance startup conviviale, entraide et partage de connaissances au quotidien.",
  },
  {
    icon: Zap,
    title: "Flexibilité",
    description: "Télétravail partiel, horaires flexibles et équilibre vie pro/vie perso respecté.",
  },
  {
    icon: Coffee,
    title: "Avantages",
    description: "Mutuelle premium, tickets restaurant, budget matériel, afterworks réguliers et séminaires annuels.",
  },
  {
    icon: Heart,
    title: "Impact réel",
    description: "Protégez des entreprises contre les cybermenaces et faites une vraie différence dans leur sécurité.",
  },
];

const culture = [
  "Autonomie et prise d'initiative encouragées",
  "Feedback régulier et progression rapide",
  "Pas de politique, juste du concret",
  "Innovation et expérimentation valorisées",
  "Transparence sur les décisions et la vision",
  "Reconnaissance du travail accompli",
];

export default function Careers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Rejoignez l'aventure AlphaSec
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Construisez votre carrière dans une startup innovante où votre passion pour la cybersécurité fera la différence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pourquoi nous rejoindre ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chez AlphaSec, nous croyons que notre réussite repose sur notre équipe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Notre culture startup
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nous cultivons un environnement où chacun peut s'épanouir, apprendre et avoir un impact réel sur la sécurité de nos clients.
              </p>
              <div className="space-y-3">
                {culture.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="animate-scale-in">
              <CardContent className="p-8">
                <div className="flex items-center justify-center h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                  <Users className="h-32 w-32 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Postes ouverts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos opportunités et trouvez le poste qui vous correspond
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {positions.map((position, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">
                          {position.type}
                        </span>
                        <span className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                          {position.location}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{position.description}</p>
                    </div>
                    <Button asChild className="md:ml-4 whitespace-nowrap">
                      <Link to="/contact">
                        Postuler
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto mt-12 animate-fade-in">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Vous ne trouvez pas le poste idéal ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Envoyez-nous une candidature spontanée, nous sommes toujours à la recherche de talents passionnés par la cybersécurité.
              </p>
              <Button asChild variant="outline">
                <Link to="/contact">Candidature spontanée</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Notre processus de recrutement
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent, humain et efficace
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Candidature", desc: "Envoyez-nous votre CV et lettre de motivation" },
              { step: "2", title: "Premier échange", desc: "Appel téléphonique pour faire connaissance (30 min)" },
              { step: "3", title: "Entretien technique", desc: "Évaluation de vos compétences techniques et test pratique" },
              { step: "4", title: "Rencontre d'équipe", desc: "Rencontrez l'équipe et découvrez nos locaux" },
            ].map((item, index) => (
              <Card key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Prêt à rejoindre l'aventure ?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Envoyez-nous votre candidature et construisez votre carrière dans une startup qui fait bouger la cybersécurité en France.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Postuler maintenant
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
