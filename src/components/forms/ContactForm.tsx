import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactMessage } from '../../lib/types';
import { supabase } from '../../lib/supabase';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactMessage>();
  
  const onSubmit = async (data: ContactMessage) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // In a real application, this would save to Supabase
      // const { error } = await supabase.from('contact_messages').insert([data]);
      
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
      <h2 className="mb-6 text-2xl font-bold text-primary-800">Contactez-nous</h2>
      
      {isSuccess && (
        <motion.div 
          className="p-4 mb-6 text-green-800 bg-green-100 rounded-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
        </motion.div>
      )}
      
      {error && (
        <div className="p-4 mb-6 text-red-800 bg-red-100 rounded-md">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
            Nom complet <span className="text-error-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Le nom est requis' })}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-error-500">{errors.name.message}</p>
          )}
        </div>
        
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
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-700">
            Sujet <span className="text-error-500">*</span>
          </label>
          <select
            id="subject"
            {...register('subject', { required: 'Le sujet est requis' })}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Sélectionnez un sujet</option>
            <option value="Demande d'information">Demande d'information</option>
            <option value="Rendez-vous de visite">Rendez-vous de visite</option>
            <option value="Réservation de logement">Réservation de logement</option>
            <option value="Service après-vente">Service après-vente</option>
            <option value="Autre">Autre</option>
          </select>
          {errors.subject && (
            <p className="mt-1 text-sm text-error-500">{errors.subject.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
            Message <span className="text-error-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message', { required: 'Le message est requis' })}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-error-500">{errors.message.message}</p>
          )}
        </div>
        
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center w-full px-4 py-3 font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-70"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;