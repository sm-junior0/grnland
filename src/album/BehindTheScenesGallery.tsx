import { useState, useMemo } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navbar from '@/components/Navbar';

import img1 from '../assets/school/gallery/1.jpg';
import img2 from '../assets/school/gallery/2.jpg';
import img3 from '../assets/school/gallery/3.jpg';
import img4 from '../assets/school/gallery/4.jpg';
import img5 from '../assets/school/gallery/5.jpg';
import img6 from '../assets/school/gallery/6.jpg';
import img7 from '../assets/school/gallery/7.jpg';
import img8 from '../assets/school/gallery/8.jpg';
import img9 from '../assets/school/gallery/9.jpg';
import img10 from '../assets/school/gallery/10.jpg';
import img11 from '../assets/school/gallery/11.jpg';
import img12 from '../assets/school/gallery/12.jpg';
import img13 from '../assets/school/gallery/13.jpg';
import img14 from '../assets/school/gallery/14.jpg';
import img15 from '../assets/school/gallery/15.jpg';
import img16 from '../assets/school/gallery/16.jpg';
import img17 from '../assets/school/gallery/17.jpg';
import img18 from '../assets/school/gallery/18.jpg';
import img19 from '../assets/school/gallery/19.jpg';
import img39 from '../assets/school/gallery/39.jpg';
import img40 from '../assets/school/gallery/40.jpg';
import img41 from '../assets/school/gallery/41.jpg';
import img42 from '../assets/school/gallery/42.jpg';
import img43 from '../assets/school/gallery/43.jpg';
import img44 from '../assets/school/gallery/44.jpg';
import img45 from '../assets/school/gallery/45.jpg';
import img46 from '../assets/school/gallery/46.jpg';
import img47 from '../assets/school/gallery/47.jpg';
import img48 from '../assets/school/gallery/48.jpg';
import img49 from '../assets/school/gallery/49.jpg';
import img50 from '../assets/school/gallery/50.jpg';
import img51 from '../assets/school/gallery/51.jpg';
import img52 from '../assets/school/gallery/52.jpg';
import img53 from '../assets/school/gallery/53.jpg';



const BehindTheScenesGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { theme } = useTheme();
  const galleryAnimation = useScrollAnimation();

  const images = [
    { id: 1, src: img1, alt: 'Behind the Scenes 1', orientation: 'landscape' },
    { id: 2, src: img2, alt: 'Behind the Scenes 2', orientation: 'portrait' },
    { id: 3, src: img3, alt: 'Behind the Scenes 3', orientation: 'landscape' },
    { id: 4, src: img4, alt: 'Behind the Scenes 4', orientation: 'portrait' },
    { id: 5, src: img5, alt: 'Behind the Scenes 5', orientation: 'landscape' },
    { id: 6, src: img6, alt: 'Behind the Scenes 6', orientation: 'portrait' },
    { id: 7, src: img7, alt: 'Behind the Scenes 7', orientation: 'landscape' },
    { id: 8, src: img8, alt: 'Behind the Scenes 8', orientation: 'portrait' },
    { id: 9, src: img9, alt: 'Behind the Scenes 9', orientation: 'landscape' },
    { id: 10, src: img11, alt: 'Behind the Scenes 10', orientation: 'portrait' },
    { id: 11, src: img12, alt: 'Behind the Scenes 11', orientation: 'landscape' },
    { id: 12, src: img13, alt: 'Behind the Scenes 3', orientation: 'landscape' },
    { id: 14, src: img14, alt: 'Behind the Scenes 4', orientation: 'portrait' },
    { id: 15, src: img15, alt: 'Behind the Scenes 5', orientation: 'landscape' },
    { id: 16, src: img16, alt: 'Behind the Scenes 6', orientation: 'portrait' },
    { id: 17, src: img17, alt: 'Behind the Scenes 7', orientation: 'landscape' },
    { id: 18, src: img18, alt: 'Behind the Scenes 8', orientation: 'portrait' },
    { id: 19, src: img19, alt: 'Behind the Scenes 9', orientation: 'landscape' },
    { id: 20, src: img10, alt: 'Behind the Scenes 10', orientation: 'portrait' },
    { id: 21, src: img39, alt: 'Behind the Scenes 39', orientation: 'landscape' },
    { id: 22, src: img40, alt: 'Behind the Scenes 40', orientation: 'portrait' },
    { id: 23, src: img41, alt: 'Behind the Scenes 41', orientation: 'landscape' },
    { id: 24, src: img42, alt: 'Behind the Scenes 42', orientation: 'portrait' },
    { id: 25, src: img43, alt: 'Behind the Scenes 43', orientation: 'landscape' },
    { id: 26, src: img44, alt: 'Behind the Scenes 44', orientation: 'portrait' },
    { id: 27, src: img45, alt: 'Behind the Scenes 45', orientation: 'landscape' },
    { id: 28, src: img46, alt: 'Behind the Scenes 46', orientation: 'portrait' },
    { id: 29, src: img47, alt: 'Behind the Scenes 47', orientation: 'landscape' },
    { id: 30, src: img48, alt: 'Behind the Scenes 48', orientation: 'portrait' },
    { id: 31, src: img49, alt: 'Behind the Scenes 49', orientation: 'landscape' },
    { id: 32, src: img50, alt: 'Behind the Scenes 50', orientation: 'portrait' },
    { id: 33, src: img51, alt: 'Behind the Scenes 51', orientation: 'landscape' },
    { id: 34, src: img52, alt: 'Behind the Scenes 52', orientation: 'portrait' },
    
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
            <h1 className="text-xl font-semibold text-green-700">Behind the Scenes</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 scroll-fade-in ${galleryAnimation.isVisible ? 'visible' : ''}`} ref={galleryAnimation.ref}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-green-700">Behind the Scenes</h2>
            <p className="text-lg text-gray-700">Candid moments and the creative process at Greenland Film & TV School.</p>
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
        <div className="fixed inset-0 bg-white/95 z-50 flex items-center justify-center">
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
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-green-700 px-4 py-2 rounded-full text-sm border border-green-200">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BehindTheScenesGallery; 