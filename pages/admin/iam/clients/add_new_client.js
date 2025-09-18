import { useState } from 'react';
import Navigation from '../../../../components/Navigation';
import { useRouter } from 'next/router';
import { ArrowLeft, User, Mail, Phone, MapPin, Building } from 'lucide-react';

export default function AddNewClient() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would save to a database
    console.log('New client data:', formData);

    // Redirect to client profile page
    router.push(`/admin/iam/clients/profile/${encodeURIComponent(formData.name)}`);
  };

  const handleCancel = () => {
    router.push('/admin/iam/clients');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <button
              onClick={handleCancel}
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Clients</span>
            </button>

            <h1 className="text-3xl font-bold text-gray-900">Add New Client</h1>
            <p className="mt-2 text-gray-600">Create a new client account</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                    <User className="h-4 w-4" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="Enter client's full name"
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                    <Mail className="h-4 w-4" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="client@example.com"
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                    <Phone className="h-4 w-4" />
                    <span>Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                    <Building className="h-4 w-4" />
                    <span>Company</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Street address, city, state"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes
                </label>
                <textarea
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Additional notes about the client..."
                />
              </div>

              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium shadow-sm"
                >
                  Add Client
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}