import { Property } from '../lib/types';

export const properties: Property[] = [
  {
    id: 1,
    title: 'Appartement F3 avec terrasse',
    type: 'apartment',
    status: 'for_rent_or_sale',
    price: 195000,
    rentPrice: 950,
    area: 85,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    description: "Magnifique appartement F3 lumineux avec terrasse exposée sud. Cet appartement moderne dispose d'un séjour spacieux, d'une cuisine équipée, de deux chambres confortables et d'une salle de bain rénovée. Idéalement situé au deuxième étage de la résidence avec ascenseur, il offre une vue dégagée et un environnement calme. La terrasse de 12m² est parfaite pour profiter des journées ensoleillées.",
    features: [
      'Cuisine équipée',
      'Terrasse 12m²',
      'Exposition Sud',
      'Double vitrage',
      'Ascenseur',
      'Interphone',
      'Placards intégrés',
      'Fibre optique'
    ],
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg',
      'https://images.pexels.com/photos/1743228/pexels-photo-1743228.jpeg',
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg'
    ],
    floor: 2,
    orientation: 'Sud',
    hasBalcony: true,
    hasGarden: false,
    hasParking: true,
    hasAC: true,
    address: '12 Résidence El Nour, 13008 Marseille',
    coordinates: {
      lat: 43.2715,
      lng: 5.3981
    },
    createdAt: '2023-11-15T10:30:00Z',
    updatedAt: '2024-01-20T14:45:00Z'
  },
  {
    id: 2,
    title: 'Studio moderne au RDC',
    type: 'studio',
    status: 'for_rent',
    price: 110000,
    rentPrice: 550,
    area: 35,
    rooms: 1,
    bedrooms: 0,
    bathrooms: 1,
    description: "Studio moderne et fonctionnel situé au rez-de-chaussée de la résidence. Entièrement rénové, il offre un espace de vie optimisé avec kitchenette équipée et salle d'eau avec douche à l'italienne. Idéal pour un étudiant ou un jeune actif, ce studio lumineux dispose d'un accès direct au jardin commun de la résidence. Faibles charges et excellent investissement locatif.",
    features: [
      'Kitchenette équipée',
      'Douche à l\'italienne',
      'Accès jardin',
      'Placards intégrés',
      'Fibre optique',
      'Volets roulants',
      'Vidéophone'
    ],
    images: [
      'https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
    ],
    floor: 0,
    orientation: 'Ouest',
    hasBalcony: false,
    hasGarden: true,
    hasParking: false,
    hasAC: false,
    address: '12 Résidence El Nour, 13008 Marseille',
    coordinates: {
      lat: 43.2715,
      lng: 5.3981
    },
    createdAt: '2023-12-05T09:15:00Z',
    updatedAt: '2024-02-10T11:30:00Z'
  },
  {
    id: 3,
    title: 'Appartement F4 familial avec jardin',
    type: 'apartment',
    status: 'for_sale',
    price: 285000,
    area: 110,
    rooms: 4,
    bedrooms: 3,
    bathrooms: 2,
    description: "Spacieux appartement F4 en rez-de-jardin, parfait pour une famille. Cet appartement de 110m² offre un grand séjour lumineux donnant sur un jardin privatif de 50m², une cuisine séparée entièrement équipée, trois chambres dont une suite parentale avec salle d'eau, et une salle de bain familiale. L'appartement dispose également d'une buanderie et de nombreux rangements. Situation idéale dans la résidence, proche de toutes les commodités.",
    features: [
      'Jardin privatif 50m²',
      'Cuisine équipée',
      'Suite parentale',
      'Double vitrage',
      'Buanderie',
      'Climatisation',
      'Portail électrique',
      'Alarme',
      'Box fermé'
    ],
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg'
    ],
    floor: 0,
    orientation: 'Sud-Ouest',
    hasBalcony: false,
    hasGarden: true,
    hasParking: true,
    hasAC: true,
    address: '12 Résidence El Nour, 13008 Marseille',
    coordinates: {
      lat: 43.2715,
      lng: 5.3981
    },
    createdAt: '2023-10-20T15:45:00Z',
    updatedAt: '2024-01-30T16:20:00Z'
  },
  {
    id: 4,
    title: 'Maison indépendante avec piscine',
    type: 'house',
    status: 'for_rent_or_sale',
    price: 420000,
    rentPrice: 1800,
    area: 140,
    rooms: 5,
    bedrooms: 3,
    bathrooms: 2,
    description: "Magnifique maison indépendante au sein de la résidence, avec piscine privative. Cette villa de 140m² offre un vaste séjour avec cheminée, une cuisine ouverte équipée, trois chambres spacieuses, deux salles de bain et un bureau. Le jardin de 200m² dispose d'une piscine, d'une terrasse et d'un espace barbecue. Prestations haut de gamme: climatisation réversible, domotique, volets électriques. Garage double et parking extérieur.",
    features: [
      'Piscine privative',
      'Jardin 200m²',
      'Cuisine ouverte équipée',
      'Cheminée',
      'Climatisation',
      'Domotique',
      'Garage double',
      'Terrasse',
      'Barbecue'
    ],
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg'
    ],
    floor: 0,
    orientation: 'Sud',
    hasBalcony: false,
    hasGarden: true,
    hasParking: true,
    hasAC: true,
    address: '12 Résidence El Nour, 13008 Marseille',
    coordinates: {
      lat: 43.2715,
      lng: 5.3981
    },
    createdAt: '2023-09-10T11:20:00Z',
    updatedAt: '2024-02-05T10:15:00Z'
  },
  {
    id: 5,
    title: 'Appartement F2 vue mer',
    type: 'apartment',
    status: 'for_rent',
    price: 165000,
    rentPrice: 750,
    area: 50,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    description: "Charmant appartement F2 avec vue mer exceptionnelle. Situé au 4ème étage avec ascenseur, cet appartement offre un séjour lumineux ouvert sur un balcon face à la mer, une cuisine équipée, une chambre avec placard et une salle d'eau moderne. Parfaitement agencé, il bénéficie d'une exposition sud-est garantissant luminosité et vue dégagée. Idéal comme résidence principale ou investissement locatif saisonnier.",
    features: [
      'Vue mer',
      'Balcon',
      'Cuisine équipée',
      'Ascenseur',
      'Double vitrage',
      'Exposition Sud-Est',
      'Placards intégrés',
      'Stores électriques'
    ],
    images: [
      'https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg',
      'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg',
      'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg',
      'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg'
    ],
    floor: 4,
    orientation: 'Sud-Est',
    hasBalcony: true,
    hasGarden: false,
    hasParking: true,
    hasAC: true,
    address: '12 Résidence El Nour, 13008 Marseille',
    coordinates: {
      lat: 43.2715,
      lng: 5.3981
    },
    createdAt: '2023-11-25T14:10:00Z',
    updatedAt: '2024-02-15T09:30:00Z'
  },
  {
    id: 6,
    title: 'Studio design pour investissement',
    type: 'studio',
    status: 'for_sale',
    price: 98000,
    area: 30,
    rooms: 1,
    bedrooms: 0,
    bathrooms: 1,
    description: "Studio design entièrement rénové, idéal pour investissement locatif. Ce studio de 30m² offre un espace optimisé avec coin nuit séparé, kitchenette équipée et salle d'eau moderne. Situé au 1er étage de la résidence, il bénéficie d'une bonne luminosité et d'un environnement calme. Vendu meublé et équipé, prêt à louer. Excellent rendement locatif avec forte demande dans le secteur.",
    features: [
      'Entièrement rénové',
      'Vendu meublé',
      'Kitchenette équipée',
      'Double vitrage',
      'Interphone',
      'Fibre optique',
      'Faibles charges'
    ],
    images: [
      'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg',
      'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg',
      'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg',
      'https://images.pexels.com/photos/2098913/pexels-photo-2098913.jpeg'
    ],
    floor: 1,
    orientation: 'Est',
    hasBalcony: false,
    hasGarden: false,
    hasParking: false,
    hasAC: false,
    address: '12 Résidence El Nour, 13008 Marseille',
    coordinates: {
      lat: 43.2715,
      lng: 5.3981
    },
    createdAt: '2024-01-15T16:40:00Z',
    updatedAt: '2024-02-20T12:25:00Z'
  }
];

export const getPropertyById = (id: number): Property | undefined => {
  return properties.find(property => property.id === id);
};

export const getPropertiesByType = (type: Property['type']): Property[] => {
  return properties.filter(property => property.type === type);
};

export const getPropertiesByStatus = (status: Property['status']): Property[] => {
  return properties.filter(property => property.status === status);
};