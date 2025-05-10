export interface Property {
  id: number;
  title: string;
  type: 'apartment' | 'studio' | 'house';
  status: 'for_sale' | 'for_rent' | 'for_rent_or_sale';
  price: number;
  rentPrice?: number;
  area: number;
  rooms: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  features: string[];
  images: string[];
  floor?: number;
  orientation?: string;
  hasBalcony: boolean;
  hasGarden: boolean;
  hasParking: boolean;
  hasAC: boolean;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface VisitRequest {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyId?: number;
  preferredDate: string;
  preferredTime: string;
  message: string;
  createdAt?: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt?: string;
}

export interface PointOfInterest {
  id: number;
  name: string;
  type: string;
  distance: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image?: string;
  content: string;
  rating: number;
}