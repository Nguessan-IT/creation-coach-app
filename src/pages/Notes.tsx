import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const Notes = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-display font-bold">Notes & Moyennes</h1>
    <Card>
      <CardContent className="p-12 text-center text-muted-foreground">
        <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
        <p className="font-medium">Aucune note disponible</p>
        <p className="text-sm mt-1">Les notes apparaîtront ici une fois saisies.</p>
      </CardContent>
    </Card>
  </div>
);
export default Notes;
