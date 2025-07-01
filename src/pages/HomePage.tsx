import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import HeroSlideshow from '@/components/HeroSlideshow';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Mail, Phone, MapPin, Instagram, Play } from 'lucide-react';
import logo from '../assets/about/logo.png'

// Partner Logos
import partner1 from '../assets/partners/1.png';
import partner2 from '../assets/partners/2.png';
import partner3 from '../assets/partners/3.png';
import partner4 from '../assets/partners/4.png';
import partner5 from '../assets/partners/5.png';
import partner6 from '../assets/partners/6.png';
import partner7 from '../assets/partners/7.png';
import partner8 from '../assets/partners/8.png';
import partner9 from '../assets/partners/9.png';
import partner10 from '../assets/partners/10.png';
import partner11 from '../assets/partners/11.png';
import partner12 from '../assets/partners/12.png';
import partner13 from '../assets/partners/13.png';
import partner14 from '../assets/partners/14.png';
import partner15 from '../assets/partners/15.png';
import partner16 from '../assets/partners/16.png';
import partner17 from '../assets/partners/17.png';
import partner18 from '../assets/partners/18.png';
import partner19 from '../assets/partners/19.png';
import partner20 from '../assets/partners/20.png';
import partner21 from '../assets/partners/21.png';

// Add imports for first images of each category
import weddingsImg1 from '../assets/weddings/6.jpg';
import corporatesImg1 from '../assets/corporates/1.jpg';
import eventsImg1 from '../assets/events/1.jpg';
// import graphicsImg1 from '../assets/graphics/a.jpg';
import hotelsImg1 from '../assets/hotels/1.jpg';
import productsImg1 from '../assets/products/1.jpg';
import productsImg2 from '../assets/products/2.jpg';
import productsImg3 from '../assets/products/3.jpg';
import productsImg4 from '../assets/products/4.jpg';
import productsImg5 from '../assets/products/5.jpg';
import realestatesImg1 from '../assets/realestates/1.jpg';
import wildlifeImg1 from '../assets/wildlife/1.jpg';

// Import local videos
import video1 from '../assets/videos/1.mp4';
import video2 from '../assets/videos/2.mp4';
import video3 from '../assets/videos/3.mp4';
import video4 from '../assets/videos/4.mp4';
import video5 from '../assets/videos/5.mp4';
import reel from '../assets/about/Reelforwebsite.mp4'

