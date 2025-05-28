import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md text-center">
        <h1 className="text-7xl font-extrabold text-blue-700 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
