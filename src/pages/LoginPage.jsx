// src/components/LoginPage.jsx
import React, { useState } from 'react';
import { loginbg } from '../utils/config';

// A standalone login component to be shown as a modal
const LoginPage = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Logging in...' : 'Signing up...', formData);
    // Add your login/signup logic here

    // Redirect to the /lessons page after a successful login
    window.location.href = '/coming-soon';
  };

  const formTitle = isLogin ? 'Login' : 'Sign Up';
  const submitButtonText = isLogin ? 'Login' : 'Sign Up';
  const switchText = isLogin ? "Don't have an account?" : "Already have an account?";
  const switchActionText = isLogin ? "Sign Up" : "Login";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
      <div 
        className="rounded-xl p-8 max-w-md w-full relative shadow-2xl transform transition-transform duration-300 scale-95 md:scale-100"
        style={{
          backgroundImage: `url(${loginbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          border: '2px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition duration-200"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Logo at the top */}
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-4xl font-extrabold text-center text-white">STUDIO DANCE CORE</h2>
        </div>
        <h2 className="text-3xl font-bold mb-2 text-center text-white">{formTitle}</h2>
        <p className="text-gray-300 mb-6 text-center text-sm">
          Welcome back! Please {formTitle.toLowerCase()} to continue.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              className="w-full p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-800 text-white placeholder-gray-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-800 text-white placeholder-gray-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition duration-200 shadow-md"
          >
            {submitButtonText}
          </button>
        </form>
        <div className="mt-4 text-center text-gray-300 text-sm">
          {switchText}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-1 text-white font-semibold hover:text-gray-300 transition duration-200"
          >
            {switchActionText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
