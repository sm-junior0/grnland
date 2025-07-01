import { useState } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Placeholder images - replace with your actual wildlife images
import wildlifeImg1 from '../assets/Wildlife/1.jpg';
import wildlifeImg2 from '../assets/Wildlife/2.jpg';
import wildlifeImg3 from '../assets/Wildlife/3.jpg';
import wildlifeImg4 from '../assets/Wildlife/4.jpg';
import wildlifeImg5 from '../assets/Wildlife/5.jpg';
import wildlifeImg6 from '../assets/Wildlife/6.jpg';
import wildlifeImg7 from '../assets/Wildlife/7.jpg';
import wildlifeImg8 from '../assets/Wildlife/8.jpg';
import wildlifeImg9 from '../assets/Wildlife/9.jpg';
import wildlifeImg10 from '../assets/Wildlife/10.jpg';
import wildlifeImg11 from '../assets/Wildlife/11.jpg';
import wildlifeImg12 from '../assets/Wildlife/12.jpg';
import wildlifeImg13 from '../assets/Wildlife/13.jpg';
import wildlifeImg14 from '../assets/Wildlife/14.jpg';
import wildlifeImg15 from '../assets/Wildlife/15.jpg';
import wildlifeImg16 from '../assets/Wildlife/16.jpg';
import wildlifeImg17 from '../assets/Wildlife/17.jpg';
import wildlifeImg18 from '../assets/Wildlife/18.jpg';
import wildlifeImg19 from '../assets/Wildlife/19.jpg';
import wildlifeImg20 from '../assets/Wildlife/20.jpg';
import wildlifeImg21 from '../assets/Wildlife/21.jpg';
import wildlifeImg22 from '../assets/Wildlife/22.jpg';
import wildlifeImg23 from '../assets/Wildlife/23.jpg';
import wildlifeImg24 from '../assets/Wildlife/24.jpg';
import wildlifeImg25 from '../assets/Wildlife/25.jpg';
import wildlifeImg26 from '../assets/Wildlife/26.jpg';
import wildlifeImg27 from '../assets/Wildlife/27.jpg';
import wildlifeImg28 from '../assets/Wildlife/28.jpg';
import wildlifeImg29 from '../assets/Wildlife/29.jpg';
import wildlifeImg30 from '../assets/Wildlife/30.jpg';
import wildlifeImg31 from '../assets/Wildlife/31.jpg';
import wildlifeImg32 from '../assets/Wildlife/32.jpg';
import wildlifeImg33 from '../assets/Wildlife/33.jpg';
import wildlifeImg34 from '../assets/Wildlife/34.jpg';
import wildlifeImg35 from '../assets/Wildlife/35.jpg';
import wildlifeImg36 from '../assets/Wildlife/36.jpg';
import wildlifeImg37 from '../assets/Wildlife/37.jpg';
import wildlifeImg38 from '../assets/Wildlife/38.jpg';
import wildlifeImg39 from '../assets/Wildlife/39.jpg';
import wildlifeImg40 from '../assets/Wildlife/40.jpg';
import wildlifeImg41 from '../assets/Wildlife/41.jpg';
import wildlifeImg42 from '../assets/Wildlife/42.jpg';
import wildlifeImg43 from '../assets/Wildlife/43.jpg';



const WildlifeGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { theme } = useTheme();
  const galleryAnimation = useScrollAnimation();

  const wildlifeImages = [
    { id: 1, src: wildlifeImg1, alt: 'Lion in the Savanna', orientation: 'landscape' },
    { id: 2, src: wildlifeImg2, alt: 'Elephant Herd', orientation: 'landscape' },
    { id: 3, src: wildlifeImg3, alt: 'Colorful Toucan', orientation: 'portrait' },
    { id: 4, src: wildlifeImg4, alt: 'Monkey in a Tree', orientation: 'portrait' },
    { id: 5, src: wildlifeImg5, alt: 'Underwater Coral Reef', orientation: 'landscape' },
    { id: 6, src: wildlifeImg6, alt: 'Giraffe in the Savannah', orientation: 'landscape' },
    { id: 7, src: wildlifeImg7, alt: 'Kangaroo in the Outback', orientation: 'portrait' },
    { id: 8, src: wildlifeImg8, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 9, src: wildlifeImg9, alt: 'Penguin on the Iceberg', orientation: 'landscape' },
    { id: 10, src: wildlifeImg10, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 11, src: wildlifeImg11, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 12, src: wildlifeImg12, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 13, src: wildlifeImg13, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 14, src: wildlifeImg14, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 15, src: wildlifeImg15, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 16, src: wildlifeImg16, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 17, src: wildlifeImg17, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 18, src: wildlifeImg18, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 19, src: wildlifeImg19, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 20, src: wildlifeImg20, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 21, src: wildlifeImg21, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 22, src: wildlifeImg22, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 23, src: wildlifeImg23, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 24, src: wildlifeImg24, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 25, src: wildlifeImg25, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 26, src: wildlifeImg26, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 27, src: wildlifeImg27, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 28, src: wildlifeImg28, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 29, src: wildlifeImg29, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 30, src: wildlifeImg30, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 31, src: wildlifeImg31, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 32, src: wildlifeImg32, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 33, src: wildlifeImg33, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 34, src: wildlifeImg34, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 35, src: wildlifeImg35, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 36, src: wildlifeImg36, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 37, src: wildlifeImg37, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 38, src: wildlifeImg38, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 39, src: wildlifeImg39, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 40, src: wildlifeImg40, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 41, src: wildlifeImg41, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 42, src: wildlifeImg42, alt: 'Panda in the Forest', orientation: 'portrait' },
    { id: 43, src: wildlifeImg43, alt: 'Panda in the Forest', orientation: 'portrait' },
    
    
    
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % wildlifeImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? wildlifeImages.length - 1 : selectedImage - 1);
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
            <h1 className={`text-xl font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Wildlife Gallery</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 scroll-fade-in ${galleryAnimation.isVisible ? 'visible' : ''}`} ref={galleryAnimation.ref}>
            <h2 className={`text-3xl md:text-4xl font-elegant mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Into the Wild</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Exploring the beauty of the natural world and its inhabitants.</p>
          </div>

          <div className="masonry-grid">
            {wildlifeImages.map((image, index) => (
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
              src={wildlifeImages[selectedImage].src}
              alt={wildlifeImages[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {selectedImage + 1} / {wildlifeImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WildlifeGallery; 