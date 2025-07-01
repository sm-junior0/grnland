import { useState } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Placeholder images - replace with your actual hotel & resort images
import hotelImg1 from '../../assets/Hotels/1.jpg';
import hotelImg2 from '../../assets/Hotels/2.jpg';
import hotelImg3 from '../../assets/Hotels/3.jpg';
import hotelImg4 from '../../assets/Hotels/4.jpg';
import hotelImg5 from '../../assets/Hotels/5.jpg';
import hotelImg6 from '../../assets/Hotels/6.jpg';
import hotelImg7 from '../../assets/Hotels/7.jpg';
import hotelImg8 from '../../assets/Hotels/8.jpg';
import hotelImg9 from '../../assets/Hotels/9.jpg';
import hotelImg10 from '../../assets/Hotels/10.jpg';
import hotelImg11 from '../../assets/Hotels/11.jpg';
import hotelImg12 from '../../assets/Hotels/12.jpg';
import hotelImg13 from '../../assets/Hotels/13.jpg';
import hotelImg14 from '../../assets/Hotels/14.jpg';
import hotelImg15 from '../../assets/Hotels/15.jpg';
import hotelImg16 from '../../assets/Hotels/16.jpg';
import hotelImg17 from '../../assets/Hotels/17.jpg';
import hotelImg18 from '../../assets/Hotels/18.jpg';
import hotelImg19 from '../../assets/Hotels/19.jpg';
import hotelImg20 from '../../assets/Hotels/20.jpg';
import hotelImg21 from '../../assets/Hotels/21.jpg';
import hotelImg22 from '../../assets/Hotels/22.jpg';
import hotelImg23 from '../../assets/Hotels/23.jpg';
import hotelImg24 from '../../assets/Hotels/24.jpg';
import hotelImg25 from '../../assets/Hotels/25.jpg';
import hotelImg26 from '../../assets/Hotels/26.jpg';
import hotelImg27 from '../../assets/Hotels/27.jpg';





const HotelsGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { theme } = useTheme();
  const galleryAnimation = useScrollAnimation();

  const hotelImages = [
    { id: 1, src: hotelImg1, alt: 'Luxury Hotel Room', orientation: 'landscape' },
    { id: 2, src: hotelImg2, alt: 'Resort Poolside', orientation: 'landscape' },
    { id: 3, src: hotelImg3, alt: 'Hotel Exterior', orientation: 'portrait' },
    { id: 4, src: hotelImg4, alt: 'Fine Dining Restaurant', orientation: 'landscape' },
    { id: 5, src: hotelImg5, alt: 'Spa and Wellness Center', orientation: 'portrait' },
    { id: 6, src: hotelImg6, alt: 'Hotel Exterior', orientation: 'landscape' },
    { id: 7, src: hotelImg7, alt: 'Resort Poolside', orientation: 'landscape' },
    { id: 8, src: hotelImg8, alt: 'Hotel Exterior', orientation: 'portrait' },
    { id: 9, src: hotelImg9, alt: 'Fine Dining Restaurant', orientation: 'landscape' },
    { id: 10, src: hotelImg10, alt: 'Spa and Wellness Center', orientation: 'portrait' },
    { id: 11, src: hotelImg11, alt: 'Hotel Exterior', orientation: 'landscape' },
    { id: 12, src: hotelImg12, alt: 'Resort Poolside', orientation: 'landscape' },
    { id: 13, src: hotelImg13, alt: 'Hotel Exterior', orientation: 'portrait' },
    { id: 14, src: hotelImg14, alt: 'Fine Dining Restaurant', orientation: 'landscape' },
    { id: 15, src: hotelImg15, alt: 'Spa and Wellness Center', orientation: 'portrait' },
    { id: 16, src: hotelImg16, alt: 'Hotel Exterior', orientation: 'landscape' },
    { id: 17, src: hotelImg17, alt: 'Resort Poolside', orientation: 'landscape' },
    { id: 18, src: hotelImg18, alt: 'Hotel Exterior', orientation: 'portrait' },
    { id: 19, src: hotelImg19, alt: 'Fine Dining Restaurant', orientation: 'landscape' },
    { id: 20, src: hotelImg20, alt: 'Spa and Wellness Center', orientation: 'portrait' },
    { id: 21, src: hotelImg21, alt: 'Hotel Exterior', orientation: 'landscape' },
    { id: 22, src: hotelImg22, alt: 'Resort Poolside', orientation: 'landscape' },
    { id: 23, src: hotelImg23, alt: 'Hotel Exterior', orientation: 'portrait' },
    { id: 24, src: hotelImg24, alt: 'Fine Dining Restaurant', orientation: 'landscape' },
    { id: 25, src: hotelImg25, alt: 'Spa and Wellness Center', orientation: 'portrait' },
    { id: 26, src: hotelImg26, alt: 'Hotel Exterior', orientation: 'landscape' },
    { id: 27, src: hotelImg27, alt: 'Resort Poolside', orientation: 'landscape' },
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % hotelImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? hotelImages.length - 1 : selectedImage - 1);
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
            <h1 className={`text-xl font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Hotels & Resorts Gallery</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 scroll-fade-in ${galleryAnimation.isVisible ? 'visible' : ''}`} ref={galleryAnimation.ref}>
            <h2 className={`text-3xl md:text-4xl font-elegant mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Luxury Stays</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Showcasing the beauty and elegance of top hotels and resorts.</p>
          </div>

          <div className="masonry-grid">
            {hotelImages.map((image, index) => (
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
              src={hotelImages[selectedImage].src}
              alt={hotelImages[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {selectedImage + 1} / {hotelImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelsGallery; 