import ProtectedRoute from '../../../../../components/ProtectedRoute';
import Navigation from '../../../../../components/Navigation';
import { useRouter } from 'next/router';
import { ArrowLeft, User, Mail, Phone, MapPin, Building, Calendar, Edit, Trash2 } from 'lucide-react';

export default function ClientProfile() {
  const router = useRouter();
  const { clientName } = router.query;

  // Mock client data - in a real app, this would be fetched from an API
  const clientData = {
    name: decodeURIComponent(clientName || ''),
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    company: 'Acme Corporation',
    address: '123 Main St, New York, NY 10001',
    joinDate: '2024-01-15',
    lastActive: '2024-01-20',
    status: 'active',
    projects: 3,
    notes: 'VIP client with premium support package. Prefers email communication.'
  };

  const handleBack = () => {
    router.push('/admin/iam/clients');
  };

  const handleEdit = () => {
    // In a real app, this would navigate to an edit form
    alert('Edit functionality would be implemented here');
  };

  const handleDelete = () => {
    // In a real app, this would show a confirmation modal
    if (confirm(`Are you sure you want to delete ${clientData.name}?`)) {
      alert('Delete functionality would be implemented here');
      router.push('/admin/iam/clients');
    }
  };

  if (!clientName) {
    return <div>Loading...</div>;
  }

  return (
    <ProtectedRoute requireAdmin={true}>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="mb-8">
              <button
                onClick={handleBack}
                className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Clients</span>
              </button>
              
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Client Profile</h1>
                  <p className="mt-2 text-gray-600">Detailed information for {clientData.name}</p>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={handleEdit}
                    className="inline-flex items-center space-x-2 px-4 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 font-medium"
                  >
                    <Edit className="h-4 w-4" />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={handleDelete}
                    className="inline-flex items-center space-x-2 px-4 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors duration-200 font-medium"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Profile Info */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{clientData.name}</h2>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          clientData.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {clientData.status}
                        </span>
                        <span className="text-sm text-gray-500">#{clientData.name.toLowerCase().replace(/\s+/g, '')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-500">Email</div>
                          <div className="font-medium text-gray-900">{clientData.email}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-500">Phone</div>
                          <div className="font-medium text-gray-900">{clientData.phone}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Building className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-500">Company</div>
                          <div className="font-medium text-gray-900">{clientData.company}</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-500">Address</div>
                          <div className="font-medium text-gray-900">{clientData.address}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-500">Join Date</div>
                          <div className="font-medium text-gray-900">{clientData.joinDate}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-500">Last Active</div>
                          <div className="font-medium text-gray-900">{clientData.lastActive}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {clientData.notes && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Notes</h3>
                      <p className="text-gray-600 leading-relaxed">{clientData.notes}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar Stats */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
                  
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{clientData.projects}</div>
                      <div className="text-sm text-blue-800">Active Projects</div>
                    </div>
                    
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">$12,450</div>
                      <div className="text-sm text-green-800">Total Revenue</div>
                    </div>
                    
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">98%</div>
                      <div className="text-sm text-purple-800">Satisfaction Score</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-600">Project updated</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-600">Payment received</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-600">Meeting scheduled</p>
                        <p className="text-xs text-gray-500">3 days ago</p>
                      </div>
                    </div>
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