import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BookVisitForm from '../components/forms/BookVisitForm';
import { getPropertyById } from '../data/properties';
import { Property } from '../lib/types';
import { motion } from 'framer-motion';

const BookVisitPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const propertyId = searchParams.get('property');
  const [property, setProperty] = useState<Property | undefined>(undefined);
  
  useEffect(() => {
    // If a property ID is provided in the URL, fetch that property
    if (propertyId) {
      const propertyData = getPropertyById(parseInt(propertyId));
      setProperty(propertyData);
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [propertyId]);
  
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl font-display text-primary-800">
              Réserver une visite
            </h1>
            <p className="text-lg text-gray-600">
              {property 
                ? `Vous êtes intéressé par "${property.title}". Remplissez le formulaire ci-dessous pour réserver une visite.` 
                : 'Veuillez remplir le formulaire ci-dessous pour réserver une visite d\'un de nos logements.'}
            </p>
          </div>
          
          <BookVisitForm preselectedPropertyId={propertyId ? parseInt(propertyId) : undefined} />
        </motion.div>
      </div>
    </div>
  );
};

export default BookVisitPage;