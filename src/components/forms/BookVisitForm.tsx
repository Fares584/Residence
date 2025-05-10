import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { VisitRequest } from '../../lib/types';
import { properties } from '../../data/properties';
import { supabase } from '../../lib/supabase';
import { motion } from 'framer-motion';

interface BookVisitFormProps {
  preselectedPropertyId?: number;
}

const BookVisitForm: React.FC<BookVisitFormProps> = ({ preselectedPropertyId }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<VisitRequest>({
    defaultValues: {
      propertyId: preselectedPropertyId,
    }
  });
  
  const onSubmit = async (data: VisitRequest) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // In a real application, this would save to Supabase
      // const { error } = await supabase.from('visit_requests').insert([data]);
      
      // if (error) throw new Error(error.message);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError('Une erreur est survenue lors de la soumission du formulaire. Veuillez réessayer.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-primary-800">Réserver une visite</h2>
      
      {isSuccess && (
        <motion.div 
          className="p-4 mb-6 text-green-800 bg-green-100 rounded-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Votre demande de visite a été envoyée avec succès. Nous vous contacterons très prochainement.
        </motion.div>
      )}
      
      {error && (
        <div className="p-4 mb-6 text-red-800 bg-red-100 rounded-md">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block mb-1 text-sm font-medium text-gray-700">
              Prénom <span className="text-error-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              {...register('firstName', { required: 'Le prénom est requis' })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-error-500">{errors.firstName.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="lastName" className="block mb-1 text-sm font-medium text-gray-700">
              Nom <span className="text-error-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              {...register('lastName', { required: 'Le nom est requis' })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-error-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
              Email <span className="text-error-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { 
                required: 'L\'email est requis',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Adresse email invalide'
                }
              })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-error-500">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
              Téléphone <span className="text-error-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone', { required: 'Le téléphone est requis' })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-error-500">{errors.phone.message}</p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="propertyId" className="block mb-1 text-sm font-medium text-gray-700">
            Logement <span className="text-error-500">*</span>
          </label>
          <select
            id="propertyId"
            {...register('propertyId', { required: 'Veuillez sélectionner un logement' })}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Sélectionnez un logement</option>
            {properties.map((property) => (
              <option key={property.id} value={property.id}>
                {property.title}
              </option>
            ))}
          </select>
          {errors.propertyId && (
            <p className="mt-1 text-sm text-error-500">{errors.propertyId.message}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="preferredDate" className="block mb-1 text-sm font-medium text-gray-700">
              Date souhaitée <span className="text-error-500">*</span>
            </label>
            <input
              type="date"
              id="preferredDate"
              {...register('preferredDate', { required: 'La date est requise' })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
            {errors.preferredDate && (
              <p className="mt-1 text-sm text-error-500">{errors.preferredDate.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="preferredTime" className="block mb-1 text-sm font-medium text-gray-700">
              Heure souhaitée <span className="text-error-500">*</span>
            </label>
            <select
              id="preferredTime"
              {...register('preferredTime', { required: 'L\'heure est requise' })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Sélectionnez une heure</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
            </select>
            {errors.preferredTime && (
              <p className="mt-1 text-sm text-error-500">{errors.preferredTime.message}</p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message')}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="Questions ou informations complémentaires..."
          ></textarea>
        </div>
        
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center w-full px-4 py-3 font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-70"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Réserver une visite'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookVisitForm;