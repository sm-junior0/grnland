"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Globe,
  Menu,
  X,
  Play,
  Award,
  Users,
  Clock,
  Camera,
  Palette,
  Star,
  ChevronDown,
  ArrowRight,
  Film,
  Zap,
  FileText,
  ImageIcon,
  Video,
  Mic,
  Settings,
  Brush,
  Type,
  Eye,
  Briefcase,
  CheckCircle,
  Scissors,
} from "lucide-react"
import schoolImg1 from "../assets/school/1.jpg"
import schoolImg01 from "../assets/school/gallery/1.jpg"
import schoolImg02 from "../assets/school/gallery/18.jpg"
import schoolImg2 from "../assets/school/2.jpg"
import schoolImg3 from "../assets/school/3.jpg"
import schoolImg4 from "../assets/school/4.jpg" 
import schoolImg5 from "../assets/school/5.jpg"
import schoolImg6 from "../assets/school/6.jpg"
import schoolImg7 from "../assets/school/7.jpg"
import schoolImg8 from "../assets/school/8.jpg"
import schoolImg9 from "../assets/school/9.jpg"
import schoolImg10 from "../assets/school/10.jpg"
import schoolImg11 from "../assets/school/11.jpg"
import logo from "../assets/team/schoollogo.png"
import CEO from "../assets/team/DeusC.png"
import testimonial1 from '../assets/testimonials/1.mp4'
import testimonial2 from '../assets/testimonials/2.mp4'
import testimonial3 from '../assets/testimonials/3.mp4'
import abdul from '../assets/testimonials/abdul.png'
import aimee from '../assets/testimonials/aimee.png'
import david from '../assets/testimonials/david.png'
import { StudentPortfolioModal } from '@/components/StudentPortifolioModal'

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
  bio: string
  works: string[]
  youtubeLinks: Array<{ title: string; url: string }>
}



const SchoolPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [selectedStudentProfile, setSelectedStudentProfile] = useState<TestimonialItem | null>(null)

  // Carousel state
  const schoolImages = [
    heroImg1,
    heroImg2,
    heroImg3,
    heroImg4,
    heroImg5,
    heroImg6,
  ]
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % schoolImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [schoolImages.length])

  // Intersection Observer for active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Activities", href: "#activities" },
    { label: "Programs", href: "#programs" },
    { label: "Academic", href: "#study-organization" },
    { label: "Admissions", href: "#admissions" },
    { label: "Contact", href: "#contact" },
  ]

  const [studentCount, setStudentCount] = useState(0);
  const counterRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (!counterRef.current || hasAnimated) return;
      const rect = counterRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setHasAnimated(true);
        let start = 0;
        const end = 200;
        const duration = 9500;
        const stepTime = Math.max(Math.floor(duration / end), 10);
        const counter = setInterval(() => {
          start += 4;
          if (start >= end) {
            setStudentCount(end);
            clearInterval(counter);
          } else {
            setStudentCount(start);
          }
        }, stepTime);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const testimonials: TestimonialItem[] = [
    {
      name: "NGIRINCUTI ABDULILAHI",
      program: "Filmmaking Graduate",
      title: "Filmmaker",
      quote: "Greenland transformed my creative vision into professional skills",
      videoUrl: testimonial1,
      thumbnail: abdul,
      bio: "Abdulilahi built confidence in directing and cinematography through practice-based projects at Greenland.",
      works: ["Campus documentary short", "Commercial product ad", "Final-year narrative short film"],
      youtubeLinks: [
        { title: "Directing Showcase", url: "https://www.youtube.com/" },
        { title: "Cinematography Reel", url: "https://www.youtube.com/" },
      ],
    },
    {
      name: "Rukundo Aimee",
      program: "Graphic Design Graduate",
      title: "Graphic Designer",
      quote: "The hands-on approach made all the difference in my career",
      videoUrl: testimonial3,
      thumbnail: aimee,
      bio: "Aimee developed a strong visual design process from concept development to final digital assets Aimee developed a strong visual design process from concept development to final digital assets.",
      works: ["Brand identity package", "Poster design collection", "Social media content campaign"],
      youtubeLinks: [
        { title: "Design Process Talk", url: "https://www.youtube.com/" },
        { title: "Portfolio Walkthrough", url: "https://www.youtube.com/" },
      ],
    },
    {
      name: "Jean David",
      program: "Filmmaking Graduate",
      title: "Filmmaker",
      quote: "I learned from industry professionals and built my portfolio",
      videoUrl: testimonial2,
      thumbnail: david,
      bio: "Jean David specialized in storytelling, editing, and production planning while building his professional showreel.",
      works: ["Music video production", "Behind-the-scenes mini-series", "Client promo video edit"],
      youtubeLinks: [
        { title: "Editing Reel", url: "https://www.youtube.com/" },
        { title: "Production Breakdown", url: "https://www.youtube.com/" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Custom CSS for animations */}
      <style>{`
        .fade-in-up { opacity: 0; transform: translateY(30px); animation: fadeInUp 0.8s ease-out forwards; }
        .fade-in { opacity: 0; animation: fadeIn 0.6s ease-out forwards; }
        .slide-in-left { opacity: 0; transform: translateX(-30px); animation: slideInLeft 0.6s ease-out forwards; }
        @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { to { opacity: 1; } }
        @keyframes slideInLeft { to { opacity: 1; transform: translateX(0); } }
        .hover-lift { transition: all 0.3s ease; }
        .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(34, 197, 94, 0.1); }
        .hover-scale { transition: transform 0.3s ease; }
        .hover-scale:hover { transform: scale(1.05); }
        .glass-card { 
          background: rgba(255, 255, 255, 0.95); 
          backdrop-filter: blur(20px); 
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        .gradient-border {
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #22c55e, #D3881B, #22c55e) border-box;
          border: 2px solid transparent;
        }
      `}</style>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-green-100 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img src={logo || "/placeholder.svg"} alt="Greenland School Logo" className="h-20 w-auto" />
            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover-scale ${
                    activeSection === item.href.slice(1) ? "text-green-600" : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 fade-in" />
                  )}
                </a>
              ))}
              <Button
                onClick={() => (window.location.href = "#contact")}
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
          <div className="lg:hidden glass-card border-t border-green-100">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-green-600 transition-colors hover:translate-x-2 duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={() => (window.location.href = "#contact")}
                className="w-full bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 text-white font-semibold"
              >
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-orange-50 pt-20"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={schoolImages[currentSlide] || "/placeholder.svg"}
            alt="School Hero Slide"
            className="w-full h-full object-cover transition-opacity duration-1000 opacity-100"
            style={{ transition: "opacity 1s" }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/60 via-[#D3881B]/40 to-green-600/60 pointer-events-none"></div>
        </div>
        {/* Carousel navigation arrows */}
        <button
          type="button"
          className="absolute left-4 top-1/2 z-20 glass-card hover:bg-white/90 rounded-full p-3 shadow-xl transition-all hover-scale"
          style={{ transform: "translateY(-50%)" }}
          onClick={() => setCurrentSlide((currentSlide - 1 + schoolImages.length) % schoolImages.length)}
          aria-label="Previous slide"
        >
          <ChevronDown style={{ transform: "rotate(90deg)" }} className="w-6 h-6 text-green-600" />
        </button>
        <button
          type="button"
          className="absolute right-4 top-1/2 z-20 glass-card hover:bg-white/90 rounded-full p-3 shadow-xl transition-all hover-scale"
          style={{ transform: "translateY(-50%)" }}
          onClick={() => setCurrentSlide((currentSlide + 1) % schoolImages.length)}
          aria-label="Next slide"
        >
          <ChevronDown style={{ transform: "rotate(-90deg)" }} className="w-6 h-6 text-green-600" />
        </button>
        {/* Carousel dots */}
        <div className="absolute bottom-8 left-1/2 z-20 flex gap-2 transform -translate-x-1/2">
          {schoolImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide
                  ? "bg-gradient-to-r from-green-500 to-[#D3881B] scale-125"
                  : "bg-white/70 border border-green-400 hover:bg-green-200"
              }`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="relative z-20 text-center max-w-6xl mx-auto px-4 fade-in-up">
          <div className="mb-6">
            <Badge className="bg-gradient-to-r from-green-100/80 via-orange-100/80 to-green-100/80 text-green-700 border border-green-200/50 backdrop-blur-sm px-6 py-2 text-base">
              <Zap className="w-5 h-5 mr-2" />
              Learn by Doing
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-white drop-shadow-lg">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-green-400 to-[#D3881B] bg-clip-text text-transparent">Passion</span>{" "}
            into a{" "}
            <span className="bg-gradient-to-r from-[#D3881B] to-green-400 bg-clip-text text-transparent">
              Profession
            </span>
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-6 bg-gradient-to-r from-green-100 via-orange-100 to-green-100 text-green-700 border border-green-200 px-6 py-2 text-base">
              About Our School
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Where{" "}
              <span className="bg-gradient-to-r from-green-600 to-[#D3881B] bg-clip-text text-transparent">
                Creativity
              </span>{" "}
              Meets Excellence
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 mx-auto mb-8" />
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 slide-in-left">
              <div className="prose prose-lg text-gray-700">
                <p className="text-xl leading-relaxed">
                  Greenland Film and Television School is a creative media and technology center focused on learning by
                  doing. We accelerate innovative careers by transforming passion into profession through practical
                  courses covering all film production stages from Development to Distribution.
                </p>
              </div>
              <div className="glass-card gradient-border p-8 rounded-2xl hover-lift">
                <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-3 text-[#D3881B]" />
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To inspire a new generation of creative film professionals through pedagogic excellence in all stages
                  of film production. We develop confident, responsible individuals in a supportive learning environment
                  where every achievement is celebrated.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Over a decade of experience",
                  "Hands-on practical skills",
                  "Advanced equipment access",
                  "Team collaboration approach",
                  "Experienced mentor supervision",
                  "Industry connections",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-[#D3881B] rounded-full" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative fade-in-up">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
                  alt="Students learning"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card rounded-xl p-4 border border-green-100">
                    <div className="text-sm text-[#D3881B] font-semibold">Success Quote</div>
                    <div className="text-gray-800 italic">
                      "Do what you love, and you will never work a day in your life"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Activities Section */}
      <section
        id="activities"
        className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #22c55e 0%, #D3881B 50%, #22c55e 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-6 bg-gradient-to-r from-green-100 via-orange-100 to-green-100 text-green-700 border border-green-200 px-6 py-2 text-base">
              Activities
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-green-600 to-[#583f1a] bg-clip-text text-transparent">
                Activities
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the vibrant life at Greenland Film & TV School through our dedicated galleries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Gallery at School Card */}
            <a
              href="/album/SchoolGallery"
              className="block glass-card gradient-border rounded-3xl shadow-xl p-8 hover:scale-105 transition-all duration-500 group"
            >
              <div className="relative h-64 w-full mb-6 rounded-2xl overflow-hidden">
                <img
                  src={schoolImg01 || "/placeholder.svg"}
                  alt="Gallery at School"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent group-hover:from-green-900/50 transition-all" />
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-3">Gallery at School</h3>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                A glimpse into daily life and activities at Greenland Film & TV School.
              </p>
              <Button className="bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 text-white font-semibold hover:shadow-lg transition-all">
                View Gallery
              </Button>
            </a>
            {/* Behind the Scenes Card */}
            <a
              href="/album/BehindTheScenesGallery"
              className="block glass-card gradient-border rounded-3xl shadow-xl p-8 hover:scale-105 transition-all duration-500 group"
            >
              <div className="relative h-64 w-full mb-6 rounded-2xl overflow-hidden">
                <img
                  src={schoolImg02 || "/placeholder.svg"}
                  alt="Behind the Scenes"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent group-hover:from-green-900/50 transition-all" />
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-3">Behind the Scenes</h3>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Candid moments and the creative process at Greenland Film & TV School.
              </p>
              <Button className="bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 text-white font-semibold hover:shadow-lg transition-all">
                View Gallery
              </Button>
            </a>
          </div>
        </div>
      </section>
      {/* Programs Section */}
      <section
        id="programs"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-white to-orange-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-6 bg-gradient-to-r from-green-100 via-orange-100 to-green-100 text-green-700 border border-green-200 px-6 py-2 text-base">
              Our Programs
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Professional{" "}
              <span className="bg-gradient-to-r from-green-600 to-[#D3881B] bg-clip-text text-transparent">
                Filmmaking
              </span>{" "}
              & Video Production
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master all aspects of film production – from concept to final edit – through hands-on training with
              industry professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Month 1 Card */}
            <div className="glass-card gradient-border rounded-3xl shadow-xl p-8 flex flex-col items-start hover-lift transition-all duration-500">
              <img
                src={schoolImg1 || "/placeholder.svg"}
                alt="Pre-Production"
                className="w-full h-48 object-cover mb-6 rounded-2xl shadow-lg"
              />
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block bg-gradient-to-r from-green-500 to-[#D3881B] text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  Month 1
                </span>
                <Film className="w-6 h-6 text-[#D3881B]" />
                <span className="font-bold text-green-700 text-lg">Pre-Production</span>
              </div>
              <ul className="text-gray-700 space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Story & Scriptwriting:</b> Loglines, treatments, screenplay formatting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ImageIcon className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Visual Planning:</b> Storyboarding, shot composition, mood boards
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Settings className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Production Prep:</b> Budgeting, casting, location scouting, scheduling
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Genres Covered:</b> Drama, Sci-Fi, Comedy, Horror, Documentary, more
                  </span>
                </li>
              </ul>
            </div>
            {/* Month 2 Card */}
            <div className="glass-card gradient-border rounded-3xl shadow-xl p-8 flex flex-col items-start hover-lift transition-all duration-500">
              <img
                src={schoolImg2 || "/placeholder.svg"}
                alt="Production"
                className="w-full h-48 object-cover mb-6 rounded-2xl shadow-lg"
              />
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block bg-gradient-to-r from-green-500 to-[#D3881B] text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  Month 2
                </span>
                <Camera className="w-6 h-6 text-[#D3881B]" />
                <span className="font-bold text-green-700 text-lg">Production</span>
              </div>
              <ul className="text-gray-700 space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <Camera className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Cinematography:</b> Camera techniques, lighting, framing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mic className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Sound Design:</b> Microphones, dialogue, on-set audio
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Directing:</b> Working with actors, scene blocking, set management
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Practical Shoot:</b> Collaborative short film production
                  </span>
                </li>
              </ul>
            </div>
            {/* Month 3 Card */}
            <div className="glass-card gradient-border rounded-3xl shadow-xl p-8 flex flex-col items-start hover-lift transition-all duration-500">
              <img
                src={schoolImg3 || "/placeholder.svg"}
                alt="Post-Production"
                className="w-full h-48 object-cover mb-6 rounded-2xl shadow-lg"
              />
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block bg-gradient-to-r from-green-500 to-[#D3881B] text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  Month 3
                </span>
                <Palette className="w-6 h-6 text-[#D3881B]" />
                <span className="font-bold text-green-700 text-lg">Post-Production</span>
              </div>
              <ul className="text-gray-700 space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <Settings className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Editing:</b> Scene cutting, pacing, software proficiency
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mic className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Audio Enhancement:</b> Sound effects, music, mixing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Palette className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Color Grading & VFX:</b> Final polish for professional results
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Portfolio Development:</b> Final project showcase, industry guidance
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Graphic Design & Photography Section */}
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-6 bg-gradient-to-r from-green-100 via-orange-100 to-green-100 text-green-700 border border-green-200 px-6 py-2 text-base">
              Graphic Design & Photography
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Professional{" "}
              <span className="bg-gradient-to-r from-green-600 to-[#D3881B] bg-clip-text text-transparent">
                Graphic Design
              </span>{" "}
              & Photography
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master visual storytelling through hands-on training in both graphic design and photography, creating
              portfolio-ready work.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Month 1 Card - Graphic Design */}
            <div className="glass-card gradient-border rounded-3xl shadow-xl p-8 flex flex-col items-start hover-lift transition-all duration-500">
              <img
                src={schoolImg4 || "/placeholder.svg"}
                alt="Graphic Design"
                className="w-full h-48 object-cover mb-6 rounded-2xl shadow-lg"
              />
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block bg-gradient-to-r from-green-500 to-[#D3881B] text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  Month 1
                </span>
                <Palette className="w-6 h-6 text-[#D3881B]" />
                <span className="font-bold text-green-700 text-lg">Fundamentals</span>
              </div>
              <ul className="text-gray-700 space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <Brush className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Design Principles:</b> Composition, layout, contrast, and balance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Type className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Typography & Color:</b> Font pairing, color psychology, and harmony
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ImageIcon className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Branding Essentials:</b> Logo design and visual identity creation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Settings className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Software Skills:</b> Industry-standard design tools
                  </span>
                </li>
              </ul>
            </div>
            {/* Month 2 Card - Photography */}
            <div className="glass-card gradient-border rounded-3xl shadow-xl p-8 flex flex-col items-start hover-lift transition-all duration-500">
              <img
                src={schoolImg5 || "/placeholder.svg"}
                alt="Photography"
                className="w-full h-48 object-cover mb-6 rounded-2xl shadow-lg"
              />
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block bg-gradient-to-r from-green-500 to-[#D3881B] text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  Month 2
                </span>
                <Camera className="w-6 h-6 text-[#D3881B]" />
                <span className="font-bold text-green-700 text-lg">Photography</span>
              </div>
              <ul className="text-gray-700 space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <Camera className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Camera Mastery:</b> Exposure triangle and shot composition
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Lighting:</b> Natural vs. artificial light, 3-point lighting setups
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ImageIcon className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Specialized Photography:</b> Portraits, products, and creative shots
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Practical Sessions:</b> Hands-on shooting with professional guidance
                  </span>
                </li>
              </ul>
            </div>
            {/* Month 3 Card - Integrated Projects */}
            <div className="glass-card gradient-border rounded-3xl shadow-xl p-8 flex flex-col items-start hover-lift transition-all duration-500">
              <img
                src={schoolImg6 || "/placeholder.svg"}
                alt="Integrated Projects"
                className="w-full h-48 object-cover mb-6 rounded-2xl shadow-lg"
              />
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block bg-gradient-to-r from-green-500 to-[#D3881B] text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  Month 3
                </span>
                <Star className="w-6 h-6 text-[#D3881B]" />
                <span className="font-bold text-green-700 text-lg">Integrated Projects</span>
              </div>
              <ul className="text-gray-700 space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <ImageIcon className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Branding Projects:</b> Combining design and photography for cohesive visuals
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Portfolio Development:</b> Curating your best work
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Industry Preparation:</b> Client projects and professional workflows
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#D3881B] mt-0.5 flex-shrink-0" />
                  <span>
                    <b>Final Showcase:</b> Professional portfolio presentation
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Key Takeaways Card */}
          <div className="max-w-4xl mx-auto glass-card gradient-border rounded-3xl shadow-xl p-10 text-center">
            <h3 className="text-3xl font-bold text-green-700 mb-6">Key Takeaways</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-orange-100 border border-green-200 rounded-full px-6 py-3 text-green-700 font-semibold text-sm">
                <Star className="w-5 h-5 text-[#D3881B]" /> Hands-on short film projects
              </span>
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-orange-100 border border-green-200 rounded-full px-6 py-3 text-green-700 font-semibold text-sm">
                <Award className="w-5 h-5 text-[#D3881B]" /> Industry-standard tools
              </span>
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-orange-100 border border-green-200 rounded-full px-6 py-3 text-green-700 font-semibold text-sm">
                <Users className="w-5 h-5 text-[#D3881B]" /> Crew role mastery
              </span>
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-orange-100 border border-green-200 rounded-full px-6 py-3 text-green-700 font-semibold text-sm">
                <Camera className="w-5 h-5 text-[#D3881B]" /> Portfolio-ready work
              </span>
            </div>
            <div className="text-gray-700 text-lg mb-6 leading-relaxed">
              Ideal for aspiring graphic designers, photographers, visual artists, and media professionals looking to
              master both digital design and photography skills through hands-on, industry-relevant training.
            </div>
            <Button
              onClick={() => (window.location.href = "#contact")}
              className="bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 text-white font-bold px-10 py-4 text-lg shadow-xl hover-scale"
            >
              Learn More
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>
        </div>
      </section>
      {/* Study Organization Section */}
      <section
        id="study-organization"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-green-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-6 bg-gradient-to-r from-green-100 via-orange-100 to-green-100 text-green-700 border border-green-200 px-6 py-2 text-base">
              Study Organization
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Flexible{" "}
              <span className="bg-gradient-to-r from-green-600 to-[#D3881B] bg-clip-text text-transparent">
                Learning
              </span>{" "}
              Options
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 mx-auto mb-8" />
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="hover-lift fade-in-up">
              <Card className="glass-card gradient-border rounded-3xl shadow-xl h-full">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Durations</h3>
                  <ul className="space-y-4 text-gray-700">
                    {[
                      "3 months - basic & short film",
                      "6 months - advanced skills",
                      "1 year - professional skills",
                    ].map((duration, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-[#D3881B] rounded-full" />
                        <span className="font-medium">{duration}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="hover-lift fade-in-up">
              <Card className="glass-card gradient-border rounded-3xl shadow-xl h-full">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Shifts</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[#D3881B] font-bold mb-3 text-lg">Filmmaking & Video Production</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="font-medium">Morning: 08:00 - 10:00</li>
                        <li className="font-medium">Morning 10:30 - 12:30</li>
                        <li className="font-medium">Weekend: 08:00 - 16:00</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[#D3881B] font-bold mb-3 text-lg">Graphic Design & Photography</h4>
                      <p className="text-gray-700 font-medium">Same flexible shift options</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="hover-lift fade-in-up">
              <Card className="glass-card gradient-border rounded-3xl shadow-xl h-full">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Class Sizes</h3>
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-gradient-to-r from-green-100 to-orange-100 rounded-2xl border border-green-200 shadow-lg">
                      <div className="text-4xl font-bold text-[#D3881B] mb-2">10</div>
                      <div className="text-gray-700 font-semibold">Filmmaking Students</div>
                      <div className="text-sm text-gray-600">per shift</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-r from-green-100 to-orange-100 rounded-2xl border border-green-200 shadow-lg">
                      <div className="text-4xl font-bold text-[#D3881B] mb-2">6</div>
                      <div className="text-gray-700 font-semibold">Design Students</div>
                      <div className="text-sm text-gray-600">per shift</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Head of School Section */}
      <section
        id="head-of-school"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-white to-orange-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-6 bg-gradient-to-r from-green-100 via-orange-100 to-green-100 text-green-700 border border-green-200 px-6 py-2 text-base">
              Leadership
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-green-600 to-[#D3881B] bg-clip-text text-transparent">
                Director
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 mx-auto mb-8" />
          </div>
          <div className="glass-card gradient-border rounded-3xl overflow-hidden shadow-2xl hover-lift fade-in-up">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img
                  src={CEO || "/placeholder.svg"}
                  alt="Deus Dedit Sangwa"
                  className="w-full h-full object-cover min-h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center slide-in-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Deus Dedit Sangwa</h3>
                <p className="text-xl text-[#D3881B] mb-6 font-semibold">Director, Producer & Cinematographer</p>
                <div className="space-y-4 mb-8 text-gray-700 leading-relaxed">
                  <p>
                    Deus Dedit Sangwa is a dedicated and accomplished audio-visual producer, filmmaker, and instructor
                    with over a decade of experience in the motion picture industry. His expertise spans narrative
                    films, documentaries, and high-end video marketing particularly in the production of impactful
                    commercial content.
                  </p>
                  <p>
                    Throughout his career, Deus has collaborated with notable organizations including Hollanda Fair
                    Foods "Winnaz", Bboxx Africa Management, Zipline, Access Bank, Canal+, Spark - Swiss Agency for
                    Development and Cooperation SDC and various government institutions such as the Office of the
                    President - Village Urugwiro.
                  </p>
                  <p>
                    As a filmmaker, his work has been showcased in numerous prestigious international festivals. His
                    film She Wasn't Me was awarded Best Cinematography at the Mashariki African Film Festival in Rwanda.
                    Other festival highlights include:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                    <li>Luxor African Film Festival (Egypt): The Lamp "Itara" and She Can – Official Selections</li>
                    <li>
                      Khouribga African Film Festival, FIFIDHO, and Mashariki: The Lamp "Itara" – Official Selections
                      and Grand Prize Winner for Best Short Film 2023 at Festival Cèdre Universelle Du Court Métrage
                    </li>
                    <li>Kalasha Film & TV Festival (Kenya): She Can – Featured</li>
                    <li>Durban International Film Festival (South Africa): She Can – Featured</li>
                    <li>Africa in Motion Film Festival (Scotland): Forgiven Not Forgotten – Documentary Featured</li>
                    <li>The Incubation Feature Film Streaming on Canal+ (Zacu Tv Cannels) since 2024</li>
                  </ul>
                  <p>
                    In addition to his creative work, Deus has significantly contributed to film education in Rwanda,
                    having served as an instructor at Media Education Babelsberg gGmbH RMP Program.
                  </p>
                  <p>
                    Building on this experience, he founded the Greenland Film and Television School, a vibrant training
                    center focused on empowering aspiring filmmakers and creative professionals.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-orange-100 p-6 rounded-2xl border border-green-200 hover-lift shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-[#D3881B]" />
                    <span className="text-[#D3881B] font-bold">Recognition</span>
                  </div>
                  <p className="text-gray-700 italic font-medium">
                    "Leading the next generation of African filmmakers with passion, dedication, and industry
                    expertise."
                  </p>
                </div>
                <Button
                 onClick={() => window.open("https://drive.google.com/file/d/1s53zJyXmU2mcqna4R1YhWD7ufDHJpmeY/view?usp=drive_link", "_blank")}
                  className="w-full bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 text-white font-bold py-4 shadow-xl hover-scale mt-6"
                >
                  Learn more
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #22c55e 0%, #D3881B 50%, #22c55e 100%)" }}
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full" style={{ backgroundColor: "#D3881B" }}></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-white"></div>
          <div
            className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full"
            style={{ backgroundColor: "#22c55e" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm px-6 py-2 text-base">
              Student Success Stories
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black/80">
              Hear From Our <span className="text-[#2F5900]">Graduates</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D3881B] to-white mx-auto mb-8" />
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Watch real stories from students who transformed their passion into successful careers
            </p>
          </div>

          {/* Horizontal Scrolling Video Container */}
          <div className="relative">
            <div
              className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <style>{`
                .scrollbar-hide::-webkit-scrollbar { display: none; }
              `}</style>

              {/* Video Testimonial Cards */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 md:w-[360px] group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="rounded-3xl overflow-hidden bg-white shadow-2xl border border-white/40 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]">
                    {/* Video Thumbnail */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={testimonial.thumbnail || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-bold tracking-wide text-green-700 shadow-lg">
                          Verified Graduate
                        </span>
                      </div>
                      <button
                        className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        onClick={() => setSelectedVideo(testimonial.videoUrl)}
                        title="Play video"
                      >
                        <div className="w-16 h-16 rounded-full bg-white text-green-600 flex items-center justify-center shadow-xl ring-4 ring-white/30">
                          <Play className="w-8 h-8 ml-1" />
                        </div>
                      </button>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white/90 text-sm font-semibold">{testimonial.program}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 bg-gradient-to-b from-white to-green-50/40">
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="min-w-0">
                          <h4 className="font-extrabold text-gray-900 text-lg leading-tight truncate">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">Alumni testimonial</p>
                        </div>
                        <div className="flex items-center gap-1 text-[#D3881B]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>

                      <blockquote className="mb-5 rounded-2xl border border-orange-100 bg-gradient-to-r from-orange-50 to-green-50 p-4">
                        <p className="text-gray-700 italic font-medium leading-relaxed">"{testimonial.quote}"</p>
                      </blockquote>

                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-10 border-green-300 bg-white text-green-700 font-semibold hover:bg-green-50"
                          onClick={() => {
                            setSelectedVideo(null)
                            setSelectedStudentProfile(testimonial)
                          }}
                        >
                          Portfolio
                        </Button>
                        <Button
                          size="sm"
                          className="h-10 bg-gradient-to-r from-green-500 to-[#D3881B] text-white font-semibold shadow-md hover:shadow-xl transition-all"
                          onClick={() => setSelectedVideo(testimonial.videoUrl)}
                        >
                          Watch Story
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="w-3 h-3 rounded-full bg-white/30 hover:bg-[#D3881B] transition-colors cursor-pointer"
                />
              ))}
            </div>
          </div>

 
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="glass-card rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] relative">
            <button
            title="modal"
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-auto max-h-[80vh]"
              onEnded={() => setSelectedVideo(null)}
            >
              Your browser does not support the video tag.
            </video>
            <div className="p-6 bg-gradient-to-r from-green-100 to-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Student Success Story</h3>
              <p className="text-gray-700">
                Watch how our graduates transformed their passion into successful careers.
              </p>
            </div>
          </div>
        </div>
      )}
      <StudentPortfolioModal
        isOpen={!!selectedStudentProfile}
        onClose={() => setSelectedStudentProfile(null)}
        student={selectedStudentProfile}
      />
      {/* Admissions Section */}
      <section
        id="admissions"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-green-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-6 bg-gradient-to-r from-green-100 via-orange-100 to-green-100 text-green-700 border border-green-200 px-6 py-2 text-base">
              Admissions
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Start Your{" "}
              <span className="bg-gradient-to-r from-green-600 to-[#D3881B] bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 mx-auto mb-8" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="fade-in-up">
              <Card className="glass-card gradient-border rounded-3xl shadow-xl hover-lift h-full">
                <CardContent className="p-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">Requirements</h3>
                  <ul className="space-y-6">
                    {[
                      "Basic education level",
                      "Basic computer skills",
                      "English proficiency",
                      "Rwandan ID (or passport/visa for international students)",
                      "CV and personal statement (250 words)",
                    ].map((requirement, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-4 text-gray-700 slide-in-left"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-[#D3881B] rounded-full" />
                        <span className="font-medium text-lg">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Card className="glass-card gradient-border rounded-3xl shadow-xl hover-lift h-full">
                <CardContent className="p-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">Tuition Fees</h3>
                  <div className="space-y-4">
                    {[
                      { program: "Filmmaking", fee: "300,000 Frw" },
                      { program: "Videography", fee: "250,000 Frw" },
                      { program: "Graphic Design & Photography", fee: "200,000 Frw" },
                      { program: "Digital Photography", fee: "200,000 Frw" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-4 bg-gradient-to-r from-green-100 to-orange-100 rounded-2xl border border-green-200 shadow-lg"
                      >
                        <span className="text-gray-700 font-semibold">{item.program}</span>
                        <span className="text-[#D3881B] font-bold text-lg">{item.fee}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-6 bg-gradient-to-r from-green-100 to-orange-100 rounded-2xl border border-green-200 shadow-lg">
                    <p className="text-gray-700 font-medium">
                      <strong className="text-[#D3881B]">Includes:</strong> Course materials, Mentorship, refreshments
                      water, certification.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="text-center mt-12 fade-in-up">
            <Button
              onClick={() => (window.location.href = "#contact")}
              size="lg"
              className="bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 text-white font-bold px-12 py-4 text-lg shadow-xl hover-scale"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
            {/* Student Count Section */}
            <section
        ref={counterRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-100 via-orange-100 to-green-100 flex flex-col items-center justify-center text-center animate-fade-in"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-extrabold text-green-700 mb-4 flex items-center justify-center">
            <span className="inline-block animate-bounce">{studentCount}+</span>
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">Graduates and Counting</p>
          <p className="text-lg text-gray-600">Over 200 students have successfully completed their journey at Greenland Film and Television School, launching creative careers in media and production.</p>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-white to-orange-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-6 bg-gradient-to-r from-green-100 via-orange-100 to-green-100 text-green-700 border border-green-200 px-6 py-2 text-base">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Contact{" "}
              <span className="bg-gradient-to-r from-green-600 to-[#D3881B] bg-clip-text text-transparent">Us</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 mx-auto mb-8" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8 slide-in-left">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Ready to transform your passion into a profession? Contact us today to learn more about our programs
                  and start your creative journey.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "Kigali, Rwanda | Nyarugenge KN 4 Ave | Car-Free Zone, Opposite Cogebank HQ",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: " +250 795 289 122 | +250 788 761 690 ",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "greenlandfilmschool@gmail.com | school@greenlandpictures.rw",
                  },
                  {
                    icon: Globe,
                    label: "Website",
                    value: "www.greenlandpictures.rw",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 glass-card gradient-border rounded-2xl p-6 hover-lift slide-in-left shadow-lg"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <contact.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-[#D3881B] font-bold mb-2 text-lg">{contact.label}</div>
                      <div className="text-gray-700 font-medium">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center lg:justify-start mt-8">
                <a
                  href="https://instagram.com/greenlandfilmschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 rounded-2xl flex items-center justify-center hover:shadow-xl transition-all duration-300 hover-scale"
                >
                  <Instagram className="w-7 h-7 text-white" />
                </a>
              </div>
            </div>
            <div className="fade-in-up">
              <Card className="glass-card gradient-border rounded-3xl shadow-xl">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h3>
                  <form
                    action="https://formspree.io/f/xyzjrnld"
                    method="POST"
                    className="space-y-6"
                    onSubmit={(e) => {
                      setIsSubmitting(true)
                      setSubmitStatus("idle")
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          className="w-full px-6 py-4 bg-white border-2 border-green-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all shadow-lg"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          className="w-full px-6 py-4 bg-white border-2 border-green-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all shadow-lg"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-6 py-4 bg-white border-2 border-green-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all shadow-lg"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-6 py-4 bg-white border-2 border-green-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all shadow-lg"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Program Interest</label>
                      <select
                        name="programInterest"
                        required
                        aria-label="Select a program"
                        className="w-full px-6 py-4 bg-white border-2 border-green-200 rounded-2xl text-gray-900 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all shadow-lg"
                      >
                        <option value="">Select a program</option>
                        <option value="filmmaking">Filmmaking</option>
                        <option value="videography">Videography</option>
                        <option value="graphic-design">Graphic Design & Photography</option>
                        <option value="digital-photography">Digital Photography</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Message</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className="w-full px-6 py-4 bg-white border-2 border-green-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all resize-none shadow-lg"
                        placeholder="Tell us about your interest in our programs..."
                      />
                    </div>
                    {submitStatus === "success" && (
                      <div className="p-6 bg-green-50 border-2 border-green-200 rounded-2xl text-green-700 shadow-lg">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                          <span className="font-semibold">
                            Thank you! Your message has been sent successfully. We'll get back to you soon.
                          </span>
                        </div>
                      </div>
                    )}
                    {submitStatus === "error" && (
                      <div className="p-6 bg-red-50 border-2 border-red-200 rounded-2xl text-red-700 shadow-lg">
                        <div className="flex items-center gap-3">
                          <X className="w-6 h-6 text-red-600" />
                          <span className="font-semibold">
                            Sorry, there was an error sending your message. Please try again or contact us directly.
                          </span>
                        </div>
                      </div>
                    )}
                    <div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-green-500 via-[#D3881B] to-green-500 hover:from-green-600 hover:via-[#D3881B] hover:to-green-600 text-white font-bold py-4 shadow-xl hover-scale disabled:opacity-50 disabled:cursor-not-allowed transition-all text-lg"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-3">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            Send Message
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-100 via-white to-orange-100 border-t border-green-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4 fade-in-up">
              <div className="flex items-center space-x-3">
                <img src={logo || "/placeholder.svg"} alt="Greenland School Logo" className="h-20 w-auto" />
              </div>
              <p className="text-gray-600 leading-relaxed font-medium">
                Learn by doing and Transform your Passion into a Profession
              </p>
            </div>
            <div className="space-y-4 fade-in-up">
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
            <div className="space-y-4 fade-in-up">
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

export default SchoolPage
