import { useState } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Placeholder images - replace with your actual graphic design images
import graphicImg1 from '../assets/Graphics/a.jpg';
import graphicImg2 from '../assets/Graphics/2.jpg';
import graphicImg3 from '../assets/Graphics/3.jpg';
import graphicImg4 from '../assets/Graphics/4.jpg';
import graphicImg5 from '../assets/Graphics/5.jpg';
import graphicImg6 from '../assets/Graphics/6.jpg';
import graphicImg7 from '../assets/Graphics/7.jpg';
import graphicImg8 from '../assets/Graphics/8.jpg';
import graphicImg9 from '../assets/Graphics/9.jpg';
import graphicImg10 from '../assets/Graphics/10.jpg';
import graphicImg11 from '../assets/Graphics/11.jpg';
import graphicImg12 from '../assets/Graphics/12.jpg';



const GraphicsGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { theme } = useTheme();
  const galleryAnimation = useScrollAnimation();

  const graphicImages = [
    { id: 1, src: graphicImg1, alt: 'Graphic Design 1', orientation: 'portrait' },
    { id: 2, src: graphicImg2, alt: 'Graphic Design 2', orientation: 'portrait' },
    { id: 3, src: graphicImg3, alt: 'Graphic Design 3', orientation: 'landscape' },
    { id: 4, src: graphicImg4, alt: 'Graphic Design 4', orientation: 'landscape' },
    { id: 5, src: graphicImg5, alt: 'Graphic Design 5', orientation: 'portrait' },
    { id: 6, src: graphicImg6, alt: 'Graphic Design 6', orientation: 'portrait' },
    { id: 7, src: graphicImg7, alt: 'Graphic Design 7', orientation: 'landscape' },
    { id: 8, src: graphicImg8, alt: 'Graphic Design 8', orientation: 'landscape' },
    { id: 9, src: graphicImg9, alt: 'Graphic Design 9', orientation: 'portrait' },
    { id: 10, src: graphicImg10, alt: 'Graphic Design 10', orientation: 'landscape' },
    { id: 11, src: graphicImg11, alt: 'Graphic Design 11', orientation: 'landscape' },
    { id: 12, src: graphicImg12, alt: 'Graphic Design 12', orientation: 'landscape' },
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % graphicImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? graphicImages.length - 1 : selectedImage - 1);
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
            <h1 className={`text-xl font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Graphics Gallery</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 scroll-fade-in ${galleryAnimation.isVisible ? 'visible' : ''}`} ref={galleryAnimation.ref}>
            <h2 className={`text-3xl md:text-4xl font-elegant mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Visual Creations</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>A collection of our creative graphic designs.</p>
          </div>

          <div className="masonry-grid">
            {graphicImages.map((image, index) => (
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
              src={graphicImages[selectedImage].src}
              alt={graphicImages[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {selectedImage + 1} / {graphicImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GraphicsGallery; 