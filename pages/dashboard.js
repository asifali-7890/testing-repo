import ProtectedRoute from '../components/ProtectedRoute';
import Navigation from '../components/Navigation';
import { BarChart3, FileText, Settings, Bell } from 'lucide-react';

export default function ClientDashboard() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Client Dashboard</h1>
              <p className="mt-2 text-gray-600">Welcome to your personalized dashboard</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <BarChart3 className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Analytics</h3>
                    <p className="text-sm text-gray-600">View your data insights</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold text-blue-600">24</div>
                  <div className="text-xs text-gray-500">Active reports</div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <FileText className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Documents</h3>
                    <p className="text-sm text-gray-600">Manage your files</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold text-green-600">156</div>
                  <div className="text-xs text-gray-500">Total documents</div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Bell className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                    <p className="text-sm text-gray-600">Stay updated</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold text-yellow-600">3</div>
                  <div className="text-xs text-gray-500">New messages</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">Document updated: Project Report.pdf</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">Analytics report generated</p>
                    <p className="text-xs text-gray-500">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">New notification received</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}