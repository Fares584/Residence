import React from 'react';
import { pointsOfInterest, getClosestPointsOfInterest } from '../data/pointsOfInterest';
import { MapPin, Navigation, Car, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const LocationPage: React.FC = () => {
  const closestPOIs = getClosestPointsOfInterest(5);
  
  // Group POIs by type
  const groupedPOIs = pointsOfInterest.reduce((groups, poi) => {
    const group = groups[poi.type] || [];
    group.push(poi);
    groups[poi.type] = group;
    return groups;
  }, {} as Record<string, typeof pointsOfInterest>);
  
  // Generate icon by POI type
  const getIcon = (type: string) => {
    switch (type) {
      case 'beach':
        return <WavesIcon className="text-blue-500" />;
      case 'shopping':
        return <ShoppingBagIcon className="text-pink-500" />;
      case 'education':
        return <GraduationCapIcon className="text-yellow-500" />;
      case 'health':
        return <FirstAidIcon className="text-red-500" />;
      case 'park':
        return <TreeIcon className="text-green-500" />;
      case 'transport':
        return <TrainIcon className="text-purple-500" />;
      case 'restaurant':
        return <UtensilsIcon className="text-orange-500" />;
      default:
        return <MapPin className="text-primary-500" />;
    }
  };
  
  // Get French label for POI type
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'beach':
        return 'Plages';
      case 'shopping':
        return 'Shopping';
      case 'education':
        return 'Éducation';
      case 'health':
        return 'Santé';
      case 'park':
        return 'Parcs';
      case 'transport':
        return 'Transports';
      case 'restaurant':
        return 'Restaurants';
      default:
        return type;
    }
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl font-display text-primary-800">
            Localisation
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Découvrez l'emplacement idéal de la Résidence El Nour et tous les points d'intérêt à proximité.
          </p>
        </div>
        
        {/* Map Section */}
        <section className="mb-16">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-primary-800">Carte de la résidence</h2>
            <div className="h-96 bg-gray-200 rounded-lg mb-6">
              {/* Map would be inserted here */}
              <div className="flex items-center justify-center h-full text-gray-500">
                <p>Carte interactive indisponible en mode démonstration.</p>
              </div>
            </div>
            
            <div className="flex items-start p-4 bg-primary-50 rounded-lg">
              <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 text-white bg-primary-600 rounded-full">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-medium text-primary-800">Adresse</h3>
                <address className="not-italic text-gray-600">
                  123 Avenue des Oliviers<br />
                  13008 Marseille<br />
                  France
                </address>
              </div>
            </div>
          </div>
        </section>
        
        {/* Closest POIs */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-primary-800">Points d'intérêt à proximité</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {closestPOIs.map((poi) => (
              <motion.div 
                key={poi.id}
                className="p-4 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 bg-gray-100 rounded-full">
                    {getIcon(poi.type)}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{poi.name}</h3>
                    <p className="text-sm text-gray-500">{getTypeLabel(poi.type)}</p>
                    <div className="flex items-center mt-2 text-sm text-gray-600">
                      <Navigation size={14} className="mr-1 text-primary-500" />
                      <span>{poi.distance} km</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Grouped POIs by type */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-primary-800">Tout à proximité</h2>
          
          <div className="space-y-8">
            {Object.entries(groupedPOIs).map(([type, pois]) => (
              <div key={type}>
                <h3 className="mb-4 text-xl font-medium text-primary-700">{getTypeLabel(type)}</h3>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nom
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Distance
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Temps en voiture
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {pois.map((poi) => (
                        <tr key={poi.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                {getIcon(poi.type)}
                              </div>
                              <div className="ml-3">
                                <div className="text-sm font-medium text-gray-900">{poi.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center text-sm text-gray-600">
                              <Navigation size={14} className="mr-1 text-primary-500" />
                              <span>{poi.distance} km</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center text-sm text-gray-600">
                              <Car size={14} className="mr-1 text-primary-500" />
                              <span>~{Math.round(poi.distance * 3)} min</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Transport Access */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-primary-800">Accès et transports</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-xl font-medium text-primary-700">En voiture</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <Car size={20} className="flex-shrink-0 mr-3 text-primary-600" />
                  <div>
                    <p className="font-medium text-gray-900">Depuis l'autoroute A7</p>
                    <p className="text-gray-600">Sortie Marseille Centre, puis suivre la direction Vieux Port (15 min)</p>
                  </div>
                </li>
                <li className="flex">
                  <Car size={20} className="flex-shrink-0 mr-3 text-primary-600" />
                  <div>
                    <p className="font-medium text-gray-900">Depuis l'autoroute A50</p>
                    <p className="text-gray-600">Sortie La Timone, puis direction Prado (10 min)</p>
                  </div>
                </li>
                <li className="flex">
                  <Car size={20} className="flex-shrink-0 mr-3 text-primary-600" />
                  <div>
                    <p className="font-medium text-gray-900">Stationnement</p>
                    <p className="text-gray-600">Parking privé disponible dans la résidence</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-xl font-medium text-primary-700">En transport en commun</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <TrainIcon size={20} className="flex-shrink-0 mr-3 text-primary-600" />
                  <div>
                    <p className="font-medium text-gray-900">Train</p>
                    <p className="text-gray-600">Gare Saint-Charles à 2.8 km (10 min en voiture)</p>
                  </div>
                </li>
                <li className="flex">
                  <SubwayIcon size={20} className="flex-shrink-0 mr-3 text-primary-600" />
                  <div>
                    <p className="font-medium text-gray-900">Métro</p>
                    <p className="text-gray-600">Station Castellane (ligne 1 et 2) à 1.2 km</p>
                  </div>
                </li>
                <li className="flex">
                  <BusIcon size={20} className="flex-shrink-0 mr-3 text-primary-600" />
                  <div>
                    <p className="font-medium text-gray-900">Bus</p>
                    <p className="text-gray-600">Lignes 19, 45 et 83 - Arrêt "Les Oliviers" à 200m</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Custom icons for POI types
const WavesIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
  </svg>
);

const ShoppingBagIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6Z" />
    <path d="M16 10a4 4 0 0 1-8 0" />
    <path d="M3 6h18" />
  </svg>
);

const GraduationCapIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

const FirstAidIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 6h8" />
    <path d="M18 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z" />
    <path d="M12 10v6" />
    <path d="M9 13h6" />
  </svg>
);

const TreeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 14h.01" />
    <path d="M17 3v4" />
    <path d="M13 4h8" />
    <path d="M13 8h4" />
    <path d="M13 20h4" />
    <path d="M17 16v4" />
    <path d="M2 20h8" />
    <path d="M2 4h8" />
    <path d="M6 4v16" />
  </svg>
);

const TrainIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="3" width="16" height="16" rx="2" />
    <path d="M4 11h16" />
    <path d="M12 3v8" />
    <path d="m8 19-2 3" />
    <path d="m18 22-2-3" />
    <path d="M8 15h0" />
    <path d="M16 15h0" />
  </svg>
);

const UtensilsIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Z" />
    <path d="M18 22V15" />
  </svg>
);

const SubwayIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 16H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2h-5" />
    <circle cx="18" cy="16" r="4" />
    <path d="M18 12v1" />
    <path d="M9 12h.01" />
    <path d="M4 8h.01" />
    <path d="M7 16h1" />
    <path d="M4 16h.01" />
  </svg>
);

const BusIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 4H5c-1.1 0-2 .9-2 2v4h18V6c0-1.1-.9-2-2-2Z" />
    <path d="M21 10H3v6c0 1.1.9 2 2 2h1" />
    <path d="M21 10v6c0 1.1-.9 2-2 2h-1" />
    <path d="M9 18h6" />
    <path d="M9 22h6" />
    <path d="M4 10h16" />
    <path d="M5 6h14" />
  </svg>
);

export default LocationPage;