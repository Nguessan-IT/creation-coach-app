import { Card, CardContent } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

const Analytics = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-display font-bold">Analytiques</h1>
    <Card>
      <CardContent className="p-12 text-center text-muted-foreground">
        <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-30" />
        <p className="font-medium">Statistiques indisponibles</p>
        <p className="text-sm mt-1">Les données analytiques apparaîtront ici.</p>
      </CardContent>
    </Card>
  </div>
);
export default Analytics;
