import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Logo from '../assets/about/logo.png';
import reel from '../assets/about/Reelforwebsite.mp4'

const HeroSlideshow = () => {
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  }, [isPaused]);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div className="relative h-[92vh] overflow-hidden">
    
    
      <video
        ref={videoRef}
        src={reel}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        style={{ zIndex: 0 }}
      /> 
     
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      {/* Logo in center */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <img 
          src={Logo} 
          alt="Greenland Film and Television School" 
          className="max-w-md w-full h-auto animate-fade-in"
        />
      </div>
      {/* Pause/Play button (commented out) */}
      {/**
      <button
        title={isPaused ? "Play video" : "Pause video"}
        onClick={togglePause}
        className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-30"
      >
        {isPaused ? <Play size={24} /> : <Pause size={24} />}
      </button>
      */}
    </div>
  );
};

export default HeroSlideshow;
