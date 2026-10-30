import React, { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaLaravel, FaVuejs, FaDatabase, FaUsers, FaGlobe, FaArrowLeft, FaArrowUp, FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import Navbar from './Navbar'
import Footer from './Footer'
import BackToTop from './BackToTop'
import { goToSection } from '../data/site'
import Seo from './Seo'
import { projectsJsonLd } from '../data/seo'

const AllProjects = ({ darkMode, toggleDarkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects = [
    {
      title: 'Eleman EG — Al Eman Contracting',
      description: 'Arabic-first company website for Al Eman, presenting its general contracting, construction, and surveying services across Egypt.',
      image: '/project-eleman-eg.webp',
      technologies: ['Arabic RTL', 'English', 'SEO'],
      features: [
        'Showcases general contracting and surveying services',
        'Arabic and English language versions',
        'Search-friendly metadata and structured business information'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://elemaneg.com/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaGlobe className="text-primary" size={32} />
    },
    {
      title: 'Cordiana ERP System',
      description: 'All-in-One Enterprise Business Management Platform. A comprehensive Cloud ERP solution featuring Sales CRM, POS, HR & Payroll, Financial Accounting, and Electronic Invoicing with modular Eloquent schemas and RESTful API endpoints.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel', 'PHP 8+', 'MySQL', 'Vue.js', 'Bootstrap', 'RESTful APIs'],
      features: [
        'Cloud ERP: Sales CRM, POS, HR & Payroll, Financial Accounting, E-Invoicing',
        'Modular Eloquent database schemas and RESTful API endpoints',
        'Real-time reporting workflows and seamless data integration',
        'Role-Based Access Control (RBAC) for secure multi-tenant operations',
        'Security sanitization and sanitized enterprise operations'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://cordiana-sys.com/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaDatabase className="text-primary" size={32} />
    },
    {
      title: 'One Step Industrial',
      description: 'B2B E-Commerce & Equipment Supply Platform. A scalable B2B industrial marketplace supporting multi-category product hierarchies, dynamic machinery quote requests, and customized back-office dashboards.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel', 'MySQL', 'Vue.js', 'Bootstrap', 'RESTful APIs'],
      features: [
        'Scalable B2B industrial marketplace with multi-category hierarchies',
        'Dynamic machinery quote requests',
        'Optimized database indexing across 1,000+ SKU items',
        '+35% improvement in page load speeds and API performance',
        'Custom back-office dashboards for sales and order tracking'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://onestepcorp.com/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaGlobe className="text-primary" size={32} />
    },
    {
      title: 'Tour Egypt Club',
      description: 'Travel & Tourism Booking Engine. An interactive travel engine featuring dynamic tour itineraries, transport reservations, automated quote systems, and optimized UI components.',
      image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel', 'MySQL', 'Vue.js', 'Bootstrap'],
      features: [
        'Dynamic tour itineraries and transport reservations',
        'Automated quote systems',
        'Multi-category filtering mechanisms',
        'Optimized UI components boosting user engagement',
        'Improved client conversions'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://touregyptclub.com/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaVuejs className="text-primary" size={32} />
    },
    {
      title: 'Al Manarat Al Munira',
      description: 'Heavy Equipment & Crane Fleet Management Platform. An enterprise web solution for industrial equipment hire, service management, and engineering project tracking with secure backend workflows.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel', 'MySQL', 'Vue.js', 'Bootstrap'],
      features: [
        'Enterprise solution for industrial equipment hire',
        'Service management and engineering project tracking',
        'Secure backend workflows for service requests',
        'Automated client notifications',
        'Quote handling'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://almanratalmonerah.com/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaLaravel className="text-primary" size={32} />
    },
    {
      title: 'Taggz App',
      description: 'AI-Powered Event Photo Matching Platform. Backend APIs and media processing workflows for an AI-driven event platform that matches and distributes event photos to attendees via facial recognition.',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel', 'PHP 8+', 'MySQL', 'RESTful APIs', 'Media Processing'],
      features: [
        'AI facial recognition photo matching and distribution',
        'Multi-role architectures for Hosts, Photographers, and Attendees',
        'Batch file uploads',
        'QR invitations',
        'Real-time gallery sync'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://taggz.app/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaUsers className="text-primary" size={32} />
    },
    {
      title: 'Al-Nasser Group Portal',
      description: 'Enterprise Retail Operations & Delivery Dashboard. An enterprise internal portal for Al-Nasser (leading Kuwaiti retail brand) to manage logistics, delivery operations, and multi-store workflows.',
      image: '/alnasser-brand.webp',
      technologies: ['Laravel', 'MySQL', 'Vue.js', 'Bootstrap'],
      features: [
        'Enterprise portal for logistics and delivery operations',
        'Multi-store workflows and operational dashboards',
        'Role-based access control (RBAC)',
        'Multi-tenant security layers',
        'Optimized reporting modules for operational staff'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://alnasser.themok.company/',
      status: 'Live',
      country: 'Kuwait',
      icon: <FaDatabase className="text-primary" size={32} />
    }
  ]

  const additionalProjects = [
    {
      title: 'Fans Var',
      description: 'A sports-focused social media platform that connects fans, players, and clubs in one place. It allows users to create profiles, follow their favorite teams, share posts, comment, and engage in real-time discussions about matches and sports events.',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel 10', 'Vue.js 3', 'MySQL', 'Tailwind CSS', 'JWT', 'Laravel Echo', 'Pusher', 'Laravel Socialite'],
      features: [
        'User authentication and profiles (Laravel + JWT)',
        'Social login integration (Google, Facebook, Twitter)',
        'Post creation, likes, and comments',
        'Real-time chat and notifications (Laravel Echo + Pusher)',
        'Club and player pages with stats and updates',
        'Admin dashboard to manage users, posts, and reports'
      ],
      github: 'https://github.com/mhmdatya72/fans-far',
      demo: 'http://fanzvar.rkmait.com/',
      status: 'Under Development',
      country: 'Egypt',
      icon: <FaUsers className="text-primary" size={32} />
    },
    {
      title: 'Eat',
      description: 'A full-featured food delivery and restaurant management system built with Laravel and Vue.js. It enables restaurants to manage menus, orders, deliveries, and payments efficiently through a single platform. Originally based on a CodeCanyon template, it was heavily customized and optimized for performance and scalability.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel 10', 'Vue.js 3', 'MySQL', 'Tailwind CSS', 'Stripe', 'PayPal', 'Square', 'Clover', 'Uber Direct'],
      features: [
        'Multi-restaurant support (Admin, Restaurant, Delivery, and Customer panels)',
        'Real-time order tracking and delivery notifications',
        'Secure online payment integration (Stripe, PayPal, Square, Clover)',
        'Uber Direct, Square, and Clover integration for delivery and payment management',
        'Offers, coupons, and loyalty program',
        'Advanced analytics dashboard (sales, orders, performance)',
        'Optimized backend using Laravel caching and query tuning'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://eat.invasso.com/home',
      status: 'Live',
      country: 'Egypt',
      icon: <FaUsers className="text-primary" size={32} />
    },
    {
      title: 'Educhain Learning Management System',
      description: 'Developed and customized the Educhain Learning Management System as a SaaS platform using Laravel and Blade templating engine. Built dynamic interfaces for managing courses, users, and blockchain-based certificates with full CRUD operations and optimized performance.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel', 'Blade Templates', 'MySQL', 'AJAX', 'jQuery', 'Bootstrap', 'SaaS'],
      features: [
        'Dynamic course management system',
        'Blockchain-based certificates',
        'Secure user authentication & access control',
        'AJAX-powered seamless interactions',
        'Optimized database performance'
      ],
      github: 'https://github.com/mhmdatya72/educhain-lms',
      demo: 'https://educhain.inomhub.com/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaUsers className="text-primary" size={32} />
    },
    {
      title: 'Out Seller CRM',
      description: 'Comprehensive CRM system with advanced lead scoring, segmentation, and automated workflows to help sales teams manage and convert leads more effectively.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel 9', 'Bootstrap', 'MySQL', 'Chart.js', 'Mail System'],
      features: [
        'Lead scoring and segmentation',
        'Automated email campaigns',
        'Sales pipeline management',
        'Analytics and reporting',
        'Team collaboration tools'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://outseller.tech/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaDatabase className="text-primary" size={32} />
    },
    {
      title: 'Kemework Marketplace',
      description: 'Freelance marketplace backend optimization project that improved API performance by 30% and successfully handled 1,000+ concurrent users with enhanced security measures.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel 8', 'Redis', 'MySQL', 'API Optimization', 'Load Balancing'],
      features: [
        'High-performance API endpoints',
        'Redis caching implementation',
        'Database query optimization',
        'Load balancing setup',
        'Security enhancements'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'http://kemework.com/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaLaravel className="text-primary" size={32} />
    },
    {
      title: 'Kemedar — Real Estate Platform',
      description: 'Kemedar is a modern PropTech (Property Technology) platform designed to digitalize and simplify the real estate market. It provides a unified ecosystem for property management, buying, selling, renting, and related services using Microservices Architecture for high performance and scalability.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel', 'Blade Templates', 'MongoDB', 'Microservices', 'Docker', 'Nginx', 'JWT'],
      features: [
        'Microservices Architecture for scalability',
        'MongoDB for complex property data',
        'API Gateway & JWT Authentication',
        '40% improved response times',
        'Docker containerized deployment'
      ],
      github: 'https://github.com/mhmdatya72/kemedar-platform',
      demo: 'http://kemedar.com/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaVuejs className="text-primary" size={32} />
    }
  ]

  const clientProjects = [
    {
      title: 'Namaa Export',
      description: 'Agricultural import & export company platform for fresh vegetables, fruits, and legumes, supplying global markets. Built with strict quality control workflows and full multi-language support (English / German / French).',
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel', 'MySQL', 'Multi-Language (EN/DE/FR)', 'Product Catalog', 'Contact & Gallery'],
      features: [
        'Exports-focused company website with product catalog',
        'Full multi-language support (English, German, French)',
        'Product detail pages with quality standards info',
        'Gallery and contact/quote request workflows'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://namaa-export.com/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaGlobe className="text-primary" size={32} />
    },
    {
      title: 'Dr. Ahmed Kamal',
      description: 'Arabic platform for a consultant in preventive medicine and lifestyle health (Jeddah). Combines consultation booking, e-books store, a rich article/blog section, and patient testimonials.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel', 'MySQL', 'E-Commerce (E-Books)', 'Blog', 'Arabic RTL', 'Consultation Booking'],
      features: [
        'E-book store with cart and checkout (healing books library)',
        'Medical awareness article/blog section',
        'Consultation booking and contact flows',
        'Arabic RTL-first interface with English toggle',
        'Testimonials and newsletter signup'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://drahmad-kamal.com/',
      status: 'Live',
      country: 'Saudi Arabia',
      icon: <FaUsers className="text-primary" size={32} />
    },
    {
      title: 'RightChoice Real Estate',
      description: 'Egyptian real estate asset management portal connecting property owners directly with buyers and renters — no broker and no commission. Full Arabic listing engine with search, pricing tiers, and verified ads.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel', 'MySQL', 'Listing Engine', 'Search & Filters', 'Arabic RTL'],
      features: [
        'Direct owner-to-buyer real estate platform (no commission)',
        'Advanced search with filters and pricing tiers',
        'Verified featured listings and property detail pages',
        'Arabic-first interface with full e-commerce-like ad management'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://rightchoice-co.com/ar',
      status: 'Live',
      country: 'Egypt',
      icon: <FaDatabase className="text-primary" size={32} />
    },
    {
      title: 'Noga Tours Egypt',
      description: 'A professional Egypt travel agency website (since 1983) with hundreds of tour packages, Nile cruises, excursions, hotel and transfer bookings. Rich package engine plus travel blog and TripAdvisor testimonials.',
      image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel', 'MySQL', 'Booking Engine', 'Tour Packages', 'Multi-Currency'],
      features: [
        'Dynamic tour package catalog with pricing and special offers',
        'Nile cruise, safari, and excursions booking flows',
        'Travel blog and destination guides',
        'TripAdvisor feedback integration'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://nogatours.com/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaVuejs className="text-primary" size={32} />
    },
    {
      title: 'Mar Decor',
      description: 'Corporate website for a Cairo-based interior & exterior decoration company (20+ years): finishing services, facade cladding, kitchens and furniture, with services showcase and company news.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel', 'MySQL', 'Bootstrap', 'Multi-Language (AR/EN)'],
      features: [
        'Decoration & finishing services showcase',
        'Projects and portfolio sections',
        'Arabic-first corporate site with English toggle',
        'Company news and contact workflows'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://mar-decor.com/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaLaravel className="text-primary" size={32} />
    },
    {
      title: 'Ragaie Consulting',
      description: 'Business & global strategy consulting platform: feasibility studies, business models and international consulting. Features a blog/insights section and AI-enhanced ERP integration branding for corporate clients.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel', 'MySQL', 'Blog', 'Multi-Language (EN/AR)'],
      features: [
        'Consulting services and feasibility study showcase',
        'Insights and article/blog publishing',
        'English-first with Arabic toggle',
        'Corporate branding with AI-powered solutions'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://ragaie.com/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaUsers className="text-primary" size={32} />
    },
    {
      title: 'OZ Planet School & Shop',
      description: 'Montessori-style kindergarten website (since 2001) with a built-in online shop selling stories, board games, activity books and toys — plus blog, tri-language support (English / Deutsch / Arabic).',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel', 'MySQL', 'E-Commerce Shop', 'Cart & Checkout', 'Tri-Language'],
      features: [
        'Montessori learning & school info pages',
        'Online shop with cart and checkout (toys, books, games)',
        'Tri-language interface (EN/DE/AR)',
        'News/blog section and preloader animation'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://oz-planet.com/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaGlobe className="text-primary" size={32} />
    },
    {
      title: 'Zizi Abusalla Fashion',
      description: 'Egyptian women’s fashion e-commerce brand — seasonal collections of abayas, dresses, kaftans and tops with quick-view, wishlist, filters, product reviews and account management.',
      image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel', 'MySQL', 'E-Commerce', 'Wishlist & Cart', 'Arabic RTL'],
      features: [
        'Full fashion e-commerce with seasonal collections',
        'Quick view, wishlist, and product reviews',
        'Advanced product filters (price, category)',
        'Arabic-first with English toggle and account system'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://ziziabusalla.com/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaDatabase className="text-primary" size={32} />
    },
    {
      title: 'Scriv Demo Store',
      description: 'A polished fashion & lifestyle e-commerce demo: clothing, bags, shoes and electronics with coupons, free-shipping thresholds, compare and wishlist — built as a showcase of premium storefront builds.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel', 'MySQL', 'E-Commerce Demo', 'Coupons & Checkout', 'Multi-Language'],
      features: [
        'Complete storefront with cart/checkout flows',
        'Coupons and free-shipping thresholds',
        'Compare, wishlist, and product quick view',
        'Multi-language demo storefront (EN/AR)'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://scriv.corddigital.com/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaVuejs className="text-primary" size={32} />
    },
    {
      title: 'Cord Digital',
      description: 'Corporate "Coming Soon" hub for Cord Digital — Computer Management and Website Design — with an email signup for the official launch.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['WordPress', 'Corporate', 'Coming Soon', 'Email Capture'],
      features: [
        'Launch page with brand positioning',
        'Email subscription for launch notification',
        'Clean corporate identity design'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://cordigital.com/',
      status: 'Live',
      country: 'Egypt',
      icon: <FaLaravel className="text-primary" size={32} />
    },
    {
      title: 'Cord Digital — Our Art',
      description: 'Cord Digital’s creative showcase portal ("Our Art") presenting the agency’s work in digital marketing, web & app development, SEO, Google Ads, video, music production and photography.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Web Development', 'SEO', 'Digital Marketing', 'Creative Showcase'],
      features: [
        'Creative portfolio and agency showcase',
        'Digital marketing, SEO & Google Ads services',
        'Video, music production and photography portfolios',
        'Multi-language agency presence (EN/AR)'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://art.corddigital.com',
      status: 'Live',
      country: 'Egypt',
      icon: <FaGlobe className="text-primary" size={32} />
    },
    {
      title: 'Cord Digital USA',
      description: 'US branch of the Cord Digital agency (NYC / Forest Hills) offering social media, Google Ads, SEO, web solutions, mobile apps, graphic design, video and multimedia — reaching clients in 55+ countries.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Web Solutions', 'SEO', 'Social Media', 'Google Ads', 'Mobile Apps'],
      features: [
        'Global digital agency services (55+ countries outreach)',
        'Social media & Google Ads campaign expertise',
        'Web and mobile app solutions',
        'Graphic, video and multimedia production'
      ],
      github: 'https://github.com/mhmdatya72',
      demo: 'https://corddigital.us',
      status: 'Live',
      country: 'USA',
      icon: <FaUsers className="text-primary" size={32} />
    }
  ]

  const jsonLd = useMemo(() => projectsJsonLd([...projects, ...additionalProjects, ...clientProjects]), []) // eslint-disable-line react-hooks/exhaustive-deps

  const ProjectCard = ({ project, index }) => (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.07 }}
      className="card card-hover project"
    >
      {project.demo !== '#' ? (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-media" aria-label={`Open ${project.title}`}>
          <img src={project.image} alt={`${project.title} website`} loading="lazy" />
          <div className="project-tags"><span className="tag-live"><i className="pulse" /> {project.status}{project.country ? ` · ${project.country}` : ''}</span></div>
        </a>
      ) : (
        <div className="project-media">
          <img src={project.image} alt={`${project.title} website`} loading="lazy" />
          <div className="project-tags"><span className="tag-live">{project.status}</span></div>
        </div>
      )}
      <div className="project-body">
        <h3>{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <ul className="project-features">
          {project.features.slice(0, 3).map((feature) => <li key={feature}><FaCheckCircle size={12} /><span>{feature}</span></li>)}
        </ul>
        <div className="project-stack">{project.technologies.map((tech) => <span key={tech} className="chip">{tech}</span>)}</div>
        {project.demo !== '#' ? (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">Visit live site <FaArrowUp size={12} style={{ transform: 'rotate(45deg)' }} /></a>
        ) : (
          <span className="soon">Coming soon</span>
        )}
      </div>
    </motion.article>
  )

  const groups = [
    { title: 'Featured projects', note: 'Platforms and systems I architected and shipped.', items: projects },
    { title: 'Additional projects', note: 'Earlier work and special builds.', items: additionalProjects },
    { title: 'Client websites', note: 'Live websites and platforms built for clients.', items: clientProjects },
  ]

  return (
    <div className="relative">
      <Seo title="All Projects | Mohamed Atya Hawash — Laravel & Vue.js Developer" description="Browse every live project by Mohamed Atya Hawash: ERP systems, SaaS platforms, B2B marketplaces, e-commerce stores and SEO-ready company websites." path="/projects" jsonLd={jsonLd} />
      <div className="backdrop" aria-hidden="true"><div className="backdrop-grid" /></div>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <header className="page-head">
        <div className="wrap">
          <Link to="/" className="back-link"><FaArrowLeft size={12} /> Back to portfolio</Link>
          <h1>All <span className="grad-text">projects</span></h1>
          <p>Every system, platform and website listed here is live. Open any of them to see the work in production.</p>
        </div>
      </header>

      <main className="wrap" style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem' }}>
        {groups.map((group) => (
          <section key={group.title}>
            <div className="group-title"><h2>{group.title}</h2><p>{group.note}</p></div>
            <div className="project-list">
              {group.items.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
            </div>
          </section>
        ))}

        <div className="work-cta" style={{ marginTop: '4rem' }}>
          <p>Have something similar in mind?</p>
          <button type="button" className="btn btn-primary" onClick={() => goToSection('contact')}>Start a project <FaArrowRight size={13} /></button>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}

export default AllProjects
