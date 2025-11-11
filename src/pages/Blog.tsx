import { Calendar, Clock, ArrowRight, Shield, Lock, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const articles = [
  {
    title: "Les 10 vulnérabilités critiques à corriger en 2024",
    excerpt: "Découvrez les principales failles de sécurité que les hackers exploitent le plus fréquemment et comment vous en protéger efficacement.",
    date: "15 Mars 2024",
    readTime: "8 min",
    category: "Sécurité",
    icon: Shield,
  },
  {
    title: "Zero Trust : Pourquoi votre entreprise en a besoin",
    excerpt: "Le modèle Zero Trust révolutionne la cybersécurité d'entreprise. Comprendre ses principes et comment l'implémenter progressivement dans votre organisation.",
    date: "2 Mars 2024",
    readTime: "12 min",
    category: "Architecture",
    icon: Lock,
  },
  {
    title: "Ransomware : Comment préparer votre plan de réponse",
    excerpt: "Face à la montée des attaques par ransomware, avoir un plan de réponse solide est crucial. Guide complet pour protéger votre entreprise.",
    date: "18 Février 2024",
    readTime: "15 min",
    category: "Incident Response",
    icon: AlertTriangle,
  },
  {
    title: "Phishing : Former vos équipes à reconnaître les menaces",
    excerpt: "Le phishing reste le vecteur d'attaque n°1. Découvrez les techniques pour sensibiliser efficacement vos collaborateurs et réduire les risques.",
    date: "5 Février 2024",
    readTime: "10 min",
    category: "Sensibilisation",
    icon: Shield,
  },
  {
    title: "API Security : Les erreurs courantes à éviter",
    excerpt: "Les API sont devenues des cibles privilégiées des attaquants. Analysons les erreurs de sécurité les plus fréquentes et comment les corriger.",
    date: "22 Janvier 2024",
    readTime: "11 min",
    category: "Développement",
    icon: Lock,
  },
  {
    title: "Cloud Security : Best practices pour AWS, Azure et GCP",
    excerpt: "Sécuriser son infrastructure cloud nécessite une approche spécifique. Guide pratique des bonnes pratiques pour les trois principaux cloud providers.",
    date: "8 Janvier 2024",
    readTime: "14 min",
    category: "Cloud",
    icon: Shield,
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Blog AlphaSec
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Conseils pratiques, analyses d'experts et actualités en cybersécurité pour protéger votre entreprise.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-fade-in">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Article à la une</span>
          </div>
          <Card className="mb-20 animate-scale-in">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-12">
                  <Shield className="h-32 w-32 text-primary" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-2 text-primary mb-4">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm font-medium">Sécurité</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {articles[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{articles[0].excerpt}</p>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{articles[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{articles[0].readTime} de lecture</span>
                    </div>
                  </div>
                  <Button className="w-fit">
                    Lire l'article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <article.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center space-x-2 text-primary mb-3">
                    <span className="text-xs font-medium uppercase">{article.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="p-0 h-auto font-semibold group-hover:text-primary">
                    Lire la suite
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto animate-fade-in">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Restez informé des dernières actualités
              </h2>
              <p className="text-muted-foreground mb-8">
                Inscrivez-vous à notre newsletter pour recevoir nos articles, conseils et analyses directement dans votre boîte mail. Un envoi par mois, sans spam.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="whitespace-nowrap">S'inscrire</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">Thématiques abordées</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explorez nos articles par thématique pour approfondir vos connaissances
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {["Sécurité", "Architecture", "Incident Response", "Sensibilisation", "Développement", "Cloud", "Compliance", "Innovation"].map((topic, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 cursor-pointer animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground">{topic}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
