
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Play, Video, Camera, Users, Shield, X, Star, Briefcase, ClipboardList, MonitorPlay, Scissors, Presentation } from 'lucide-react'
import { useState } from 'react'

import heroImg1 from '../assets/school/hero/1.jpg'
import heroImg2 from '../assets/school/hero/2.jpg'
import heroImg3 from '../assets/school/hero/3.jpg'
import heroImg4 from '../assets/school/hero/4.jpg'
import heroImg5 from '../assets/school/hero/5.jpg'
import heroImg6 from '../assets/school/hero/6.jpg'

type TestimonialItem = {
  name: string
  program: string
  title: string
  quote: string
  videoUrl: string
  thumbnail: string
  portfolioCardImage?: string
  bio: string
  works: string[]
  latestWork?: Array<{
    type: 'photo' | 'video' | 'youtube'
    url: string
    title: string
    description: string
    videoId?: string
  }>
  activities?: string[]
  phone?: string
  email?: string
  youtubeLinks: Array<{ title: string; url: string }>
}

interface StudentPortfolioModalProps {
  isOpen: boolean
  onClose: () => void
  student: TestimonialItem | null
}

export function StudentPortfolioModal({ isOpen, onClose, student }: StudentPortfolioModalProps) {
  if (!isOpen || !student) return null
  
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState<{ url: string, type: 'video' | 'youtube' } | null>(null)

  const portfolioItems = student.latestWork || [
    {
      id: 1,
      type: 'photo' as const,
      title: student.works[0] || 'Project 1',
      description: student.quote,
      url: student.thumbnail
    },
    // ... rest of the fallback items if needed, but we'll use latestWork
  ]

  const displayPortfolioItems = student.latestWork ? student.latestWork : [
    { type: 'photo' as const, url: student.thumbnail, title: student.works[0] || 'Project 1', description: student.quote },
    { type: 'photo' as const, url: student.thumbnail, title: student.works[1] || 'Project 2', description: student.quote },
    { type: 'photo' as const, url: student.thumbnail, title: student.works[2] || 'Project 3', description: student.quote },
  ]

  const services = [
    { icon: Video, title: 'Video Editing', description: 'Professional editing' },
    { icon: Camera, title: 'Cameraman', description: 'Expert cinematography' },
    { icon: Users, title: 'Videography', description: 'Full service video' },
    { icon: Shield, title: 'Branding', description: 'Brand storytelling' }
  ]

  const handleRating = (value: number) => {
    setRating(value)
  }

  const handlePortfolioItemClick = (item: any) => {
    if (item.type === 'video' || item.type === 'youtube') {
      setSelectedVideo({ url: item.url, type: item.type })
    } else {
      // For photos, maybe open in a light box or just do nothing for now
      // Since the request was "films its videos", we prioritize video playback
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="bg-white text-gray-900 rounded-[2rem] max-w-6xl w-full max-h-[90vh] overflow-hidden relative shadow-[0_40px_100px_rgba(0,0,0,0.3)] border border-white/20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full flex items-center justify-center transition-all hover:rotate-90 shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Scrollable Content */}
        <div className="overflow-y-auto overflow-x-hidden max-h-[90vh] scrollbar-hide">
          {/* Hero Section */}
          <div className="px-6 sm:px-8 lg:px-12 py-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight flex flex-col gap-4">
                  <span className="bg-gray-900 bg-clip-text text-transparent text-5xl">
                    {student?.name}
                  </span>
                  <span className="text-green-600 text-xl font-semibold">{student?.title}</span><br />
                </h1>
                <div className="flex items-center sm:items-start gap-4 -mt-3.5">
                  <Button 
                    className="bg-gradient-to-r from-green-500 to-[#D3881B] hover:from-green-600 hover:to-[#D3881B] text-white font-semibold px-8 py-3 rounded-full shadow-lg"
                    onClick={() => {
                      const aboutSection = document.getElementById('about-student')
                      if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    Learn More
                  </Button>
                                    
                </div>
                
              </div>
              <div className="relative h-64 sm:h-80 lg:h-96">
                <img
                  src={student?.thumbnail || 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&h=400&fit=crop'}
                  alt={`${student?.name} - ${student?.program}`}
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className='bg-gray-50 pb-12'>
            <h2 className="text-3xl text-center sm:text-4xl font-bold mb-8 text-gray-900 pt-12">Modules</h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 px-6 sm:px-8 lg:px-12">
              {[
                { icon: Briefcase, title: 'Media Entrepreneurship' },
                { icon: ClipboardList, title: 'Video Pre-production' },
                { icon: Video, title: 'Video Production' },
                { icon: Scissors, title: 'Video Post-production' },
                { icon: MonitorPlay, title: 'Visual Management' }
              ].map((module, idx) => {
                const Icon = module.icon
                return (
                  <div key={idx} className="flex flex-col items-center text-center space-y-4 group">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-gray-100 group-hover:bg-green-600 transition-all duration-300">
                      <Icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider leading-snug">
                      {module.title}
                    </h3>
                  </div>
                )
              })}
            </div>
          </div>

          {/* About Section */}
          <div id="about-student" className="px-6 sm:px-8 lg:px-12 py-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative h-64 sm:h-80 lg:h-96 order-2 lg:order-1">
                <div className="w-full h-full bg-gray-100 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  <img
                    src={student.portfolioCardImage || student.thumbnail}
                    alt={`${student?.name} profile`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <p className="text-green-600 font-semibold text-sm mb-4">About {student?.name}</p>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                  {student?.quote || 'We Always Make The Best'}
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed text-base sm:text-lg">
                  {student?.bio || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id odio placerat, convallis neque quis, interdum leo. Nam hendrerit urna nibh, egit sagittis velit varius non.'}
                </p>
                
                {/* Contact Information Cards */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-4 p-2 bg-green-50 rounded-md border border-green-200 flex-1 w-[50%]">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-[#D3881B] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-green-700 font-semibold text-xs">Phone</p>
                      <p className="text-gray-900 font-medium text-sm">{student.phone || "+250 788 123 456"}</p>
                    </div>
                  </div>
                  
                  {/* <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-md border border-orange-200 flex-1">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-[#D3881B] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-orange-700 font-semibold text-xs">Email</p>
                      <p className="text-gray-900 font-medium text-sm">{student.email || `${student?.name?.toLowerCase().replace(/\s+/g, '.')}@gmail.com`}</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="px-6 sm:px-8 lg:px-12 py-12 bg-gray-50">
            <p className="text-green-600 text-center font-semibold text-sm mb-4">{student?.name}'s Portfolio</p>
            <h2 className="text-3xl text-center sm:text-4xl font-bold mb-8 text-gray-900">Latest Work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {displayPortfolioItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="relative group cursor-pointer rounded-2xl overflow-hidden h-64 sm:h-72 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-100"
                  onClick={() => handlePortfolioItemClick(item)}
                >
                  {item.type === 'video' ? (
                    <video
                      src={item.url}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      muted
                      playsInline
                      loop
                      onMouseOver={(e) => e.currentTarget.play()}
                      onMouseOut={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                    />
                  ) : item.type === 'youtube' ? (
                    <img
                      src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60 transition-all duration-300 flex flex-col justify-end p-6">
                    <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                    {(item.type === 'video' || item.type === 'youtube') && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Click hint */}
                  {item.type === 'video' && (
                    <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to play
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Professional Practice Section */}
            <div className="px-6 sm:px-8 lg:px-12 py-12">
              <h1 className="text-3xl text-center sm:text-4xl font-bold mb-8 text-gray-900 uppercase">
                Activities
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {(student.activities || [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5, heroImg6]).map((img, idx) => (
                  <div key={idx} className="relative group rounded-2xl overflow-hidden h-64 sm:h-72 shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                      src={img}
                      alt={`${student?.name} activity ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* YouTube Links Section */}
            {student?.youtubeLinks && student.youtubeLinks.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Featured Videos</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {student.youtubeLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white hover:bg-gray-50 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-[#D3881B] rounded-full flex items-center justify-center">
                        <Video className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-gray-900 font-medium">{link.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Reviews Section */}
          <div className="text-center px-6 sm:px-8 lg:px-12 py-16 bg-gradient-to-r from-green-50 to-orange-50">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">{student?.name}'s Work</h2>
            <p className="text-gray-600 mb-6 text-lg">{student?.program}</p>
            
            {/* Interactive Rating */}
            <div className="mb-4">
              <p className="text-gray-700 font-medium mb-4">
                Rate this portfolio:
              </p>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-all duration-200 cursor-pointer hover:scale-110"
                  >
                    <Star
                      className={`w-8 h-8 sm:w-10 sm:h-10 ${
                        star <= (hoveredRating || rating)
                          ? 'text-yellow-500 fill-yellow-500'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="text-gray-600 mt-4">
                  You rated: {rating} star{rating !== 1 ? 's' : ''}
                </p>
              )}
            </div>
            
            {rating > 0 && (
              <div className="mt-6 p-4 bg-white/80 rounded-lg border border-green-200">
                <p className="text-green-700 font-medium">Thank you for your feedback!</p>
                <p className="text-gray-600 text-sm mt-1">Your rating helps {student?.name?.split(' ')[0]} improve their work.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[10000] p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative rounded-lg overflow-hidden bg-black w-full flex justify-center items-center">
              {selectedVideo.type === 'youtube' ? (
                <iframe
                  src={selectedVideo.url}
                  className="w-full aspect-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  src={selectedVideo.url}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[80vh]"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
