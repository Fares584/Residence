/*
  # Admin Dashboard Schema

  1. New Tables
    - `admin_users`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `password_hash` (text)
      - `created_at` (timestamp)
      - `last_login` (timestamp)
    
    - `visit_requests`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text)
      - `phone` (text)
      - `property_id` (integer)
      - `preferred_date` (date)
      - `preferred_time` (text)
      - `message` (text)
      - `status` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `subject` (text)
      - `message` (text)
      - `status` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `properties`
      - `id` (uuid, primary key)
      - `title` (text)
      - `type` (text)
      - `status` (text)
      - `price` (integer)
      - `rent_price` (integer)
      - `area` (integer)
      - `rooms` (integer)
      - `bedrooms` (integer)
      - `bathrooms` (integer)
      - `description` (text)
      - `features` (text[])
      - `images` (text[])
      - `floor` (integer)
      - `orientation` (text)
      - `has_balcony` (boolean)
      - `has_garden` (boolean)
      - `has_parking` (boolean)
      - `has_ac` (boolean)
      - `address` (text)
      - `coordinates` (jsonb)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for admin access
*/

-- Create admin_users table
CREATE TABLE admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  created_at timestamptz DEFAULT now(),
  last_login timestamptz
);

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin users can manage their own data"
  ON admin_users
  FOR ALL
  TO authenticated
  USING (auth.uid() = id);

-- Create visit_requests table
CREATE TABLE visit_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  property_id integer,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  message text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE visit_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create visit requests"
  ON visit_requests
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Admin users can read all visit requests"
  ON visit_requests
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM admin_users WHERE id = auth.uid()
  ));

CREATE POLICY "Admin users can update visit requests"
  ON visit_requests
  FOR UPDATE
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM admin_users WHERE id = auth.uid()
  ));

-- Create contact_messages table
CREATE TABLE contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'unread',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create contact messages"
  ON contact_messages
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Admin users can read all contact messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM admin_users WHERE id = auth.uid()
  ));

CREATE POLICY "Admin users can update contact messages"
  ON contact_messages
  FOR UPDATE
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM admin_users WHERE id = auth.uid()
  ));

-- Create properties table
CREATE TABLE properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  type text NOT NULL,
  status text NOT NULL,
  price integer,
  rent_price integer,
  area integer NOT NULL,
  rooms integer NOT NULL,
  bedrooms integer NOT NULL,
  bathrooms integer NOT NULL,
  description text NOT NULL,
  features text[] DEFAULT '{}',
  images text[] DEFAULT '{}',
  floor integer,
  orientation text,
  has_balcony boolean DEFAULT false,
  has_garden boolean DEFAULT false,
  has_parking boolean DEFAULT false,
  has_ac boolean DEFAULT false,
  address text NOT NULL,
  coordinates jsonb NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read properties"
  ON properties
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admin users can manage properties"
  ON properties
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM admin_users WHERE id = auth.uid()
  ));

-- Create functions to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at columns
CREATE TRIGGER update_properties_updated_at
  BEFORE UPDATE ON properties
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_visit_requests_updated_at
  BEFORE UPDATE ON visit_requests
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_contact_messages_updated_at
  BEFORE UPDATE ON contact_messages
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();