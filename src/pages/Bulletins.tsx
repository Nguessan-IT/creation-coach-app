import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Bulletins = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-display font-bold">Bulletins scolaires</h1>
    <Card>
      <CardContent className="p-12 text-center text-muted-foreground">
        <FileText className="w-12 h-12 mx-auto mb-4 opacity-30" />
        <p className="font-medium">Aucun bulletin disponible</p>
        <p className="text-sm mt-1">Les bulletins apparaîtront ici une fois générés.</p>
      </CardContent>
    </Card>
  </div>
);
export default Bulletins;
