import React from 'react';
import ContactForm from '../components/forms/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl font-display text-primary-800">
            Contactez-nous
          </h1>
          <p className="text-lg text-gray-600">
            Nous sommes à votre disposition pour répondre à toutes vos questions concernant nos logements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-6 text-2xl font-bold text-primary-800">Nos coordonnées</h2>
              
              <ul className="space-y-6">
                <li className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-white bg-primary-600 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-medium text-gray-900">Adresse</h3>
                    <address className="not-italic text-gray-600">
                      123 Avenue des Oliviers<br />
                      13008 Marseille<br />
                      France
                    </address>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-white bg-primary-600 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-medium text-gray-900">Téléphone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+33123456789" className="hover:text-primary-600">
                        +33 1 23 45 67 89
                      </a>
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-white bg-primary-600 rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contact@residence-elnour.com" className="hover:text-primary-600">
                        contact@residence-elnour.com
                      </a>
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-white bg-primary-600 rounded-full">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-medium text-gray-900">Horaires d'ouverture</h3>
                    <p className="text-gray-600">
                      Lundi - Vendredi: 9h - 18h<br />
                      Samedi: 10h - 15h<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 h-60 bg-gray-200 rounded-lg">
                {/* Map would be inserted here */}
                <div className="flex items-center justify-center h-full text-gray-500">
                  <p>Carte interactive indisponible en mode démonstration.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>
        
        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="mb-8 text-2xl font-bold text-center text-primary-800">Questions fréquentes</h2>
          
          <div className="space-y-4">
            <details className="p-6 bg-white rounded-lg shadow-md">
              <summary className="font-medium text-primary-800 cursor-pointer">
                Comment puis-je visiter un logement ?
              </summary>
              <div className="mt-4 text-gray-600">
                <p>Pour visiter un logement, vous pouvez réserver une visite en ligne via notre formulaire, nous appeler directement ou nous envoyer un email. Nous organiserons un rendez-vous à votre convenance dans les plus brefs délais.</p>
              </div>
            </details>
            
            <details className="p-6 bg-white rounded-lg shadow-md">
              <summary className="font-medium text-primary-800 cursor-pointer">
                Quelles sont les modalités de réservation d'un logement ?
              </summary>
              <div className="mt-4 text-gray-600">
                <p>Pour réserver un logement, un dossier complet doit être constitué (pièce d'identité, justificatifs de revenus, etc.). Un dépôt de garantie équivalent à un mois de loyer est demandé pour la location. Pour l'achat, un compromis de vente sera signé avec un dépôt de 5% du prix d'achat.</p>
              </div>
            </details>
            
            <details className="p-6 bg-white rounded-lg shadow-md">
              <summary className="font-medium text-primary-800 cursor-pointer">
                Les charges sont-elles incluses dans le loyer ?
              </summary>
              <div className="mt-4 text-gray-600">
                <p>Les loyers affichés n'incluent pas les charges. Ces dernières font l'objet d'une provision mensuelle avec régularisation annuelle. Elles comprennent l'entretien des parties communes, les espaces verts, l'eau froide et le chauffage collectif si applicable.</p>
              </div>
            </details>
            
            <details className="p-6 bg-white rounded-lg shadow-md">
              <summary className="font-medium text-primary-800 cursor-pointer">
                Quels sont les délais pour emménager après réservation ?
              </summary>
              <div className="mt-4 text-gray-600">
                <p>Pour la location, l'emménagement peut se faire dès la signature du bail et la remise des clés, généralement sous 15 jours après acceptation du dossier. Pour l'achat, le délai moyen est de 2 à 3 mois après signature du compromis de vente.</p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;