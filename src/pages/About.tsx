import { Users, Target, Lightbulb, Heart, Rocket, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Alexandre Durand",
    role: "CEO & Co-fondateur",
    bio: "Expert en cybersécurité avec 10 ans d'expérience, ancien pentester chez une grande société de conseil.",
  },
  {
    name: "Sophie Lambert",
    role: "CTO & Co-fondatrice",
    bio: "Spécialiste en architecture de sécurité, diplômée de l'ANSSI, passionnée par l'innovation technique.",
  },
  {
    name: "Thomas Martin",
    role: "Lead Security Analyst",
    bio: "Hacker éthique certifié OSCP, expert en tests d'intrusion et réponse à incident.",
  },
  {
    name: "Emma Bernard",
    role: "Responsable Formation",
    bio: "Former en cybersécurité avec une passion pour la transmission des connaissances et la pédagogie.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Excellence technique",
    description: "Nous nous engageons à fournir les solutions de sécurité les plus robustes et innovantes.",
  },
  {
    icon: Rocket,
    title: "Agilité startup",
    description: "Flexibilité, réactivité et capacité d'adaptation rapide aux besoins de nos clients.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "La cybersécurité est notre passion, pas juste notre métier. Nous aimons ce que nous faisons.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Toujours à la pointe de la technologie, nous anticipons les menaces de demain.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              À propos d'AlphaSec
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Une startup française née de la passion pour la cybersécurité et l'envie de protéger les entreprises contre les menaces numériques.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Notre histoire</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  AlphaSec est née en 2023 de la rencontre entre Alexandre et Sophie, deux experts en cybersécurité partageant une vision commune : rendre la sécurité informatique accessible et efficace pour toutes les entreprises.
                </p>
                <p>
                  Frustrés par la lenteur et la rigidité des grandes entreprises de conseil en cybersécurité, ils ont décidé de créer une structure agile, réactive et humaine, capable de s'adapter rapidement aux besoins spécifiques de chaque client.
                </p>
                <p>
                  Aujourd'hui, notre équipe s'est agrandie avec des talents passionnés, tous animés par la même mission : protéger les entreprises contre les cybermenaces avec des solutions innovantes et performantes.
                </p>
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

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Notre mission</h3>
                <p className="text-muted-foreground">
                  Démocratiser l'accès à une cybersécurité de qualité en offrant des services experts, réactifs et personnalisés. Nous croyons que chaque entreprise, quelle que soit sa taille, mérite une protection de haut niveau contre les cybermenaces.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Notre vision</h3>
                <p className="text-muted-foreground">
                  Devenir le partenaire de confiance de référence en cybersécurité pour les entreprises françaises et européennes. Nous aspirons à créer un écosystème numérique plus sûr grâce à l'innovation, l'expertise et une approche humaine.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nos valeurs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Notre équipe</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des experts passionnés au service de votre sécurité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Culture startup</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Chez AlphaSec, nous cultivons un environnement de travail dynamique, collaboratif et innovant. Nous croyons en la force du collectif, l'apprentissage continu et la prise d'initiative. Chaque membre de l'équipe est encouragé à partager ses idées, à expérimenter et à grandir professionnellement.
            </p>
            <p className="text-lg text-muted-foreground">
              Notre culture startup se traduit par une flexibilité dans les méthodes de travail, un esprit d'équipe fort et une passion commune pour résoudre des défis techniques complexes. Nous sommes une petite équipe où chaque voix compte et où l'impact de chacun est visible.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
