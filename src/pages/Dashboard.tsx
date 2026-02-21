import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users, FileText, Calendar, CreditCard, Bell, ClipboardList, TrendingUp, GraduationCap } from "lucide-react";

const statCards = [
  { title: "Élèves", value: "—", icon: Users, color: "text-primary" },
  { title: "Enseignants", value: "—", icon: GraduationCap, color: "text-accent" },
  { title: "Bulletins", value: "—", icon: FileText, color: "text-success" },
  { title: "Paiements", value: "—", icon: CreditCard, color: "text-warning" },
];

const quickLinks = [
  { title: "Bulletins scolaires", desc: "Consulter et gérer", icon: FileText, href: "/bulletins" },
  { title: "Emploi du temps", desc: "Planning hebdomadaire", icon: Calendar, href: "/emploi-du-temps" },
  { title: "Devoirs", desc: "Soumettre et corriger", icon: ClipboardList, href: "/devoirs" },
  { title: "Annonces", desc: "Communications école", icon: Bell, href: "/annonces" },
  { title: "Paiements", desc: "Reçus et scolarité", icon: CreditCard, href: "/paiements" },
  { title: "Analytiques", desc: "Statistiques école", icon: TrendingUp, href: "/analytics" },
];

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-display font-bold">
          Bonjour, {user?.user_metadata?.full_name || "Utilisateur"} 👋
        </h1>
        <p className="text-muted-foreground mt-1">Voici un aperçu de votre espace scolaire</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{stat.title}</p>
                  <p className="text-xl font-bold">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick links */}
      <div>
        <h2 className="text-lg font-display font-semibold mb-3">Accès rapide</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {quickLinks.map((link, i) => (
            <motion.a
              key={link.title}
              href={link.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="group"
            >
              <Card className="h-full hover:border-primary/30 hover:shadow-md transition-all cursor-pointer">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <link.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{link.title}</p>
                    <p className="text-xs text-muted-foreground">{link.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
