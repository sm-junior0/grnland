import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import logo from '../../assets/team/Greenland.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#photos', label: 'Photos' },
    { href: '#videos', label: 'Videos' },
    { href: '#team', label: 'Team' },
    { href: '#catalogue', label: 'Catalogue' },
    { href: '#partners', label: 'Partners' },
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => scrollToSection('#home')}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="text-2xl font-bold">
              <img src={logo} alt="Greenland Film & TV School Logo" className="h-28 w-auto" />
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-medium transition-colors duration-200 relative group ${
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
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors duration-200 relative group ${
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
            <ThemeToggle />
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
                    onClick={() => scrollToSection(link.href)}
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
