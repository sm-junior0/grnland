import { useState } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Placeholder images - replace with your actual product images
import productImg1 from '../assets/Products/1.jpg';
import productImg2 from '../assets/Products/2.jpg';
import productImg3 from '../assets/Products/3.jpg';
import productImg4 from '../assets/Products/4.jpg';
import productImg5 from '../assets/Products/5.jpg';
import productImg6 from '../assets/Products/6.jpg';
import productImg7 from '../assets/Products/7.jpg';
import productImg8 from '../assets/Products/8.jpg';
import productImg9 from '../assets/Products/9.jpg';
import productImg10 from '../assets/Products/10.jpg';
import productImg11 from '../assets/Products/11.jpg';
import productImg12 from '../assets/Products/12.jpg';
import productImg13 from '../assets/Products/13.jpg';
import productImg14 from '../assets/Products/14.jpg';
import productImg15 from '../assets/Products/15.jpg';
import productImg16 from '../assets/Products/16.jpg';
import productImg17 from '../assets/Products/17.jpg';
import productImg18 from '../assets/Products/18.jpg';
import productImg19 from '../assets/Products/19.jpg';





const ProductsGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { theme } = useTheme();
  const galleryAnimation = useScrollAnimation();

  const productImages = [
    { id: 1, src: productImg1, alt: 'Product Photo 1', orientation: 'portrait' },
    { id: 2, src: productImg2, alt: 'Product Photo 2', orientation: 'portrait' },
    { id: 3, src: productImg3, alt: 'Product Photo 3', orientation: 'landscape' },
    { id: 4, src: productImg4, alt: 'Product Photo 4', orientation: 'landscape' },
    { id: 5, src: productImg5, alt: 'Product Photo 5', orientation: 'portrait' },
    { id: 6, src: productImg6, alt: 'Product Photo 6', orientation: 'portrait' },
    { id: 7, src: productImg7, alt: 'Product Photo 7', orientation: 'landscape' },
    { id: 8, src: productImg8, alt: 'Product Photo 8', orientation: 'landscape' },
    { id: 9, src: productImg9, alt: 'Product Photo 9', orientation: 'portrait' },
    { id: 10, src: productImg10, alt: 'Product Photo 10', orientation: 'portrait' },
    { id: 11, src: productImg11, alt: 'Product Photo 11', orientation: 'landscape' },
    { id: 12, src: productImg12, alt: 'Product Photo 12', orientation: 'landscape' },
    { id: 13, src: productImg13, alt: 'Product Photo 13', orientation: 'portrait' },
    { id: 14, src: productImg14, alt: 'Product Photo 14', orientation: 'portrait' },
    { id: 15, src: productImg15, alt: 'Product Photo 15', orientation: 'landscape' },
    { id: 16, src: productImg16, alt: 'Product Photo 16', orientation: 'landscape' },
    { id: 17, src: productImg17, alt: 'Product Photo 17', orientation: 'portrait' },
    { id: 18, src: productImg18, alt: 'Product Photo 18', orientation: 'portrait' },
    { id: 19, src: productImg19, alt: 'Product Photo 19', orientation: 'landscape' },
    
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % productImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? productImages.length - 1 : selectedImage - 1);
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
            <h1 className={`text-xl font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Products Gallery</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 scroll-fade-in ${galleryAnimation.isVisible ? 'visible' : ''}`} ref={galleryAnimation.ref}>
            <h2 className={`text-3xl md:text-4xl font-elegant mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Commercial Showcase</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Highlighting products with stunning commercial photography.</p>
          </div>

          <div className="masonry-grid">
            {productImages.map((image, index) => (
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
              src={productImages[selectedImage].src}
              alt={productImages[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {selectedImage + 1} / {productImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsGallery; 