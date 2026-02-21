import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const Permissions = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-display font-bold">Demandes de permission</h1>
    <Card>
      <CardContent className="p-12 text-center text-muted-foreground">
        <Users className="w-12 h-12 mx-auto mb-4 opacity-30" />
        <p className="font-medium">Aucune demande de permission</p>
        <p className="text-sm mt-1">Les demandes de permission apparaîtront ici.</p>
      </CardContent>
    </Card>
  </div>
);
export default Permissions;
