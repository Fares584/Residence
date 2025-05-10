import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container">
        <motion.div 
          className="max-w-2xl p-8 mx-auto text-center bg-white rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-6 text-9xl font-bold text-primary-200">404</div>
          <h1 className="mb-4 text-3xl font-bold text-primary-800">Page non trouvée</h1>
          <p className="mb-8 text-lg text-gray-600">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
            >
              <Home size={18} className="mr-2" />
              Retour à l'accueil
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 font-medium text-primary-700 bg-primary-50 rounded-md hover:bg-primary-100"
            >
              <ArrowLeft size={18} className="mr-2" />
              Page précédente
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;