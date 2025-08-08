import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import Manoloka from './pages/Manoloka';
import NewsPage from './pages/NewsPage';
import ScrollToTop from './components/ScrollToTop';
// Import the admin components
import { AdminLayout } from './admin/Adminlayout';
import { LoginPage } from './admin/LoginPage';
import { AdminDashboardPage } from './admin/AdminDashboardPage';
import { AddClassesPage } from './admin/AddClassesPage';
import { AddNewspage } from './admin/AddNewspage';
import { AddProductPages } from './admin/AddProductPages';
import { AddMerchpage } from './admin/AddMerch';
import ArtistsPage from './pages/Artists';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage setActivePage={setActivePage} />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/manoloka" element={<Manoloka />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/artists" element={<ArtistsPage />} />
          
          <Route path="/admin" element={<LoginPage />} /> 
          <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboardPage /></AdminLayout>} />
          <Route path="/admin/add-classes" element={<AdminLayout><AddClassesPage /></AdminLayout>} />
          <Route path="/admin/add-news" element={<AdminLayout><AddNewspage /></AdminLayout>} />
          <Route path="/admin/add-products" element={<AdminLayout><AddProductPages /></AdminLayout>} />
          <Route path="/admin/add-merch" element={<AdminLayout><AddMerchpage /></AdminLayout>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;