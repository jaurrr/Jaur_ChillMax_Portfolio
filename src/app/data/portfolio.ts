/* Central content source for the whole portfolio. Edit here, site updates everywhere. */

export interface SkillCategory {
  icon: string;
  title: string;
  subtitle: string;
  skills: string[];
}

export interface Service {
  icon: string;
  title: string;
  desc: string;
}

export interface Project {
  title: string;
  year: string;
  desc: string;
  tech: string[];
  liveUrl?: string;
  liveLabel?: string;
  /** Additional links, e.g. company site alongside the app login */
  extraLinks?: { url: string; label: string }[];
  tag: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Certificate {
  title: string;
  org: string;
  thumb: string;
  pdf: string;
}

export interface Education {
  title: string;
  org: string;
  url?: string;
}

export const PROFILE = {
  firstName: 'Jauhar',
  lastName: 'Ayyub',
  brand: 'jauhar.dev',
  roles: ['Software Engineer', 'Frontend Developer', 'Angular Specialist', 'AI-Assisted Developer'],
  tagline:
    'Software engineer with 3+ years of experience building scalable web applications with Angular and TypeScript. I combine solid engineering fundamentals with modern AI-assisted workflows to deliver quality software, faster.',
  email: 'jaurazmi42@gmail.com',
  phone: '+91 9936786415',
  whatsapp: 'https://wa.me/919936786415',
  location: 'India',
  github: 'https://github.com/jaurrr',
  linkedin: 'https://www.linkedin.com/in/jauhar-ayyub-xxxyt42',
  instagram: 'https://www.instagram.com/jaur__',
  cvPath: 'assets/Jauhar_Ayyub_CV.pdf',
  heroImage: 'assets/flip-front.jpg',
  heroBackImage: 'assets/flip-back.jpg',
  contactLine:
    "Whether it's a job opportunity, an invite to coffee, or feedback on my portfolio, my inbox is always open.",
};

export const ABOUT = {
  heading: 'About Me',
  image: 'assets/about-final.jpg',
  paragraphs: [
    "I'm Jauhar Ayyub, a software engineer from India with over 3 years of experience building web applications. At Digital Transformation Factory, I work on a Manufacturing Execution System (MES) used in real production environments — integrating REST APIs, building reusable Angular components with PrimeNG, and handling complex data workflows with Reactive Forms and RxJS.",
    'Beyond my day job, I design and ship complete products independently — from idea to deployment. I also work with AI agents and modern AI-assisted development workflows, which help me prototype faster, catch issues earlier, and keep code quality high.',
  ],
  stats: [
    { value: '3+', label: 'Years Experience' },
    { value: '4', label: 'Major Projects' },
    { value: '15+', label: 'Technologies' },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    icon: '🖥️',
    title: 'Frontend Development',
    subtitle: 'The part of the product users see and touch.',
    skills: [
      'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'Angular', 'React',
      'SCSS', 'Responsive Design', 'Bootstrap', 'Tailwind CSS', 'PrimeNG',
      'Angular Material', 'Lucide',
    ],
  },
  {
    icon: '⚙️',
    title: 'Backend & Databases',
    subtitle: 'Server-side logic and data that power the frontend.',
    skills: ['Node.js', 'Express.js', 'Python', 'C# (.NET)', 'MySQL', 'PostgreSQL', 'MongoDB', 'SQL'],
  },
  {
    icon: '🛠️',
    title: 'Tools & Workflow',
    subtitle: 'Daily toolkit for building and debugging.',
    skills: [
      'Visual Studio Code', 'Chrome DevTools', 'Postman', 'Git & GitHub',
      'GitHub Actions', 'Bash', 'PowerShell', 'Linux (Ubuntu)',
    ],
  },
  {
    icon: '🎨',
    title: 'Design & Practices',
    subtitle: 'How I keep code clean and interfaces sharp.',
    skills: [
      'Figma', 'Canva', 'AI-assisted Design', 'Documentation',
      'Code Reviews', 'Clean Code Principles', 'Design Patterns',
    ],
  },
];

export const SERVICES: Service[] = [
  { icon: '🖥️', title: 'Landing Pages', desc: 'Conversion-focused pages engineered for speed, clarity, and lead generation.' },
  { icon: '🏢', title: 'Business Websites', desc: 'Corporate websites built to establish credibility and drive engagement.' },
  { icon: '📱', title: 'Responsive Redesign', desc: 'Modernize outdated sites with layouts optimized for every screen size.' },
  { icon: '✨', title: 'UI/UX Implementation', desc: 'Translate designs into production-ready interfaces with precision.' },
  { icon: '🚀', title: 'Deployment & Hosting', desc: 'End-to-end deployment on Vercel or Netlify with CI/CD best practices.' },
  { icon: '🔧', title: 'Site Maintenance', desc: 'Proactive updates, performance tuning, and ongoing support.' },
];

export const SERVICES_IMAGE = 'assets/services-offer.jpg';

export const EXPERIENCE = {
  role: 'Frontend Developer',
  company: 'Digital Transformation Factory (DTF)',
  period: 'Jun 2024 – Present',
  liveUrl: 'https://dtf-ai.com/',
  summary:
    'Manufacturing Execution System (MES) — a web application for managing quality processes in field operations: checklist creation, sample execution, dynamic forms, and reporting.',
  points: [
    'Integration of REST APIs with token-based authentication for secure data flows.',
    'Reusable PrimeNG UI components used consistently across the application.',
    'Reactive Forms and RxJS/Observables for complex, validated data-entry workflows.',
    'SQL query optimization and production bug fixes in coordination with the backend team.',
    'Shipping in an Agile process with designers and backend engineers.',
  ],
};

export const CERTIFICATIONS: Certificate[] = [
  {
    title: 'Artificial Intelligence Internship',
    org: 'NIELIT · Ministry of Electronics & IT, Govt. of India',
    thumb: 'assets/certificates/thumb-nielit.png',
    pdf: 'assets/certificates/ai-internship-nielit.pdf',
  },
  {
    title: 'Selenium Testing',
    org: 'Naresh Technologies, Hyderabad · Jun–Aug 2024',
    thumb: 'assets/certificates/thumb-selenium.png',
    pdf: 'assets/certificates/selenium-naresh.pdf',
  },
  {
    title: 'AI Tools Workshop',
    org: 'be10x · Nov 2023',
    thumb: 'assets/certificates/thumb-aitools.png',
    pdf: 'assets/certificates/ai-tools-be10x.pdf',
  },
];

export const EDUCATION: Education[] = [
  { title: 'BCA · 2024', org: 'Veer Bahadur Singh Purvanchal University, Jaunpur', url: 'https://www.vbspu.ac.in' },
  { title: 'Intermediate · 2019', org: 'Shibli National Inter College, Azamgarh', url: 'https://www.vbspu.ac.in/en/page/photo-gallery-main' },
  { title: 'High School · 2017', org: 'R.N Public School, Azamgarh', url: 'https://maps.app.goo.gl/n7PtrYVp5RKRoJsD9?g_st=aw' },
];

export const PROJECTS: Project[] = [
  {
    title: 'MES · Manufacturing Execution System',
    year: '2024',
    tag: 'Professional Project',
    desc: 'Manufacturing Execution System for real production environments — checklist creation, sample execution, dynamic forms and reporting for quality processes in field operations. Built at Digital Transformation Factory with Angular, TypeScript, PrimeNG, REST APIs, Reactive Forms and RxJS.',
    tech: ['Angular', 'TypeScript', 'PrimeNG', 'RxJS', 'SQL'],
    liveUrl: 'https://mes.digitaltransformationfactory.com/auth/login',
    liveLabel: 'MES App',
    extraLinks: [{ url: 'https://dtf-ai.com/', label: 'DTF Website' }],
  },
  {
    title: 'Hamza Travels',
    year: '2025',
    tag: 'Solo Project',
    desc: 'Travel documents, ticketing & packages platform — designed and built end to end: frontend architecture, UI/UX, and booking workflows, deployed to production.',
    tech: ['Angular', 'TypeScript', 'Lucide'],
    liveUrl: 'https://hamza-travels-ruddy.vercel.app/',
    liveLabel: 'Live Demo',
  },
  {
    title: 'Fixdoo',
    year: '2026',
    tag: 'Solo Project',
    desc: 'Local services marketplace — from AC repair to home construction, connecting users with nearby service providers. Built the service discovery and provider-listing flow independently.',
    tech: ['Angular', 'TypeScript'],
  },
  {
    title: 'SnapLink',
    year: '2024',
    tag: 'College Team Project',
    desc: 'Multi-platform video downloader built with a 3-member college team. I handled the responsive frontend and API integration for the download functionality.',
    tech: ['Angular'],
    liveUrl: 'https://play.google.com/store/apps/details?id=video.downloader.video_downloader',
    liveLabel: 'Play Store',
  },
];

export const PROJECTS_IMAGE = 'assets/projects-feature.jpg';

export const GALLERY: GalleryImage[] = [
  { src: 'assets/gallery/gallery-1-code.jpg', alt: 'Late-night coding session' },
  { src: 'assets/gallery/gallery-4-balcony.jpg', alt: 'Balcony with mountain view' },
  { src: 'assets/gallery/gallery-5-breakfast.jpg', alt: 'Healthy breakfast plate' },
  { src: 'assets/gallery/gallery-6-toycar-notebook.jpg', alt: 'Toy car on study notes' },
  { src: 'assets/gallery/gallery-7-toycar-laptop.jpg', alt: 'Toy car on laptop keyboard' },
  { src: 'assets/gallery/gallery-9-portrait.jpg', alt: 'Studio portrait' },
  { src: 'assets/gallery/gallery-10-shoes.jpg', alt: 'Sneaker collection' },
  { src: 'assets/gallery/gallery-11-book.jpg', alt: 'Reading and reflections' },
  { src: 'assets/gallery/gallery-12-food.jpg', alt: 'Food diaries' },
];

export const CONTACT_IMAGE = 'assets/contact-final.jpg';

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

/* ---------- "Ma" editorial content constants ---------- */

export interface SectionMeta {
  num: string;
  title: string;
  label: string;
}

export const SECTIONS: Record<string, SectionMeta> = {
  about: { num: '01', title: 'About', label: 'Who I am' },
  skills: { num: '02', title: 'Skills & Services', label: 'The toolkit' },
  experience: { num: '03', title: 'Experience', label: 'Where I work' },
  projects: { num: '04', title: 'Projects', label: 'Selected work' },
  gallery: { num: '05', title: 'Gallery', label: 'The catalogue' },
  contact: { num: '06', title: 'Contact', label: 'Write to me' },
};

export interface PlateCaption {
  num: string;
  caption: string;
}

export const PLATES: Record<string, PlateCaption> = {
  hero: { num: 'Pl. I', caption: 'The engineer, at rest.' },
  about: { num: 'Pl. II', caption: 'Notes from the workshop.' },
  services: { num: 'Pl. III', caption: 'What I offer.' },
  projects: { num: 'Pl. IV', caption: 'Things I have built.' },
  contact: { num: 'Pl. V', caption: 'The correspondent.' },
};

export const HERO_LABEL = 'The Editorial · Issue 01';
export const HERO_VIEW_WORK = 'View Work';
export const HERO_CV = 'Download CV';
export const SIDE_TEXT = 'PORTFOLIO — 2026';

export const PROJECTS_SOON_LEAD = 'More projects coming soon — I keep building.';
export const PROJECTS_SOON_EM = 'Hold My Coffee, Wait And Watch';

export const FOOTER_LABEL = 'The Editorial · Ma · 2026';
export const FOOTER_NOTE = '© 2026 Jauhar Ayyub. Set in Fraunces & Inter.';
export const FOOTER_TOP = 'Back to top ↑';

export const CERT_PDF_MODAL_TITLE = 'Certificate';
export const CERT_OPEN_FULL = 'Open full PDF';
