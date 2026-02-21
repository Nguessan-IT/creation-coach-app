import { Card, CardContent } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

const Paiements = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-display font-bold">Paiements & Reçus</h1>
    <Card>
      <CardContent className="p-12 text-center text-muted-foreground">
        <CreditCard className="w-12 h-12 mx-auto mb-4 opacity-30" />
        <p className="font-medium">Aucun paiement disponible</p>
        <p className="text-sm mt-1">Les reçus et paiements apparaîtront ici.</p>
      </CardContent>
    </Card>
  </div>
);
export default Paiements;
