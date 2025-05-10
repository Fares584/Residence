import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/ui/PropertyCard';
import PropertyFilters, { PropertyFilters as FilterType } from '../components/ui/PropertyFilters';
import { properties } from '../data/properties';
import { Property } from '../lib/types';
import { motion } from 'framer-motion';

const PropertyListingPage: React.FC = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleFilterChange = (filters: FilterType) => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let results = [...properties];
      
      // Filter by type
      if (filters.type.length > 0) {
        results = results.filter(property => filters.type.includes(property.type));
      }
      
      // Filter by status
      if (filters.status.length > 0) {
        results = results.filter(property => filters.status.includes(property.status));
      }
      
      // Filter by price
      if (filters.minPrice) {
        results = results.filter(property => property.price >= filters.minPrice!);
      }
      if (filters.maxPrice) {
        results = results.filter(property => property.price <= filters.maxPrice!);
      }
      
      // Filter by bedrooms
      if (filters.minBedrooms) {
        results = results.filter(property => property.bedrooms >= filters.minBedrooms!);
      }
      
      // Filter by area
      if (filters.minArea) {
        results = results.filter(property => property.area >= filters.minArea!);
      }
      
      // Filter by features
      if (filters.features.length > 0) {
        results = results.filter(property => {
          return filters.features.every(feature => {
            switch (feature) {
              case 'hasBalcony':
                return property.hasBalcony;
              case 'hasGarden':
                return property.hasGarden;
              case 'hasParking':
                return property.hasParking;
              case 'hasAC':
                return property.hasAC;
              default:
                return true;
            }
          });
        });
      }
      
      setFilteredProperties(results);
      setIsLoading(false);
    }, 500);
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <PropertyFilters onFilterChange={handleFilterChange} />
        
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
          </div>
        ) : filteredProperties.length === 0 ? (
          <div className="py-12 text-center">
            <h3 className="mb-2 text-xl font-bold text-gray-800">Aucun logement ne correspond à vos critères</h3>
            <p className="text-gray-600">Veuillez modifier vos filtres pour voir plus de résultats</p>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PropertyListingPage;