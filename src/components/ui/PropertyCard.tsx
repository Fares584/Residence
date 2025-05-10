import React from 'react';
import { Link } from 'react-router-dom';
import { Property } from '../../lib/types';
import { formatCurrency, formatArea } from '../../lib/utils';
import { Home, Maximize, BedDouble, Bath, Euro } from 'lucide-react';
import { motion } from 'framer-motion';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { id, title, type, status, price, rentPrice, area, rooms, bedrooms, bathrooms, images } = property;
  
  // Status indicator color and text
  const getStatusConfig = () => {
    switch (status) {
      case 'for_sale':
        return { color: 'bg-primary-600', text: 'À vendre' };
      case 'for_rent':
        return { color: 'bg-beige-500', text: 'À louer' };
      case 'for_rent_or_sale':
        return { color: 'bg-success-500', text: 'Vente ou location' };
      default:
        return { color: 'bg-gray-500', text: 'Disponible' };
    }
  };
  
  const statusConfig = getStatusConfig();
  
  return (
    <motion.div 
      className="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Link to={`/logements/${id}`} className="block">
        <div className="relative h-56 overflow-hidden">
          <img
            src={images[0]}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
          />
          <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium text-white rounded-full ${statusConfig.color}`}>
            {statusConfig.text}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-lg font-medium text-white">{title}</h3>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-medium text-primary-600 uppercase">
                {type === 'apartment' ? 'Appartement' : type === 'studio' ? 'Studio' : 'Maison'}
              </p>
            </div>
            <div className="text-right">
              {status === 'for_sale' || status === 'for_rent_or_sale' ? (
                <p className="text-lg font-bold text-primary-800">{formatCurrency(price)}</p>
              ) : null}
              {(status === 'for_rent' || status === 'for_rent_or_sale') && rentPrice ? (
                <p className="text-sm text-gray-600">
                  {status === 'for_rent_or_sale' ? 'Ou ' : ''}
                  {formatCurrency(rentPrice)}/mois
                </p>
              ) : null}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Maximize size={16} className="mr-2 text-primary-500" />
              <span>{formatArea(area)}</span>
            </div>
            <div className="flex items-center">
              <Home size={16} className="mr-2 text-primary-500" />
              <span>{rooms} pièce{rooms > 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center">
              <BedDouble size={16} className="mr-2 text-primary-500" />
              <span>{bedrooms} chambre{bedrooms > 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center">
              <Bath size={16} className="mr-2 text-primary-500" />
              <span>{bathrooms} SDB</span>
            </div>
          </div>
          
          <div className="pt-4 mt-4 border-t border-gray-200">
            <button className="w-full px-4 py-2 text-sm font-medium text-white transition-colors bg-primary-600 rounded-md hover:bg-primary-700">
              Voir les détails
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;