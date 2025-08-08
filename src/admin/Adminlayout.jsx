import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  // Add a console log to confirm AdminLayout is rendering
  useEffect(() => {
    console.log('AdminLayout component mounted.');
  }, []);

  const handleLogout = () => {
    navigate('/admin'); // Redirect to login page
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Side Panel */}
      <div className="w-64 bg-gray-300 text-gray-600 flex flex-col justify-between p-6 shadow-lg rounded-r-lg border-2 border-gray-200">
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center text-indigo-500">SDC Admin Panel</h2>
          <nav>
            <ul>
              <li className="mb-4">
                <a
                  href="/admin/dashboard"
                  className="block py-2 px-4 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out"
                >
                  Dashboard
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/admin/add-classes"
                  className="block py-2 px-4 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out"
                >
                  Manage Classes
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/admin/add-news"
                  className="block py-2 px-4 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out"
                >
                  Manage News
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/admin/add-products"
                  className="block py-2 px-4 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out"
                >
                  Manage Products
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/admin/add-merch"
                  className="block py-2 px-4 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out"
                >
                  Manage Merch
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Logout Button */}
        <div className="mt-8">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out font-semibold"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-auto">
        {children} {/* This is where the specific page content will be rendered */}
      </div>
    </div>
  );
};