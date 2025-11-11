import { Shield, Search, AlertTriangle, GraduationCap, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Shield,
    title: "Pentesting (Tests d'intrusion)",
    description: "Identifiez et corrigez les vulnérabilités avant qu'elles ne soient exploitées par des attaquants malveillants.",
    features: [
      "Tests d'intrusion externes et internes",
      "Simulation d'attaques réalistes",
      "Rapport détaillé avec recommandations",
      "Retests gratuits après correction",
      "Méthodologie OWASP et PTES",
    ],
    benefits: "Anticipez les attaques, protégez vos données sensibles et renforcez votre posture de sécurité globale.",
  },
  {
    icon: Search,
    title: "Audit de sécurité",
    description: "Évaluation complète de votre infrastructure IT pour garantir conformité, résilience et protection optimale.",
    features: [
      "Analyse d'architecture de sécurité",
      "Revue de configuration et hardening",
      "Évaluation des politiques de sécurité",
      "Tests de conformité (RGPD, ISO 27001, NIS2)",
      "Roadmap de mise en conformité",
    ],
    benefits: "Assurez la conformité réglementaire, identifiez les points faibles et obtenez une vision claire de votre niveau de sécurité.",
  },
  {
    icon: AlertTriangle,
    title: "Réponse à incident",
    description: "Intervention rapide et expertise en cas de cyberattaque pour contenir, analyser et remédier aux incidents de sécurité.",
    features: [
      "Intervention d'urgence 24/7",
      "Analyse forensique approfondie",
      "Containment et éradication",
      "Récupération et restauration",
      "Rapport post-incident et recommandations",
    ],
    benefits: "Minimisez l'impact d'une attaque, restaurez rapidement vos opérations et apprenez de l'incident pour renforcer vos défenses.",
  },
  {
    icon: GraduationCap,
    title: "Formation en cybersécurité",
    description: "Sensibilisation et formation de vos équipes aux bonnes pratiques de sécurité et à la détection des menaces.",
    features: [
      "Ateliers de sensibilisation phishing",
      "Formation technique pour équipes IT",
      "Simulations d'attaques réalistes",
      "Programmes personnalisés par rôle",
      "Support et documentation complète",
    ],
    benefits: "Transformez vos collaborateurs en première ligne de défense et créez une culture de sécurité au sein de votre entreprise.",
  },
  {
    icon: Eye,
    title: "Service SOC (Security Operations Center)",
    description: "Surveillance continue 24/7 de votre infrastructure pour détecter et répondre aux menaces en temps réel.",
    features: [
      "Monitoring continu des événements de sécurité",
      "Détection d'anomalies par IA",
      "Alertes en temps réel",
      "Analyse de logs et corrélation",
      "Rapports mensuels détaillés",
    ],
    benefits: "Bénéficiez d'une protection continue, détectez les menaces avant qu'elles ne causent des dommages et dormez sur vos deux oreilles.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Nos services
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Des solutions complètes de cybersécurité adaptées aux besoins de votre entreprise, de l'audit à la surveillance continue.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  <div className="bg-primary/5 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-foreground mb-2">Bénéfices :</h3>
                    <p className="text-muted-foreground">{service.benefits}</p>
                  </div>
                  <Button asChild>
                    <Link to="/contact">
                      Demander un devis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <Card className={`${index % 2 === 1 ? "md:order-1" : ""} animate-scale-in`}>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Ce que nous proposons :
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pourquoi choisir nos services ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Satisfaction client</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">Support disponible</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">48h</div>
                  <p className="text-sm text-muted-foreground">Délai de réponse moyen</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Prêt à protéger votre entreprise ?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins en cybersécurité et obtenir un devis personnalisé.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Demander un audit gratuit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
