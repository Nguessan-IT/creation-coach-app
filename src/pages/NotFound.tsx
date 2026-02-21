import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center space-y-4">
      <GraduationCap className="w-16 h-16 mx-auto text-muted-foreground/30" />
      <h1 className="text-4xl font-display font-bold">404</h1>
      <p className="text-muted-foreground">Page introuvable</p>
      <Button asChild><Link to="/dashboard">Retour au tableau de bord</Link></Button>
    </div>
  </div>
);
export default NotFound;
