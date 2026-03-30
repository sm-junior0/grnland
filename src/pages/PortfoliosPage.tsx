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
import Gisele from '../assets/school/BENIMANA Gisele graphic.jpg'
import Claudette from '../assets/school/MUHAWENIMANA Claudette video.jpg'
import Nuriat from '../assets/school/UMWALI Nuriat  videography.jpg'
import Fridaus from '../assets/school/BIGIRIMANA Fridaus   videography.jpg'
import Noella from '../assets/school/IMANIRADUKUNDA Noella  video.jpg'
import Francoise from '../assets/school/MUKANDAYISENGA Francoise video.jpg'
import Christine from '../assets/school/GISIBIZO Christine video.jpg'
import Shemusa from '../assets/school/UWASE Shemusa  graphic.jpg'
import Belyse from '../assets/school/UWASE Belyse graphic.jpg'
import Olive from '../assets/school/TUYISHIMIRE Olive  video.jpg'
import Louise from '../assets/school/NYIRABANGENZI Louise  video.jpg'
import Vialine from '../assets/school/MUSABYEYEZU Vialine  graphic.jpg'
import Liliane from '../assets/school/MUHAWENIMANA Liliane   videography.jpg'
import Benitha from '../assets/school/MUKAGIHOZO Benitha    graphic.jpg'
import Cloudine from '../assets/school/MUSHIMIYIMANA Cloudine    vidography.jpg'
import Sandra from '../assets/school/BYIRINGIRO Sandra    graphic.jpg'
import Sandrine from '../assets/school/UWASE Sandrine  graphic.jpg'
import BelyseI from '../assets/school/IRADUKUNDA Belyse  videography.jpg'
import Valentine from '../assets/school/IZABERA Valentine  vdeography.jpg'
import BenithaN from '../assets/school/NIYOGUSHIMWA Benitha       videography.jpg'
import Aliane from '../assets/school/NIYONIZERA Alianne   graphic.jpg'
import Aline from '../assets/school/NIYONKURU Aline   graphic.jpg'
import Aisha from '../assets/school/TETA Aisha Fal-ha   videography.jpg'
import Charlotte from '../assets/school/UWAMAHIRWE Charlotte      graphic.jpg'
import testimonial1 from '../assets/testimonials/1.mp4'
import testimonial2 from '../assets/testimonials/2.mp4'
import testimonial3 from '../assets/testimonials/3.mp4'
import videoAll from '../assets/school/all.mp4'
import videoBelFalMucyo from '../assets/school/bel ,fal ,mucyo .mp4'
import videoFelBenNur from '../assets/school/fel,ben,nur.mp4'
import videoIshema from '../assets/school/ishema garage 2 .mp4'
// import videoAmir from '../assets/school/Amir 250326.mov'

import GiseleWork1 from '../assets/school/gisele1.jpg'
import GiseleWork2 from '../assets/school/gisele2.jpg'
import GiseleWork3 from '../assets/school/gisele3.jpg'
import GiseleWork4 from '../assets/school/gisele4.jpg'
import GiseleWork5 from '../assets/school/gisele5.jpg'
import GiseleWork6 from '../assets/school/gisele6.jpg'
import GiseleWork7 from '../assets/school/gisele7.jpg'
import GiseleWork8 from '../assets/school/gisele8.jpg'
import GiseleWork9 from '../assets/school/gisele9.jpg'

import BelyseWork1 from '../assets/school/belyse5.jpg'
import BelyseWork2 from '../assets/school/belyse2.jpg'
import BelyseWork3 from '../assets/school/belyse7.jpg'
import BelyseWork4 from '../assets/school/belyse8.jpg'
import BelyseWork5 from '../assets/school/belyse9.jpg'
import BelyseWork6 from '../assets/school/belyse10.jpg'

import ShemusaWork1 from '../assets/school/shemusa2.jpg'
import ShemusaWork2 from '../assets/school/shemusa3.jpg'
import ShemusaWork3 from '../assets/school/shemusa4.jpg'
import ShemusaWork4 from '../assets/school/shemusa6.jpg'
import ShemusaWork5 from '../assets/school/shemusa8.jpg'
import ShemusaWork6 from '../assets/school/shemusa9.jpg'

import VialineWork1 from '../assets/school/violine1.jpg'
import VialineWork2 from '../assets/school/violine2.jpg'
import VialineWork3 from '../assets/school/violine3.jpg'
import VialineWork4 from '../assets/school/violine4.jpg'

import AlianeWork1 from '../assets/school/aliane1.jpg'
import AlianeWork2 from '../assets/school/aliane2.jpg'
import AlianeWork3 from '../assets/school/aliane7.jpg'
import AlianeWork4 from '../assets/school/aliane8.jpg'
import AlianeWork5 from '../assets/school/aliane9.jpg'
import AlianeWork6 from '../assets/school/aliane10.jpg'

import AlineWork1 from '../assets/school/aline6.jpg'
import AlineWork2 from '../assets/school/aline3.jpg'
import AlineWork3 from '../assets/school/aline7.jpg'
import AlineWork4 from '../assets/school/aline8.jpg'
import AlineWork5 from '../assets/school/aline9.jpg'
import AlineWork6 from '../assets/school/aline10.jpg'

import BenithaWork1 from '../assets/school/benitha1.jpg'
import BenithaWork2 from '../assets/school/benitha6.jpg'
import BenithaWork3 from '../assets/school/benitha5.jpg'
import BenithaWork4 from '../assets/school/benitha9.jpg'
import BenithaWork5 from '../assets/school/benitha11.jpg'
import BenithaWork6 from '../assets/school/benitha12.jpg'

