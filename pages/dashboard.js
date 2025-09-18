
import { useRouter } from "next/navigation";
import ProtectedRoute from '../components/ProtectedRoute';
import Navigation from '../components/Navigation';
import { BarChart3, FileText, Settings, Bell } from 'lucide-react';

function Breadcrumb() {
  const router = useRouter();
  return (
    <nav className="text-gray-500 mb-4 flex gap-1 text-sm">
      <span className="hover:underline cursor-pointer" onClick={() => router.push("/dashboard")}>Dashboard</span>
      <span>/</span>
      <span className="text-gray-400">Client</span>
    </nav>
  );
}

export default function ClientDashboard() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Breadcrumb />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Client Dashboard</h1>
              <p className="mt-2 text-gray-600">Welcome to your personalized dashboard</p>
            </div>
            {/* ...existing code... */}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}