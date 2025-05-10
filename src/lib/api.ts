import { supabase } from './auth';
import type { Property, VisitRequest, ContactMessage, DashboardStats } from './types';

// Properties
export async function getProperties() {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getProperty(id: string) {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

export async function createProperty(property: Omit<Property, 'id' | 'createdAt' | 'updatedAt'>) {
  const { data, error } = await supabase
    .from('properties')
    .insert([property])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateProperty(id: string, property: Partial<Property>) {
  const { data, error } = await supabase
    .from('properties')
    .update(property)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteProperty(id: string) {
  const { error } = await supabase
    .from('properties')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

// Visit Requests
export async function getVisitRequests() {
  const { data, error } = await supabase
    .from('visit_requests')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function updateVisitRequest(id: string, status: string) {
  const { data, error } = await supabase
    .from('visit_requests')
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Contact Messages
export async function getContactMessages() {
  const { data, error } = await supabase
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function updateContactMessage(id: string, status: string) {
  const { data, error } = await supabase
    .from('contact_messages')
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Dashboard Stats
export async function getDashboardStats(): Promise<DashboardStats> {
  const [
    propertiesResult,
    visitRequestsResult,
    contactMessagesResult,
    recentVisitsResult,
    recentMessagesResult
  ] = await Promise.all([
    supabase.from('properties').select('type'),
    supabase.from('visit_requests').select('status'),
    supabase.from('contact_messages').select('*'),
    supabase.from('visit_requests').select('*').order('created_at', { ascending: false }).limit(5),
    supabase.from('contact_messages').select('*').order('created_at', { ascending: false }).limit(5)
  ]);

  if (propertiesResult.error) throw propertiesResult.error;
  if (visitRequestsResult.error) throw visitRequestsResult.error;
  if (contactMessagesResult.error) throw contactMessagesResult.error;
  if (recentVisitsResult.error) throw recentVisitsResult.error;
  if (recentMessagesResult.error) throw recentMessagesResult.error;

  const properties = propertiesResult.data;
  const visitRequests = visitRequestsResult.data;
  const contactMessages = contactMessagesResult.data;

  const propertiesByType = Object.entries(
    properties.reduce((acc: Record<string, number>, curr) => {
      acc[curr.type] = (acc[curr.type] || 0) + 1;
      return acc;
    }, {})
  ).map(([type, count]) => ({ type, count }));

  const visitRequestsByStatus = Object.entries(
    visitRequests.reduce((acc: Record<string, number>, curr) => {
      acc[curr.status] = (acc[curr.status] || 0) + 1;
      return acc;
    }, {})
  ).map(([status, count]) => ({ status, count }));

  return {
    totalProperties: properties.length,
    totalVisitRequests: visitRequests.length,
    totalContactMessages: contactMessages.length,
    propertiesByType,
    visitRequestsByStatus,
    recentVisitRequests: recentVisitsResult.data,
    recentContactMessages: recentMessagesResult.data
  };
}