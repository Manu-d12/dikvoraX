import WebRoundedIcon from '@mui/icons-material/WebRounded';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';

export const services = [
  {
    slug: 'frontend-development', title: 'Frontend Development', short: 'Fast, accessible interfaces that feel effortless on every screen.', icon: WebRoundedIcon,
    description: 'We design and engineer modern frontend experiences that combine crisp visual design, excellent performance and maintainable React architecture.',
    deliverables: ['React application development', 'Responsive interface engineering', 'Design system implementation', 'Performance and accessibility optimization'],
    outcomes: ['Faster user journeys', 'Consistent experiences across devices', 'A maintainable component foundation'],
  },
  {
    slug: 'backend-development', title: 'Backend Development', short: 'Secure, dependable systems designed for growth.', icon: DnsRoundedIcon,
    description: 'We build the dependable foundation behind digital products—from business logic and integrations to scalable APIs and data workflows.',
    deliverables: ['API architecture and development', 'Business logic implementation', 'Database design and integration', 'Cloud-ready backend systems'],
    outcomes: ['Reliable product operations', 'Scalable technical foundations', 'Clean integration points'],
  },
  {
    slug: 'website-development', title: 'Website Development', short: 'Business websites built to establish trust and generate demand.', icon: LanguageRoundedIcon,
    description: 'We create polished, responsive websites that clearly communicate your value and turn visitors into meaningful business conversations.',
    deliverables: ['Corporate and startup websites', 'High-converting landing pages', 'E-commerce experiences', 'Custom web applications'],
    outcomes: ['A stronger digital presence', 'Clearer customer journeys', 'Better conversion opportunities'],
  },
  {
    slug: 'mobile-app-development', title: 'Mobile App Development', short: 'Thoughtful mobile experiences for customers and teams.', icon: PhoneIphoneRoundedIcon,
    description: 'We turn product ideas into intuitive mobile experiences with focused flows, responsive interactions and a foundation ready to evolve.',
    deliverables: ['Mobile product strategy', 'App interface development', 'Backend and service integration', 'Launch-readiness support'],
    outcomes: ['Easy-to-use mobile journeys', 'Consistent product experience', 'A roadmap for future releases'],
  },
  {
    slug: 'ai-based-solutions', title: 'AI-Based Solutions', short: 'Practical AI products and workflows that create measurable value.', icon: PsychologyRoundedIcon,
    description: 'We apply AI where it makes a real difference—helping teams automate work, improve decisions and create more intelligent products.',
    deliverables: ['Generative AI integrations', 'AI assistants and chatbots', 'Workflow automation', 'LLM-powered product features'],
    outcomes: ['Less repetitive work', 'Faster access to information', 'New intelligent product capabilities'],
  },
  {
    slug: 'custom-software', title: 'Custom Software', short: 'Purpose-built software shaped around the way your business works.', icon: AppsRoundedIcon,
    description: 'We plan and build end-to-end software for requirements that cannot be solved well with generic off-the-shelf tools.',
    deliverables: ['Product discovery and planning', 'Custom platform development', 'Internal business tools', 'Continuous improvement support'],
    outcomes: ['Software matched to your workflow', 'Reduced operational friction', 'A platform that grows with you'],
  },
];

export const serviceNames = [...services.map((item) => item.title), 'Not Sure Yet'];
