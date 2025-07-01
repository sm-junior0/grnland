import { Mail, Contact } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`border-t ${theme === 'dark' ? 'bg-black border-gray-800' : 'bg-gray-100 border-gray-300'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Greenland Film & TV School</h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Inspiring a new generation of creative film professionals through practical, hands-on education.
            </p>
            <div className={`flex items-center space-x-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <Contact size={16} />
              <span>Learn by Doing</span>
            </div>
          </div>

          <div>
            <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Quick Links</h4>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <li><a href="/about" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>About Us</a></li>
              <li><a href="/courses" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>Courses</a></li>
              <li><a href="/gallery" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>Gallery</a></li>
              <li><a href="/admission" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>Admission</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Contact Info</h4>
            <div className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>greenlandfilmschool@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Contact size={16} />
                <span>+250 788 761 690</span>
              </div>
              <p className="text-sm">
                Kigali, Rwanda<br />
                Nyarugenge KN 4 Ave<br />
                Car-Free Zone, Opposite Cogebank HQ
              </p>
            </div>
          </div>
        </div>

        <div className={`border-t mt-8 pt-8 text-center ${theme === 'dark' ? 'border-gray-800 text-gray-400' : 'border-gray-300 text-gray-600'}`}>
          <p>&copy; 2024 Greenland Film and Television School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
