export interface Database {
  public: {
    Tables: {
      admin_users: {
        Row: {
          id: string;
          email: string;
          password_hash: string;
          created_at: string;
          last_login: string | null;
        };
        Insert: {
          id?: string;
          email: string;
          password_hash: string;
          created_at?: string;
          last_login?: string | null;
        };
        Update: {
          id?: string;
          email?: string;
          password_hash?: string;
          created_at?: string;
          last_login?: string | null;
        };
      };
      visit_requests: {
        Row: {
          id: string;
          first_name: string;
          last_name: string;
          email: string;
          phone: string;
          property_id: number | null;
          preferred_date: string;
          preferred_time: string;
          message: string | null;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          first_name: string;
          last_name: string;
          email: string;
          phone: string;
          property_id?: number | null;
          preferred_date: string;
          preferred_time: string;
          message?: string | null;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          first_name?: string;
          last_name?: string;
          email?: string;
          phone?: string;
          property_id?: number | null;
          preferred_date?: string;
          preferred_time?: string;
          message?: string | null;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      contact_messages: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          subject: string;
          message: string;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone?: string | null;
          subject: string;
          message: string;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          phone?: string | null;
          subject?: string;
          message?: string;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      properties: {
        Row: {
          id: string;
          title: string;
          type: string;
          status: string;
          price: number | null;
          rent_price: number | null;
          area: number;
          rooms: number;
          bedrooms: number;
          bathrooms: number;
          description: string;
          features: string[];
          images: string[];
          floor: number | null;
          orientation: string | null;
          has_balcony: boolean;
          has_garden: boolean;
          has_parking: boolean;
          has_ac: boolean;
          address: string;
          coordinates: { lat: number; lng: number };
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          type: string;
          status: string;
          price?: number | null;
          rent_price?: number | null;
          area: number;
          rooms: number;
          bedrooms: number;
          bathrooms: number;
          description: string;
          features?: string[];
          images?: string[];
          floor?: number | null;
          orientation?: string | null;
          has_balcony?: boolean;
          has_garden?: boolean;
          has_parking?: boolean;
          has_ac?: boolean;
          address: string;
          coordinates: { lat: number; lng: number };
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          type?: string;
          status?: string;
          price?: number | null;
          rent_price?: number | null;
          area?: number;
          rooms?: number;
          bedrooms?: number;
          bathrooms?: number;
          description?: string;
          features?: string[];
          images?: string[];
          floor?: number | null;
          orientation?: string | null;
          has_balcony?: boolean;
          has_garden?: boolean;
          has_parking?: boolean;
          has_ac?: boolean;
          address?: string;
          coordinates?: { lat: number; lng: number };
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}