import CharlotteWork1 from '../assets/school/charlotte3.png'
import CharlotteWork2 from '../assets/school/charlotte2.jpg'
import CharlotteWork3 from '../assets/school/charlotte1.jpg'
import CharlotteWork4 from '../assets/school/charlotte6.jpg'
import CharlotteWork5 from '../assets/school/charlotte7.jpg'
import CharlotteWork6 from '../assets/school/charlotte8.jpg'

import SandraWork1 from '../assets/school/sandra1.jpg'
import SandraWork2 from '../assets/school/sandara9.jpg'
import SandraWork3 from '../assets/school/sandar3.jpg'
import SandraWork4 from '../assets/school/sandra10.jpg'
import SandraWork5 from '../assets/school/sandra6.jpg'
import SandraWork6 from '../assets/school/sandra8.jpg'

import SandrineWork1 from '../assets/school/sandrine10.jpg'
import SandrineWork2 from '../assets/school/sandrine9.jpg'
import SandrineWork3 from '../assets/school/sandrine8.jpg'
import SandrineWork4 from '../assets/school/sandrine7.jpg'
import SandrineWork5 from '../assets/school/sandrine6.jpg'
import SandrineWork6 from '../assets/school/sandrine3.jpg'

// Student Activity Images
import AlineActivity1 from '../assets/school/student/aline/IMG_1688.JPG.jpeg'
import AlineActivity2 from '../assets/school/student/aline/IMG_1690.JPG.jpeg'
import AlineActivity3 from '../assets/school/student/aline/IMG_1696.JPG.jpeg'

import AllianeActivity1 from '../assets/school/student/alliane/DSC01060.jpg'
import AllianeActivity2 from '../assets/school/student/alliane/DSC01063.jpg'

import BelyseIActivity1 from '../assets/school/student/belyse viddeo/CLSS_3.jpg'
import BelyseIActivity2 from '../assets/school/student/belyse viddeo/CLSS_4.jpg'
import BelyseIActivity3 from '../assets/school/student/belyse viddeo/CLSS_6.jpg'

import BenithaNActivity1 from '../assets/school/student/benitha/CLSS_22.jpg'
import BenithaNActivity2 from '../assets/school/student/benitha/CLSS_26.jpg'
import BenithaNActivity3 from '../assets/school/student/benitha/_V9A4683.jpg'

import BenithaActivity1 from '../assets/school/student/benitha mukagihozo/clss_14.jpg'
import BenithaActivity2 from '../assets/school/student/benitha mukagihozo/clss_18.jpg'
import BenithaActivity3 from '../assets/school/student/benitha mukagihozo/clss_22.jpg'

import CharlotteActivity1 from '../assets/school/student/charlote/DSC01426.jpg'
import CharlotteActivity2 from '../assets/school/student/charlote/DSC01427.jpg'
import CharlotteActivity3 from '../assets/school/student/charlote/DSC01429.jpg'

import ChristineActivity1 from '../assets/school/student/christine/IMG_1689.JPG.jpeg'
import ChristineActivity2 from '../assets/school/student/christine/IMG_1693.JPG.jpeg'
import ChristineActivity3 from '../assets/school/student/christine/_V9A4669.jpg'

import ClaudetteActivity1 from '../assets/school/student/cloudette/IMG_1692.JPG.jpeg'
import ClaudetteActivity2 from '../assets/school/student/cloudette/clss_22.jpg'

import FridausActivity1 from '../assets/school/student/fridaus/DSC08173.jpg'
import FridausActivity2 from '../assets/school/student/fridaus/DSC08604.jpg'
import FridausActivity3 from '../assets/school/student/fridaus/clss.jpg'

import LilianeActivity1 from '../assets/school/student/lilliane/clss (1).jpg'
import LilianeActivity2 from '../assets/school/student/lilliane/clss (1).png'

import LouiseActivity1 from '../assets/school/student/louise/_V9A4856.jpg'
import LouiseActivity2 from '../assets/school/student/louise/_V9A4890.jpg'
import LouiseActivity3 from '../assets/school/student/louise/clss_7.jpg'

import SandrineActivity1 from '../assets/school/student/sandrinr/_V9A4673.jpg'
import SandrineActivity2 from '../assets/school/student/sandrinr/clss_18.jpg'
import SandrineActivity3 from '../assets/school/student/sandrinr/clss_19.jpg'

import NoellaActivity1 from '../assets/school/student/noella/CLSS_41.jpg'
import NoellaActivity2 from '../assets/school/student/noella/class_5.jpg'
import NoellaActivity3 from '../assets/school/student/noella/class_7.jpg'

import NuriatActivity1 from '../assets/school/student/nuriat/CLSS_5.jpg'
import NuriatActivity2 from '../assets/school/student/nuriat/DSC01034.jpg'
import NuriatActivity3 from '../assets/school/student/nuriat/DSC08173.jpg'

import OliveActivity1 from '../assets/school/student/olive/CLSS_32.jpg'
import OliveActivity2 from '../assets/school/student/olive/CLSS_33.jpg'
import OliveActivity3 from '../assets/school/student/olive/clss_10.jpg'

import SandraActivity1 from '../assets/school/student/sandra/DSC08944.jpg'
import SandraActivity2 from '../assets/school/student/sandra/DSC08945.jpg'
import SandraActivity3 from '../assets/school/student/sandra/clss_30.jpg'

import ShemusaActivity1 from '../assets/school/student/sheamus/_V9A4675.jpg'
import ShemusaActivity2 from '../assets/school/student/sheamus/_V9A4676.jpg'
import ShemusaActivity3 from '../assets/school/student/sheamus/clss_13.jpg'

import AishaActivity1 from '../assets/school/student/teta aisha falha/CLSS_25.jpg'
import AishaActivity2 from '../assets/school/student/teta aisha falha/_V9A4702.jpg'
import AishaActivity3 from '../assets/school/student/teta aisha falha/_V9A4835.jpg'

import BelyseActivity1 from '../assets/school/student/uwase belse/DSC09810.jpg'
import BelyseActivity2 from '../assets/school/student/uwase belse/_V9A4721.jpg'

