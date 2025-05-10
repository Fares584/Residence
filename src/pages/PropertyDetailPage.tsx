import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPropertyById } from '../data/properties';
import { Property } from '../lib/types';
import PropertyGallery from '../components/ui/PropertyGallery';
import { formatCurrency, formatArea } from '../lib/utils';
import { 
  Home, 
  Maximize, 
  BedDouble, 
  Bath, 
  MapPin, 
  Compass, 
  ArrowRight, 
  Sun, 
  Wind, 
  Car, 
  Trees,
  ArrowLeft
} from 'lucide-react';
import { motion } from 'framer-motion';

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      if (id) {
        const propertyData = getPropertyById(parseInt(id));
        setProperty(propertyData);
      }
      setIsLoading(false);
    }, 500);
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen pt-24">
        <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (!property) {
    return (
      <div className="container pt-24 pb-16">
        <div className="py-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Logement non trouvé</h2>
          <p className="mb-8 text-gray-600">Le logement que vous recherchez n'existe pas ou a été supprimé.</p>
          <Link 
            to="/logements" 
            className="inline-flex items-center px-6 py-3 font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
          >
            <ArrowLeft size={18} className="mr-2" />
            Retour aux logements
          </Link>
        </div>
      </div>
    );
  }
  
  // Status indicator text based on property status
  const getStatusText = () => {
    switch (property.status) {
      case 'for_sale':
        return 'À vendre';
      case 'for_rent':
        return 'À louer';
      case 'for_rent_or_sale':
        return 'À vendre ou à louer';
      default:
        return 'Disponible';
    }
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Back link */}
        <div className="mb-6">
          <Link 
            to="/logements" 
            className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            <ArrowLeft size={16} className="mr-1" />
            Retour aux logements
          </Link>
        </div>
        
        {/* Property Header */}
        <div className="mb-8">
          <div className="flex flex-col justify-between md:flex-row md:items-center">
            <div>
              <h1 className="mb-2 text-3xl font-bold md:text-4xl font-display text-primary-800">{property.title}</h1>
              <p className="flex items-center text-gray-600">
                <MapPin size={16} className="mr-1 text-primary-600" />
                {property.address}
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              {property.status === 'for_sale' || property.status === 'for_rent_or_sale' ? (
                <p className="mb-1 text-2xl font-bold text-primary-800">{formatCurrency(property.price)}</p>
              ) : null}
              {(property.status === 'for_rent' || property.status === 'for_rent_or_sale') && property.rentPrice ? (
                <p className="text-xl text-gray-600">
                  {property.status === 'for_rent_or_sale' ? 'Ou ' : ''}
                  {formatCurrency(property.rentPrice)}/mois
                </p>
              ) : null}
              <span className="inline-block px-3 py-1 mt-2 text-sm font-medium text-white bg-primary-600 rounded-full">
                {getStatusText()}
              </span>
            </div>
          </div>
        </div>
        
        {/* Image Gallery */}
        <PropertyGallery images={property.images} title={property.title} />
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Details */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <motion.section 
              className="p-6 mb-8 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="mb-4 text-2xl font-bold text-primary-800">Aperçu</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="flex flex-col items-center p-3 text-center bg-gray-50 rounded-lg">
                  <Maximize size={24} className="mb-2 text-primary-600" />
                  <span className="text-sm text-gray-500">Surface</span>
                  <span className="font-medium">{formatArea(property.area)}</span>
                </div>
                <div className="flex flex-col items-center p-3 text-center bg-gray-50 rounded-lg">
                  <Home size={24} className="mb-2 text-primary-600" />
                  <span className="text-sm text-gray-500">Pièces</span>
                  <span className="font-medium">{property.rooms}</span>
                </div>
                <div className="flex flex-col items-center p-3 text-center bg-gray-50 rounded-lg">
                  <BedDouble size={24} className="mb-2 text-primary-600" />
                  <span className="text-sm text-gray-500">Chambres</span>
                  <span className="font-medium">{property.bedrooms}</span>
                </div>
                <div className="flex flex-col items-center p-3 text-center bg-gray-50 rounded-lg">
                  <Bath size={24} className="mb-2 text-primary-600" />
                  <span className="text-sm text-gray-500">Salles de bain</span>
                  <span className="font-medium">{property.bathrooms}</span>
                </div>
              </div>
              
              {/* Additional details */}
              <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">
                {property.floor !== undefined && (
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 mr-3 text-white bg-primary-600 rounded-full">
                      <span className="text-xs font-bold">{property.floor}</span>
                    </div>
                    <span className="text-gray-700">
                      {property.floor === 0 ? 'Rez-de-chaussée' : `${property.floor}e étage`}
                    </span>
                  </div>
                )}
                {property.orientation && (
                  <div className="flex items-center">
                    <Compass size={20} className="mr-3 text-primary-600" />
                    <span className="text-gray-700">Orientation {property.orientation}</span>
                  </div>
                )}
                {property.hasBalcony && (
                  <div className="flex items-center">
                    <Sun size={20} className="mr-3 text-primary-600" />
                    <span className="text-gray-700">Balcon</span>
                  </div>
                )}
                {property.hasAC && (
                  <div className="flex items-center">
                    <Wind size={20} className="mr-3 text-primary-600" />
                    <span className="text-gray-700">Climatisation</span>
                  </div>
                )}
                {property.hasParking && (
                  <div className="flex items-center">
                    <Car size={20} className="mr-3 text-primary-600" />
                    <span className="text-gray-700">Parking</span>
                  </div>
                )}
                {property.hasGarden && (
                  <div className="flex items-center">
                    <Trees size={20} className="mr-3 text-primary-600" />
                    <span className="text-gray-700">Jardin</span>
                  </div>
                )}
              </div>
            </motion.section>
            
            {/* Description */}
            <motion.section 
              className="p-6 mb-8 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h2 className="mb-4 text-2xl font-bold text-primary-800">Description</h2>
              <p className="text-gray-700 whitespace-pre-line">{property.description}</p>
            </motion.section>
            
            {/* Features */}
            <motion.section 
              className="p-6 mb-8 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h2 className="mb-4 text-2xl font-bold text-primary-800">Caractéristiques et équipements</h2>
              <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex items-center justify-center w-6 h-6 mr-3 text-white bg-primary-600 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
            
            {/* Map Location */}
            <motion.section 
              className="p-6 mb-8 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <h2 className="mb-4 text-2xl font-bold text-primary-800">Localisation</h2>
              <div className="h-80 bg-gray-200 rounded-lg">
                {/* Map would be inserted here */}
                <div className="flex items-center justify-center h-full text-gray-500">
                  <p>Carte interactive indisponible en mode démonstration.</p>
                </div>
              </div>
              <div className="mt-4">
                <Link 
                  to="/localisation" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700"
                >
                  Voir les points d'intérêt à proximité
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.section>
          </div>
          
          {/* Right Column - CTA and Related Info */}
          <div>
            {/* Contact Card */}
            <motion.div 
              className="sticky p-6 mb-8 bg-white rounded-lg shadow-md top-24"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="mb-4 text-xl font-bold text-primary-800">Intéressé par ce logement ?</h2>
              <Link 
                to={`/reserver-visite?property=${property.id}`} 
                className="block w-full py-3 mb-3 font-medium text-center text-white bg-primary-600 rounded-md hover:bg-primary-700"
              >
                Réserver une visite
              </Link>
              <Link 
                to="/contact" 
                className="block w-full py-3 mb-6 font-medium text-center text-primary-700 bg-primary-50 rounded-md hover:bg-primary-100"
              >
                Demander plus d'informations
              </Link>
              
              <div className="p-4 mt-6 text-center bg-beige-50 rounded-md">
                <p className="mb-2 text-sm text-gray-600">Besoin d'aide ?</p>
                <p className="font-medium text-primary-800">+33 1 23 45 67 89</p>
                <p className="text-sm text-gray-600">
                  Lun-Ven: 9h-18h | Sam: 10h-15h
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;