import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";

const Devoirs = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-display font-bold">Devoirs</h1>
    <Card>
      <CardContent className="p-12 text-center text-muted-foreground">
        <ClipboardList className="w-12 h-12 mx-auto mb-4 opacity-30" />
        <p className="font-medium">Aucun devoir disponible</p>
        <p className="text-sm mt-1">Les devoirs apparaîtront ici une fois assignés.</p>
      </CardContent>
    </Card>
  </div>
);
export default Devoirs;
