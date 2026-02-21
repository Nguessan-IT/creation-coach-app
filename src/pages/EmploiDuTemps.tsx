import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const EmploiDuTemps = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-display font-bold">Emploi du temps</h1>
    <Card>
      <CardContent className="p-12 text-center text-muted-foreground">
        <Calendar className="w-12 h-12 mx-auto mb-4 opacity-30" />
        <p className="font-medium">Aucun emploi du temps disponible</p>
        <p className="text-sm mt-1">L'emploi du temps apparaîtra ici une fois publié.</p>
      </CardContent>
    </Card>
  </div>
);
export default EmploiDuTemps;
