import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import PropertyListingPage from './pages/PropertyListingPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LocationPage from './pages/LocationPage';
import PricingPage from './pages/PricingPage';
import BookVisitPage from './pages/BookVisitPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="logements" element={<PropertyListingPage />} />
        <Route path="logements/:id" element={<PropertyDetailPage />} />
        <Route path="a-propos" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="localisation" element={<LocationPage />} />
        <Route path="tarifs" element={<PricingPage />} />
        <Route path="reserver-visite" element={<BookVisitPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;