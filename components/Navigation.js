import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import { LogOut, User, Shield } from 'lucide-react';

export default function Navigation() {
  const { user, logout, isAdmin } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (!user) return null;

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                {isAdmin ? (
                  <Shield className="h-6 w-6 text-blue-600" />
                ) : (
                  <User className="h-6 w-6 text-gray-600" />
                )}
                <span className="text-lg font-semibold text-gray-900">
                  {isAdmin ? 'Admin Panel' : 'Client Dashboard'}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              Welcome, <span className="font-medium">{user.name}</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}