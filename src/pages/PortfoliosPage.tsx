/**
 * Greenland Portfolios Showcase Page
 * A clean, minimalist display of student work and talent.
 */

import { useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Filter, Play, Bookmark, User, GraduationCap, ArrowRight, Sparkles, FilterX, Menu, X, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { StudentPortfolioModal } from '@/components/StudentPortifolioModal'
import logo from "../assets/team/schoollogo.png"

// Assets
import abdul from '../assets/testimonials/abdul.png'
import aimee from '../assets/testimonials/aimee.png'
import david from '../assets/testimonials/david.png'
import testimonial1 from '../assets/testimonials/1.mp4'
import testimonial2 from '../assets/testimonials/2.mp4'
import testimonial3 from '../assets/testimonials/3.mp4'

type TestimonialItem = {
  name: string
  program: string
  title: string
  quote: string
  videoUrl: string
  thumbnail: string
  bio: string
  works: string[]
  youtubeLinks: Array<{ title: string; url: string }>
  gender: 'male' | 'female'
}

const PortfoliosPage = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState<'All' | 'Men' | 'Female'>('All')
  const [selectedStudent, setSelectedStudent] = useState<TestimonialItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("portfolios")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const navItems = [
    { label: "Home", href: "/school#home" },
    { label: "About", href: "/school#about" },
    { label: "Activities", href: "/school#activities" },
    { label: "Programs", href: "/school#programs" },
    { label: "Portfolios", href: "/portfolios" },
    { label: "Academic", href: "/school#study-organization" },
    { label: "Admissions", href: "/school#admissions" },
    { label: "Contact", href: "/school#contact" },
  ]

  const students: TestimonialItem[] = [
    {
      name: "NGIRINCUTI ABDULILAHI",
      program: "Filmmaking Graduate",
      title: "Filmmaker & Editor",
      quote: "Storytelling is the heart of every great film.",
      videoUrl: testimonial1,
      thumbnail: abdul,
      bio: "Abdulilah is a passionate filmmaker with a focus on cinematic storytelling and high-end video production.",
      works: ["Campus documentary short", "Commercial product ad", "Final-year narrative short film"],
      youtubeLinks: [{ title: "My Showreel", url: "https://youtube.com" }],
      gender: 'male'
    },
    {
      name: "Rukundo Aimee",
      program: "Graphic Design Graduate",
      title: "Visual Artist",
      quote: "Design is thinking made visual.",
      videoUrl: testimonial3,
      thumbnail: aimee,
      bio: "Aimee specializes in brand identity and motion graphics, bringing a unique aesthetic to every project.",
      works: ["Brand Identity X", "Poster Design Y", "App UI Z"],
      youtubeLinks: [{ title: "Design Portfolio", url: "https://youtube.com" }],
      gender: 'female'
    },
    {
      name: "Jean David",
      program: "Filmmaking Graduate",
      title: "Cinematographer",
      quote: "Capturing the light, defining the moment.",
      videoUrl: testimonial2,
      thumbnail: david,
      bio: "David is an expert in lighting and camera work, with a keen eye for architectural and landscape cinematography.",
      works: ["Documentary D", "Travel Vlog E", "Wedding Film F"],
      youtubeLinks: [{ title: "Cinematography Reel", url: "https://youtube.com" }],
      gender: 'male'
    },
    {
      name: "Marie Claire",
      program: "Graphic Design Graduate",
      title: "Illustrator",
      quote: "Every brushstroke tells a story.",
      videoUrl: testimonial3,
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=800&fit=crop",
      bio: "Marie is a digital illustrator with a passion for character design and children's book illustrations.",
      works: ["Character Design", "Book Illustration", "NFT Art"],
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "Eric Munyaneza",
      program: "Filmmaking Graduate",
      title: "Director",
      quote: "Vision is the art of seeing things invisible.",
      videoUrl: testimonial1,
      thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=800&fit=crop",
      bio: "Eric is an aspiring film director with several award-winning short films under his belt.",
      works: ["Short Film: The Return", "Documentary: Kigali Streets"],
      youtubeLinks: [],
      gender: 'male'
    },
    {
      name: "Alice Keza",
      program: "Photography Graduate",
      title: "Portrait Photographer",
      quote: "In a world of pixels, I capture souls.",
      videoUrl: testimonial2,
      thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=800&fit=crop",
      bio: "Alice specializes in editorial and portrait photography, capturing the essence of her subjects.",
      works: ["Model Portfolio", "Fashion Editorial", "Street Portraits"],
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "Kevin Kagabo",
      program: "Filmmaking Graduate",
      title: "Sound Engineer",
      quote: "Sound is 50% of the movie-going experience.",
      videoUrl: testimonial1,
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=800&fit=crop",
      bio: "Kevin is a sound specialist ensuring high-fidelity audio production for films and commercials.",
      works: ["Sound Score A", "Podcast Edit B"],
      youtubeLinks: [],
      gender: 'male'
    },
    {
      name: "Sandra Uwase",
      program: "Animation Graduate",
      title: "3D Animator",
      quote: "Bringing static objects to digital life.",
      videoUrl: testimonial3,
      thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=800&fit=crop",
      bio: "Sandra is a 3D artist specializing in character rigging and environmental animation.",
      works: ["3D Short", "Game Environment", "VFX Reel"],
      youtubeLinks: [],
      gender: 'female'
    }
  ]

  const filteredStudents = useMemo(() => {
    return students.filter(student => {
      const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           student.program.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesFilter = activeFilter === 'All' || 
                           (activeFilter === 'Men' && student.gender === 'male') || 
                           (activeFilter === 'Female' && student.gender === 'female')
      
      return matchesSearch && matchesFilter
    })
  }, [searchQuery, activeFilter])

  const openPortfolio = (student: TestimonialItem) => {
    setSelectedStudent(student)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 overflow-x-hidden">
      <style>{`
        .reveal-up { opacity: 0; transform: translateY(40px); animation: revealUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        @keyframes revealUp { to { opacity: 1; transform: translateY(0); } }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .portfolio-card:hover .overlay-content { transform: translateY(-10px); }
        .premium-blur { backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%); }
        .glass-card { 
          background: rgba(255, 255, 255, 1); 
          backdrop-filter: blur(20px); 
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        .hover-scale { transition: transform 0.3s ease; }
        .hover-scale:hover { transform: scale(1.05); }
        .fade-in { opacity: 0; animation: fadeIn 0.6s ease-out forwards; }
        @keyframes fadeIn { to { opacity: 1; } }

        /* Animated Blobs */
        .blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.4; animation: float 20s infinite alternate; z-index: 0; }
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }

        .editorial-text {
          position: absolute;
          font-size: 20vw;
          font-weight: 900;
          color: rgba(34, 197, 94, 0.03);
          line-height: 1;
          pointer-events: none;
          z-index: 0;
          white-space: nowrap;
          text-transform: uppercase;
          left: 50%;
          top: 40%;
          transform: translate(-50%, -50%);
          letter-spacing: -0.05em;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-green-100 shadow-lg">
        <div className="px-8 md:px-32">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center cursor-pointer mr-16" onClick={() => navigate("/school")}>
              <img src={logo || "/placeholder.svg"} alt="Greenland School Logo" className="h-16 w-auto object-contain" />
            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 hover-scale ${
                    (item.href === "/portfolios" || activeSection === item.href.split("#")[1]) ? "text-green-600" : "text-gray-700 hover:text-green-600"
                  }`}
                  onClick={(e) => {
                    if (item.href.startsWith("/") && !item.href.includes("#")) {
                      e.preventDefault()
                      navigate(item.href)
                    } else if (item.href.includes("#")) {
                      if (window.location.pathname === "/school") {
                        e.preventDefault()
                        const element = document.getElementById(item.href.split("#")[1])
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      } else {
                        // Let the default link behavior navigate to /school#id
                      }
                    }
                  }}
                >
                  {item.label}
                  {(item.href === "/portfolios") && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 fade-in" />
                  )}
                </a>
              ))}
              <Button
                onClick={() => navigate("/school#contact")}
                className="bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 text-white font-semibold hover:from-green-600 hover:via-[#D3881B] hover:to-green-600 shadow-lg hover-scale border-0"
              >
                Apply Now
              </Button>
            </div>
            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-gray-700 hover-scale" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden glass-card border-t border-green-100 bg-white/95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    if (item.href.startsWith("/") && !item.href.includes("#")) {
                      navigate(item.href)
                    } else {
                      navigate(item.href)
                    }
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors hover:translate-x-2 duration-300"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => navigate("/school#contact")}
                className="w-full bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 text-white font-semibold"
              >
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      {/* Hero Section - Compact & Light */}
      <section className="relative pt-24 pb-12 overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 z-0 bg-[#fafafa]" />
        <div className="blob w-[300px] h-[300px] bg-green-100/30 top-[-50px] left-[-50px]" style={{ animationDuration: '25s' }} />
        <div className="blob w-[200px] h-[200px] bg-orange-50/50 bottom-[-20px] right-[-20px]" style={{ animationDelay: '-5s', animationDuration: '18s' }} />
        <div className="editorial-text select-none text-[12vw] opacity-20">Portfolio</div>
        
        <div className="px-8 md:px-32 relative z-10 py-4">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className={`space-y-2 ${isLoaded ? 'reveal-up' : ''}`}>
              <h1 className="text-xl md:text-3xl font-serif font-black text-gray-900 tracking-tight uppercase leading-tight">
                Where Vision Meets Craft.
              </h1>
            </div>
            <div className={`w-full max-w-3xl ${isLoaded ? 'reveal-up stagger-1' : ''}`}>
              <div className="bg-white p-1.5 rounded-3xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)] border border-gray-100/50 flex flex-col md:flex-row items-center gap-2 transition-all duration-300 focus-within:border-transparent">
                <div className="relative flex-1 w-full flex items-center bg-gray-50 rounded-xl px-6 h-14 group transition-all duration-500 focus-within:bg-white focus-within:shadow-[0_25px_80px_-20px_rgba(0,0,0,0.15)] focus-within:scale-[1.02] focus-within:border-none border-none">
                  <Search className="w-4 h-4 text-gray-900 group-focus-within:text-green-600 transition-colors" />
                  <Input 
                    type="text" 
                    placeholder="Filter by name or program..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 border-none bg-transparent text-sm font-normal placeholder:text-black h-full focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 outline-none"
                  />
                </div>

                <div className="flex items-center bg-gray-50/80 p-1 rounded-2xl h-14 w-full md:w-auto overflow-hidden">
                  <div className="relative flex items-center h-full">
                    <div 
                      className="absolute h-full bg-white rounded-xl border border-green-600 z-0"
                      style={{
                        width: 'calc(33.33%)',
                        left: activeFilter === 'All' ? '0%' : activeFilter === 'Men' ? '33.33%' : '66.66%'
                      }}
                    />
                    {['All', 'Men', 'Female'].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter as any)}
                        className={`relative z-10 px-6 h-full rounded-xl text-xs font-extrabold transition-colors duration-300 min-w-[80px] ${
                          activeFilter === filter 
                            ? 'text-green-600 ' 
                            : 'text-gray-400 hover:text-gray-600'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Feed */}
      <main className="px-6 md:px-[58px] pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student, idx) => (
              <div 
                key={idx}
                className={`portfolio-card relative aspect-square rounded-lg overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] group transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(34,197,94,0.2)] ${
                  isLoaded ? 'reveal-up' : ''
                }`}
                style={{ animationDelay: `${(idx % 4) * 0.1 + 0.4}s` }}
              >
                <img 
                  src={student.thumbnail} 
                  alt={student.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute top-8 left-6">
                  <Badge 
                    variant="outline"
                    className="!bg-white/10 premium-blur text-white border-white/20 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-lg flex items-center gap-2 pointer-events-none hover:bg-white/10 transition-none shadow-none"
                  >
                    <Sparkles className="w-3 h-3 text-[#D3881B]" />
                    {student.program.split(' ')[0]}
                  </Badge>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-x-6 bottom-8 overlay-content transition-all duration-500 ease-out translate-y-0 z-10">
                  <div className="space-y-4 p-5 rounded-3xl bg-black/30 backdrop-blur-sm border border-white/10 shadow-2xl">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-serif font-bold leading-tight">
                        {student.name.split(' ').map((n, i) => (
                           <span key={i} className={i === 0 ? "text-white block" : "text-[#22c55e] block text-lg font-sans font-medium tracking-wide"}>
                             {n}
                           </span>
                        ))}
                      </h3>
                      <p className="text-[#D3881B] text-[10px] font-black uppercase tracking-[0.2em] pt-1 drop-shadow-md">{student.title}</p>
                    </div>
                    
                    <Button 
                      onClick={() => openPortfolio(student)}
                      className="w-full bg-white/10 premium-blur hover:bg-[#22c55e] text-white border border-white/20 hover:border-[#22c55e] transition-all duration-500 rounded-2xl py-6 group/btn shadow-xl"
                    >
                      <span className="font-bold tracking-wider text-sm">View Portfolio</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            ))
          ) : (
            <div className="col-span-full py-40 flex flex-col items-center text-center space-y-6 reveal-up">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                <FilterX className="w-10 h-10 text-gray-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-gray-900">No matches found</h3>
                <p className="text-gray-500 max-w-md mx-auto">Try refining your search or clearing filters to discover other creative talents.</p>
              </div>
              <Button 
                onClick={() => {setSearchQuery(''); setActiveFilter('All')}}
                className="bg-green-600 text-white font-bold rounded-2xl px-10 py-6"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Portfolio Modal */}
      {selectedStudent && (
        <StudentPortfolioModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          student={selectedStudent} 
        />
      )}

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-100 via-white to-orange-100 border-t border-green-200 mt-20">
        <div className="px-8 md:px-32">
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4 reveal-up">
              <div className="flex items-center space-x-3">
                <img src={logo || "/placeholder.svg"} alt="Greenland School Logo" className="h-20 w-auto" />
              </div>
              <p className="text-gray-600 leading-relaxed font-medium">
                Learn by doing and Transform your Passion into a Profession
              </p>
            </div>
            <div className="space-y-4 reveal-up">
              <h4 className="text-gray-900 font-bold text-lg">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-4 reveal-up">
              <h4 className="text-gray-900 font-bold text-lg">Contact Info</h4>
              <div className="space-y-2 text-gray-600 font-medium">
                <p>Kigali, Rwanda</p>
                <p>+250 795 289 122 | +250 788 761 690</p>
                <p>greenlandfilmschool@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 font-medium">
              © {new Date().getFullYear()} Greenland Film and Television School. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/greenlandfilmschool"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PortfoliosPage
