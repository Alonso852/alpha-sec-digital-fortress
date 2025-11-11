import { Link } from "react-router-dom";
import { Shield, Lock, Eye, Users, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Shield,
    title: "Pentesting",
    description: "Tests d'intrusion complets pour identifier et corriger les vulnérabilités avant qu'elles ne soient exploitées.",
  },
  {
    icon: Lock,
    title: "Audit de sécurité",
    description: "Évaluation approfondie de votre infrastructure pour garantir la conformité et la résilience.",
  },
  {
    icon: Eye,
    title: "Service SOC",
    description: "Surveillance continue 24/7 pour détecter et répondre aux menaces en temps réel.",
  },
];

const testimonials = [
  {
    quote: "AlphaSec a transformé notre approche de la cybersécurité. Leur réactivité et expertise sont exceptionnelles.",
    author: "Marie Dubois",
    role: "CTO, TechCorp",
  },
  {
    quote: "Une équipe jeune, dynamique et compétente. Ils ont sécurisé notre infrastructure en un temps record.",
    author: "Jean Martin",
    role: "Directeur IT, FinanceGroup",
  },
];

const stats = [
  { value: "50+", label: "Clients satisfaits" },
  { value: "200+", label: "Audits réalisés" },
  { value: "24/7", label: "Surveillance" },
  { value: "99.9%", label: "Taux de satisfaction" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Protégez votre entreprise avec AlphaSec
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Startup innovante en cybersécurité, nous combinons expertise technique et agilité pour sécuriser votre avenir numérique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link to="/contact">
                  Demander un devis
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                <Link to="/services">Découvrir nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-background py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos services phares
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions complètes pour protéger votre entreprise contre les cybermenaces
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                Tous nos services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Pourquoi choisir AlphaSec ?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Expertise de pointe</h3>
                    <p className="text-muted-foreground">Notre équipe de hackers éthiques certifiés maîtrise les dernières techniques d'attaque et de défense.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Agilité startup</h3>
                    <p className="text-muted-foreground">Réactivité, flexibilité et innovation au cœur de notre approche pour s'adapter à vos besoins.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Approche personnalisée</h3>
                    <p className="text-muted-foreground">Chaque entreprise est unique. Nous adaptons nos solutions à votre contexte spécifique.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Support 24/7</h3>
                    <p className="text-muted-foreground">Les cybermenaces ne dorment jamais, nous non plus. Assistance continue pour votre tranquillité.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl"></div>
              <Card className="relative">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                    <Shield className="h-32 w-32 text-primary animate-glow" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-muted-foreground">
              Leur confiance fait notre fierté
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <p className="text-lg text-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
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
            Prêt à sécuriser votre entreprise ?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour un audit de sécurité gratuit et découvrez comment nous pouvons protéger votre infrastructure.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Commencer maintenant
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
