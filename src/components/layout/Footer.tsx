import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: About */}
          <div>
            <h3 className="mb-4 text-lg font-display font-bold">Résidence El Nour</h3>
            <p className="mb-4 text-gray-300">
              Votre futur logement, dans un cadre paisible et sécurisé. Des appartements, studios et maisons de qualité disponibles à la location et à l'achat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Col 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-display font-bold">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/logements" className="text-gray-300 hover:text-white transition-colors">
                  Nos Logements
                </Link>
              </li>
              <li>
                <Link to="/tarifs" className="text-gray-300 hover:text-white transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link to="/localisation" className="text-gray-300 hover:text-white transition-colors">
                  Localisation
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-300 hover:text-white transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Col 3: Contact */}
          <div>
            <h3 className="mb-4 text-lg font-display font-bold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="flex-shrink-0 w-5 h-5 mr-3 text-beige-400" />
                <span className="text-gray-300">123 Avenue des Oliviers, Ville, Pays</span>
              </li>
              <li className="flex">
                <Phone className="flex-shrink-0 w-5 h-5 mr-3 text-beige-400" />
                <span className="text-gray-300">+33 1 23 45 67 89</span>
              </li>
              <li className="flex">
                <Mail className="flex-shrink-0 w-5 h-5 mr-3 text-beige-400" />
                <span className="text-gray-300">contact@residence-elnour.com</span>
              </li>
              <li className="flex">
                <Clock className="flex-shrink-0 w-5 h-5 mr-3 text-beige-400" />
                <span className="text-gray-300">Lun-Ven: 9h-18h | Sam: 10h-15h</span>
              </li>
            </ul>
          </div>
          
          {/* Col 4: Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-display font-bold">Restez Informé</h3>
            <p className="mb-4 text-gray-300">
              Recevez nos dernières offres et actualités
            </p>
            <form className="space-y-2">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Adresse e-mail
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-3 py-2 text-gray-900 placeholder-gray-500 bg-white border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Votre email"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full px-4 py-2 text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  S'abonner
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-700">
          <p className="text-sm text-center text-gray-400">
            © {currentYear} Résidence El Nour. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;