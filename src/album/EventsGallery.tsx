import { useState } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Import all 48 event images
import eventImg1 from '../../assets/events/1.jpg';
import eventImg2 from '../../assets/events/2.jpg';
import eventImg3 from '../../assets/events/3.jpg';
import eventImg4 from '../../assets/events/4.jpg';
import eventImg5 from '../../assets/events/5.jpg';
import eventImg6 from '../../assets/events/6.jpg';
import eventImg7 from '../../assets/events/7.jpg';
import eventImg8 from '../../assets/events/8.jpg';
import eventImg9 from '../../assets/events/9.jpg';
import eventImg10 from '../../assets/events/10.jpg';
import eventImg11 from '../../assets/events/11.jpg';
import eventImg12 from '../../assets/events/12.jpg';
import eventImg13 from '../../assets/events/13.jpg';
import eventImg14 from '../../assets/events/14.jpg';
import eventImg15 from '../../assets/events/15.jpg';
import eventImg16 from '../../assets/events/16.jpg';
import eventImg17 from '../../assets/events/17.jpg';
import eventImg18 from '../../assets/events/18.jpg';
import eventImg19 from '../../assets/events/19.jpg';
import eventImg20 from '../../assets/events/20.jpg';
import eventImg21 from '../../assets/events/21.jpg';
import eventImg22 from '../../assets/events/22.jpg';
import eventImg23 from '../../assets/events/23.jpg';
import eventImg24 from '../../assets/events/24.jpg';
import eventImg25 from '../../assets/events/25.jpg';
import eventImg26 from '../../assets/events/26.jpg';
import eventImg27 from '../../assets/events/27.jpg';
import eventImg28 from '../../assets/events/28.jpg';
import eventImg29 from '../../assets/events/29.jpg';
import eventImg30 from '../../assets/events/30.jpg';
import eventImg31 from '../../assets/events/31.jpg';
import eventImg32 from '../../assets/events/32.jpg';
import eventImg33 from '../../assets/events/33.jpg';
import eventImg34 from '../../assets/events/34.jpg';
import eventImg35 from '../../assets/events/35.jpg';
import eventImg36 from '../../assets/events/36.jpg';
import eventImg37 from '../../assets/events/37.jpg';
import eventImg38 from '../../assets/events/38.jpg';
import eventImg39 from '../../assets/events/39.jpg';
import eventImg40 from '../../assets/events/40.jpg';
import eventImg41 from '../../assets/events/41.jpg';
import eventImg42 from '../../assets/events/42.jpg';
import eventImg43 from '../../assets/events/43.jpg';
import eventImg44 from '../../assets/events/44.jpg';
import eventImg45 from '../../assets/events/45.jpg';
import eventImg46 from '../../assets/events/46.jpg';
import eventImg47 from '../../assets/events/47.jpg';
import eventImg48 from '../../assets/events/48.jpg';

const EventsGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { theme } = useTheme();
  const galleryAnimation = useScrollAnimation();

  const eventImages = [
    { id: 1, src: eventImg1, alt: 'Event Photo 1', orientation: 'landscape' },
    { id: 2, src: eventImg2, alt: 'Event Photo 2', orientation: 'portrait' },
    { id: 3, src: eventImg3, alt: 'Event Photo 3', orientation: 'landscape' },
    { id: 4, src: eventImg4, alt: 'Event Photo 4', orientation: 'landscape' },
    { id: 5, src: eventImg5, alt: 'Event Photo 5', orientation: 'portrait' },
    { id: 6, src: eventImg6, alt: 'Event Photo 6', orientation: 'landscape' },
    { id: 7, src: eventImg7, alt: 'Event Photo 7', orientation: 'portrait' },
    { id: 8, src: eventImg8, alt: 'Event Photo 8', orientation: 'landscape' },
    { id: 9, src: eventImg9, alt: 'Event Photo 9', orientation: 'landscape' },
    { id: 10, src: eventImg10, alt: 'Event Photo 10', orientation: 'portrait' },
    { id: 11, src: eventImg11, alt: 'Event Photo 11', orientation: 'landscape' },
    { id: 12, src: eventImg12, alt: 'Event Photo 12', orientation: 'portrait' },
    { id: 13, src: eventImg13, alt: 'Event Photo 13', orientation: 'landscape' },
    { id: 14, src: eventImg14, alt: 'Event Photo 14', orientation: 'landscape' },
    { id: 15, src: eventImg15, alt: 'Event Photo 15', orientation: 'portrait' },
    { id: 16, src: eventImg16, alt: 'Event Photo 16', orientation: 'landscape' },
    { id: 17, src: eventImg17, alt: 'Event Photo 17', orientation: 'portrait' },
    { id: 18, src: eventImg18, alt: 'Event Photo 18', orientation: 'landscape' },
    { id: 19, src: eventImg19, alt: 'Event Photo 19', orientation: 'landscape' },
    { id: 20, src: eventImg20, alt: 'Event Photo 20', orientation: 'portrait' },
    { id: 21, src: eventImg21, alt: 'Event Photo 21', orientation: 'landscape' },
    { id: 22, src: eventImg22, alt: 'Event Photo 22', orientation: 'portrait' },
    { id: 23, src: eventImg23, alt: 'Event Photo 23', orientation: 'landscape' },
    { id: 24, src: eventImg24, alt: 'Event Photo 24', orientation: 'landscape' },
    { id: 25, src: eventImg25, alt: 'Event Photo 25', orientation: 'portrait' },
    { id: 26, src: eventImg26, alt: 'Event Photo 26', orientation: 'landscape' },
    { id: 27, src: eventImg27, alt: 'Event Photo 27', orientation: 'portrait' },
    { id: 28, src: eventImg28, alt: 'Event Photo 28', orientation: 'landscape' },
    { id: 29, src: eventImg29, alt: 'Event Photo 29', orientation: 'landscape' },
    { id: 30, src: eventImg30, alt: 'Event Photo 30', orientation: 'portrait' },
    { id: 31, src: eventImg31, alt: 'Event Photo 31', orientation: 'landscape' },
    { id: 32, src: eventImg32, alt: 'Event Photo 32', orientation: 'portrait' },
    { id: 33, src: eventImg33, alt: 'Event Photo 33', orientation: 'landscape' },
    { id: 34, src: eventImg34, alt: 'Event Photo 34', orientation: 'landscape' },
    { id: 35, src: eventImg35, alt: 'Event Photo 35', orientation: 'portrait' },
    { id: 36, src: eventImg36, alt: 'Event Photo 36', orientation: 'landscape' },
    { id: 37, src: eventImg37, alt: 'Event Photo 37', orientation: 'portrait' },
    { id: 38, src: eventImg38, alt: 'Event Photo 38', orientation: 'landscape' },
    { id: 39, src: eventImg39, alt: 'Event Photo 39', orientation: 'landscape' },
    { id: 40, src: eventImg40, alt: 'Event Photo 40', orientation: 'portrait' },
    { id: 41, src: eventImg41, alt: 'Event Photo 41', orientation: 'landscape' },
    { id: 42, src: eventImg42, alt: 'Event Photo 42', orientation: 'portrait' },
    { id: 43, src: eventImg43, alt: 'Event Photo 43', orientation: 'landscape' },
    { id: 44, src: eventImg44, alt: 'Event Photo 44', orientation: 'landscape' },
    { id: 45, src: eventImg45, alt: 'Event Photo 45', orientation: 'portrait' },
    { id: 46, src: eventImg46, alt: 'Event Photo 46', orientation: 'landscape' },
    { id: 47, src: eventImg47, alt: 'Event Photo 47', orientation: 'portrait' },
    { id: 48, src: eventImg48, alt: 'Event Photo 48', orientation: 'landscape' },
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % eventImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? eventImages.length - 1 : selectedImage - 1);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={`min-h-screen font-opensans-light ${theme === 'dark' ? 'bg-custom-black' : 'bg-custom-white'}`}>
      {/* Header */}
      <div className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b ${
        theme === 'dark' ? 'bg-custom-black/90 border-gray-800' : 'bg-custom-white/90 border-gray-300'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button 
              onClick={() => window.history.back()} 
              variant="ghost" 
              className={`hover:bg-white/10 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Galleries
            </Button>
            <h1 className={`text-xl font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Events Gallery</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 scroll-fade-in ${galleryAnimation.isVisible ? 'visible' : ''}`} ref={galleryAnimation.ref}>
            <h2 className={`text-3xl md:text-4xl font-elegant mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Capturing Moments</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>The energy and emotion of your special events.</p>
          </div>

          <div className="masonry-grid">
            {eventImages.map((image, index) => (
              <div
                key={image.id}
                className={`masonry-grid-item group cursor-pointer overflow-hidden rounded-lg animate-bounce-in hover:scale-105 transition-all duration-300 shadow-xl ${theme === 'dark' ? 'bg-custom-black' : 'bg-white'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 transition-all duration-300 flex items-center justify-center ${
                    theme === 'dark' ? 'bg-black/0 group-hover:bg-black/30' : 'bg-white/0 group-hover:bg-white/30'
                  }`}>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`backdrop-blur-sm rounded-full p-3 ${
                        theme === 'dark' ? 'bg-white/20' : 'bg-black/20'
                      }`}>
                        <div className={`w-6 h-6 border-2 rounded-full ${
                          theme === 'dark' ? 'border-white' : 'border-black'
                        }`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="relative max-w-7xl max-h-full p-4">
            <Button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 z-10"
              size="sm"
            >
              <X size={20} />
            </Button>
            
            <Button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 z-10"
              size="sm"
            >
              <ChevronLeft size={24} />
            </Button>
            
            <Button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 z-10"
              size="sm"
            >
              <ChevronRight size={24} />
            </Button>

            <img
              src={eventImages[selectedImage].src}
              alt={eventImages[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {selectedImage + 1} / {eventImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsGallery; 