import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Shield, BookOpen, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: BookOpen, title: "Bulletins & Notes", desc: "Consultez et gérez les résultats scolaires en temps réel" },
  { icon: Shield, title: "Sécurisé", desc: "Données protégées avec accès différencié par rôle" },
  { icon: BarChart3, title: "Analytiques", desc: "Tableaux de bord et statistiques pour le suivi scolaire" },
];

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (user) return <Navigate to="/dashboard" replace />;

  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto flex items-center justify-between py-5 px-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-7 h-7 text-primary" />
          <span className="font-display font-bold text-xl">Mon École</span>
        </div>
        <Button asChild variant="outline" size="sm">
          <a href="/auth">Connexion</a>
        </Button>
      </header>

      <main className="container mx-auto px-4 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold leading-tight">
            La gestion scolaire <span className="text-primary">simplifiée</span>
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-lg mx-auto">
            Digitalisez et centralisez la gestion de votre établissement scolaire en toute sécurité.
          </p>
          <div className="mt-8 flex gap-3 justify-center">
            <Button asChild size="lg">
              <a href="/auth">
                Commencer <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto"
        >
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-xl border bg-card text-left">
              <f.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
