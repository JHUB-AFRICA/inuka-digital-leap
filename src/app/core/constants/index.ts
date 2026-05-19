export const SITE_CONFIG = {
  name: 'Inuka Digital Leap',
  shortName: 'Inuka',
  tagline: "Building Kenya's Digital Infrastructure Talent Pipeline",
  description:
    "A transformative initiative bridging Kenya's digital infrastructure skills gap through intensive training, mentorship, and employment pathways.",
  url: 'https://inukadigitalleap.jhubafrica.com',
} as const;

export const NAV_LINKS = [
  { label: 'Home', fragment: 'hero' },
  { label: 'About', fragment: 'about' },
  { label: 'Program Pathway', fragment: 'pathway' },
  { label: 'Cohort', fragment: 'trainees' },
  { label: 'Activities', fragment: 'activities' },
  { label: 'Stories', fragment: 'stories' },
  { label: 'Impact', fragment: 'impact' },
  { label: 'Partners', fragment: 'partners' },
  { label: 'Contact', fragment: 'footer' },
] as const;

export const HERO_STATS = [
  { value: 15, suffix: '+', label: 'Trainees Enrolled', icon: 'pi pi-users' },
  { value: 6, suffix: '', label: 'Month Pathway', icon: 'pi pi-calendar' },
  { value: 3, suffix: '', label: 'Technical Training', icon: 'pi pi-wrench' },
] as const;

export const STATISTICS = [
  { value: 15, suffix: '+', label: 'Pioneer Trainees', icon: 'pi pi-users' },
  { value: 6, suffix: '', label: 'Month Pathway', icon: 'pi pi-calendar' },
  { value: 3, suffix: '', label: 'Technical Training', icon: 'pi pi-wrench' },
  { value: 3, suffix: '', label: 'Industry Attachment', icon: 'pi pi-building' },
  { value: 4, suffix: '', label: 'Certifications', icon: 'pi pi-verified' },
  { value: 12, suffix: '+', label: 'Industry Partners', icon: 'pi pi-handshake' },
] as const;

export const LEARNING_AREAS = [
  {
    title: 'Network & Fixed Broadband Foundations',
    description:
      'Core principles of network architecture, broadband technologies, and infrastructure fundamentals for building modern digital backbones.',
    icon: 'pi pi-sitemap',
  },
  {
    title: 'Optical Fibre Fundamentals',
    description:
      'Physics of light propagation, fibre types, cable construction, and transmission principles for high-speed data networks.',
    icon: 'pi pi-sun',
  },
  {
    title: 'Fibre Survey, Planning & Documentation',
    description:
      'Route surveying, network design, GIS mapping, bill of quantities, and as-built documentation for fibre deployment projects.',
    icon: 'pi pi-pencil',
  },
  {
    title: 'Installation, Splicing & Testing',
    description:
      'Cable blowing, fusion splicing, connectorisation, OTDR testing, and power meter measurements for quality fibre installations.',
    icon: 'pi pi-wrench',
  },
  {
    title: 'Maintenance & Service Restoration',
    description:
      'Fault diagnosis, restoration techniques, preventive maintenance, and network resilience strategies for continuous service delivery.',
    icon: 'pi pi-refresh',
  },
  {
    title: 'Digitization & Automation',
    description:
      'Digital tools for network management, automated monitoring systems, software-defined networking, and smart infrastructure solutions.',
    icon: 'pi pi-cog',
  },
  {
    title: 'Occupational Health & Safety',
    description:
      'Worksite safety, hazard identification, PPE usage, working at heights, and confined space procedures for infrastructure projects.',
    icon: 'pi pi-shield',
  },
  {
    title: 'Customer Service & Professional Conduct',
    description:
      'Client communication, service level agreements, professional ethics, teamwork, and workplace professionalism in technical environments.',
    icon: 'pi pi-users',
  },
] as const;

export const PARTNERS = [
  {
    name: 'JKUAT',
    logo: 'assets/logos/jkuat.png',
    alt: 'Jomo Kenyatta University of Agriculture and Technology',
    fullName: 'Jomo Kenyatta University of Agriculture and Technology',
  },
  {
    name: 'KPC Foundation',
    logo: 'assets/logos/kpc-foundation.jpg',
    alt: 'Kenya Pipeline Company Foundation',
    fullName: 'Kenya Pipeline Company Foundation',
  },
  {
    name: 'JHUB Africa',
    logo: 'assets/logos/jhub-africa.png',
    alt: 'JHUB Africa — Technology & Innovation Hub',
    fullName: 'JHUB Africa',
  },
] as const;

