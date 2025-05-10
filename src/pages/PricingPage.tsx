import React from 'react';
import { Link } from 'react-router-dom';
import { Home, CheckCircle } from 'lucide-react';
import { formatCurrency } from '../lib/utils';
import { properties } from '../data/properties';
import { motion } from 'framer-motion';

const PricingPage: React.FC = () => {
  // Group properties by type
  const apartmentProperties = properties.filter(p => p.type === 'apartment');
  const studioProperties = properties.filter(p => p.type === 'studio');
  const houseProperties = properties.filter(p => p.type === 'house');
  
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl font-display text-primary-800">
            Tarifs et modalités
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Découvrez nos options flexibles d'achat et de location pour tous nos types de logements.
          </p>
        </div>
        
        {/* Pricing Options */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-center text-primary-800">Options d'achat et de location</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Apartments */}
            <motion.div 
              className="overflow-hidden bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-8 bg-primary-600">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white rounded-full">
                  <Home size={32} className="text-primary-600" />
                </div>
                <h3 className="mb-1 text-2xl font-bold text-center text-white">Appartements</h3>
                <p className="text-center text-primary-100">F2, F3, F4</p>
              </div>
              
              <div className="p-6">
                <div className="mb-6 text-center">
                  <p className="mb-1 text-sm text-gray-500">Prix d'achat à partir de</p>
                  <p className="text-3xl font-bold text-primary-800">
                    {formatCurrency(Math.min(...apartmentProperties.map(p => p.price)))}
                  </p>
                </div>
                
                <div className="mb-6 text-center">
                  <p className="mb-1 text-sm text-gray-500">Location à partir de</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {formatCurrency(Math.min(...apartmentProperties.filter(p => p.rentPrice).map(p => p.rentPrice!)))}/mois
                  </p>
                </div>
                
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5 mr-2 text-primary-600" />
                    <span className="text-gray-600">Surface de 50m² à 110m²</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5 mr-2 text-primary-600" />
                    <span className="text-gray-600">De 1 à 3 chambres</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5 mr-2 text-primary-600" />
                    <span className="text-gray-600">Balcon ou terrasse disponible</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5 mr-2 text-primary-600" />
                    <span className="text-gray-600">Parking inclus</span>
                  </li>
                </ul>
                
                <Link 
                  to="/logements?type=apartment" 
                  className="block w-full py-3 font-medium text-center text-white bg-primary-600 rounded-md hover:bg-primary-700"
                >
                  Voir les appartements
                </Link>
              </div>
            </motion.div>
            
            {/* Studios */}
            <motion.div 
              className="overflow-hidden bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="px-6 py-8 bg-beige-500">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white rounded-full">
                  <Home size={32} className="text-beige-500" />
                </div>
                <h3 className="mb-1 text-2xl font-bold text-center text-white">Studios</h3>
                <p className="text-center text-beige-100">Confortables et fonctionnels</p>
              </div>
              
              <div className="p-6">
                <div className="mb-6 text-center">
                  <p className="mb-1 text-sm text-gray-500">Prix d'achat à partir de</p>
                  <p className="text-3xl font-bold text-primary-800">
                    {formatCurrency(Math.min(...studioProperties.map(p => p.price)))}
                  </p>
                </div>
                
                <div className="mb-6 text-center">
                  <p className="mb-1 text-sm text-gray-500">Location à partir de</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {formatCurrency(Math.min(...studioProperties.filter(p => p.rentPrice).map(p => p.rentPrice!)))}/mois
                  </p>
                </div>
                
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5 mr-2 text-beige-500" />
                    <span className="text-gray-600">Surface de 30m² à 40m²</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5 mr-2 text-beige-500" />
                    <span className="text-gray-600">Coin cuisine équipé</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5 mr-2 text-beige-500" />
                    <span className="text-gray-600">Idéal pour investissement locatif</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5 mr-2 text-beige-500" />
                    <span className="text-gray-600">Faibles charges</span>
                  </li>
                </ul>
                
                <Link 
                  to="/logements?type=studio" 
                  className="block w-full py-3 font-medium text-center text-white bg-beige-500 rounded-md hover:bg-beige-600"
                >
                  Voir les studios
                </Link>
              </div>
            </motion.div>
            
            {/* Houses */}
            <motion.div 
              className="overflow-hidden bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="px-6 py-8 bg-primary-800">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white rounded-full">
                  <Home size={32} className="text-primary-800" />
                </div>
                <h3 className="mb-1 text-2xl font-bold text-center text-white">Maisons</h3>
                <p className="text-center text-primary-200">Indépendantes avec jardin</p>
              </div>
              
              <div className="p-6">
                <div className="mb-6 text-center">
                  <p className="mb-1 text-sm text-gray-500">Prix d'achat à partir de</p>
                  <p className="text-3xl font-bold text-primary-800">
                    {formatCurrency(Math.min(...houseProperties.map(p => p.price)))}
                  </p>
                </div>
                
                <div className="mb-6 text-center">
                  <p className="mb-1 text-sm text-gray-500">Location à partir de</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {formatCurrency(Math.min(...houseProperties.filter(p => p.rentPrice).map(p => p.rentPrice!)))}/mois
                  </p>
                </div>
                
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5 mr-2 text-primary-800" />
                    <span className="text-gray-600">Surface de 100m² à 150m²</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5 mr-2 text-primary-800" />
                    <span className="text-gray-600">Jardin privatif</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5 mr-2 text-primary-800" />
                    <span className="text-gray-600">Garage et stationnement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5 mr-2 text-primary-800" />
                    <span className="text-gray-600">Prestations haut de gamme</span>
                  </li>
                </ul>
                
                <Link 
                  to="/logements?type=house" 
                  className="block w-full py-3 font-medium text-center text-white bg-primary-800 rounded-md hover:bg-primary-900"
                >
                  Voir les maisons
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Pricing Table */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-center text-primary-800">Tableau comparatif détaillé</h2>
          
          <div className="overflow-hidden bg-white rounded-lg shadow-md">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type de logement
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Surface
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prix d'achat
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Loyer mensuel
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Charges estimées
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">Studio (RDC)</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">30-35 m²</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">98 000 € - 110 000 €</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">550 € - 650 €</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">50 € - 70 €</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">Studio (Étage)</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">30-35 m²</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">110 000 € - 120 000 €</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">580 € - 680 €</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">50 € - 70 €</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">Appartement F2</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">45-55 m²</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">165 000 € - 185 000 €</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">700 € - 800 €</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">80 € - 100 €</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">Appartement F3</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">70-90 m²</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">195 000 € - 245 000 €</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">850 € - 1 050 €</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">120 € - 150 €</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">Appartement F4</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">100-120 m²</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">285 000 € - 320 000 €</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">1 200 € - 1 400 €</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">150 € - 180 €</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">Maison</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">120-150 m²</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">420 000 € - 490 000 €</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">1 800 € - 2 200 €</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">200 € - 250 €</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <p className="mt-4 text-sm text-gray-500">
            * Les charges incluent l'entretien des parties communes, les espaces verts, l'eau froide et le chauffage collectif si applicable.
          </p>
        </section>
        
        {/* Payment Options */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-center text-primary-800">Modalités de paiement</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-xl font-bold text-primary-800">Achat</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-0.5 mr-3 text-white bg-primary-600 rounded-full text-xs font-bold">1</div>
                  <div>
                    <p className="font-medium text-gray-900">Réservation</p>
                    <p className="text-gray-600">Dépôt de garantie de 5% du prix d'achat pour réserver le bien.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-0.5 mr-3 text-white bg-primary-600 rounded-full text-xs font-bold">2</div>
                  <div>
                    <p className="font-medium text-gray-900">Compromis de vente</p>
                    <p className="text-gray-600">Signature chez le notaire avec versement d'un acompte complémentaire.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-0.5 mr-3 text-white bg-primary-600 rounded-full text-xs font-bold">3</div>
                  <div>
                    <p className="font-medium text-gray-900">Financement</p>
                    <p className="text-gray-600">Possibilité d'accompagnement pour l'obtention de votre prêt immobilier auprès de nos partenaires bancaires.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-0.5 mr-3 text-white bg-primary-600 rounded-full text-xs font-bold">4</div>
                  <div>
                    <p className="font-medium text-gray-900">Acte authentique</p>
                    <p className="text-gray-600">Signature définitive chez le notaire et remise des clés.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-xl font-bold text-primary-800">Location</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-0.5 mr-3 text-white bg-beige-500 rounded-full text-xs font-bold">1</div>
                  <div>
                    <p className="font-medium text-gray-900">Constitution du dossier</p>
                    <p className="text-gray-600">Pièce d'identité, justificatifs de revenus, attestation d'employeur, avis d'imposition.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-0.5 mr-3 text-white bg-beige-500 rounded-full text-xs font-bold">2</div>
                  <div>
                    <p className="font-medium text-gray-900">Signature du bail</p>
                    <p className="text-gray-600">Contrat de location d'une durée de 3 ans (vide) ou 1 an (meublé).</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-0.5 mr-3 text-white bg-beige-500 rounded-full text-xs font-bold">3</div>
                  <div>
                    <p className="font-medium text-gray-900">Dépôt de garantie</p>
                    <p className="text-gray-600">Équivalent à un mois de loyer hors charges pour un logement non meublé.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-0.5 mr-3 text-white bg-beige-500 rounded-full text-xs font-bold">4</div>
                  <div>
                    <p className="font-medium text-gray-900">État des lieux</p>
                    <p className="text-gray-600">Réalisé conjointement avant la remise des clés.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="p-8 bg-primary-50 rounded-lg shadow-md">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-primary-800">Prêt à franchir le pas ?</h2>
              <p className="mb-6 text-gray-600">
                Contactez-nous pour plus d'informations ou pour planifier une visite. Notre équipe est à votre disposition pour vous accompagner dans votre projet d'achat ou de location.
              </p>
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                <Link 
                  to="/contact" 
                  className="px-6 py-3 font-medium text-center text-white bg-primary-600 rounded-md hover:bg-primary-700"
                >
                  Nous contacter
                </Link>
                <Link 
                  to="/reserver-visite" 
                  className="px-6 py-3 font-medium text-center text-primary-700 bg-white rounded-md hover:bg-gray-100"
                >
                  Réserver une visite
                </Link>
              </div>
            </div>
            <div className="text-center md:text-right">
              <img
                src="https://images.pexels.com/photos/7319317/pexels-photo-7319317.jpeg"
                alt="Remise de clés"
                className="inline-block max-w-full h-auto rounded-lg shadow-lg"
                style={{ maxHeight: '240px' }}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PricingPage;