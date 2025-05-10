import { Database } from './database.types';

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];
export type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T];

export interface Property {
  id: string;
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
  message?: string;
  status?: 'pending' | 'confirmed' | 'cancelled';
  createdAt?: string;
  updatedAt?: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status?: 'unread' | 'read' | 'replied';
  createdAt?: string;
  updatedAt?: string;
}

export interface AdminUser {
  id: string;
  email: string;
  createdAt: string;
  lastLogin?: string;
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

export interface DashboardStats {
  totalProperties: number;
  totalVisitRequests: number;
  totalContactMessages: number;
  propertiesByType: {
    type: string;
    count: number;
  }[];
  visitRequestsByStatus: {
    status: string;
    count: number;
  }[];
  recentVisitRequests: VisitRequest[];
  recentContactMessages: ContactMessage[];
}