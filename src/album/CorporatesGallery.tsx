import { useState } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Import all 36 corporate images
import corpImg1 from '../../assets/corporates/1.jpg';
import corpImg2 from '../../assets/corporates/2.jpg';
import corpImg3 from '../../assets/corporates/3.jpg';
import corpImg4 from '../../assets/corporates/4.jpg';
import corpImg5 from '../../assets/corporates/5.jpg';
import corpImg6 from '../../assets/corporates/6.jpg';
import corpImg7 from '../../assets/corporates/7.jpg';
import corpImg8 from '../../assets/corporates/8.jpg';
import corpImg9 from '../../assets/corporates/9.jpg';
import corpImg10 from '../../assets/corporates/10.jpg';
import corpImg11 from '../../assets/corporates/11.jpg';
import corpImg12 from '../../assets/corporates/12.jpg';
import corpImg13 from '../../assets/corporates/13.jpg';
import corpImg14 from '../../assets/corporates/14.jpg';
import corpImg15 from '../../assets/corporates/15.jpg';
import corpImg16 from '../../assets/corporates/16.jpg';
import corpImg17 from '../../assets/corporates/17.jpg';
import corpImg18 from '../../assets/corporates/18.jpg';
import corpImg19 from '../../assets/corporates/19.jpg';
import corpImg20 from '../../assets/corporates/20.jpg';
import corpImg21 from '../../assets/corporates/21.jpg';
import corpImg22 from '../../assets/corporates/22.jpg';
import corpImg23 from '../../assets/corporates/23.jpg';
import corpImg24 from '../../assets/corporates/24.jpg';
import corpImg25 from '../../assets/corporates/25.jpg';
import corpImg26 from '../../assets/corporates/26.jpg';
import corpImg27 from '../../assets/corporates/27.jpg';
import corpImg28 from '../../assets/corporates/28.jpg';
import corpImg29 from '../../assets/corporates/29.jpg';
import corpImg30 from '../../assets/corporates/30.jpg';
import corpImg31 from '../../assets/corporates/31.jpg';
import corpImg32 from '../../assets/corporates/32.jpg';
import corpImg33 from '../../assets/corporates/33.jpg';
import corpImg34 from '../../assets/corporates/34.jpg';
import corpImg35 from '../../assets/corporates/35.jpg';
import corpImg36 from '../../assets/corporates/36.jpg';

const CorporatesGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { theme } = useTheme();
  const galleryAnimation = useScrollAnimation();

  const corporateImages = [
    { id: 1, src: corpImg1, alt: 'Corporate Event Photo 1', orientation: 'landscape' },
    { id: 2, src: corpImg2, alt: 'Corporate Headshot', orientation: 'portrait' },
    { id: 3, src: corpImg3, alt: 'Office Environment', orientation: 'landscape' },
    { id: 4, src: corpImg4, alt: 'Team Collaboration', orientation: 'landscape' },
    { id: 5, src: corpImg5, alt: 'Corporate Branding', orientation: 'portrait' },
    { id: 6, src: corpImg6, alt: 'Business Meeting', orientation: 'landscape' },
    { id: 7, src: corpImg7, alt: 'Professional Portrait', orientation: 'portrait' },
    { id: 8, src: corpImg8, alt: 'Modern Office Space', orientation: 'landscape' },
    { id: 9, src: corpImg9, alt: 'Company Conference', orientation: 'landscape' },
    { id: 10, src: corpImg10, alt: 'Creative Brainstorming Session', orientation: 'portrait' },
    { id: 11, src: corpImg11, alt: 'Corporate Event Photo 2', orientation: 'landscape' },
    { id: 12, src: corpImg12, alt: 'Executive Headshot', orientation: 'portrait' },
    { id: 13, src: corpImg13, alt: 'Office Culture', orientation: 'landscape' },
    { id: 14, src: corpImg14, alt: 'Team Building Activity', orientation: 'landscape' },
    { id: 15, src: corpImg15, alt: 'Corporate Product Shot', orientation: 'portrait' },
    { id: 16, src: corpImg16, alt: 'Business Presentation', orientation: 'landscape' },
    { id: 17, src: corpImg17, alt: 'Employee Portrait', orientation: 'portrait' },
    { id: 18, src: corpImg18, alt: 'Architectural Shot of Office', orientation: 'landscape' },
    { id: 19, src: corpImg19, alt: 'Networking Event', orientation: 'landscape' },
    { id: 20, src: corpImg20, alt: 'Corporate Headshot 2', orientation: 'portrait' },
    { id: 21, src: corpImg21, alt: 'Corporate Event Photo 3', orientation: 'landscape' },
    { id: 22, src: corpImg22, alt: 'Team Photo', orientation: 'portrait' },
    { id: 23, src: corpImg23, alt: 'Office Details', orientation: 'landscape' },
    { id: 24, src: corpImg24, alt: 'Corporate Seminar', orientation: 'landscape' },
    { id: 25, src: corpImg25, alt: 'Businesswoman Portrait', orientation: 'portrait' },
    { id: 26, src: corpImg26, alt: 'Behind the Scenes', orientation: 'landscape' },
    { id: 27, src: corpImg27, alt: 'Professional Headshot', orientation: 'portrait' },
    { id: 28, src: corpImg28, alt: 'Office Exterior', orientation: 'landscape' },
    { id: 29, src: corpImg29, alt: 'Corporate Gala', orientation: 'landscape' },
    { id: 30, src: corpImg30, alt: 'Creative Workspace', orientation: 'portrait' },
    { id: 31, src: corpImg31, alt: 'Corporate Event Photo 4', orientation: 'landscape' },
    { id: 32, src: corpImg32, alt: 'Businessman Portrait', orientation: 'portrait' },
    { id: 33, src: corpImg33, alt: 'Office Interior', orientation: 'landscape' },
    { id: 34, src: corpImg34, alt: 'Team Discussion', orientation: 'landscape' },
    { id: 35, src: corpImg35, alt: 'Corporate Branding Elements', orientation: 'portrait' },
    { id: 36, src: corpImg36, alt: 'Final Corporate Event Photo', orientation: 'landscape' },
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % corporateImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? corporateImages.length - 1 : selectedImage - 1);
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
            <h1 className={`text-xl font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Corporates Gallery</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 scroll-fade-in ${galleryAnimation.isVisible ? 'visible' : ''}`} ref={galleryAnimation.ref}>
            <h2 className={`text-3xl md:text-4xl font-elegant mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Professional Branding</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Capturing the essence of your corporate identity.</p>
          </div>

          <div className="masonry-grid">
            {corporateImages.map((image, index) => (
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
              src={corporateImages[selectedImage].src}
              alt={corporateImages[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {selectedImage + 1} / {corporateImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CorporatesGallery; 