const HomePage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  // Scroll animations for each section
  const aboutAnimation = useScrollAnimation();
  const photosAnimation = useScrollAnimation();
  const videosAnimation = useScrollAnimation();
  const catalogueAnimation = useScrollAnimation();
  const partnersAnimation = useScrollAnimation();
  const contactAnimation = useScrollAnimation();
  const teamAnimation = useScrollAnimation();

  // Videos
  const videos = [
    {
      id: 1,
      title: 'Showreel 1',
      description: 'A highlight of our best moments.',
      category: 'Showreel',
      duration: '1:00',
      src: video1,
      poster: productsImg1
    },
    {
      id: 2,
      title: 'Showreel 2',
      description: 'Corporate and event highlights.',
      category: 'Corporate',
      duration: '1:00',
      src: video2,
      poster: productsImg2
    },
    {
      id: 3,
      title: 'Showreel 3',
      description: 'Weddings and celebrations.',
      category: 'Weddings',
      duration: '1:00',
      src: video3,
      poster: productsImg3
    },
    {
      id: 4,
      title: 'Showreel 4',
      description: 'Product and lifestyle shoots.',
      category: 'Products',
      duration: '1:00',
      src: video4,
      poster: productsImg4
    },
    {
      id: 5,
      title: 'Showreel 5',
      description: 'Wildlife and nature.',
      category: 'Wildlife',
      duration: '1:00',
      src: video5,
      poster: productsImg5
    },
  ];

  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set());

  // Team members
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Mwangi',
      role: 'Director & Lead Instructor',
      description: 'Award-winning filmmaker with 15+ years in the industry. Specializes in documentary filmmaking and cinematography.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop',
      specialties: ['Documentary', 'Cinematography', 'Directing']
    },
    {
      id: 2,
      name: 'David Kamanzi',
      role: 'Screenwriting & Story Development',
      description: 'Published screenwriter and story consultant. Has worked on numerous award-winning films and TV series.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
      specialties: ['Screenwriting', 'Story Development', 'Script Analysis']
    },
    {
      id: 3,
      name: 'Grace Uwimana',
      role: 'Production & Post-Production',
      description: 'Expert in film production management and advanced editing techniques. Former editor at major studios.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
      specialties: ['Video Editing', 'Production Management', 'Color Grading']
    },
  ];

  // Catalogue categories
  const catalogueCategories = [
    {
      id: 1,
      title: 'Documentary Films',
      description: 'Real stories, real people, real impact',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop',
      count: '12 Projects'
    },
    {
      id: 2,
      title: 'Short Films',
      description: 'Compelling narratives in compact form',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
      count: '8 Projects'
    },
    {
      id: 3,
      title: 'Commercial Work',
      description: 'Brand storytelling and advertising',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
      count: '15 Projects'
    },
    {
      id: 4,
      title: 'Music Videos',
      description: 'Visual storytelling for music',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      count: '6 Projects'
    }
  ];

  // Partners
  const partners = [
    { id: 1, name: 'Ministry of Education (Rwanda)', logo: partner1, description: 'Government education authority' },
    { id: 2, name: 'President Office (Rwanda)', logo: partner2, description: 'Office of the President of Rwanda' },
    { id: 3, name: 'CANAL+', logo: partner3, description: 'International media and TV provider' },
    { id: 4, name: 'Winnaz', logo: partner5, description: 'Snack food company based in Rwanda' },
    { id: 5, name: 'BAL (Basketball Africa League)', logo: partner6, description: 'Pan-African professional basketball league' },
    { id: 6, name: 'Rwanda Ultimate Golf Course LTD', logo: partner7, description: 'Professional golf course in Rwanda' },
    { id: 7, name: 'Zipline', logo: partner8, description: 'Drone-based medical delivery service' },
    { id: 8, name: 'African Leadership University (ALU)', logo: partner9, description: 'Pan-African university for leadership and entrepreneurship' },
    { id: 9, name: 'German Cooperation (GIZ)', logo: partner10, description: 'German international development agency' },
    { id: 10, name: 'L\'Oréal Brandstorm', logo: partner11, description: 'Global student innovation competition by L\'Oréal' },
    { id: 11, name: 'MTN', logo: partner12, description: 'Multinational telecommunications company' },
    { id: 12, name: 'SouthBridge', logo: partner13, description: 'Investment and advisory firm focused on Africa' },
    { id: 13, name: 'Shaba Ventures & Tours', logo: partner14, description: 'Rwandan tourism and travel agency' },
    { id: 14, name: 'UML', logo: partner15, description: 'Rwandan initiative for smart, resilient, and sustainable development' },
    { id: 15, name: 'Building Learning Foundations', logo: partner16, description: "Rwanda's foundational education improvement program" },
    { id: 16, name: 'Bboxx', logo: partner17, description: 'Provider of affordable solar home systems and clean energy' },
    { id: 17, name: 'Primates Adventure', logo: partner18, description: 'Tourism company focused on wildlife and conservation' },
    { id: 18, name: 'Zacu Entertainment', logo: partner19, description: 'Entertainment and media production company' },
    { id: 19, name: 'Al Jazeera', logo: partner20, description: 'Global news organization based in Qatar' },
    { id: 20, name: 'Nespresso', logo: partner21, description: 'Global coffee brand by Nestlé' },
    { id: 21, name: 'DreamiseAfrica', logo: partner4, description: 'Creative and media organization empowering African storytelling' }
  ];
  

  // Wedding packages
  const weddingPackages = [
    { name: 'Essential', price: '2,500 RWF', features: ['6 hours coverage', '200+ edited photos', 'Online gallery', 'Engagement session'] },
    { name: 'Premium', price: '4,000 RWF', features: ['Full day coverage', '400+ edited photos', 'Online gallery', 'Engagement session', 'Wedding film'] },
    { name: 'Luxury', price: '6,000 RWF', features: ['Full day coverage', '600+ edited photos', 'Online gallery', 'Engagement session', 'Wedding film', 'Travel included'] }
  ];

  return (
    <div className={`min-h-screen font-opensans-light ${theme === 'dark' ? 'bg-custom-black' : 'bg-custom-white'}`}>
      <Navbar />
      
      {/* Hero Section with Slideshow */}
      <section id="home" className="relative pt-16">
        <HeroSlideshow />
      </section>

      {/* About Section */}
      <section 
      id = "about"
        ref={aboutAnimation.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-custom-black/50' : 'bg-gray-50'} scroll-fade-in ${aboutAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold italic text-green-400 mb-8">About</h2>
              <div className="w-24 h-1 bg-green-400 mb-8"></div>
              <p className={`text-lg leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>GREENLAND PICTURES is a Rwanda based production company and
marketing agency combined, that offers a wide range of services
related to the creation and promotion of content, including
Film and video production, photography, graphic design,
social media marketing, and more.</p>
              <p className={`text-lg leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Our mission is to create compelling, high-quality content that captivates
audiences and empowers brands. Through our dedication to innovation,
integrity, and collaboration, we aim to bring creative visions to life,
support emerging talent, and contribute meaningfully
to the ever-evolving world of media and ölm.</p>
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>To be a leading force in the creative industry, inspiring audiences
and shaping stories that connect deeply with people across cultures.

We envision a future where our productions set a benchmark for quality,
creativity, and storytelling excellence worldwide</p>
            </div>
            <div className="animate-slide-in-right">
              <img src={logo} alt="Photographer at work" className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section 
      id = "photos"
        ref={photosAnimation.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 scroll-fade-in ${photosAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold italic text-green-400 mb-8">Photos</h2>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
            <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Explore our diverse portfolio. Each gallery tells a unique story of authentic moments and genuine emotions, captured with a creative eye.</p>
          </div>
          
          <div className="space-y-8">
            {(() => {
              const categories = [
                { title: 'Corporates', path: '/gallery/corporates', image: corporatesImg1, description: 'Professional Branding' },
                { title: 'Events', path: '/gallery/events', image: eventsImg1, description: 'Memorable Occasions' },
                { title: 'Graphics', path: '/gallery/graphics', image: weddingsImg1, description: 'Creative Designs' },
                { title: 'Hotels & Resorts', path: '/gallery/hotels', image: hotelsImg1, description: 'Luxury Stays' },
                { title: 'Products', path: '/gallery/products', image: productsImg1, description: 'Commercial Showcase' },
                { title: 'Real Estates', path: '/gallery/realestates', image: realestatesImg1, description: 'Architectural Beauty' },
                { title: 'Weddings', path: '/gallery/weddings', image: weddingsImg1, description: 'Love Stories Captured' },
                { title: 'Wildlife', path: '/gallery/wildlife', image: wildlifeImg1, description: 'Into the Wild' },
              ];

              const CategoryCard = ({ category, className = '', imgClassName = '' }) => (
                <div 
                  key={category.title} 
                  onClick={() => navigate(category.path)} 
                  className={`group relative overflow-hidden rounded-lg animate-bounce-in hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer ${theme === 'dark' ? 'bg-custom-black' : 'bg-white'} ${className} ${imgClassName} flex items-end`} 
                  style={{ backgroundImage: `url(${category.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-full p-6 text-center z-10">
                    <h3 className="text-2xl font-semibold text-white mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">{category.title}</h3>
                    <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">{category.description}</p>
                  </div>
                </div>
              );

              return (
                <>
                  {/* Row 1: A, B */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <CategoryCard category={categories[0]} imgClassName="h-80" />
                    <CategoryCard category={categories[1]} imgClassName="h-80" />
                  </div>

                  {/* Row 2 & 3 Combined */}
                  <div className="grid md:grid-cols-3 md:grid-rows-2 gap-8">
                    <CategoryCard category={categories[2]} className="md:row-span-2" imgClassName="h-full" />
                    <CategoryCard category={categories[3]} imgClassName="h-80" />
                    <CategoryCard category={categories[4]} imgClassName="h-80" />
                    <CategoryCard category={categories[5]} imgClassName="h-80" />
                    <CategoryCard category={categories[6]} imgClassName="h-80" />
                  </div>
                  
                  {/* Row 4: H */}
                  <div className="grid grid-cols-1 gap-8">
                    <CategoryCard category={categories[7]} imgClassName="h-96" />
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section  
      id='videos'
        ref={videosAnimation.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-custom-black/50' : 'bg-gray-50'} scroll-fade-in ${videosAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold italic text-green-400 mb-8">Cinematic Moments</h2>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
            <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Immerse yourself in cinematic storytelling that captures the essence of your special moments. Each film is crafted with care to preserve the emotions and memories that matter most.</p>
          </div>

          {/* Video Thumbnails Grid */}
          <div className="space-y-8">
            {/* First Row - 2 Videos */}
            <div className="grid md:grid-cols-2 gap-8">
              {videos.slice(0, 2).map((video, idx) => (
                <div 
                  key={video.id} 
                  className={`group cursor-pointer animate-bounce-in transition-all duration-300 hover:scale-105 ${playingVideos.has(idx) ? 'ring-2 ring-green-400' : ''}`}
                  style={{animationDelay: `${idx * 0.1}s`}}
                  onClick={() => {
                    setPlayingVideos(prev => {
                      const newSet = new Set(prev);
                      if (newSet.has(idx)) {
                        newSet.delete(idx);
                      } else {
                        newSet.add(idx);
                      }
                      return newSet;
                    });
                  }}
                >
                  <div className={`relative overflow-hidden rounded-lg shadow-xl ${theme === 'dark' ? 'bg-custom-black' : 'bg-white'}`}> 
                    {playingVideos.has(idx) ? (
                      <div className="relative aspect-video">
                        <video 
                          src={video.src} 
                          className="w-full h-full" 
                          controls 
                          autoPlay
                          poster={video.poster}
                        />
                      </div>
                    ) : (
                      <div className="relative w-full h-80 bg-black flex items-center justify-center" style={{backgroundImage: `url(${video.poster})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        <div className="absolute inset-0 bg-black/40"></div>
                        <Play size={48} className="text-white opacity-80 relative z-10" />
                        <div className="absolute top-3 right-3 z-10">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${theme === 'dark' ? 'bg-custom-black/90 text-white' : 'bg-white/90 text-black'}`}>{video.duration}</span>
                        </div>
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}>{video.category}</span>
                        {!playingVideos.has(idx) && (
                          <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{video.duration}</span>
                        )}
                      </div>
                      <h4 className={`font-semibold mb-2 text-lg line-clamp-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{video.title}</h4>
                      <p className={`text-sm line-clamp-2 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{video.description}</p>
                      {playingVideos.has(idx) && (
                        <div className="mt-4 pt-4 border-t border-gray-700">
                          <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Click to pause video</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Second Row - 3 Videos */}
            <div className="grid md:grid-cols-3 gap-8">
              {videos.slice(2, 5).map((video, i) => {
                const idx = i + 2;
                return (
                  <div 
                    key={video.id} 
                    className={`group cursor-pointer animate-bounce-in transition-all duration-300 hover:scale-105 ${playingVideos.has(idx) ? 'ring-2 ring-green-400' : ''}`}
                    style={{animationDelay: `${idx * 0.1}s`}}
                    onClick={() => {
                      setPlayingVideos(prev => {
                        const newSet = new Set(prev);
                        if (newSet.has(idx)) {
                          newSet.delete(idx);
                        } else {
                          newSet.add(idx);
                        }
                        return newSet;
                      });
                    }}
                  >
                    <div className={`relative overflow-hidden rounded-lg shadow-xl ${theme === 'dark' ? 'bg-custom-black' : 'bg-white'}`}> 
                      {playingVideos.has(idx) ? (
                        <div className="relative aspect-video">
                          <video 
                            src={video.src} 
                            className="w-full h-full" 
                            controls 
                            autoPlay
                            poster={video.poster}
                          />
                        </div>
                      ) : (
                        <div className="relative w-full h-64 bg-black flex items-center justify-center" style={{backgroundImage: `url(${video.poster})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                          <div className="absolute inset-0 bg-black/40"></div>
                          <Play size={48} className="text-white opacity-80 relative z-10" />
                          <div className="absolute top-3 right-3 z-10">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${theme === 'dark' ? 'bg-custom-black/90 text-white' : 'bg-white/90 text-black'}`}>{video.duration}</span>
                          </div>
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}>{video.category}</span>
                          {!playingVideos.has(idx) && (
                            <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{video.duration}</span>
                          )}
                        </div>
                        <h4 className={`font-semibold mb-2 text-lg line-clamp-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{video.title}</h4>
                        <p className={`text-sm line-clamp-2 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{video.description}</p>
                        {playingVideos.has(idx) && (
                          <div className="mt-4 pt-4 border-t border-gray-700">
                            <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Click to pause video</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Team Section */}
          <section
  id="team"
  ref={teamAnimation.ref}
  className={`py-20 px-4 sm:px-6 lg:px-8 scroll-fade-in ${
    teamAnimation.isVisible ? 'visible' : ''
  }`}
>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-playfair font-bold italic text-green-400 mb-8">
        Meet the Team
      </h2>
      <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
      <p className={`text-xl max-w-3xl mx-auto ${
        theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
      }`}>
        Our passionate team of industry professionals is dedicated to helping you master your craft and tell your story.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-10">
      {teamMembers.map(member => (
        <div
          key={member.id}
          className={`group border rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 animate-bounce-in ${
            theme === 'dark' 
              ? 'bg-custom-black/80 border-gray-700' 
              : 'bg-transparent border-green-100'
          }`}
        >
          <div className="w-32 h-32 mb-6 rounded-full overflow-hidden shadow-lg border-4 border-green-200 group-hover:border-green-400 transition-all duration-300">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          </div>
          <h3 className={`text-2xl font-bold mb-1 text-center ${
            theme === 'dark' ? 'text-white' : 'text-green-700'
          }`}>
            {member.name}
          </h3>
          <div className={`font-semibold mb-3 text-center ${
            theme === 'dark' ? 'text-green-400' : 'text-green-500'
          }`}>
            {member.role}
          </div>
          <p className={`text-center mb-4 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {member.description}
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {member.specialties.map((spec, i) => (
              <span 
                key={i} 
                className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  theme === 'dark' 
                    ? 'bg-gray-800 text-green-300 border-gray-700' 
                    : 'bg-green-100 text-green-700 border-green-200'
                }`}
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Want to see more cinematic storytelling?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className={`hover:scale-105 transition-all duration-300 ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                Watch Full Films
              </Button>
              <Button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" className={`border-green-400 text-green-400 hover:bg-green-400 hover:text-white hover:scale-105 transition-all duration-300`}>
                Book Your Film
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue Section */}
      <section 
      id = "catalogue"
        ref={catalogueAnimation.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-custom-black/50' : 'bg-gray-50'} scroll-fade-in ${catalogueAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold italic text-green-400 mb-8">Catalogue</h2>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
            <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Explore our diverse portfolio of film projects across different genres and formats. Each category represents our commitment to storytelling excellence.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {catalogueCategories.map((category, idx) => (
              <div 
                key={category.id} 
                className={`group rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 animate-bounce-in shadow-xl ${theme === 'dark' ? 'bg-custom-black' : 'bg-white'}`}
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-custom-black/80' : 'from-white/80'} via-transparent to-transparent`}></div>
                  <div className="absolute top-4 right-4 bg-green-400 text-custom-black px-3 py-1 rounded-full text-sm font-semibold">
                    {category.count}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{category.title}</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section 
      id = "partners"
        ref={partnersAnimation.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 scroll-fade-in ${partnersAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold italic text-green-400 mb-8">Our Clients</h2>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
            <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>We collaborate with leading organizations and institutions in the film industry to provide the best opportunities for our students and graduates.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
            {partners.map(partner => (
              <div 
                key={partner.id} 
                className="flex justify-center items-center"
              >
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-24 w-auto object-contain transition-transform duration-300 hover:scale-110" 
                  />
                ) : (
                  <span className={`text-center text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{partner.name}</span>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in">
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Interested in partnering with us?</p>
            <Button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-green-400 text-custom-black hover:bg-green-300 hover:scale-105 transition-all duration-300">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
      id = "contact"
        ref={contactAnimation.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-custom-black/50' : 'bg-gray-50'} scroll-fade-in ${contactAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold italic text-green-400 mb-8 text-center">Let's Connect</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
          <p className={`text-xl text-center mb-12 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Ready to tell your story? I'd love to hear from you and discuss how we can capture your special moments.</p>
          
          <form className={`p-8 rounded-lg border shadow-xl mb-8 ${theme === 'dark' ? 'bg-custom-black border-white' : 'bg-white border-gray-200'}`}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={`block mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Full Name</label>
                <input type="text" id="name" className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 ${theme === 'dark' ? 'bg-custom-black text-white border-white' : 'bg-white text-black border-gray-300'}`} placeholder="Your full name" />
              </div>
              <div>
                <label htmlFor="email" className={`block mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Email</label>
                <input type="email" id="email" className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 ${theme === 'dark' ? 'bg-custom-black text-white border-white' : 'bg-white text-black border-gray-300'}`} placeholder="Your email address" />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="subject" className={`block mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Subject</label>
              <input type="text" id="subject" className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 ${theme === 'dark' ? 'bg-custom-black text-white border-white' : 'bg-white text-black border-gray-300'}`} placeholder="What type of session are you interested in?" />
            </div>
            <div className="mt-6">
              <label htmlFor="message" className={`block mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Message</label>
              <textarea id="message" rows={6} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 ${theme === 'dark' ? 'bg-custom-black text-white border-white' : 'bg-white text-black border-gray-300'}`} placeholder="Tell me about your vision and any questions you have"></textarea>
            </div>
            <div className="mt-8 text-center">
              <button type="submit" className={`px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300 ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>Send Message</button>
            </div>
          </form>
          
          <div className={`flex flex-col items-center gap-4 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <div className="flex items-center gap-2"><Phone size={18} /> <span>+250 788 761 690</span></div>
            <div className="flex items-center gap-2"><Mail size={18} /> <span>greenlandfilmschool@gmail.com</span></div>
            <div className="flex items-center gap-2"><MapPin size={18} /> <span>Kigali, Rwanda - Available for travel worldwide</span></div>
            <div className="flex items-center gap-2 mt-4">
              <a href="https://instagram.com/greenlandfilmschool" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default HomePage; 