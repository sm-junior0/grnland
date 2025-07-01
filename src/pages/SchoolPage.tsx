"use client"

import { useState, useEffect } from "react"
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
} from "lucide-react";
import schoolImg1 from '../assets/school/1.jpg';
import schoolImg2 from '../assets/school/2.jpg';
import schoolImg3 from '../assets/school/3.jpg';
import schoolImg4 from '../assets/school/4.jpg';
import schoolImg5 from '../assets/school/5.jpg';
import schoolImg6 from '../assets/school/6.jpg';
import schoolImg7 from '../assets/school/7.jpg';
import schoolImg8 from '../assets/school/8.jpg';
import schoolImg9 from '../assets/school/9.jpg';
import schoolImg10 from '../assets/school/10.jpg';
import schoolImg11 from '../assets/school/11.jpg';
import logo from '../assets/team/schoollogo.png';
import CEO from '../assets/team/DeusC.png'

const SchoolPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Carousel state
  const schoolImages = [
    schoolImg1, schoolImg2, schoolImg3, schoolImg4, schoolImg5, schoolImg6, schoolImg7, schoolImg8, schoolImg9, schoolImg10, schoolImg11
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % schoolImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [schoolImages.length]);

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
    { label: "Programs", href: "#programs" },
    { label: "Study Organization", href: "#study-organization" },
    { label: "Admissions", href: "#admissions" },
    { label: "Contact", href: "#contact" },
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
        .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04); }
        .hover-scale { transition: transform 0.3s ease; }
        .hover-scale:hover { transform: scale(1.05); }
      `}</style>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-green-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Greenland School Logo" className="h-20 w-auto" />
            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 hover-scale ${
                    activeSection === item.href.slice(1) ? "text-green-600" : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 fade-in" />
                  )}
                </a>
              ))}
              <Button className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:from-green-600 hover:to-green-700 shadow-lg hover-scale">
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
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-green-100">
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
              <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold">
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 to-white pt-20"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={schoolImages[currentSlide]}
            alt="School Hero Slide"
            className="w-full h-full object-cover transition-opacity duration-1000 opacity-100"
            style={{ transition: 'opacity 1s' }}
          />
        </div>
        {/* Carousel navigation arrows */}
        <button
          className="absolute left-4 top-1/2 z-20 bg-white/60 hover:bg-white/90 rounded-full p-2 shadow-lg transition-all"
          style={{ transform: 'translateY(-50%)' }}
          onClick={() => setCurrentSlide((currentSlide - 1 + schoolImages.length) % schoolImages.length)}
          aria-label="Previous slide"
        >
          <ChevronDown style={{ transform: 'rotate(90deg)' }} className="w-7 h-7 text-green-700" />
        </button>
        <button
          className="absolute right-4 top-1/2 z-20 bg-white/60 hover:bg-white/90 rounded-full p-2 shadow-lg transition-all"
          style={{ transform: 'translateY(-50%)' }}
          onClick={() => setCurrentSlide((currentSlide + 1) % schoolImages.length)}
          aria-label="Next slide"
        >
          <ChevronDown style={{ transform: 'rotate(-90deg)' }} className="w-7 h-7 text-green-700" />
        </button>
        {/* Carousel dots */}
        <div className="absolute bottom-8 left-1/2 z-20 flex gap-2 transform -translate-x-1/2">
          {schoolImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === currentSlide ? 'bg-green-600' : 'bg-white/70 border border-green-400'} transition-all`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="relative z-20 text-center max-w-6xl mx-auto px-4 fade-in-up">
          <div className="mb-6">
            <Badge className="bg-green-100 text-green-700 border-green-200 text-sm px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Learn by Doing
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-gray-900">
            Transform Your <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Passion</span> into a <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">Profession</span>
          </h1>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">About Our School</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Where <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Creativity</span> Meets Excellence
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-8" />
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 slide-in-left">
              <div className="prose prose-lg text-gray-700">
                <p className="text-xl leading-relaxed">
                  Greenland Film and Television School is a creative media and technology center focused on learning by doing. We accelerate innovative careers by transforming passion into profession through practical courses covering all film production stages from Development to Distribution.
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 hover-lift">
                <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-3" />
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To inspire a new generation of creative film professionals through pedagogic excellence in all stages of film production. We develop confident, responsible individuals in a supportive learning environment where every achievement is celebrated.
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
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-gray-700">{feature}</span>
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
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-green-100">
                    <div className="text-sm text-green-600 font-semibold">Success Quote</div>
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
      {/* Programs Section */}
      <section id="programs" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">Our Programs</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Professional <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Filmmaking</span> & Video Production
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master all aspects of film production – from concept to final edit – through hands-on training with industry professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Month 1 Card */}
            <div className="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-2xl shadow-lg p-8 flex flex-col items-start hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">Month 1</span>
                <Film className="w-6 h-6 text-green-600" />
                <span className="font-semibold text-green-700">Pre-Production</span>
              </div>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li><b>Story & Scriptwriting:</b> Loglines, treatments, screenplay formatting</li>
                <li><b>Visual Planning:</b> Storyboarding, shot composition, mood boards</li>
                <li><b>Production Prep:</b> Budgeting, casting, location scouting, scheduling</li>
                <li><b>Genres Covered:</b> Drama, Sci-Fi, Comedy, Horror, Documentary, more</li>
              </ul>
            </div>
            {/* Month 2 Card */}
            <div className="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-2xl shadow-lg p-8 flex flex-col items-start hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">Month 2</span>
                <Camera className="w-6 h-6 text-green-600" />
                <span className="font-semibold text-green-700">Production</span>
              </div>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li><b>Cinematography:</b> Camera techniques, lighting, framing</li>
                <li><b>Sound Design:</b> Microphones, dialogue, on-set audio</li>
                <li><b>Directing:</b> Working with actors, scene blocking, set management</li>
                <li><b>Practical Shoot:</b> Collaborative short film production</li>
              </ul>
            </div>
            {/* Month 3 Card */}
            <div className="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-2xl shadow-lg p-8 flex flex-col items-start hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">Month 3</span>
                <Palette className="w-6 h-6 text-green-600" />
                <span className="font-semibold text-green-700">Post-Production</span>
              </div>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li><b>Editing:</b> Scene cutting, pacing, software proficiency</li>
                <li><b>Audio Enhancement:</b> Sound effects, music, mixing</li>
                <li><b>Color Grading & VFX:</b> Final polish for professional results</li>
                <li><b>Portfolio Development:</b> Final project showcase, industry guidance</li>
              </ul>
            </div>
          </div>
          {/* Key Takeaways Card */}
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-green-100 to-white border border-green-200 rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Key Takeaways</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <span className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 text-green-700 font-medium text-sm"><Star className="w-4 h-4 text-green-500" /> Hands-on short film projects</span>
              <span className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 text-green-700 font-medium text-sm"><Award className="w-4 h-4 text-green-500" /> Industry-standard tools</span>
              <span className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 text-green-700 font-medium text-sm"><Users className="w-4 h-4 text-green-500" /> Crew role mastery</span>
              <span className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 text-green-700 font-medium text-sm"><Camera className="w-4 h-4 text-green-500" /> Portfolio-ready work</span>
            </div>
            <div className="text-gray-700 text-lg mb-2">Ideal for aspiring filmmakers, content creators, and media professionals seeking structured training.</div>
            <Button className="mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-8 py-3 text-lg shadow-lg hover-scale">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
      {/* Study Organization Section */}
      <section id="study-organization" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">Study Organization</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Flexible <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Learning</span> Options
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-8" />
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="hover-lift fade-in-up">
              <Card className="bg-white border-green-100 hover:border-green-300 transition-all duration-300 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Durations</h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "3 months - Basic theory & short film",
                      "6 months - Intermediate skills",
                      "8 months - Advanced techniques",
                      "1 year - Complete mastery",
                    ].map((duration, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        {duration}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="hover-lift fade-in-up">
              <Card className="bg-white border-green-100 hover:border-green-300 transition-all duration-300 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Shifts</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-green-600 font-semibold mb-2">Filmmaking & Video Production</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>Morning: 08:00 - 10:00</li>
                        <li>Evening: 17:00 - 19:00</li>
                        <li>Weekend: 08:00 - 16:00</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-green-600 font-semibold mb-2">Graphic Design & Photography</h4>
                      <p className="text-gray-700 text-sm">Same flexible shift options</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="hover-lift fade-in-up">
              <Card className="bg-white border-green-100 hover:border-green-300 transition-all duration-300 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Class Sizes</h3>
                  <div className="space-y-6">
                    <div className="text-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
                      <div className="text-3xl font-bold text-green-600">10</div>
                      <div className="text-gray-700">Filmmaking Students</div>
                      <div className="text-sm text-gray-600">per shift</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
                      <div className="text-3xl font-bold text-green-600">6</div>
                      <div className="text-gray-700">Design Students</div>
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
      <section id="head-of-school" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">Leadership</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Meet Our <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Director</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-8" />
          </div>
          <div className="bg-white rounded-3xl border border-green-100 overflow-hidden shadow-xl hover-lift fade-in-up">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img
                  src={CEO}
                  alt="Deus Dedit Sangwa"
                  className="w-full h-full object-cover min-h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center slide-in-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Deus Dedit Sangwa</h3>
                <p className="text-xl text-green-600 mb-6">Director, Producer & Cinematographer</p>
                <div className="space-y-4 mb-8">
                  {[
                    "Over a decade of filmmaking experience",
                    "Award-winning filmmaker (Best Cinematography at Mashariki African Film Festival)",
                    "Extensive teaching and mentoring experience",
                    "Founder of Greenland Pictures and Greenland Film School",
                  ].map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 slide-in-left"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover-lift">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-green-600" />
                    <span className="text-green-600 font-semibold">Recognition</span>
                  </div>
                  <p className="text-gray-700 italic">
                    "Leading the next generation of African filmmakers with passion, dedication, and industry expertise."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Admissions Section */}
      <section id="admissions" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">Admissions</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Start Your <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-8" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="fade-in-up">
              <Card className="bg-white border-green-100 hover:border-green-300 transition-all duration-300 shadow-lg hover-lift h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h3>
                  <ul className="space-y-4">
                    {[
                      "Basic education level",
                      "Basic computer skills",
                      "English proficiency",
                      "Rwandan ID (or passport/visa for international students)",
                      "CV and personal statement (250 words)",
                    ].map((requirement, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-gray-700 slide-in-left"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Card className="bg-white border-green-100 hover:border-green-300 transition-all duration-300 shadow-lg hover-lift h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Tuition Fees</h3>
                  <div className="space-y-4">
                    {[
                      { program: "Filmmaking", fee: "300,000 Frw" },
                      { program: "Videography", fee: "250,000 Frw" },
                      { program: "Graphic Design & Photography", fee: "200,000 Frw" },
                      { program: "Digital Photography", fee: "200,000 Frw" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200"
                      >
                        <span className="text-gray-700">{item.program}</span>
                        <span className="text-green-600 font-bold">{item.fee}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
                    <p className="text-sm text-gray-700">
                      <strong className="text-green-600">Includes:</strong> Course materials, refreshments, school t-shirt, certificate
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="text-center mt-12 fade-in-up">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-12 py-4 text-lg shadow-lg hover-scale"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">Get In Touch</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Contact <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Us</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-8" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8 slide-in-left">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Ready to transform your passion into a profession? Contact us today to learn more about our programs and start your creative journey.
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
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-green-100 hover:border-green-300 transition-all duration-300 hover-lift slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-green-600 font-semibold mb-1">{contact.label}</div>
                      <div className="text-gray-700">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center lg:justify-start mt-4">
                <a
                  href="https://instagram.com/greenlandfilmschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover-scale"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
            <div className="fade-in-up">
              <Card className="bg-white border-green-100 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-gray-50 border border-green-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-gray-50 border border-green-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-gray-50 border border-green-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Program Interest</label>
                      <select title="select" className="w-full px-4 py-3 bg-gray-50 border border-green-200 rounded-xl text-gray-900 focus:outline-none focus:border-green-500 transition-colors">
                        <option value="">Select a program</option>
                        <option value="filmmaking">Filmmaking</option>
                        <option value="videography">Videography</option>
                        <option value="graphic-design">Graphic Design & Photography</option>
                        <option value="digital-photography">Digital Photography</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-50 border border-green-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors resize-none"
                        placeholder="Tell us about your interest in our programs..."
                      />
                    </div>
                    <div>
                      <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 shadow-lg hover-scale">
                        Send Message
                        <ArrowRight className="w-4 h-4 ml-2" />
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
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-green-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4 fade-in-up">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Film className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">GREENLAND</div>
                  <div className="text-xs text-gray-600 -mt-1">FILM & TV SCHOOL</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Learn by doing and Transform your Passion into a Profession
              </p>
            </div>
            <div className="space-y-4 fade-in-up">
              <h4 className="text-gray-900 font-semibold">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-4 fade-in-up">
              <h4 className="text-gray-900 font-semibold">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Kigali, Rwanda</p>
                <p>+250 788 761 690</p>
                <p>greenlandfilmschool@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Greenland Film and Television School. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/greenlandfilmschool"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SchoolPage;