export const PATHWAY_STEPS = [
  {
    step: 1,
    title: 'Selection',
    description:
      'Rigorous identification of high-potential youth from partner counties across Kenya.',
    icon: 'pi pi-search',
    status: 'completed' as const,
  },
  {
    step: 2,
    title: 'Onboarding',
    description: 'Orientation, needs assessment, and personalised learning plans for each trainee.',
    icon: 'pi pi-user-plus',
    status: 'completed' as const,
  },
  {
    step: 3,
    title: 'Technical Training',
    description:
      'Intensive 3-month bootcamp covering network infrastructure, cloud, cybersecurity, and software development.',
    icon: 'pi pi-wrench',
    status: 'active' as const,
  },
  {
    step: 4,
    title: 'Industry Attachment',
    description:
      'Paid 3-month attachment with leading technology companies and infrastructure organisations.',
    icon: 'pi pi-briefcase',
    status: 'upcoming' as const,
  },
  {
    step: 5,
    title: 'Deployment',
    description:
      "Graduates deployed across Kenya's digital infrastructure projects, driving national transformation.",
    icon: 'pi pi-flag',
    status: 'upcoming' as const,
  },
] as const;

export const TRAINEES = [
  {
    name: 'Grace Akinyi',
    county: 'Kisumu',
    focus: 'Network Engineering',
    cohort: 'Cohort 1',
    image: '',
    quote:
      "Inuka gave me the skills and confidence to build Kenya's digital future. This is more than a programme — it's a movement.",
  },
  {
    name: 'James Kiprono',
    county: 'Kericho',
    focus: 'Cloud Engineering',
    cohort: 'Cohort 1',
    image: '',
    quote:
      "From a small town in Kericho to deploying cloud solutions — Inuka transformed my life and my community's future.",
  },
  {
    name: 'Fatima Hassan',
    county: 'Mombasa',
    focus: 'Cybersecurity',
    cohort: 'Cohort 1',
    image: '',
    quote:
      "I never imagined I'd be protecting critical national infrastructure. Inuka opened doors I didn't know existed.",
  },
  {
    name: 'Daniel Mwangi',
    county: 'Nakuru',
    focus: 'Software Engineering',
    cohort: 'Cohort 1',
    image: '',
    quote:
      'The hands-on experience and mentorship I received at Inuka prepared me for the real world of tech.',
  },
] as const;

export const STORIES = [
  {
    title: 'Inuka Digital Leap Graduates First Cohort of 15 Trailblazers',
    excerpt:
      "The inaugural cohort celebrates successful completion of intensive training in network infrastructure and cloud engineering, marking a milestone in Kenya's digital talent pipeline development.",
    date: 'March 15, 2026',
    category: 'Milestone',
    image: '',
    featured: true,
  },
  {
    title: 'KPC Foundation Commits KES 50M to Digital Skills Development',
    excerpt:
      'New funding expands the programme to four additional counties, reaching underserved youth across Kenya.',
    date: 'January 8, 2026',
    category: 'Partnership',
    image: '',
    featured: false,
  },
  {
    title: "Why Fibre Optics is the Next Frontier for Kenya's Youth",
    excerpt:
      "With the government's fibre rollout accelerating, trained technicians are needed now more than ever.",
    date: 'November 22, 2025',
    category: 'Insights',
    image: '',
    featured: false,
  },
] as const;

export const ACTIVITIES = [
  {
    title: 'Hands-on Fibre Optic Splicing Lab',
    category: 'Technical Training',
    date: 'February 2026',
    icon: 'pi pi-wrench',
  },
  {
    title: 'Industry Visit — KPC Control Centre',
    category: 'Field Visit',
    date: 'January 2026',
    icon: 'pi pi-eye',
  },
  {
    title: 'Mentorship Session with Safaricom Engineers',
    category: 'Mentorship',
    date: 'March 2026',
    icon: 'pi pi-users',
  },
  {
    title: 'Cybersecurity Capture the Flag Competition',
    category: 'Event',
    date: 'December 2025',
    icon: 'pi pi-shield',
  },
  {
    title: 'Cloud Architecture Workshop with AWS',
    category: 'Workshop',
    date: 'February 2026',
    icon: 'pi pi-cloud',
  },
  {
    title: 'Community Digital Literacy Outreach',
    category: 'Outreach',
    date: 'March 2026',
    icon: 'pi pi-heart',
  },
] as const;

export const IMPACT_DATA = {
  items: [
    { label: 'Trainees Enrolled', value: 15, target: 15, unit: '', color: 'blue' },
    { label: 'Training Completion', value: 0, target: 100, unit: '%', color: 'green' },
    { label: 'Women in Tech', value: 42, target: 50, unit: '%', color: 'gold' },
    { label: 'Industry Placements', value: 0, target: 100, unit: '%', color: 'blue' },
    { label: 'Certifications Awarded', value: 0, target: 60, unit: '', color: 'green' },
    { label: 'Partner Counties', value: 0, target: 47, unit: '', color: 'gold' },
  ],
} as const;
