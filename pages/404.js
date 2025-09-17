import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-6xl font-bold text-gray-900 mb-4">404</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
          <p className="text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            <Home className="h-5 w-5" />
            <span>Go to Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}