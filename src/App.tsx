import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { Toaster } from "@/components/ui/sonner";
import AppLayout from "@/components/layout/AppLayout";
import Index from "@/pages/Index";
import Auth from "@/pages/Auth";
import Dashboard from "@/pages/Dashboard";
import Bulletins from "@/pages/Bulletins";
import Notes from "@/pages/Notes";
import EmploiDuTemps from "@/pages/EmploiDuTemps";
import Devoirs from "@/pages/Devoirs";
import Paiements from "@/pages/Paiements";
import Annonces from "@/pages/Annonces";
import Permissions from "@/pages/Permissions";
import Analytics from "@/pages/Analytics";
import NotFound from "@/pages/NotFound";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
    </div>
  );
  if (!user) return <Navigate to="/auth" replace />;
  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth" element={<Auth />} />
        <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bulletins" element={<Bulletins />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/emploi-du-temps" element={<EmploiDuTemps />} />
          <Route path="/devoirs" element={<Devoirs />} />
          <Route path="/paiements" element={<Paiements />} />
          <Route path="/annonces" element={<Annonces />} />
          <Route path="/permissions" element={<Permissions />} />
          <Route path="/analytics" element={<Analytics />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
