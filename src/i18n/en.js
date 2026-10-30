// English copy. Keep the shape identical to ar.js — headings use { pre, accent, post } so the accent word can be styled.
const en = {
  lang: 'en',
  dir: 'ltr',
  locale: 'en_US',

  meta: {
    siteName: 'Mohamed Atya Hawash',
    title: 'Mohamed Atya Hawash | Laravel & Vue.js Developer for ERP, SaaS & SEO',
    description: 'Laravel, Vue.js, React & Next.js engineer building ERP systems, SaaS platforms, WordPress and SEO-ready websites. See 7 live projects and start yours.',
    keywords: ['Mohamed Atya Hawash', 'Laravel developer', 'Vue.js developer', 'React developer', 'Next.js developer', 'WordPress developer', 'PHP developer', 'ERP development', 'SaaS development', 'SEO-friendly websites', 'Egypt'],
    projectsTitle: 'All Projects | Mohamed Atya Hawash — Laravel & Vue.js Developer',
    projectsDescription: 'Browse every live project by Mohamed Atya Hawash: ERP systems, SaaS platforms, B2B marketplaces, e-commerce stores and SEO-ready company websites.',
    ogAlt: 'Mohamed Atya Hawash — I build the software your business runs on',
    notFoundTitle: 'Page not found | Mohamed Atya Hawash',
  },

  common: {
    startProject: 'Start a project',
    startYourProject: 'Start your project',
    whatsappMsg: 'Hi Mohamed, I would like to discuss a project.',
    chatWithMe: 'Chat with me',
    chatAria: 'Chat on WhatsApp',
    backToTop: 'Back to top',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
    homeAria: 'Mohamed Atya Hawash — Home',
    langLabel: 'العربية',
    langAria: 'التبديل إلى العربية',
    techAria: 'Core technologies',
  },

  nav: {
    brandName: 'Mohamed Atya',
    brandRole: 'Laravel & Vue.js Engineer',
    items: { services: 'Services', work: 'Work', process: 'Process', about: 'About', experience: 'Experience', contact: 'Contact' },
  },

  hero: {
    badge: 'Available for new projects',
    h1a: 'I build the software ',
    h1b: 'your business runs on.',
    roles: ['Full Stack Developer', 'Laravel & Vue.js Architect', 'SEO-Friendly Web Builds', 'Software Engineering Team Lead'],
    sub: 'Senior Laravel, Vue.js, React & Next.js engineer and team lead. I design and ship ERP systems, SaaS platforms, WordPress sites and SEO-ready websites — from first architecture sketch to a stable, secure launch.',
    primary: 'Start your project',
    secondary: 'See live work',
    cv: 'Download CV',
    proof: [
      { value: '5+', label: 'Years building' },
      { value: '25+', label: 'Projects delivered' },
      { value: '1,000+', label: 'Concurrent users served' },
      { value: '−30%', label: 'API response time' },
    ],
    floatStat: 'faster API responses',
    live: '7 platforms live in production',
    imgAlt: 'Mohamed Atya Hawash, Laravel and Vue.js developer, working at his desk',
  },

  services: {
    eyebrow: 'What I do',
    title: { pre: 'Services built around ', accent: 'your business goals', post: '' },
    lead: 'Five ways I help businesses turn a technical challenge into software that works every day.',
    link: 'Discuss this',
    items: [
      { title: 'Business Platforms & ERP', description: 'Custom cloud systems that connect operations, teams and data in one dependable workspace — so your staff stop juggling spreadsheets.', details: ['ERP workflows, CRM & POS', 'Inventory, HR and finance', 'Role-based access & e-invoicing'] },
      { title: 'SaaS & Full-Stack Products', description: 'From product requirements to deployment, I build web applications that are ready to onboard users and grow with them.', details: ['Multi-tenant SaaS applications', 'Vue.js / React interfaces', 'Dashboards & reporting'] },
      { title: 'Backend Systems & APIs', description: 'Secure Laravel backends and REST APIs designed to carry complex products, mobile apps and third-party integrations.', details: ['Laravel architecture', 'RESTful APIs & integrations', 'Payments, auth & RBAC'] },
      { title: 'SEO-Ready Websites', description: 'Fast, technically sound websites that are easier to discover on search engines and convert visitors into enquiries.', details: ['Technical & on-page SEO', 'Core Web Vitals tuning', 'Arabic / English builds'] },
      { title: 'Performance & Team Leadership', description: 'Rescue slow or fragile systems, and help your engineering team ship reliable, maintainable software.', details: ['Query & cache optimization', 'Code reviews & architecture', 'Team mentorship'] },
    ],
  },

  work: {
    eyebrow: 'Selected work',
    title: { pre: 'Live projects, ', accent: 'real results', post: '' },
    lead: 'Real systems used by real businesses every day. Each one is live — open them and see for yourself.',
    live: 'Live',
    visit: 'Visit live site',
    ctaText: '25+ projects delivered — enterprise systems, e-commerce, client websites and more.',
    browseAll: 'Browse all projects',
    countries: { Egypt: 'Egypt', Kuwait: 'Kuwait' },
    items: [
      { title: 'Cordiana ERP System', kind: 'Cloud ERP · SaaS', description: 'An all-in-one enterprise management platform covering Sales CRM, POS, HR & Payroll, Financial Accounting and Electronic Invoicing.', result: 'Sales, POS, HR, accounting and e-invoicing run in one secure multi-tenant platform.' },
      { title: 'One Step Industrial', kind: 'B2B Marketplace', description: 'A scalable industrial marketplace with multi-category hierarchies, dynamic machinery quote requests and a custom back-office.', result: '+35% API performance with search across 1,000+ SKUs.' },
      { title: 'Taggz App', kind: 'AI Platform', description: 'Backend APIs and media workflows for an event platform that matches and distributes photos using facial recognition.', result: 'Attendees receive their own event photos automatically, with real-time gallery sync.' },
      { title: 'Al-Nasser Group Portal', kind: 'Enterprise Portal', description: 'An internal portal for a leading Kuwaiti retail brand to manage logistics, delivery operations and multi-store workflows.', result: 'One role-based dashboard for logistics, delivery and store operations.' },
      { title: 'Tour Egypt Club', kind: 'Travel Booking Engine', description: 'An interactive travel engine with dynamic tour itineraries, transport reservations and automated quotes.', result: 'Automated quotes and a streamlined UI built to lift engagement and conversions.' },
      { title: 'Al Manarat Al Munira', kind: 'Fleet Management', description: 'A web solution for heavy-equipment and crane hire, service management and engineering project tracking.', result: 'Hire requests, quotes and client notifications handled online instead of by hand.' },
      { title: 'Eleman EG — Al Eman Contracting', kind: 'Corporate Website · SEO', description: 'An Arabic-first company website presenting general contracting, construction and surveying services across Egypt.', result: 'Bilingual (Arabic RTL + English) with search-friendly metadata and structured business data.' },
    ],
  },

  results: {
    eyebrow: 'Track record',
    title: { pre: 'Delivery you can ', accent: 'count on', post: '' },
    lead: "Measured outcomes from the systems and teams I've helped build.",
    items: ['Years of professional experience', 'Projects delivered to clients', 'Happy clients and teams', 'Users served on the platforms I build'],
  },

  process: {
    eyebrow: 'How we work',
    title: { pre: 'From idea to ', accent: 'production', post: ' in four steps' },
    lead: 'A simple, transparent workflow that keeps you informed from the first call to launch day.',
    steps: [
      { title: 'Discover & scope', text: 'We talk through your goals, users and constraints. I turn them into a clear scope, priorities and a realistic plan.', out: 'Scope & plan' },
      { title: 'Architect & design', text: 'I design the data model, API and system architecture so the product can scale and stay secure as it grows.', out: 'Architecture' },
      { title: 'Build in iterations', text: 'Agile delivery with regular demos, code reviews and testing, so you see working software early and often.', out: 'Working releases' },
      { title: 'Launch & support', text: 'Deployment, SSL, performance tuning and hand-over — then ongoing support as your product evolves.', out: 'Stable launch' },
    ],
  },

  about: {
    eyebrow: 'Why work with me',
    title: { pre: 'An engineer who thinks like ', accent: 'a business partner', post: '' },
    lead: 'I turn complex business needs into software that scales.',
    copy: [
      "I'm a Software Engineering Team Lead and Senior Full Stack Laravel Developer with **5+ years** of experience architecting and scaling web applications, cloud ERPs and SaaS platforms using PHP 8+, Laravel, MySQL, Vue.js and RESTful APIs. I also handle SEO so your website is easy to find.",
      'I lead engineering teams and manage the full software development lifecycle in Agile environments — with a proven record of optimizing backend performance and delivering complex B2B and enterprise solutions on time.',
    ],
    focus: ['Architecture', 'Backend', 'SEO', 'Team leadership', 'SaaS'],
    edu: { label: 'Education', degree: 'B.Sc. Computers & Information (Information Systems)', school: 'Damanhour University · Class of 2024' },
    reasons: [
      { title: 'Performance you can measure', description: 'Reduced API response times by 30% while serving 1,000+ concurrent users.' },
      { title: 'Built to scale', description: 'Architecture and database design that keep working as your users and data grow.' },
      { title: 'Security by default', description: 'Role-based access, secure APIs and safe deployments in every project.' },
      { title: 'Clean, maintainable code', description: 'Documented, tested code your team can keep extending long after launch.' },
    ],
  },

  skills: {
    eyebrow: 'Toolbox',
    title: { pre: 'The stack behind ', accent: 'your product', post: '' },
    lead: 'Proven tools I use every day to ship reliable products. Highlighted items are my daily drivers.',
    groups: [
      { title: 'Backend', skills: ['Laravel', 'PHP 8+', 'MySQL', 'MongoDB', 'RESTful APIs', 'Composer'], core: ['Laravel', 'PHP 8+', 'MySQL', 'RESTful APIs'] },
      { title: 'Frontend', skills: ['Vue.js', 'React', 'Next.js', 'WordPress', 'JavaScript ES6+', 'HTML5 / CSS3', 'Sass', 'Bootstrap', 'Blade'], core: ['Vue.js', 'React', 'Next.js', 'WordPress'] },
      { title: 'APIs & Testing', skills: ['Postman', 'JSON / XML', 'API Resources', 'JWT / Sanctum', 'PHPUnit', 'Laravel Dusk'], core: [] },
      { title: 'Deployment & Tools', skills: ['Git / GitHub / GitLab', 'cPanel / WHM', 'AWS / VPS', 'SSL & domains', 'AWS S3 / Backblaze B2'], core: [] },
      { title: 'Search Engine Optimization', skills: ['Technical SEO', 'On-page optimization', 'SEO-friendly development'], core: ['Technical SEO'] },
      { title: 'Working style', skills: ['Problem solving & debugging', 'Agile leadership', 'Stakeholder communication', 'Rapid onboarding'], core: [] },
    ],
  },

  experience: {
    eyebrow: 'Experience',
    title: { pre: 'Trusted by teams ', accent: 'across industries', post: '' },
    lead: 'Six roles across agencies, product teams and freelance — always focused on shipping software that holds up in production.',
    showMore: 'Show earlier experience ({n} more)',
    showLess: 'Show less',
    jobs: [
      {
        title: 'Software Engineering Team Lead / Senior Full Stack Developer', company: 'Cord Digital', period: 'Jan 2022 – Present', type: 'Full-time',
        description: 'Head of the Software Engineering Department, driving technical architecture decisions, overseeing code reviews and mentoring the team across all active projects.',
        achievements: [
          'Developed and maintained 20+ web applications using Laravel, PHP, MySQL, Vue.js and Bootstrap',
          'Engineered custom ERP systems, dashboards, RBAC, inventory, sales and financial reporting workflows',
          'Managed the full SDLC — from requirements analysis to deployment',
          'Optimized database indexing and Eloquent queries for scalable solutions',
        ],
      },
      {
        title: 'Full Stack Laravel Developer', company: 'SEO Wolves', period: 'Jul 2026 – Present', type: 'Part-time',
        description: 'Developing high-performance, SEO-friendly web applications, custom CMS solutions and digital marketing tools.',
        achievements: [
          'Improved core web vitals and database performance (up to −30% page load times)',
          'Built scalable RESTful APIs for client platforms',
          'Integrated automated analytics tools for reporting and performance tracking',
        ],
      },
      {
        title: 'Senior Full Stack Laravel Developer', company: 'The Mok Company', period: 'Jan 2024 – Jun 2026', type: 'Part-time',
        description: 'Architected enterprise-grade web applications, SaaS platforms and internal dashboards, including the Al-Nasser Group Portal and Taggz AI App.',
        achievements: [
          'Designed modular RESTful APIs and Eloquent schemas supporting RBAC and real-time analytics',
          'Optimized backend architecture, database queries and server-side caching',
          'Ensured low latency and high availability for high-traffic applications',
        ],
      },
      {
        title: 'Full Stack Developer', company: 'Kemeder / Kemework', period: 'Jun 2021 – Dec 2021', type: 'Contract',
        description: 'Led backend development of the Kemework freelance marketplace, delivering 20+ core features with Laravel and Bootstrap.',
        achievements: [
          'Implemented Redis/Laravel caching, cutting API response times by 30% for 1,000+ concurrent users',
          'Integrated real-time notifications and payment gateways (+35% success rate, +22% engagement)',
          'Revamped backend architecture for performance and reliability',
        ],
      },
      {
        title: 'Full Stack Developer', company: 'Inom Tecks', period: 'Jan 2020 – May 2021', type: 'Full-time',
        description: 'Built core CRM modules and improved system reliability for multiple client projects.',
        achievements: [
          'Built core CRM modules for 5+ client projects, reducing sales cycles by 15%',
          'Achieved a 95% client satisfaction rate',
          'Improved reliability via CI/CD, PHPUnit testing and API versioning (−60% bugs)',
        ],
      },
      {
        title: 'Freelance Web Developer', company: 'Self-Employed', period: '2019 – Present', type: 'Freelance',
        description: 'Delivered SEO-optimized web applications and e-commerce portals for clients, managing end-to-end delivery.',
        achievements: [
          'Built 5+ SEO-optimized web applications and e-commerce portals (+40% user retention)',
          'Improved overall speed performance by 30%',
          'Integrated analytics and payment solutions (+20% conversions and delivery speed)',
        ],
      },
    ],
  },

  testimonials: { eyebrow: 'Client feedback', title: { pre: 'What clients ', accent: 'say', post: '' } },

  faq: {
    eyebrow: 'FAQ',
    title: { pre: 'Questions clients ', accent: 'ask first', post: '' },
    items: [
      { q: 'What kind of projects do you take on?', a: 'Custom ERP and business systems, SaaS platforms, backend APIs and integrations, SEO-ready websites, and performance rescues for slow or fragile systems.' },
      { q: 'Can you work on an existing codebase or with my team?', a: 'Yes. I regularly optimize existing Laravel systems (queries, caching, architecture), run code reviews and mentor engineering teams alongside delivering new features.' },
      { q: 'Which technologies do you use?', a: 'Laravel, PHP 8+, MySQL, Vue.js, React and Next.js, REST APIs, plus deployment on AWS, VPS or cPanel with SSL and domain setup.' },
      { q: 'Do you also handle SEO and deployment?', a: 'Yes. Technical and on-page SEO, Core Web Vitals tuning, Arabic/English builds and the full launch — hosting, SSL and hand-over — are part of how I work.' },
      { q: 'How do we get started?', a: 'Send a short brief through the form or WhatsApp. We discuss your goals and scope on a call or chat, then I come back with an approach and next steps.' },
      { q: 'Do you work with clients outside Egypt?', a: 'Yes — I have delivered platforms for clients in Egypt and Kuwait, and collaborate over WhatsApp, email and calls.' },
    ],
  },

  contact: {
    eyebrow: "Let's talk",
    title: { pre: 'Have a project in mind? ', accent: "Let's build it.", post: '' },
    lead: "Tell me what you're trying to achieve — an ERP, a SaaS product, a faster website or a stronger backend. I'll reply with honest advice and a clear next step.",
    whatsapp: 'Chat on WhatsApp',
    channels: { email: 'Email', phone: 'Phone', location: 'Based in' },
    locationValue: 'Sidi-Ghazi, Kafr El-Dawar, Al-Buhayrah, Egypt',
    formTitle: 'Send a project brief',
    kindLabel: 'What do you need?',
    kinds: ['ERP / business system', 'SaaS / web app', 'Website + SEO', 'API / backend', 'Something else'],
    name: 'Full name', namePh: 'Your name',
    email: 'Email address', emailPh: 'you@company.com',
    message: 'Project details', messagePh: 'What are you building, and what does success look like?',
    submit: 'Continue in WhatsApp',
    note: 'Your message opens in WhatsApp — nothing is stored on this site.',
    sent: 'WhatsApp opened with your message. Press Send there to deliver it.',
    wa: { heading: 'New project enquiry', name: 'Name', email: 'Email', kind: 'Project type', message: 'Message' },
  },

  footer: {
    description: 'Full Stack Laravel & Vue.js engineer building ERP systems, SaaS platforms and SEO-ready websites for businesses that need software they can rely on.',
    explore: 'Explore',
    touch: 'Get in touch',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },

  projectsPage: {
    back: 'Back to portfolio',
    title: { pre: 'All ', accent: 'projects', post: '' },
    lead: 'Every system, platform and website listed here is live. Open any of them to see the work in production.',
    groups: [
      { title: 'Featured projects', note: 'Platforms and systems I architected and shipped.' },
      { title: 'Additional projects', note: 'Earlier work and special builds.' },
      { title: 'Client websites', note: 'Live websites and platforms built for clients.' },
    ],
    cta: 'Have something similar in mind?',
    comingSoon: 'Coming soon',
    visit: 'Visit live site',
    status: { Live: 'Live', 'Under Development': 'Under development' },
    countries: { Egypt: 'Egypt', Kuwait: 'Kuwait', 'Saudi Arabia': 'Saudi Arabia', USA: 'USA' },
  },

  notFound: { text: "This page doesn't exist. Let's get you back to the portfolio.", button: 'Back home' },

  seo: {
    personName: 'Mohamed Atya Hawash',
    jobTitle: 'Full Stack Laravel & Vue.js Developer, Software Engineering Team Lead',
    serviceName: 'Mohamed Atya Hawash — Web & Software Development',
    websiteName: 'Mohamed Atya Hawash — Portfolio',
    offers: ['Business platforms and ERP systems', 'SaaS and full-stack products', 'Backend systems and REST APIs', 'SEO-ready websites and WordPress', 'Performance optimization and team leadership'],
    listName: 'Projects by Mohamed Atya Hawash',
    breadcrumbHome: 'Home',
    breadcrumbProjects: 'All projects',
  },
}

export default en
