import { PointOfInterest } from '../lib/types';

export const pointsOfInterest: PointOfInterest[] = [
  {
    id: 1,
    name: 'Plage des Catalans',
    type: 'beach',
    distance: 0.8,
    coordinates: {
      lat: 43.2905,
      lng: 5.3651
    }
  },
  {
    id: 2,
    name: 'Centre Commercial La Valentine',
    type: 'shopping',
    distance: 2.5,
    coordinates: {
      lat: 43.2951,
      lng: 5.4248
    }
  },
  {
    id: 3,
    name: 'École Primaire Saint-Charles',
    type: 'education',
    distance: 0.5,
    coordinates: {
      lat: 43.2755,
      lng: 5.3961
    }
  },
  {
    id: 4,
    name: 'Hôpital de la Timone',
    type: 'health',
    distance: 3.2,
    coordinates: {
      lat: 43.2902,
      lng: 5.4083
    }
  },
  {
    id: 5,
    name: 'Parc Borély',
    type: 'park',
    distance: 1.5,
    coordinates: {
      lat: 43.2654,
      lng: 5.3778
    }
  },
  {
    id: 6,
    name: 'Gare Saint-Charles',
    type: 'transport',
    distance: 2.8,
    coordinates: {
      lat: 43.3026,
      lng: 5.3807
    }
  },
  {
    id: 7,
    name: 'Supermarché Carrefour',
    type: 'shopping',
    distance: 0.7,
    coordinates: {
      lat: 43.2735,
      lng: 5.4001
    }
  },
  {
    id: 8,
    name: 'Restaurant Le Petit Nice',
    type: 'restaurant',
    distance: 1.2,
    coordinates: {
      lat: 43.2780,
      lng: 5.3752
    }
  }
];

export const getPointsOfInterestByType = (type: string): PointOfInterest[] => {
  return pointsOfInterest.filter(poi => poi.type === type);
};

export const getClosestPointsOfInterest = (count: number = 5): PointOfInterest[] => {
  return [...pointsOfInterest].sort((a, b) => a.distance - b.distance).slice(0, count);
};