import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { Filter, X } from 'lucide-react';

interface PropertyFiltersProps {
  onFilterChange: (filters: PropertyFilters) => void;
}

export interface PropertyFilters {
  type: string[];
  status: string[];
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  minArea?: number;
  features: string[];
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<PropertyFilters>({
    type: [],
    status: [],
    features: []
  });
  
  const toggleFilter = () => setIsOpen(!isOpen);
  
  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const updatedTypes = checked 
      ? [...filters.type, value]
      : filters.type.filter(type => type !== value);
      
    const updatedFilters = { ...filters, type: updatedTypes };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };
  
  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const updatedStatus = checked 
      ? [...filters.status, value]
      : filters.status.filter(status => status !== value);
      
    const updatedFilters = { ...filters, status: updatedStatus };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };
  
  const handleFeatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const updatedFeatures = checked 
      ? [...filters.features, value]
      : filters.features.filter(feature => feature !== value);
      
    const updatedFilters = { ...filters, features: updatedFeatures };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };
  
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numberValue = value ? parseInt(value) : undefined;
    
    const updatedFilters = { ...filters, [name]: numberValue };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };
  
  const resetFilters = () => {
    const resetFilters = {
      type: [],
      status: [],
      minPrice: undefined,
      maxPrice: undefined,
      minBedrooms: undefined,
      minArea: undefined,
      features: []
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };
  
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Nos Logements</h2>
        <button
          className="flex items-center px-3 py-2 text-sm font-medium text-primary-700 bg-primary-50 rounded-md hover:bg-primary-100"
          onClick={toggleFilter}
        >
          <Filter size={16} className="mr-2" />
          Filtrer
        </button>
      </div>
      
      {isOpen && (
        <div className="p-4 mb-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Filtres</h3>
            <button 
              className="flex items-center text-sm text-gray-500 hover:text-primary-600"
              onClick={resetFilters}
            >
              <X size={16} className="mr-1" />
              Réinitialiser
            </button>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Type de bien */}
            <div>
              <h4 className="mb-2 text-sm font-medium">Type de bien</h4>
              <div className="space-y-1">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="apartment"
                    checked={filters.type.includes('apartment')}
                    onChange={handleTypeChange}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Appartement</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="studio"
                    checked={filters.type.includes('studio')}
                    onChange={handleTypeChange}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Studio</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="house"
                    checked={filters.type.includes('house')}
                    onChange={handleTypeChange}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Maison</span>
                </label>
              </div>
            </div>
            
            {/* Statut */}
            <div>
              <h4 className="mb-2 text-sm font-medium">Statut</h4>
              <div className="space-y-1">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="for_sale"
                    checked={filters.status.includes('for_sale')}
                    onChange={handleStatusChange}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">À vendre</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="for_rent"
                    checked={filters.status.includes('for_rent')}
                    onChange={handleStatusChange}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">À louer</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="for_rent_or_sale"
                    checked={filters.status.includes('for_rent_or_sale')}
                    onChange={handleStatusChange}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Vente ou location</span>
                </label>
              </div>
            </div>
            
            {/* Prix */}
            <div>
              <h4 className="mb-2 text-sm font-medium">Prix</h4>
              <div className="space-y-2">
                <div>
                  <label className="block text-xs text-gray-500">Prix minimum (€)</label>
                  <input
                    type="number"
                    name="minPrice"
                    value={filters.minPrice || ''}
                    onChange={handleRangeChange}
                    placeholder="Min"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500">Prix maximum (€)</label>
                  <input
                    type="number"
                    name="maxPrice"
                    value={filters.maxPrice || ''}
                    onChange={handleRangeChange}
                    placeholder="Max"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
            </div>
            
            {/* Caractéristiques */}
            <div>
              <h4 className="mb-2 text-sm font-medium">Caractéristiques</h4>
              <div className="space-y-1">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="hasBalcony"
                    checked={filters.features.includes('hasBalcony')}
                    onChange={handleFeatureChange}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Balcon</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="hasGarden"
                    checked={filters.features.includes('hasGarden')}
                    onChange={handleFeatureChange}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Jardin</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="hasParking"
                    checked={filters.features.includes('hasParking')}
                    onChange={handleFeatureChange}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Parking</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="hasAC"
                    checked={filters.features.includes('hasAC')}
                    onChange={handleFeatureChange}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Climatisation</span>
                </label>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="block text-xs text-gray-500">Chambres minimum</label>
              <input
                type="number"
                name="minBedrooms"
                value={filters.minBedrooms || ''}
                onChange={handleRangeChange}
                min="0"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500">Surface minimum (m²)</label>
              <input
                type="number"
                name="minArea"
                value={filters.minArea || ''}
                onChange={handleRangeChange}
                min="0"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyFilters;

export { PropertyFilters }