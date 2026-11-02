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
    ogAlt: 'Mohamed Atya Hawash — Software your business can rely on',
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
    brandRole: 'Software Engineering',
    items: { services: 'Services', work: 'Work', process: 'Process', about: 'About', experience: 'Experience', contact: 'Contact' },
  },

  hero: {
    badge: 'Open to hire and new projects',
    h1a: "Fast, secure web systems, ",
    h1b: "from idea to launch.",
    roles: ['Full Stack Developer', 'Laravel & Vue.js Architect', 'SEO-Friendly Web Builds', 'Software Engineer'],
    sub: "An ERP, a SaaS platform or a website that ranks on Google, built with Laravel, Vue.js, React & Next.js. Fast, secure and ready to scale, from the first call to launch, backed by 4+ years and 25+ delivered projects.",
    primary: 'Start your project',
    secondary: 'See live work',
    cv: 'Download CV',
    proof: [
      { value: '4+', label: 'Years building' },
      { value: '25+', label: 'Projects delivered' },
      { value: '1,000+', label: 'Concurrent users served' },
      { value: '−30%', label: 'API response time' },
    ],
    floatStat: 'faster API responses',
    live: '7 platforms live in production',
    imgAlt: 'Mohamed Atya Hawash, Laravel and Vue.js developer, working at his desk',
  },

  services: {
    eyebrow: 'What you get',
    title: { pre: 'Services built around ', accent: 'your business goals', post: '' },
    lead: "Five ways to turn a technical challenge into software that works for your business every day.",
    link: 'Discuss this',
    items: [
      { title: "Business Platforms & ERP", description: "One cloud system that connects sales, HR, inventory and finance — so your team stops juggling spreadsheets and disconnected tools.", details: ["ERP workflows, CRM & POS","Inventory, HR and finance","Role-based access & e-invoicing"] },
      { title: "SaaS & Full-Stack Products", description: "From idea to launch: multi-tenant web applications with polished interfaces, ready to onboard users and grow with them.", details: ["Multi-tenant SaaS applications","Vue.js / React interfaces","Dashboards & reporting"] },
      { title: "Backend Systems & APIs", description: "Secure, fast Laravel backends and REST APIs that power complex products, mobile apps and third-party integrations.", details: ["Laravel architecture","RESTful APIs & integrations","Payments, auth & RBAC"] },
      { title: "SEO-Ready Websites", description: "Fast, technically sound websites built to rank on search engines and turn visitors into enquiries.", details: ["Technical & on-page SEO","Core Web Vitals tuning","Arabic / English builds"] },
      { title: "Performance & System Rescue", description: "Slow or fragile system? Bottlenecks are found, fixed and documented, leaving software that stays fast and easy to maintain.", details: ["Query & cache optimization","Architecture & code audits","Fixing slow or fragile systems"] },
    ],
  },

  work: {
    eyebrow: 'Selected work',
    title: { pre: 'Live projects, ', accent: 'real results', post: '' },
    lead: 'Real systems used by real businesses every day. Each one is live — open them and see for yourself.',
    live: 'Live',
    visit: 'Visit live site',
    ctaText: '25+ projects delivered — enterprise systems, e-commerce, client websites and more.',
    details: 'Project details',
    browseAll: 'Browse all projects',
    countries: { USA: 'USA', Egypt: 'Egypt', Kuwait: 'Kuwait' },
    items: [
      { title: 'Cordiana ERP System', kind: 'Cloud ERP · SaaS', description: 'An all-in-one enterprise management platform covering Sales CRM, POS, HR & Payroll, Financial Accounting and Electronic Invoicing.', result: 'Sales, POS, HR, accounting and e-invoicing run in one secure multi-tenant platform.' },
      { title: 'Mountain Lakes Bagels', kind: 'Online Ordering · USA', description: 'An online ordering platform for a New Jersey bagel shop, with a categorized menu, cart, offers and customer accounts.', result: 'Customers browse the menu, add items to the cart and order online.' },
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
    lead: 'Measured outcomes from systems built and delivered to real businesses.',
    items: ['Years of professional experience', 'Projects delivered to clients', 'Happy clients', 'Users served across the delivered platforms'],
  },

  process: {
    eyebrow: 'How we work',
    title: { pre: 'From idea to ', accent: 'production', post: ' in four steps' },
    lead: 'A simple, transparent workflow that keeps you informed from the first call to launch day.',
    steps: [
      { title: 'Discover & scope', text: "We talk through your goals, users and constraints, then turn them into a clear scope, priorities and a realistic plan.", out: 'Scope & plan' },
      { title: 'Architect & design', text: "The data model, API and system architecture are designed so the product scales and stays secure as it grows.", out: 'Architecture' },
      { title: 'Build in iterations', text: 'Agile delivery with regular demos, code reviews and testing, so you see working software early and often.', out: 'Working releases' },
      { title: 'Launch & support', text: 'Deployment, SSL, performance tuning and hand-over — then ongoing support as your product evolves.', out: 'Stable launch' },
    ],
  },

  about: {
    eyebrow: "Why clients choose Mohamed",
    title: { pre: 'An engineer who thinks like ', accent: 'a business partner', post: '' },
    lead: "Complex business needs, turned into software that scales.",
    copy: [
      "Mohamed Atya Hawash is a Senior Full Stack Laravel developer with **4+ years** of experience architecting and scaling web applications, cloud ERPs and SaaS platforms with PHP 8+, Laravel, MySQL, Vue.js and RESTful APIs — plus the SEO know-how to make them easy to find.",
      "From requirements to deployment, every project follows a clear Agile process, backed by a proven record of faster backends and on-time delivery of complex B2B and enterprise solutions.",
    ],
    focus: ['Architecture', 'Backend', 'SEO', 'Delivery', 'SaaS'],
    edu: { label: 'Education', degree: 'B.Sc. Computers & Information (Information Systems)', school: 'Damanhour University · Class of 2024' },
    reasons: [
      { title: "Measurable performance", description: "API response times cut by 30% on a platform serving 1,000+ concurrent users." },
      { title: "Scalable and secure", description: "Architecture, database design and role-based access that keep working safely as users and data grow." },
      { title: "Clear, direct communication", description: "Straight answers and regular updates over WhatsApp, email or calls — no jargon, no surprises." },
      { title: "Code that lasts", description: "Documented, tested code that any developer can extend long after launch." },
    ],
  },

  skills: {
    eyebrow: 'Toolbox',
    title: { pre: 'The stack behind ', accent: 'your product', post: '' },
    lead: "Proven tools used every day to ship reliable products. Highlighted items are the daily drivers.",
    groups: [
      { title: 'Backend', skills: ['Laravel', 'PHP 8+', 'MySQL', 'MongoDB', 'Redis', 'RESTful APIs', 'Queues & Jobs', 'Composer'], core: ['Laravel', 'PHP 8+', 'MySQL', 'RESTful APIs'] },
      { title: 'Frontend', skills: ['Vue.js', 'React', 'Next.js', 'WordPress', 'JavaScript ES6+', 'HTML5 / CSS3', 'Sass', 'Bootstrap', 'Blade', 'Livewire'], core: ['Vue.js', 'React', 'Next.js', 'WordPress'] },
      { title: 'APIs & Testing', skills: ['Postman', 'JSON / XML', 'API Resources', 'JWT / Sanctum', 'PHPUnit', 'Laravel Dusk'], core: [] },
      { title: 'Deployment & Tools', skills: ['Git / GitHub / GitLab', 'Docker', 'CI/CD', 'Linux', 'cPanel / WHM', 'AWS / VPS', 'SSL & domains', 'AWS S3 / Backblaze B2'], core: [] },
      { title: 'Search Engine Optimization', skills: ['Technical SEO', 'On-page optimization', 'SEO-friendly development'], core: ['Technical SEO'] },
      { title: 'Working style', skills: ['Problem solving & debugging', 'Agile delivery', 'Clear communication', 'Rapid onboarding'], core: [] },
    ],
  },

  experience: {
    eyebrow: 'Experience',
    title: { pre: 'Trusted by businesses ', accent: 'across industries', post: '' },
    lead: 'Six roles across agencies, product companies and freelance work — always focused on shipping software that holds up in production.',
    showMore: 'Show earlier experience ({n} more)',
    showLess: 'Show less',
    jobs: [
      {
        title: "Team Lead · Senior Full Stack Developer", company: "Cord Digital", period: "Oct 2025 – Present", type: "Full-time",
        description: "Leading the development team at Cord Digital: code reviews, task planning and on-time delivery across multiple client projects.",
        achievements: [
          "Reviewed 500+ code commits monthly and coordinated team tasks, cutting critical production bugs by 30% at 99.9% uptime",
          "Built and deployed RESTful APIs integrating three external services (+20% data retrieval speed)",
          "Designed ERP modules for sales, inventory and reporting, reducing manual data entry by 35% per month",
          "Optimized inventory queries from 4.5s to 2.7s average load time (40% faster) with strategic indexing",
        ],
      },
      {
        title: "Full Stack Laravel Developer", company: "SEO Wolves", period: "Jul 2026 – Present", type: "Part-time",
        description: "Building SEO-friendly client web applications, APIs and mobile-first experiences.",
        achievements: [
          "Rebuilt frontend and backend features for 10 client projects (+25% user engagement and satisfaction)",
          "Improved website loading speed by 30% across client sites",
          "Developed RESTful APIs and third-party integrations that improved data tracking and analytics",
          "Built mobile-first web applications with a consistent cross-platform experience (+22% user interaction)",
        ],
      },
      {
        title: "Senior Full Stack Laravel Developer", company: "The Mok Company", period: "Jan 2024 – Jun 2026", type: "Part-time",
        description: "Architected enterprise-grade web applications, SaaS platforms and internal dashboards, including the Al-Nasser Group Portal and Taggz AI App.",
        achievements: [
          "Refactored the API layer and SQL queries and added Redis caching, cutting endpoint latency by 50%",
          "Designed database structures for critical financial data (+75% query speed)",
          "Implemented role-based access control for 12,000+ user accounts across five permission tiers, with zero unauthorized access incidents in the first quarter",
          "Owned the full lifecycle from concept to deployment, delivering secure, scalable applications at 99.9% uptime",
        ],
      },
      {
        title: "Full Stack Developer", company: "Kemeder / Kemework", period: "Jun 2022 – Oct 2025", type: "Full-time",
        description: "Built core features of the Kemework freelance marketplace with Laravel.",
        achievements: [
          "Built core marketplace features supporting scalable user interactions and transactions",
          "Improved API performance by 40% using caching and query optimization",
          "Integrated payment gateways and real-time notifications, improving transaction reliability and engagement",
        ],
      },
      {
        title: "Full Stack Developer", company: "Inom Tecks", period: "Nov 2022 – May 2023", type: "Part-time",
        description: "Built CRM features with PHP and Laravel to streamline client workflows.",
        achievements: [
          "Developed CRM features that reduced manual task processing by 40%",
          "Improved system stability by adding tests and fixing recurring bugs",
        ],
      },
      {
        title: "Full Stack Developer (Freelance)", company: "Invasso", period: "Oct 2024 – Present", type: "Freelance · Remote (USA)",
        description: "Per-project freelance full stack work for a US-based software house in New Jersey, covering software development and digitization projects.",
        achievements: [
          "Building backend systems and RESTful APIs with Laravel and PHP, integrated with modern frontends and mobile applications",
          "Collaborating remotely with the US team on requirements, delivery and deployment of client projects",
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
      { q: 'Can you work on an existing project?', a: "Yes. Existing Laravel systems can be optimized (queries, caching, architecture), and a codebase from another developer can be reviewed, stabilized and extended." },
      { q: 'Which technologies do you use?', a: 'Laravel, PHP 8+, MySQL, Vue.js, React and Next.js, REST APIs, plus deployment on AWS, VPS or cPanel with SSL and domain setup.' },
      { q: 'Do you also handle SEO and deployment?', a: "Yes. Technical and on-page SEO, Core Web Vitals tuning, Arabic/English builds and the full launch — hosting, SSL and hand-over — are all part of how projects are delivered." },
      { q: 'How do we get started?', a: "Send a short brief through the form or WhatsApp. After a call or chat about your goals and scope, you receive a proposed approach and clear next steps." },
      { q: 'Do you work with clients outside Egypt?', a: "Yes — platforms have been delivered for clients in Egypt and Kuwait, with communication over WhatsApp, email and calls." },
    ],
  },

  contact: {
    eyebrow: "Let's talk",
    title: { pre: 'Have a project in mind? ', accent: "Let's build it.", post: '' },
    lead: "Describe what you want to achieve — an ERP, a SaaS product, a faster website or a stronger backend — and get honest advice and a clear next step.",
    whatsapp: 'Chat on WhatsApp',
    channels: { email: 'Email', phone: 'Phone', location: 'Based in' },
    locationValue: 'Smouha, Alexandria, Egypt',
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
    description: "Laravel & Vue.js engineering for ERP systems, SaaS platforms and SEO-ready websites — software that businesses can rely on.",
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
      { title: 'Featured projects', note: 'Platforms and systems architected and shipped end to end.' },
      { title: 'Additional projects', note: 'Earlier work and special builds.' },
      { title: 'Client websites', note: 'Live websites and platforms built for clients.' },
    ],
    cta: 'Have something similar in mind?',
    comingSoon: 'Coming soon',
    visit: 'Visit live site',
    details: 'Project details',
    status: { Live: 'Live', 'Under Development': 'Under development' },
    countries: { Egypt: 'Egypt', Kuwait: 'Kuwait', 'Saudi Arabia': 'Saudi Arabia', USA: 'USA' },
  },

  projectPage: {
    back: 'All projects',
    features: 'What the project includes',
    facts: 'Quick facts',
    type: 'Category',
    techCount: 'Technologies',
    prev: 'Previous project',
    next: 'Next project',
    ctaTitle: 'Have a similar project?',
    ctaText: 'Tell me what you need and get honest advice and a clear next step.',
    status: 'Status',
    country: 'Country',
    stack: 'Technologies used',
    similar: 'I want something similar',
    similarMsg: 'Hi Mohamed, I would like a project similar to "{title}".',
    related: 'More projects you may like',
    metaSuffix: 'Mohamed Atya Hawash',
  },

  notFound: { text: "This page doesn't exist. Let's get you back to the portfolio.", button: 'Back home' },

  seo: {
    personName: 'Mohamed Atya Hawash',
    jobTitle: 'Senior Full Stack Laravel & Vue.js Developer, Team Lead',
    serviceName: 'Mohamed Atya Hawash — Web & Software Development',
    websiteName: 'Mohamed Atya Hawash — Portfolio',
    offers: ['Business platforms and ERP systems', 'SaaS and full-stack products', 'Backend systems and REST APIs', 'SEO-ready websites and WordPress', 'Performance optimization and system rescue'],
    listName: 'Projects by Mohamed Atya Hawash',
    breadcrumbHome: 'Home',
    breadcrumbProjects: 'All projects',
  },
}

export default en
