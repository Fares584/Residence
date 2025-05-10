import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ThumbsUp, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl font-display text-primary-800">
            À propos de la Résidence El Nour
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Découvrez l'histoire, la vision et les valeurs qui font de notre résidence un lieu de vie exceptionnel.
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-primary-800">Notre histoire</h2>
              <p className="mb-4 text-gray-600">
                La Résidence El Nour est née d'une vision audacieuse : créer un espace de vie alliant confort, élégance et accessibilité. Fondée en 2018 par un groupe d'architectes et d'investisseurs passionnés, notre résidence représente l'aboutissement d'années d'expertise dans le domaine immobilier.
              </p>
              <p className="mb-4 text-gray-600">
                Le nom "El Nour", signifiant "La Lumière" en arabe, reflète parfaitement notre philosophie : apporter clarté et bien-être dans le parcours résidentiel de nos clients. Chaque aspect de la résidence a été pensé pour offrir un cadre de vie lumineux, spacieux et harmonieux.
              </p>
              <p className="text-gray-600">
                Depuis son inauguration, la Résidence El Nour s'est imposée comme une référence dans le secteur immobilier local, accueillant plus de 200 résidents satisfaits et remportant plusieurs distinctions pour son architecture et son approche centrée sur l'humain.
              </p>
            </section>
            
            <section>
              <h2 className="mb-4 text-2xl font-bold text-primary-800">Notre vision</h2>
              <p className="mb-4 text-gray-600">
                Nous croyons fermement que le logement doit être bien plus qu'un simple toit. Notre vision est de créer des espaces de vie qui favorisent l'épanouissement personnel, le lien social et le respect de l'environnement.
              </p>
              <p className="text-gray-600">
                La Résidence El Nour incarne cette vision à travers son architecture soignée, ses espaces communs conviviaux et son engagement pour la qualité. Nous ne construisons pas simplement des logements, nous façonnons des cadres de vie où chacun peut s'épanouir et construire son avenir.
              </p>
            </section>
          </motion.div>
          
          {/* Right Column - Image Gallery */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-80 overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg" 
                alt="Résidence El Nour - Vue extérieure" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative h-48 overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" 
                  alt="Appartement spacieux" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative h-48 overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg" 
                  alt="Espace de vie moderne" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Values Section */}
        <section className="mt-16">
          <h2 className="mb-8 text-2xl font-bold text-center text-primary-800">Nos valeurs</h2>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-primary-600 rounded-lg">
                <Shield size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary-800">Qualité</h3>
              <p className="text-gray-600">
                Nous ne faisons aucun compromis sur la qualité des matériaux et des finitions. Chaque logement est conçu pour offrir confort et durabilité.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-beige-500 rounded-lg">
                <ThumbsUp size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary-800">Satisfaction client</h3>
              <p className="text-gray-600">
                La satisfaction de nos résidents est notre priorité absolue. Nous mettons tout en œuvre pour répondre à leurs besoins et dépasser leurs attentes.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-primary-600 rounded-lg">
                <Users size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary-800">Communauté</h3>
              <p className="text-gray-600">
                Nous favorisons un esprit de communauté où chacun se sent accueilli et respecté. La Résidence El Nour est bien plus qu'un ensemble de logements.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-beige-500 rounded-lg">
                <Award size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary-800">Excellence</h3>
              <p className="text-gray-600">
                Nous visons l'excellence dans chaque aspect de notre résidence, des plans architecturaux à la gestion quotidienne et au service client.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="mt-16">
          <h2 className="mb-8 text-2xl font-bold text-center text-primary-800">Notre équipe</h2>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div 
              className="overflow-hidden bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg" 
                  alt="Sarah Dupont - Directrice" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-primary-800">Sarah Dupont</h3>
                <p className="mb-4 text-sm font-medium text-gray-500">Directrice</p>
                <p className="text-gray-600">
                  Avec plus de 15 ans d'expérience dans l'immobilier de prestige, Sarah dirige la Résidence El Nour avec passion et vision.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="overflow-hidden bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                  alt="Marc Benoit - Architecte principal" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-primary-800">Marc Benoit</h3>
                <p className="mb-4 text-sm font-medium text-gray-500">Architecte principal</p>
                <p className="text-gray-600">
                  Marc a conçu chaque espace de la résidence en alliant esthétique moderne et fonctionnalité optimale.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="overflow-hidden bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" 
                  alt="Amina Chakir - Responsable relation client" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-primary-800">Amina Chakir</h3>
                <p className="mb-4 text-sm font-medium text-gray-500">Responsable relation client</p>
                <p className="text-gray-600">
                  Amina veille à ce que chaque résident et visiteur bénéficie d'une expérience personnalisée et attentive.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="p-8 mt-16 bg-primary-50 rounded-lg">
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold text-primary-800">Envie d'en savoir plus ?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-gray-600">
              Découvrez par vous-même ce qui rend la Résidence El Nour si spéciale. Contactez-nous dès aujourd'hui pour organiser une visite ou obtenir plus d'informations.
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link 
                to="/reserver-visite" 
                className="px-6 py-3 text-white bg-primary-600 rounded-md hover:bg-primary-700"
              >
                Réserver une visite
              </Link>
              <Link 
                to="/contact" 
                className="px-6 py-3 text-primary-700 bg-white rounded-md hover:bg-gray-100"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;