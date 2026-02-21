import { Card, CardContent } from "@/components/ui/card";
import { Bell } from "lucide-react";

const Annonces = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-display font-bold">Annonces</h1>
    <Card>
      <CardContent className="p-12 text-center text-muted-foreground">
        <Bell className="w-12 h-12 mx-auto mb-4 opacity-30" />
        <p className="font-medium">Aucune annonce</p>
        <p className="text-sm mt-1">Les annonces de l'école apparaîtront ici.</p>
      </CardContent>
    </Card>
  </div>
);
export default Annonces;
