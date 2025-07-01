import { useState } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const BusinessGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { theme } = useTheme();
  const galleryAnimation = useScrollAnimation();

  const businessImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=1200&fit=crop',
      alt: 'Professional headshot',
      orientation: 'portrait'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop',
      alt: 'Business portrait',
      orientation: 'portrait'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=800&fit=crop',
      alt: 'Corporate environment',
      orientation: 'landscape'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
      alt: 'Professional setting',
      orientation: 'landscape'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=1200&fit=crop',
      alt: 'Executive portrait',
      orientation: 'portrait'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop',
      alt: 'Business professional',
      orientation: 'portrait'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=800&fit=crop',
      alt: 'Corporate branding',
      orientation: 'landscape'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
      alt: 'Professional environment',
      orientation: 'landscape'
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % businessImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? businessImages.length - 1 : selectedImage - 1);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={`min-h-screen font-opensans-light ${theme === 'dark' ? 'bg-custom-black' : 'bg-custom-white'}`}>
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
              Back to Gallery
            </Button>
            <h1 className={`text-xl font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Business Gallery</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 scroll-fade-in ${galleryAnimation.isVisible ? 'visible' : ''}`} ref={galleryAnimation.ref}>
            <h2 className={`text-3xl md:text-4xl font-elegant mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Professional Branding</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Elevate your professional image with authentic portraits</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {businessImages.map((image, index) => (
              <div
                key={image.id}
                className={`group cursor-pointer overflow-hidden rounded-lg animate-bounce-in hover:scale-105 transition-all duration-300 shadow-xl ${
                  image.orientation === 'portrait' ? 'row-span-2' : 'row-span-1'
                } ${theme === 'dark' ? 'bg-custom-black' : 'bg-white'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
              src={businessImages[selectedImage].src}
              alt={businessImages[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {selectedImage + 1} / {businessImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessGallery; 