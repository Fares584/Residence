import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';
  
  const headerClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    {
      'bg-white shadow-md': isScrolled || !isHomePage,
      'bg-transparent': !isScrolled && isHomePage,
    }
  );

  const navItemClasses = cn(
    'px-3 py-2 text-sm font-medium rounded-md transition-colors',
    {
      'text-primary-800 hover:text-primary-700': isScrolled || !isHomePage,
      'text-white hover:text-beige-100': !isScrolled && isHomePage,
    }
  );

  const logoClasses = cn(
    'font-display text-xl md:text-2xl font-bold transition-colors',
    {
      'text-primary-800': isScrolled || !isHomePage,
      'text-white': !isScrolled && isHomePage,
    }
  );

  const activeNavItem = 'bg-primary-50 text-primary-800';

  const navItems = [
    { title: 'Accueil', path: '/' },
    { title: 'Nos Logements', path: '/logements' },
    { title: 'Tarifs', path: '/tarifs' },
    { title: 'Localisation', path: '/localisation' },
    { title: 'À Propos', path: '/a-propos' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header className={headerClasses}>
      <div className="container px-4 py-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className={logoClasses}>
              Résidence El Nour
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  isActive ? cn(navItemClasses, activeNavItem) : navItemClasses
                }
              >
                {item.title}
              </NavLink>
            ))}
            <Link 
              to="/reserver-visite" 
              className="ml-4 btn btn-primary"
            >
              Réserver une visite
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className={cn(
                'inline-flex items-center justify-center p-2 rounded-md',
                {
                  'text-primary-800 hover:text-primary-700 hover:bg-primary-100': isScrolled || !isHomePage,
                  'text-white hover:text-white hover:bg-primary-600/20': !isScrolled && isHomePage,
                }
              )}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  cn(
                    'block px-3 py-2 text-base font-medium rounded-md',
                    isActive 
                      ? 'bg-primary-50 text-primary-800' 
                      : 'text-primary-800 hover:text-primary-700 hover:bg-primary-50'
                  )
                }
                onClick={closeMenu}
              >
                {item.title}
              </NavLink>
            ))}
            <Link 
              to="/reserver-visite" 
              className="block w-full px-3 py-2 mt-4 text-base font-medium text-center text-white bg-primary-600 rounded-md hover:bg-primary-700"
              onClick={closeMenu}
            >
              Réserver une visite
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;