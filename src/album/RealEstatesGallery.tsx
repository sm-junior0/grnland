import { useState } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Placeholder images - replace with your actual real estate images
import realEstateImg1 from '../assets/RealEstates/1.jpg';
import realEstateImg2 from '../assets/RealEstates/2.jpg';
import realEstateImg3 from '../assets/RealEstates/3.jpg';
import realEstateImg4 from '../assets/RealEstates/4.jpg';
import realEstateImg5 from '../assets/RealEstates/5.jpg';
import realEstateImg6 from '../assets/RealEstates/6.jpg';
import realEstateImg7 from '../assets/RealEstates/7.jpg';
import realEstateImg8 from '../assets/RealEstates/8.jpg';
import realEstateImg9 from '../assets/RealEstates/9.jpg';
import realEstateImg10 from '../assets/RealEstates/10.jpg';
import realEstateImg11 from '../assets/RealEstates/11.jpg';
import realEstateImg12 from '../assets/RealEstates/12.jpg';
import realEstateImg13 from '../assets/RealEstates/13.jpg';
import realEstateImg14 from '../assets/RealEstates/14.jpg';
import realEstateImg15 from '../assets/RealEstates/15.jpg';
import realEstateImg16 from '../assets/RealEstates/16.jpg';
import realEstateImg17 from '../assets/RealEstates/17.jpg';
import realEstateImg18 from '../assets/RealEstates/18.jpg';
import realEstateImg19 from '../assets/RealEstates/19.jpg';
import realEstateImg20 from '../assets/RealEstates/20.jpg';
import realEstateImg21 from '../assets/RealEstates/21.jpg';
import realEstateImg22 from '../assets/RealEstates/22.jpg';
import realEstateImg23 from '../assets/RealEstates/23.jpg';
import realEstateImg24 from '../assets/RealEstates/24.jpg';
import realEstateImg25 from '../assets/RealEstates/25.jpg';
import realEstateImg26 from '../assets/RealEstates/26.jpg';
import realEstateImg27 from '../assets/RealEstates/27.jpg';
import realEstateImg28 from '../assets/RealEstates/28.jpg';
import realEstateImg29 from '../assets/RealEstates/29.jpg';
import realEstateImg30 from '../assets/RealEstates/30.jpg';
import realEstateImg31 from '../assets/RealEstates/31.jpg';
import realEstateImg32 from '../assets/RealEstates/32.jpg';
import realEstateImg33 from '../assets/RealEstates/33.jpg';
import realEstateImg34 from '../assets/RealEstates/34.jpg';
import realEstateImg35 from '../assets/RealEstates/35.jpg';
import realEstateImg36 from '../assets/RealEstates/36.jpg';
import realEstateImg37 from '../assets/RealEstates/37.jpg';
import realEstateImg38 from '../assets/RealEstates/38.jpg';
import realEstateImg39 from '../assets/RealEstates/39.jpg';
import realEstateImg40 from '../assets/RealEstates/40.jpg';
import realEstateImg41 from '../assets/RealEstates/41.jpg';
import realEstateImg42 from '../assets/RealEstates/42.jpg';
import realEstateImg43 from '../assets/RealEstates/43.jpg';
import realEstateImg44 from '../assets/RealEstates/44.jpg';
import realEstateImg45 from '../assets/RealEstates/45.jpg';
import realEstateImg46 from '../assets/RealEstates/46.jpg';
import realEstateImg47 from '../assets/RealEstates/47.jpg';
import realEstateImg48 from '../assets/RealEstates/48.jpg';
import realEstateImg49 from '../assets/RealEstates/49.jpg';
import realEstateImg50 from '../assets/RealEstates/50.jpg';


const RealEstatesGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { theme } = useTheme();
  const galleryAnimation = useScrollAnimation();

  const realEstateImages = [
    { id: 1, src: realEstateImg1, alt: 'Modern Home Exterior', orientation: 'landscape' },
    { id: 2, src: realEstateImg2, alt: 'Spacious Living Room', orientation: 'landscape' },
    { id: 3, src: realEstateImg3, alt: 'Luxury Kitchen', orientation: 'portrait' },
    { id: 4, src: realEstateImg4, alt: 'Architectural Detail', orientation: 'portrait' },
    { id: 5, src: realEstateImg5, alt: 'Beautiful Backyard', orientation: 'landscape' },
    { id: 6, src: realEstateImg6, alt: 'Modern Home Exterior', orientation: 'landscape' },
    { id: 7, src: realEstateImg7, alt: 'Spacious Living Room', orientation: 'landscape' },
    { id: 8, src: realEstateImg8, alt: 'Luxury Kitchen', orientation: 'portrait' },
    { id: 9, src: realEstateImg9, alt: 'Architectural Detail', orientation: 'portrait' },
    { id: 10, src: realEstateImg10, alt: 'Beautiful Backyard', orientation: 'landscape' },
    { id: 11, src: realEstateImg11, alt: 'Modern Home Exterior', orientation: 'landscape' },
    { id: 12, src: realEstateImg12, alt: 'Spacious Living Room', orientation: 'landscape' },
    { id: 13, src: realEstateImg13, alt: 'Luxury Kitchen', orientation: 'portrait' },
    { id: 14, src: realEstateImg14, alt: 'Architectural Detail', orientation: 'portrait' },
    { id: 15, src: realEstateImg15, alt: 'Beautiful Backyard', orientation: 'landscape' },
    { id: 16, src: realEstateImg16, alt: 'Modern Home Exterior', orientation: 'landscape' },
    { id: 17, src: realEstateImg17, alt: 'Spacious Living Room', orientation: 'landscape' },
    { id: 18, src: realEstateImg18, alt: 'Luxury Kitchen', orientation: 'portrait' },
    { id: 19, src: realEstateImg19, alt: 'Architectural Detail', orientation: 'portrait' },
    { id: 20, src: realEstateImg20, alt: 'Beautiful Backyard', orientation: 'landscape' },
    { id: 21, src: realEstateImg21, alt: 'Modern Home Exterior', orientation: 'landscape' },
    { id: 22, src: realEstateImg22, alt: 'Spacious Living Room', orientation: 'landscape' },
    { id: 23, src: realEstateImg23, alt: 'Luxury Kitchen', orientation: 'portrait' },
    { id: 24, src: realEstateImg24, alt: 'Architectural Detail', orientation: 'portrait' },
    { id: 25, src: realEstateImg25, alt: 'Beautiful Backyard', orientation: 'landscape' },
    { id: 26, src: realEstateImg26, alt: 'Modern Home Exterior', orientation: 'landscape' },
    { id: 27, src: realEstateImg27, alt: 'Spacious Living Room', orientation: 'landscape' },
    { id: 28, src: realEstateImg28, alt: 'Luxury Kitchen', orientation: 'portrait' },
    { id: 29, src: realEstateImg29, alt: 'Architectural Detail', orientation: 'portrait' },
    { id: 30, src: realEstateImg30, alt: 'Beautiful Backyard', orientation: 'landscape' },
    { id: 31, src: realEstateImg31, alt: 'Modern Home Exterior', orientation: 'landscape' },
    { id: 32, src: realEstateImg32, alt: 'Spacious Living Room', orientation: 'landscape' },
    { id: 33, src: realEstateImg33, alt: 'Luxury Kitchen', orientation: 'portrait' },
    { id: 34, src: realEstateImg34, alt: 'Architectural Detail', orientation: 'portrait' },
    { id: 35, src: realEstateImg35, alt: 'Beautiful Backyard', orientation: 'landscape' },
    { id: 36, src: realEstateImg36, alt: 'Modern Home Exterior', orientation: 'landscape' },
    { id: 37, src: realEstateImg37, alt: 'Spacious Living Room', orientation: 'landscape' },
    { id: 38, src: realEstateImg38, alt: 'Luxury Kitchen', orientation: 'portrait' },
    { id: 39, src: realEstateImg39, alt: 'Architectural Detail', orientation: 'portrait' },
    { id: 40, src: realEstateImg40, alt: 'Beautiful Backyard', orientation: 'landscape' },
    { id: 41, src: realEstateImg41, alt: 'Modern Home Exterior', orientation: 'landscape' },
    { id: 42, src: realEstateImg42, alt: 'Spacious Living Room', orientation: 'landscape' },
    { id: 43, src: realEstateImg43, alt: 'Luxury Kitchen', orientation: 'portrait' },
    { id: 44, src: realEstateImg44, alt: 'Architectural Detail', orientation: 'portrait' },
    { id: 45, src: realEstateImg45, alt: 'Beautiful Backyard', orientation: 'landscape' },
    { id: 46, src: realEstateImg46, alt: 'Modern Home Exterior', orientation: 'landscape' },
    { id: 47, src: realEstateImg47, alt: 'Spacious Living Room', orientation: 'landscape' },
    { id: 48, src: realEstateImg48, alt: 'Luxury Kitchen', orientation: 'portrait' },
    { id: 49, src: realEstateImg49, alt: 'Architectural Detail', orientation: 'portrait' },
    { id: 50, src: realEstateImg50, alt: 'Beautiful Backyard', orientation: 'landscape' },
    
    
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % realEstateImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? realEstateImages.length - 1 : selectedImage - 1);
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
            <h1 className={`text-xl font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Real Estates Gallery</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 scroll-fade-in ${galleryAnimation.isVisible ? 'visible' : ''}`} ref={galleryAnimation.ref}>
            <h2 className={`text-3xl md:text-4xl font-elegant mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Architectural Beauty</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Presenting properties in their best light through professional photography.</p>
          </div>

          <div className="masonry-grid">
            {realEstateImages.map((image, index) => (
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
              src={realEstateImages[selectedImage].src}
              alt={realEstateImages[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {selectedImage + 1} / {realEstateImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RealEstatesGallery; 