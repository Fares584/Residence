import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { ArrowRight, Map, Home, Shield, DollarSign, Leaf } from 'lucide-react';
import PropertyCard from '../components/ui/PropertyCard';
import Testimonial from '../components/ui/Testimonial';
import { properties } from '../data/properties';
import { testimonials } from '../data/testimonials';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HomePage: React.FC = () => {
  const featuredProperties = properties.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);
  
  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      title: 'Bienvenue à la Résidence El Nour',
      subtitle: 'Votre futur logement, dans un cadre paisible et sécurisé.'
    },
    {
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      title: 'Des espaces de vie exceptionnels',
      subtitle: 'Découvrez nos appartements, studios et maisons de qualité.'
    },
    {
      image: 'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg',
      title: 'Un environnement unique',
      subtitle: 'Profitez d\'un cadre paisible et sécurisé pour toute la famille.'
    }
  ];
  
  return (
    <div className="pt-0">
      {/* Hero Section with Slider */}
      <section className="relative h-screen min-h-[600px] max-h-[800px]">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div 
                className="relative w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                  <motion.h1 
                    className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl font-display"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    className="max-w-2xl mb-8 text-xl md:text-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.div
                    className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Link 
                      to="/logements" 
                      className="px-8 py-3 text-lg font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors"
                    >
                      Voir les logements
                    </Link>
                    <Link 
                      to="/reserver-visite" 
                      className="px-8 py-3 text-lg font-medium text-primary-800 bg-white rounded-md hover:bg-gray-100 transition-colors"
                    >
                      Réserver une visite
                    </Link>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      
      {/* Featured Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl font-display text-primary-800">Nos Logements Phares</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Découvrez nos propriétés les plus populaires, disponibles à la vente ou à la location.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/logements" 
              className="inline-flex items-center px-6 py-3 font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors"
            >
              Voir tous les logements
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section with Image */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-3xl font-bold md:text-4xl font-display text-primary-800">
                À propos de la Résidence El Nour
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                La Résidence El Nour est un ensemble résidentiel offrant des logements de qualité dans un cadre paisible et sécurisé. Que vous recherchiez un studio confortable, un appartement familial ou une maison indépendante, nous proposons des solutions adaptées à tous les besoins et budgets.
              </p>
              <p className="mb-8 text-lg text-gray-600">
                Implantée dans un quartier recherché, la résidence bénéficie d'un environnement privilégié à proximité des commerces, écoles et transports. Les espaces verts soigneusement aménagés et les services proposés font de la Résidence El Nour un lieu de vie idéal.
              </p>
              <Link 
                to="/a-propos" 
                className="inline-flex items-center px-6 py-3 font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors"
              >
                En savoir plus
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg" 
                alt="Résidence El Nour" 
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features/Benefits Section */}
      <section className="py-16 bg-primary-50">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl font-display text-primary-800">
              Pourquoi choisir la Résidence El Nour ?
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Des avantages uniques pour un confort de vie optimal
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-primary-600 rounded-lg">
                <Map size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary-800">Emplacement Idéal</h3>
              <p className="text-gray-600">
                Située dans un quartier prisé, à proximité des commerces, écoles et transports en commun.
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
                <Home size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary-800">Qualité Supérieure</h3>
              <p className="text-gray-600">
                Des logements conçus avec des matériaux de qualité et des finitions soignées pour votre confort.
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
                <Shield size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary-800">Sécurité Garantie</h3>
              <p className="text-gray-600">
                Résidence sécurisée avec contrôle d'accès, vidéosurveillance et gardiennage pour votre tranquillité.
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
                <Leaf size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary-800">Cadre Verdoyant</h3>
              <p className="text-gray-600">
                Espaces verts aménagés et environnement paysager pour un cadre de vie agréable et ressourçant.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl font-display text-primary-800">
              Ce que disent nos résidents
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Découvrez les témoignages de ceux qui ont choisi la Résidence El Nour
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredTestimonials.map((testimonial) => (
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 text-white bg-primary-700">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-display">
              Prêt à découvrir votre futur logement ?
            </h2>
            <p className="mb-8 text-xl opacity-90">
              Réservez dès maintenant une visite pour explorer les possibilités qui s'offrent à vous.
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link 
                to="/reserver-visite" 
                className="px-8 py-3 text-lg font-medium text-primary-800 bg-white rounded-md hover:bg-gray-100 transition-colors"
              >
                Réserver une visite
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-3 text-lg font-medium text-white border-2 border-white rounded-md hover:bg-white/10 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;