import ValentineActivity1 from '../assets/school/student/valentine/CLSS.jpg'
import ValentineActivity2 from '../assets/school/student/valentine/CLSS_38.jpg'
import ValentineActivity3 from '../assets/school/student/valentine/CLSS_40.jpg'

import VialineActivity1 from '../assets/school/student/vialine/DSC01060.jpg'
import VialineActivity2 from '../assets/school/student/vialine/DSC01063.jpg'
import VialineActivity3 from '../assets/school/student/vialine/IMG_1690.JPG.jpeg'

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
      name: "BENIMANA Gisele",
      program: "Graphic Design",
      title: "Graphic Designer",
      quote: "Design is thinking made visual",
      videoUrl: testimonial1,
      thumbnail: Gisele,
      portfolioCardImage: Gisele,
      bio: "Gisele developed these skills through intensive, hands-on training at Greenland Film and Television School, gaining practical experience in design tools, branding, and visual communication, and is prepared to deliver professional and innovative design solutions.",
      works: ["Brand Identity", "Editorial Design", "Web Layouts"],
      latestWork: [
        { type: 'photo', url: GiseleWork2, title: "Corporate Identity", description: "Professional business card design for CGO Group." },
        { type: 'photo', url: GiseleWork4, title: "Recruitment Poster", description: "Company announcement and welcome poster for Media Feathers." },
        { type: 'photo', url: GiseleWork5, title: "Product Advertisement", description: "Commercial poster for Akarabo Biscuits (Sina Gerard)." },
        { type: 'photo', url: GiseleWork6, title: "Commercial Brand", description: "Marketing visual variation for Akarabo product line." },
        { type: 'photo', url: GiseleWork7, title: "Brand Campaign", description: "Visual marketing campaign for Akarabo Biscuits." },
        { type: 'photo', url: GiseleWork8, title: "Marketing Visual", description: "Commercial advertising poster for SINA GERARD products." },
      ],
      activities: [heroImg1, heroImg2, heroImg3],
      phone: "+250 793 493 759",
      email: "[EMAIL_ADDRESS]",
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "BIGIRIMANA Fridaus",
      program: "Videography",
      title: "Videographer",
      quote: "Every frame I capture is a story waiting to be felt.",
      videoUrl: testimonial3,
      thumbnail: Fridaus,
      portfolioCardImage: Fridaus,
      bio: "I am a passionate videography student with a strong interest in cinematic storytelling and visual composition. I focus on capturing emotion through lighting, framing, and camera movement to create compelling visual narratives. My goal is to produce content that not only looks visually appealing but also connects deeply with audiences and leaves a lasting impression.",
      works: ["Digital Illustration", "Motion Graphics", "UX Design"],
      latestWork: [
        { type: 'video', url: videoAll, title: "Latest Work", description: "Vibrant videography showcase" },
        { type: 'video', url: videoFelBenNur, title: "Narrative Short", description: "Cinematic storytelling project" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/s7iQwZOzWxc?autoplay=1', videoId: 's7iQwZOzWxc', title: "External Masterclass", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/ABY8QMeg55k?autoplay=1', videoId: 'ABY8QMeg55k', title: "Industry Interview", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/OOXoZZSjpdo?autoplay=1', videoId: 'OOXoZZSjpdo', title: "Creative Showcase", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/BAY6qh2yjg4?autoplay=1', videoId: 'BAY6qh2yjg4', title: "Visual Storytelling", description: "Creative student feature project" }
      ],
      activities: [FridausActivity1, FridausActivity2, FridausActivity3],
      phone: "+250 793 083 952",
      email: "aimee.r@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "MUHAWENIMANA Claudette",
      program: "Videography",
      title: "Videographer",
      quote: "I don’t just film moments—I preserve emotions.",
      videoUrl: testimonial2,
      thumbnail: Claudette,
      portfolioCardImage: Claudette,
      bio: "I am a videography student dedicated to documenting authentic moments and turning them into meaningful visual stories. I enjoy working on real-life content, capturing genuine emotions and experiences. Through my work, I aim to create videos that feel natural, relatable, and emotionally engaging.",
      works: ["Documentary D", "Travel Vlog E", "Wedding Film F"],
      latestWork: [
        { type: 'video', url: videoAll, title: "Latest Work", description: "Vibrant videography showcase" },
        { type: 'video', url: videoBelFalMucyo, title: "Professional Reel", description: "Portfolio highlights and creative vision" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/s7iQwZOzWxc?autoplay=1', videoId: 's7iQwZOzWxc', title: "External Masterclass", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/ABY8QMeg55k?autoplay=1', videoId: 'ABY8QMeg55k', title: "Industry Interview", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/OOXoZZSjpdo?autoplay=1', videoId: 'OOXoZZSjpdo', title: "Creative Showcase", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/BAY6qh2yjg4?autoplay=1', videoId: 'BAY6qh2yjg4', title: "Visual Storytelling", description: "Creative student feature project" }
      ],
      activities: [ClaudetteActivity1, ClaudetteActivity2],
      phone: "+250 782 072 462",
      email: "david.j@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "MUKANDAYISENGA Francoise",
      program: "Videography",
      title: "Videographer",
      quote: "Through my lens, the ordinary becomes extraordinary.",
      videoUrl: testimonial3,
      thumbnail: Francoise,
      portfolioCardImage: Francoise,
      bio: "I am a creative videography student who enjoys experimenting with unique angles, perspectives, and editing styles. I strive to transform simple ideas into visually engaging content that stands out. My work reflects my curiosity and passion for pushing creative boundaries.",
      works: ["Character Design", "Book Illustration", "NFT Art"],
      latestWork: [
        { type: 'video', url: videoAll, title: "Latest Work", description: "Vibrant videography showcase" },
        { type: 'video', url: videoBelFalMucyo, title: "Professional Reel", description: "Portfolio highlights and creative vision" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/s7iQwZOzWxc?autoplay=1', videoId: 's7iQwZOzWxc', title: "External Masterclass", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/ABY8QMeg55k?autoplay=1', videoId: 'ABY8QMeg55k', title: "Industry Interview", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/OOXoZZSjpdo?autoplay=1', videoId: 'OOXoZZSjpdo', title: "Creative Showcase", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/BAY6qh2yjg4?autoplay=1', videoId: 'BAY6qh2yjg4', title: "Visual Storytelling", description: "Creative student feature project" }
      ],
      activities: [heroImg2, heroImg4, heroImg6],
      phone: "+250 795 809 415",
      email: "claire.m@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "MUSABYEYEZU Vialine",
      program: "Graphic Design",
      title: "Graphic Designer",
      quote: "Creativity is my process, design is my result.",
      videoUrl: testimonial1,
      thumbnail: Vialine,
      portfolioCardImage: Vialine,
      bio: "I am a creative designer who enjoys exploring bold ideas and experimenting with different styles. My work reflects my passion for innovation, as I aim to create designs that are unique, eye-catching, and meaningful.",
      works: ["Short Film: The Return", "Documentary: Kigali Streets"],
      latestWork: [
         { type: 'photo', url: VialineWork1, title: "Academic Certificate", description: "Professional certification from Greenland Film and Television School." },
        { type: 'photo', url: VialineWork2, title: "Social Awareness Poster", description: "Campaign poster for the Women Movement training session." },
        { type: 'photo', url: VialineWork3, title: "Event Poster", description: "Promotional design for community initiatives." },
        { type: 'photo', url: VialineWork4, title: "Creative Composition", description: "Visual exploration of social themes." },
      ],
      activities: [VialineActivity1, VialineActivity2, VialineActivity3],
      phone: "+250 795 824 579",
      email: "eric.m@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "NYIRABAGENZI Louise",
      program: "Videography",
      title: "Videographer",
      quote: "Light and motion are the language I speak.",
      videoUrl: testimonial2,
      thumbnail: Louise,
      portfolioCardImage: Louise,
      bio: "I have a strong passion for visual aesthetics, with a focus on lighting, color grading, and smooth motion. I enjoy creating visually striking videos that balance technical precision with artistic expression. I am continuously learning and refining my skills to achieve high-quality results.",
      works: ["Model Portfolio", "Fashion Editorial", "Street Portraits"],
      latestWork: [
        { type: 'video', url: videoAll, title: "Latest Work", description: "Vibrant videography showcase" },
        { type: 'video', url: videoBelFalMucyo, title: "Professional Reel", description: "Portfolio highlights and creative vision" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/s7iQwZOzWxc?autoplay=1', videoId: 's7iQwZOzWxc', title: "External Masterclass", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/ABY8QMeg55k?autoplay=1', videoId: 'ABY8QMeg55k', title: "Industry Interview", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/OOXoZZSjpdo?autoplay=1', videoId: 'OOXoZZSjpdo', title: "Creative Showcase", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/BAY6qh2yjg4?autoplay=1', videoId: 'BAY6qh2yjg4', title: "Visual Storytelling", description: "Creative student feature project" }
      ],
      activities: [LouiseActivity1, LouiseActivity2, LouiseActivity3],
      phone: "+250 784 895 455",
      email: "alice.k@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "TUYISHIMIRE Olive",
      program: "Videography",
      title: "Videographer",
      quote: "Stories live in motion—I bring them to life.",
      videoUrl: testimonial1,
      thumbnail: Olive,
      portfolioCardImage: Olive,
      bio: "I am a storytelling-driven videographer who enjoys creating narrative content, including short films and creative projects. My work focuses on building emotional connections through well-structured stories, thoughtful visuals, and engaging pacing.",
      works: ["Sound Score A", "Podcast Edit B"],
      latestWork: [
        { type: 'video', url: videoAll, title: "Latest Work", description: "Vibrant videography showcase" },
        { type: 'video', url: videoBelFalMucyo, title: "Professional Reel", description: "Portfolio highlights and creative vision" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/s7iQwZOzWxc?autoplay=1', videoId: 's7iQwZOzWxc', title: "External Masterclass", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/ABY8QMeg55k?autoplay=1', videoId: 'ABY8QMeg55k', title: "Industry Interview", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/OOXoZZSjpdo?autoplay=1', videoId: 'OOXoZZSjpdo', title: "Creative Showcase", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/BAY6qh2yjg4?autoplay=1', videoId: 'BAY6qh2yjg4', title: "Visual Storytelling", description: "Creative student feature project" }
      ],
      activities: [OliveActivity1, OliveActivity2, OliveActivity3],
      phone: "+250 791 224 865",
      email: "kevin.k@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "UWASE Belyse",
      program: "Graphic Design",
      title: "Graphic Designer",
      quote: "Simple design, powerful impact.",
      videoUrl: testimonial3,
      thumbnail: Belyse,
      portfolioCardImage: Belyse,
      bio: "I focus on clean and minimal design, emphasizing clarity and functionality. I believe that simplicity can be powerful, and I aim to create designs that are visually appealing while effectively communicating their purpose.",
      works: ["3D Short", "Game Environment", "VFX Reel"],
      latestWork: [
         { type: 'photo', url: BelyseWork1, title: "Business Branding", description: "Corporate identity design for Hope Designer." },
        { type: 'photo', url: BelyseWork2, title: "Academic Certificate", description: "Professional certification from Greenland Film and Television School." },
        { type: 'photo', url: BelyseWork3, title: "Promotional Poster", description: "Creative advertisement design for local services." },
        { type: 'photo', url: BelyseWork4, title: "Brand Packaging", description: "Visual identity for local product lines." },
        { type: 'photo', url: BelyseWork5, title: "Product Advertisement", description: "Commercial poster for Akarabo Biscuits." },
        { type: 'photo', url: BelyseWork6, title: "Social Campaign", description: "Awareness poster for community events." },
      ],
      activities: [BelyseActivity1, BelyseActivity2],
      phone: "+250 796 061 398",
      email: "sandra.u@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "UWASE Shemusa",
      program: "Graphic Design",
      title: "Graphic Designer",
      quote: "Design is not just seen—it is experienced.",
      videoUrl: testimonial3,
      thumbnail: Shemusa,
      portfolioCardImage: Shemusa,
      bio: "I am a graphic design student passionate about creating meaningful visual experiences. I focus on using color, typography, and layout effectively to communicate ideas clearly. My goal is to design work that not only looks good but also delivers strong and memorable messages.",
      works: ["3D Short", "Game Environment", "VFX Reel"],
      latestWork: [
         { type: 'photo', url: ShemusaWork1, title: "Academic Certificate", description: "Professional certification from Greenland Film and Television School." },
        { type: 'photo', url: ShemusaWork2, title: "Professional Certificate", description: "Academic achievement at Greenland Film and Television School." },
        { type: 'photo', url: ShemusaWork3, title: "Event Poster", description: "Campaign design for the Women Movement training session." },
        { type: 'photo', url: ShemusaWork4, title: "Social Awareness", description: "Visual campaign for the community movement." },
        { type: 'photo', url: ShemusaWork5, title: "Creative Poster", description: "Artistic exploration of social issues." },
        { type: 'photo', url: ShemusaWork6, title: "Marketing Visual", description: "Brand communication for local initiatives." },
      ],
      activities: [ShemusaActivity1, ShemusaActivity2, ShemusaActivity3],
      phone: "+250 795 858 159",
      email: "sandra.u@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "GISUBIZO Christine",
      program: "Videography",
      title: "Videographer",
      quote: "I chase authenticity in every shot I take.",
      videoUrl: testimonial3,
      thumbnail: Christine,
      portfolioCardImage: Christine,
      bio: "I am a versatile videography student exploring different styles and formats, from cinematic visuals to digital content creation. I am passionate about improving my technical and creative skills while developing my unique visual identity.",
      works: ["3D Short", "Game Environment", "VFX Reel"],
      latestWork: [
        { type: 'video', url: videoAll, title: "Latest Work", description: "Vibrant videography showcase" },
        { type: 'video', url: videoFelBenNur, title: "Narrative Short", description: "Cinematic storytelling project" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/s7iQwZOzWxc?autoplay=1', videoId: 's7iQwZOzWxc', title: "External Masterclass", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/ABY8QMeg55k?autoplay=1', videoId: 'ABY8QMeg55k', title: "Industry Interview", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/OOXoZZSjpdo?autoplay=1', videoId: 'OOXoZZSjpdo', title: "Creative Showcase", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/BAY6qh2yjg4?autoplay=1', videoId: 'BAY6qh2yjg4', title: "Visual Storytelling", description: "Creative student feature project" }
      ],
      activities: [ChristineActivity1, ChristineActivity2, ChristineActivity3],
      phone: "+250 791 930 166",
      email: "sandra.u@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "IMANIRADUKUNDA Noella",
      program: "Videography",
      title: "Videographer",
      quote: "Editing is where my vision comes alive",
      videoUrl: testimonial3,
      thumbnail: Noella,
      portfolioCardImage: Noella,
      bio: "I am particularly interested in post-production, where I bring footage together to create a cohesive and impactful story. I work with editing techniques, sound design, and transitions to produce polished videos that communicate ideas clearly and creatively.",
      works: ["3D Short", "Game Environment", "VFX Reel"],
      latestWork: [
        { type: 'video', url: videoAll, title: "Latest Work", description: "Vibrant videography showcase" },
        { type: 'video', url: videoFelBenNur, title: "Narrative Short", description: "Cinematic storytelling project" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/s7iQwZOzWxc?autoplay=1', videoId: 's7iQwZOzWxc', title: "External Masterclass", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/ABY8QMeg55k?autoplay=1', videoId: 'ABY8QMeg55k', title: "Industry Interview", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/OOXoZZSjpdo?autoplay=1', videoId: 'OOXoZZSjpdo', title: "Creative Showcase", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/BAY6qh2yjg4?autoplay=1', videoId: 'BAY6qh2yjg4', title: "Visual Storytelling", description: "Creative student feature project" }
      ],
      activities: [NoellaActivity1, NoellaActivity2, NoellaActivity3],
      phone: "+250 788 575 943",
      email: "sandra.u@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "UMWALI Nuriat",
      program: "Videography",
      title: "Videographer",
      quote: "A camera is my tool, creativity is my power.",
      videoUrl: testimonial3,
      thumbnail: Nuriat,
      portfolioCardImage: Nuriat,
      bio: "I am a versatile videography student exploring different styles and formats, from cinematic visuals to digital content creation. I am passionate about improving my technical and creative skills while developing my unique visual identity.",
      works: ["3D Short", "Game Environment", "VFX Reel"],
      latestWork: [
        { type: 'video', url: videoAll, title: "Latest Work", description: "Vibrant videography showcase" },
        { type: 'video', url: videoFelBenNur, title: "Narrative Short", description: "Cinematic storytelling project" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/s7iQwZOzWxc?autoplay=1', videoId: 's7iQwZOzWxc', title: "External Masterclass", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/ABY8QMeg55k?autoplay=1', videoId: 'ABY8QMeg55k', title: "Industry Interview", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/OOXoZZSjpdo?autoplay=1', videoId: 'OOXoZZSjpdo', title: "Creative Showcase", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/BAY6qh2yjg4?autoplay=1', videoId: 'BAY6qh2yjg4', title: "Visual Storytelling", description: "Creative student feature project" }
      ],
      activities: [NuriatActivity1, NuriatActivity2, NuriatActivity3],
      phone: "+250 790 250 533",
      email: "sandra.u@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "MUHAWENIMANA Liliane",
      program: "Videography",
      title: "Videographer",
      quote: "I capture moments today that will speak forever",
      videoUrl: testimonial3,
      thumbnail: Liliane,
      portfolioCardImage: Liliane,
      bio: "I am a videography student with a strong passion for capturing timeless moments through film. I focus on storytelling that preserves memories while maintaining a cinematic and visually appealing style.",
      works: ["3D Short", "Game Environment", "VFX Reel"],
      latestWork: [
        { type: 'video', url: videoAll, title: "Latest Work", description: "Vibrant videography showcase" },
        { type: 'video', url: videoFelBenNur, title: "Narrative Short", description: "Cinematic storytelling project" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/s7iQwZOzWxc?autoplay=1', videoId: 's7iQwZOzWxc', title: "External Masterclass", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/ABY8QMeg55k?autoplay=1', videoId: 'ABY8QMeg55k', title: "Industry Interview", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/OOXoZZSjpdo?autoplay=1', videoId: 'OOXoZZSjpdo', title: "Creative Showcase", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/BAY6qh2yjg4?autoplay=1', videoId: 'BAY6qh2yjg4', title: "Visual Storytelling", description: "Creative student feature project" }
      ],
      activities: [LilianeActivity1, LilianeActivity2],
      phone: "+250 791 408 012",
      email: "sandra.u@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "MUKAGIHOZO Benitha",
      program: "Graphic Design",
      title: "Graphic Designer",
      quote: "Design gives ideas a visual voice.",
      videoUrl: testimonial3,
      thumbnail: Benitha,
      portfolioCardImage: Benitha,
      bio: "I am a graphic design student who focuses on transforming ideas into clear and expressive visuals. My work combines creativity with strategy to communicate messages effectively.",
      works: ["3D Short", "Game Environment", "VFX Reel"],
      latestWork: [
         { type: 'photo', url: BenithaWork1, title: "Product Advertisement", description: "Visual campaign for Akarabo Biscuits." },
        { type: 'photo', url: BenithaWork2, title: "Commercial Brand", description: "Marketing poster for SINA GERARD products." },
        { type: 'photo', url: BenithaWork3, title: "Marketing Visual", description: "Brand communication for local food products." },
        { type: 'photo', url: BenithaWork4, title: "Creative Poster", description: "Visual exploration of brand themes." },
        { type: 'photo', url: BenithaWork5, title: "Social Awareness", description: "Community project design and awareness." },
        { type: 'photo', url: BenithaWork6, title: "Academic Project", description: "Design exploration for school assignments." },
      ],
      activities: [BenithaActivity1, BenithaActivity2, BenithaActivity3],
      phone: "+250 793 367 889",
      email: "sandra.u@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "MUSHIMIYIMANA Cloudine",
      program: "Videography",
      title: "Videographer",
      quote: "Visual storytelling is where creativity meets reality.",
      videoUrl: testimonial3,
      thumbnail: Cloudine,
      portfolioCardImage: Cloudine,
      bio: "I am a creative videographer who blends real-life moments with artistic expression. I focus on storytelling through carefully planned shots, smooth transitions, and engaging visuals.",
      works: ["3D Short", "Game Environment", "VFX Reel"],
      latestWork: [
        { type: 'video', url: videoAll, title: "Latest Work", description: "Vibrant videography showcase" },
        { type: 'video', url: videoIshema, title: "Professional Reel", description: "Portfolio highlights and creative vision" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/s7iQwZOzWxc?autoplay=1', videoId: 's7iQwZOzWxc', title: "External Masterclass", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/ABY8QMeg55k?autoplay=1', videoId: 'ABY8QMeg55k', title: "Industry Interview", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/OOXoZZSjpdo?autoplay=1', videoId: 'OOXoZZSjpdo', title: "Creative Showcase", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/BAY6qh2yjg4?autoplay=1', videoId: 'BAY6qh2yjg4', title: "Visual Storytelling", description: "Creative student feature project" }
      ],
      activities: [heroImg2, heroImg4, heroImg6],
      phone: "+250 729 388 373",
      email: "sandra.u@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "BYIRINGIRO Sandra",
      program: "Graphic Design",
      title: "Graphic Designer",
      quote: "My lens focuses on stories that matter.",
      videoUrl: testimonial3,
      thumbnail: Sandra,
      portfolioCardImage: Sandra,
      bio: "I am a purposeful designer who approaches each project with clarity and intention, creating designs that are both visually appealing and functionally effective.",
      works: ["3D Short", "Game Environment", "VFX Reel"],
      latestWork: [
         { type: 'photo', url: SandraWork1, title: "Product Advertisement", description: "Commercial poster for Akarabo Biscuits." },
        { type: 'photo', url: SandraWork2, title: "Marketing Visual", description: "Visual identity campaign for SINA GERARD." },
        { type: 'photo', url: SandraWork3, title: "Commercial Brand", description: "Promotional artwork for local bakery products." },
        { type: 'photo', url: SandraWork4, title: "Brand Campaign", description: "Marketing visual for Akarabo product line." },
        { type: 'photo', url: SandraWork5, title: "Creative Poster", description: "Artistic brand representation." },
        { type: 'photo', url: SandraWork6, title: "Design Study", description: "Visual exploration of commercial themes." },
      ],
      activities: [SandraActivity1, SandraActivity2, SandraActivity3],
      phone: "+250 794 286 887",
      email: "sandra.u@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "IRADUKUNDA Belyse",
      program: "Videography",
      title: "Videographer",
      quote: "I create stories that move—not just visually, but emotionally.",
      videoUrl: testimonial3,
      thumbnail: Belyse,
      portfolioCardImage: Belyse,
      bio: "I am a videography student dedicated to producing emotionally engaging content. I focus on narrative structure and pacing to ensure each project connects meaningfully with its audience.",
      works: ["3D Short", "Game Environment", "VFX Reel"],
      latestWork: [
        { type: 'video', url: videoAll, title: "Latest Work", description: "Vibrant videography showcase" },
        { type: 'video', url: videoBelFalMucyo, title: "Professional Reel", description: "Portfolio highlights and creative vision" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/s7iQwZOzWxc?autoplay=1', videoId: 's7iQwZOzWxc', title: "External Masterclass", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/ABY8QMeg55k?autoplay=1', videoId: 'ABY8QMeg55k', title: "Industry Interview", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/OOXoZZSjpdo?autoplay=1', videoId: 'OOXoZZSjpdo', title: "Creative Showcase", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/BAY6qh2yjg4?autoplay=1', videoId: 'BAY6qh2yjg4', title: "Visual Storytelling", description: "Creative student feature project" }
      ],
      activities: [BelyseIActivity1, BelyseIActivity2, BelyseIActivity3],
      phone: "+250 790 040 273",
      email: "sandra.u@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "IZABERA Valentine",
      program: "Videography",
      title: "Videographer",
      quote: "Behind every video is a vision waiting to be seen.",
      videoUrl: testimonial3,
      thumbnail: Valentine,
      portfolioCardImage: Valentine,
      bio: "I am passionate about turning creative ideas into visual reality. I enjoy working on diverse projects, using both technical and creative skills to bring unique concepts to life.",
      works: ["3D Short", "Game Environment", "VFX Reel"],
      latestWork: [
        { type: 'video', url: videoAll, title: "Latest Work", description: "Vibrant videography showcase" },
        { type: 'video', url: videoIshema, title: "Professional Reel", description: "Portfolio highlights and creative vision" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/s7iQwZOzWxc?autoplay=1', videoId: 's7iQwZOzWxc', title: "External Masterclass", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/ABY8QMeg55k?autoplay=1', videoId: 'ABY8QMeg55k', title: "Industry Interview", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/OOXoZZSjpdo?autoplay=1', videoId: 'OOXoZZSjpdo', title: "Creative Showcase", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/BAY6qh2yjg4?autoplay=1', videoId: 'BAY6qh2yjg4', title: "Visual Storytelling", description: "Creative student feature project" }
      ],
      activities: [ValentineActivity1, ValentineActivity2, ValentineActivity3],
      phone: "+250 793 856 245",
      email: "sandra.u@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "NIYOGUSHIMWA Benitha",
      program: "Videography",
      title: "Videographer",
      quote: "I see stories where others see moments.",
      videoUrl: testimonial3,
      thumbnail: BenithaN,
      portfolioCardImage: BenithaN,
      bio: "I am a detail-oriented videographer who specializes in capturing subtle moments and transforming them into impactful visual stories through creativity and precision.",
      works: ["3D Short", "Game Environment", "VFX Reel"],
      latestWork: [
        { type: 'video', url: videoAll, title: "Latest Work", description: "Vibrant videography showcase" },
        { type: 'video', url: videoFelBenNur, title: "Narrative Short", description: "Cinematic storytelling project" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/s7iQwZOzWxc?autoplay=1', videoId: 's7iQwZOzWxc', title: "External Masterclass", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/ABY8QMeg55k?autoplay=1', videoId: 'ABY8QMeg55k', title: "Industry Interview", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/OOXoZZSjpdo?autoplay=1', videoId: 'OOXoZZSjpdo', title: "Creative Showcase", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/BAY6qh2yjg4?autoplay=1', videoId: 'BAY6qh2yjg4', title: "Visual Storytelling", description: "Creative student feature project" }
      ],
      activities: [BenithaNActivity1, BenithaNActivity2, BenithaNActivity3],
      phone: "+250 783 450 415",
      email: "sandra.u@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
    {
      name: "NIYONIZERA Alianne",
      program: "Graphic Design",
      title: "Graphic Designer",
      quote: "I design with meaning, not just aesthetics.",
      videoUrl: testimonial3,
      thumbnail: Aliane,
      portfolioCardImage: Aliane,
      bio: "I am passionate about creating designs that go beyond appearance, focusing on meaning and communication while applying strong design principles.",
      works: ["3D Short", "Game Environment", "VFX Reel"],
      latestWork: [
         { type: 'photo', url: AlianeWork1, title: "Brand Innovation", description: "Commercial poster design for Flexisync solutions." },
        { type: 'photo', url: AlianeWork2, title: "Creative Composition", description: "Visual storytelling for modern brand identity." },
        { type: 'photo', url: AlianeWork3, title: "Corporate Poster", description: "Professional brand representation visual." },
        { type: 'photo', url: AlianeWork4, title: "Marketing Visual", description: "Identity design for technology-driven results." },
        { type: 'photo', url: AlianeWork5, title: "Social Campaign", description: "Community awareness and engagement design." },
        { type: 'photo', url: AlianeWork6, title: "Academic Project", description: "Visual design exploration for graduation portfolio." },
      ],
      activities: [AllianeActivity1, AllianeActivity2],
      phone: "+250 732 898 237",
      email: "sandra.u@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
     {
      name: "NIYONKURU Aline",
      program: "Graphic Design",
      title: "Graphic Designer",
      quote: "Creativity is turning simple ideas into strong visuals.",
      videoUrl: testimonial3,
      thumbnail: Aline,
      portfolioCardImage: Aline,
      bio: "I am a creative designer who enjoys simplifying complex ideas into clean and impactful designs that balance simplicity with innovation.",
      works: ["3D Short", "Game Environment", "VFX Reel"],
      latestWork: [
         { type: 'photo', url: AlineWork1, title: "Academic Certificate", description: "Professional certification from Greenland Film and Television School." },
        { type: 'photo', url: AlineWork2, title: "Creative Poster", description: "Visual exploration of modern brand themes." },
        { type: 'photo', url: AlineWork3, title: "Social Awareness", description: "Community project design and visual campaign." },
        { type: 'photo', url: AlineWork4, title: "Commercial Brand", description: "Promotional artwork for local product marketing." },
        { type: 'photo', url: AlineWork5, title: "Marketing Visual", description: "Brand communication strategies for school projects." },
        { type: 'photo', url: AlineWork6, title: "Design Study", description: "Visual identity and logo exploration." },
      ],
      activities: [AlineActivity1, AlineActivity2, AlineActivity3],
      phone: "+250 790 159 049",
      email: "sandra.u@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
     {
      name: "TETA Aisha Fal-ha",
      program: "Videography",
      title: "Videographer",
      quote: "Creativity begins the moment I press record.”",
      videoUrl: testimonial3,
      thumbnail: Aisha,
      portfolioCardImage: Aisha,
      bio: "I am an innovative videography student who enjoys experimenting with different filming techniques and editing styles to enhance visual storytelling.",
      works: ["3D Short", "Game Environment", "VFX Reel"],
      latestWork: [
        { type: 'video', url: videoAll, title: "Latest Work", description: "Vibrant videography showcase" },
        { type: 'video', url: videoBelFalMucyo, title: "Professional Reel", description: "Portfolio highlights and creative vision" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/s7iQwZOzWxc?autoplay=1', videoId: 's7iQwZOzWxc', title: "External Masterclass", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/ABY8QMeg55k?autoplay=1', videoId: 'ABY8QMeg55k', title: "Industry Interview", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/OOXoZZSjpdo?autoplay=1', videoId: 'OOXoZZSjpdo', title: "Creative Showcase", description: "Professional external feature" },
        { type: 'youtube', url: 'https://www.youtube.com/embed/BAY6qh2yjg4?autoplay=1', videoId: 'BAY6qh2yjg4', title: "Visual Storytelling", description: "Creative student feature project" }
      ],
      activities: [AishaActivity1, AishaActivity2, AishaActivity3],
      phone: "+250 796 907 942",
      email: "sandra.u@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
     {
      name: "UWAMAHIRWE Charlotte",
      program: "Graphic Design",
      title: "Graphic Designer",
      quote: "Design is where creativity meets purpose.",
      videoUrl: testimonial3,
      thumbnail: Charlotte,
      portfolioCardImage: Charlotte,
      bio: "I am a graphic design student passionate about creating visuals that are both meaningful and effective. I focus on combining creativity with strong design principles such as typography, color, and layout to communicate ideas clearly and leave a lasting impact.",
      works: ["3D Short", "Game Environment", "VFX Reel"],
      latestWork: [
         { type: 'photo', url: CharlotteWork1, title: "Commercial Brand", description: "Inyange Milk product advertisement campaign." },
        { type: 'photo', url: CharlotteWork2, title: "Marketing Visual", description: "Brand identity for Meadow Fresh dairy products." },
        { type: 'photo', url: CharlotteWork3, title: "Product Advertisement", description: "Visual campaign for Inyange whole milk." },
        { type: 'photo', url: CharlotteWork4, title: "Creative Poster", description: "Artistic representation of commercial dairy brands." },
        { type: 'photo', url: CharlotteWork5, title: "Social Campaign", description: "Community awareness and hygiene design." },
        { type: 'photo', url: CharlotteWork6, title: "Academic Project", description: "Portfolio development and design exploration." },
      ],
      activities: [CharlotteActivity1, CharlotteActivity2, CharlotteActivity3],
      phone: "+250 729 943 825",
      email: "sandra.u@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
     {
      name: "UWASE Sandrine",
      program: "Graphic Design",
      title: "Graphic Designer",
      quote: "I create designs that don’t just look good—they communicate.",
      videoUrl: testimonial3,
      thumbnail: Sandrine,
      portfolioCardImage: Sandrine,
      bio: "I am a creative graphic designer who enjoys turning ideas into visually engaging content. My work is centered on clarity, innovation, and audience connection, ensuring that every design delivers its message in a simple and compelling way.",
      works: ["3D Short", "Game Environment", "VFX Reel"],
      latestWork: [
         { type: 'photo', url: SandrineWork1, title: "Product Advertisement", description: "Brand identity visual for Akarabo Biscuits." },
        { type: 'photo', url: SandrineWork2, title: "Marketing Visual", description: "Visual campaign for SINA GERARD products." },
        { type: 'photo', url: SandrineWork3, title: "Commercial Brand", description: "Promotional artwork for local bakery brand." },
        { type: 'photo', url: SandrineWork4, title: "Creative Poster", description: "Visual exploration of commercial marketing." },
        { type: 'photo', url: SandrineWork5, title: "Social Awareness", description: "Community project design and campaign." },
        { type: 'photo', url: SandrineWork6, title: "Academic Project", description: "Professional portfolio development for school." },
      ],
      activities: [SandrineActivity1, SandrineActivity2, SandrineActivity3],
      phone: "+250 790 851 377",
      email: "sandra.u@example.com",
      youtubeLinks: [],
      gender: 'female'
    },
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
              <h1 className="text-xl md:text-3xl font-black text-gray-900 tracking-tight uppercase leading-tight">
                WHERE CAREERS ARE BUILT
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
                  src={student.portfolioCardImage || student.thumbnail} 
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
                      <h3 className="text-2xl font-bold leading-tight">
                        {student.name.split(' ').map((n, i) => (
                           <span key={i} className={i === 0 ? "text-white block" : "text-[#22c55e] block text-lg font-medium tracking-wide"}>
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
            <div className="col-span-full py-12 flex flex-col items-center text-center space-y-6 reveal-up">
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
