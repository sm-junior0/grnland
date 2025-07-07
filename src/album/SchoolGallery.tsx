import { useState, useMemo } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import img1 from '../assets/school/1.jpg';
import img2 from '../assets/school/2.jpg';
import img3 from '../assets/school/3.jpg';
import img4 from '../assets/school/4.jpg';
import img5 from '../assets/school/5.jpg';
import img6 from '../assets/school/6.jpg';
import img7 from '../assets/school/7.jpg';
import img8 from '../assets/school/8.jpg';
import img9 from '../assets/school/9.jpg';
import img10 from '../assets/school/10.jpg';
import img11 from '../assets/school/11.jpg';

const SchoolGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { theme } = useTheme();
  const galleryAnimation = useScrollAnimation();

  const images = [
    { id: 1, src: img1, alt: 'School Photo 1', orientation: 'landscape' },
    { id: 2, src: img2, alt: 'School Photo 2', orientation: 'portrait' },
    { id: 3, src: img3, alt: 'School Photo 3', orientation: 'landscape' },
    { id: 4, src: img4, alt: 'School Photo 4', orientation: 'portrait' },
    { id: 5, src: img5, alt: 'School Photo 5', orientation: 'landscape' },
    { id: 6, src: img6, alt: 'School Photo 6', orientation: 'portrait' },
    { id: 7, src: img7, alt: 'School Photo 7', orientation: 'landscape' },
    { id: 8, src: img8, alt: 'School Photo 8', orientation: 'portrait' },
    { id: 9, src: img9, alt: 'School Photo 9', orientation: 'landscape' },
    { id: 10, src: img10, alt: 'School Photo 10', orientation: 'portrait' },
    { id: 11, src: img11, alt: 'School Photo 11', orientation: 'landscape' },
  ];

  // Shuffle images for display
  const shuffledImages = useMemo(() => {
    const arr = [...images];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen font-opensans-light bg-white text-gray-900">
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b bg-white/90 border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button 
              onClick={() => window.history.back()} 
              variant="ghost" 
              className="text-green-700 hover:bg-green-50 hover:text-green-800 font-semibold"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to home
            </Button>
            <h1 className="text-xl font-semibold text-green-700">Gallery at School</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 scroll-fade-in ${galleryAnimation.isVisible ? 'visible' : ''}`} ref={galleryAnimation.ref}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-green-700">Gallery at School</h2>
            <p className="text-lg text-gray-700">A glimpse into daily life and activities at Greenland Film & TV School.</p>
          </div>
          <div className="masonry-grid">
            {shuffledImages.map((image, index) => (
              <div
                key={image.id}
                className="masonry-grid-item group cursor-pointer overflow-hidden rounded-lg animate-bounce-in hover:scale-105 transition-all duration-300 shadow-xl bg-white border border-green-100"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-white/0 group-hover:bg-green-50/60 transition-all duration-300">
                    <button
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-full p-3 bg-green-100/80 border-2 border-green-700 text-green-700"
                      style={{ pointerEvents: 'auto' }}
                      tabIndex={-1}
                      aria-label="View"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-green-900/80 z-50 flex items-center justify-center">
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
              src={shuffledImages[selectedImage].src}
              alt={shuffledImages[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-700/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SchoolGallery; 