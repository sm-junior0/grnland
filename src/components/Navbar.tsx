import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/team/Greenland.png';
import logo2 from '../assets/team/Greenlandwhite.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#photos', label: 'Photos' },
    { href: '#videos', label: 'Videos' },
    { href: '#catalogue', label: 'Catalogue' },
    { href: '/portfolios', label: 'Portfolios' },
    { href: '#partners', label: 'Clients' },
    { href: '#contact', label: 'Contact' },
    { href: `${window.location.origin}/school`, label: 'School', external: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? theme === 'dark' 
          ? 'bg-navbar-dark/90 backdrop-blur-md shadow-lg' 
          : 'bg-navbar-light/90 backdrop-blur-md shadow-lg'
        : theme === 'dark'
          ? 'bg-navbar-dark/30 backdrop-blur-sm'
          : 'bg-navbar-light/30 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button 
            onClick={() => handleNavigation('#home')}
            className="flex items-center space-x-2 cursor-pointer h-full"
          >
            <img src={logo2} alt="Greenland Film & TV School Logo" className="h-16 w-auto object-contain" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-semibold transition-all duration-200 relative group ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    theme === 'dark' ? 'bg-white' : 'bg-black'
                  }`}></span>
                </a>
              ) : (
                <button
                  key={link.href}
                  onClick={() => handleNavigation(link.href)}
                  className={`text-sm font-semibold transition-all duration-200 relative group ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    theme === 'dark' ? 'bg-white' : 'bg-black'
                  }`}></span>
                </button>
              )
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-200 ${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden shadow-lg border-t ${
            theme === 'dark' 
              ? 'bg-navbar-dark/95 backdrop-blur-md border-white/10' 
              : 'bg-navbar-light/95 backdrop-blur-md border-black/10'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                      theme === 'dark'
                        ? 'text-gray-300 hover:text-white hover:bg-white/10'
                        : 'text-gray-600 hover:text-black hover:bg-black/10'
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => handleNavigation(link.href)}
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                      theme === 'dark'
                        ? 'text-gray-300 hover:text-white hover:bg-white/10'
                        : 'text-gray-600 hover:text-black hover:bg-black/10'
                    }`}
                  >
                    {link.label}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
