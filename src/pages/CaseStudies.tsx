import { Building2, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const caseStudies = [
  {
    title: "Sécurisation d'une fintech en pleine croissance",
    client: "FinanceFlow",
    sector: "Finance",
    challenge: "Une startup fintech en hypercroissance devait se conformer aux exigences PCI-DSS tout en maintenant son agilité de développement. Les délais de mise en conformité étaient serrés et l'équipe manquait d'expertise en sécurité.",
    solution: "Nous avons mis en place un programme complet incluant audit de sécurité, refonte de l'architecture cloud, implémentation de contrôles de sécurité automatisés et formation des équipes de développement aux pratiques DevSecOps.",
    results: [
      "Conformité PCI-DSS atteinte en 3 mois",
      "Réduction de 85% des vulnérabilités critiques",
      "Aucun incident de sécurité depuis 18 mois",
      "Adoption réussie des pratiques DevSecOps",
    ],
    testimonial: "AlphaSec nous a permis d'atteindre la conformité sans ralentir notre croissance. Leur approche agile et leur compréhension des enjeux startup ont fait toute la différence.",
    author: "Pierre Dubois, CTO FinanceFlow",
  },
  {
    title: "Réponse à incident et remédiation suite à ransomware",
    client: "LogiCorp",
    sector: "Logistique",
    challenge: "Une PME du secteur logistique a été victime d'une attaque ransomware qui a paralysé ses opérations pendant 48 heures. L'entreprise avait besoin d'une intervention urgente, d'une analyse forensique et d'un plan de remédiation complet.",
    solution: "Intervention en moins de 2 heures, containment de l'attaque, analyse forensique complète, récupération des données critiques via les backups, refonte complète de l'infrastructure de sécurité et mise en place d'un plan de reprise d'activité robuste.",
    results: [
      "Opérations restaurées en 24 heures",
      "Aucune perte de données critiques",
      "Identification du vecteur d'attaque initial",
      "Mise en place d'un SOC 24/7",
    ],
    testimonial: "Face à la crise, AlphaSec a été d'une efficacité remarquable. Leur réactivité et leur expertise nous ont permis de reprendre rapidement nos activités et de renforcer considérablement notre sécurité.",
    author: "Marie Lefebvre, Directrice IT LogiCorp",
  },
  {
    title: "Tests d'intrusion pour une plateforme e-commerce",
    client: "ShopTech",
    sector: "E-commerce",
    challenge: "Une plateforme e-commerce en croissance rapide devait s'assurer de la sécurité de son infrastructure avant un Black Friday critique. L'entreprise voulait identifier toutes les vulnérabilités exploitables et les corriger rapidement.",
    solution: "Pentesting complet de l'application web, de l'API et de l'infrastructure cloud. Tests d'intrusion en boîte noire et grise, simulation d'attaques réalistes, rapport détaillé avec classification des risques et recommandations priorisées. Retests gratuits après correction.",
    results: [
      "23 vulnérabilités identifiées dont 5 critiques",
      "Toutes les failles critiques corrigées en 1 semaine",
      "Black Friday sans incident de sécurité",
      "Amélioration de 40% du score de sécurité global",
    ],
    testimonial: "Le rapport d'AlphaSec était extrêmement détaillé et actionnable. Nous avons pu corriger rapidement les problèmes critiques et aborder notre Black Friday en toute confiance.",
    author: "Thomas Bernard, CEO ShopTech",
  },
  {
    title: "Programme de sensibilisation pour réduire le risque humain",
    client: "ConsultPro",
    sector: "Conseil",
    challenge: "Un cabinet de conseil avec 200 employés subissait régulièrement des tentatives de phishing réussies. La direction voulait transformer ses collaborateurs en première ligne de défense contre les cyberattaques.",
    solution: "Déploiement d'un programme de formation complet sur 6 mois incluant ateliers interactifs, simulations de phishing réalistes, création de contenu pédagogique adapté et mise en place d'une culture de sécurité. Tableaux de bord pour suivre les progrès.",
    results: [
      "Réduction de 92% des clics sur emails de phishing",
      "100% des employés formés et certifiés",
      "Augmentation de 300% des signalements d'emails suspects",
      "Création d'une communauté d'ambassadeurs sécurité",
    ],
    testimonial: "La formation AlphaSec a complètement changé notre approche de la sécurité. Nos équipes sont devenues proactives et vigilantes. C'est un investissement qui vaut chaque euro dépensé.",
    author: "Sophie Moreau, DRH ConsultPro",
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Études de cas
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Découvrez comment nous avons aidé nos clients à résoudre des défis complexes en cybersécurité et à renforcer leur posture de sécurité.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center space-x-2 text-primary mb-4">
                    <Building2 className="h-5 w-5" />
                    <span className="text-sm font-medium">{study.sector}</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-foreground mb-6">{study.title}</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                        <span className="h-8 w-8 rounded-full bg-destructive/10 flex items-center justify-center mr-2">
                          <span className="text-destructive text-sm">!</span>
                        </span>
                        Le défi
                      </h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                        <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                        </span>
                        Notre approche
                      </h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      Résultats obtenus
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-foreground mb-2">
                    "{study.testimonial}"
                  </blockquote>
                  <p className="text-sm text-muted-foreground pl-6">— {study.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Notre impact en chiffres
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center animate-scale-in">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Projets réussis</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Taux de satisfaction</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Vulnérabilités identifiées</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">24h</div>
                <p className="text-muted-foreground">Temps de réponse moyen</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Votre projet sera notre prochaine réussite
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discutons de vos défis en cybersécurité et découvrez comment nous pouvons vous aider.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Planifier une consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
