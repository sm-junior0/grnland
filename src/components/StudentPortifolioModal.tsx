
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Play, Video, Camera, Users, Shield, X, Star } from 'lucide-react'
import { useState } from 'react'

type TestimonialItem = {
  name: string
  program: string
  quote: string
  videoUrl: string
  thumbnail: string
  bio: string
  works: string[]
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
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const portfolioItems = student.works.map((work, index) => ({
    id: index + 1,
    title: work,
    description: student.quote,
    image: student.thumbnail
  }))

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
    // Use the student's video URL when clicking portfolio items
    setSelectedVideo(student.videoUrl)
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
          {/* <div className="relative bg-gradient-to-r from-green-50 to-orange-50 px-6 sm:px-8 lg:px-12 py-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-[#D3881B] rounded-lg"></div>
              <span className="text-gray-900 font-bold text-xl">Student Portfolio</span>
            </div>
          </div> */}

          {/* Hero Section */}
          <div className="px-6 sm:px-8 lg:px-12 py-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Next Level<br />Amazing<br />
                  <span className="bg-gradient-to-r from-green-600 to-[#D3881B] bg-clip-text text-transparent">
                    {student?.program.split(' ')[0] || 'Videographer'}
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-700 mb-6 font-medium">
                  {student?.name}
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600 w-12 h-12"
                    onClick={() => setSelectedVideo(student.videoUrl)}
                  >
                    <Play className="w-5 h-5" />
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

          {/* Services Section */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20 px-6 sm:px-8 lg:px-12 py-12 bg-gray-50">
            <div className="text-sm text-gray-600 text-center lg:text-left">
              Supporting Digital Business<br />
              Branding Agencies<br />
              Private Documentaries
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
              {services.map((service, idx) => {
                const Icon = service.icon
                return (
                  <div key={idx} className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-10">
                    <div className="flex justify-center">
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base mb-1 text-gray-900">{service.title}</h3>
                  </div>
                )
              })}
            </div>
          </div>

          {/* About Section */}
          <div id="about-student" className="px-6 sm:px-8 lg:px-12 py-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative h-64 sm:h-80 lg:h-96 order-2 lg:order-1">
                <img
                  src={student?.thumbnail || 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&h=400&fit=crop'}
                  alt="Video editing workspace"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
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
                  <div className="flex items-center gap-4 p-2 bg-green-50 rounded-md border border-green-200 flex-1">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-[#D3881B] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-green-700 font-semibold text-xs">Phone</p>
                      <p className="text-gray-900 font-medium text-sm">+250 788 123 456</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-md border border-orange-200 flex-1">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-[#D3881B] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-orange-700 font-semibold text-xs">Email</p>
                      <p className="text-gray-900 font-medium text-sm">{student?.name?.toLowerCase().replace(/\s+/g, '.')}@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="px-6 sm:px-8 lg:px-12 py-12 bg-gray-50">
            <p className="text-green-600 text-center font-semibold text-sm mb-4">{student?.name}'s Portfolio</p>
            <h2 className="text-3xl text-center sm:text-4xl font-bold mb-8 text-gray-900">Latest Work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {portfolioItems.map((item) => (
                <div 
                  key={item.id} 
                  className="relative group cursor-pointer rounded-2xl overflow-hidden h-64 sm:h-72 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => handlePortfolioItemClick(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60 transition-all duration-300 flex flex-col justify-end p-6">
                    <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </div>
                  {/* Click hint */}
                  <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to play
                  </div>
                </div>
              ))}
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
            <div className="relative rounded-lg overflow-hidden bg-black">
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
