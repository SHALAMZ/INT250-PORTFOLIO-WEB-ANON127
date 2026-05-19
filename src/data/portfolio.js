export const navLinks = [
  { href: '#home', label: 'Home', icon: 'home' },
  { href: '#projects', label: 'Projects', icon: 'code' },
  { href: '#experience', label: 'Experience', icon: 'timeline' },
  { href: '#gallery', label: 'Gallery', icon: 'grid_view' },
  { href: '#contact', label: 'Contact', icon: 'mail' },
]
import anonImage from '../assets/anon.jpg'
import healJaiImage from '../assets/HealJaiProject.png'

export const ownerName = 'ANON YANYING'

export const roles = ['SIT Student', 'Full Stack Developer']

export const techChips = ['Java', 'JavaScript', 'Tailwind CSS']

export const socialLinks = ['Github', 'Instagram', 'X', 'Email', 'LinkedIn']


export const profileImage = anonImage
export const avatarImage = anonImage

export const projectFilters = ['ALL SYSTEMS', 'WEB DEV', 'UI/UX', 'AI / TECH']

export const projects = [
  {
    id: 'HealJai',
    title: 'HealJai Dashboard',
    category: 'WEB DEV',
    variant: 'featured',
    description:
       'An AI-powered mental wellness dashboard designed to support university students through mood tracking, stress management, and interactive self-care experiences with a clean modern interface.',
    image:
      healJaiImage,
    imageAlt: 'Cybernetic dashboard with cyan data visualizations',
    tech: ['Tailwind CSS', 'IndexDB', 'JavaScript'],
  },
  {
    id: 'JACY-GAME',
    title: 'JACY Game Rock-Paper-Scissors',
    category: 'WEB DEV',
    variant: 'compact',
    icon: 'web',
    description: 'An interactive Rock-Paper-Scissors web game featuring smooth animations, responsive gameplay, score tracking, and a modern colorful interface designed for fun and engaging user experience.',
    tech: ['Tailwind CSS', 'JavaScript'],
  },
  {
    id: 'aura-system',
    title: 'Aura Design System',
    category: 'UI/UX',
    variant: 'imageCompact',
    icon: 'design_services',
    description: 'A comprehensive component library bridging the gap between design and engineering.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDp1S44L0zb4JLmf4d04LSf3mbIXo5Ye_3z00V4JM-jDFVqf3NKx1cyNKKAPrW_RD6jiJ3WiBEajY0cqmrGlWgy_Rj3FP7o7EUv34dmF3OrYTDqwpWlZsboqUm0z_22N8F8FSnTNsOXkkSIgsmYvH4qCsp15CNvGEsQaw-hL-UWbvxXIMDU52Gou7fZojFmT_9VcfYqMAtCr2hyxeABSk_9Am_dH6_OugynwJ7sv7lk-IVZEYhsPK2eDkSn_CPRb-1EsLWkz-Y2xrqy',
    imageAlt: 'UX wireframes on a tablet screen',
    tech: ['Figma', 'Storybook'],
  },
  // {
  //   id: 'quantum-encryption',
  //   title: 'Quantum Encryption Protocol',
  //   category: 'AI / TECH',
  //   variant: 'wide',
  //   description:
  //     'Implementing next-generation cryptographic standards for enterprise data transit with low latency and zero-knowledge proof workflows.',
  //   image:
  //     'https://lh3.googleusercontent.com/aida-public/AB6AXuA1LG2dFtejR6OifByi2hmfMg1bq7vMXnzjOf5mTMtb0NX_2xdllkWVPW7l8JPXPCYhG7NVL9rpk7Y2kP7qHbMNn6QWNqCecvhHOQloW98_mJD1949StaN_I-Lt8s_5iBRuXJr8V4J66MB_hMl4qDh6pvgL-Vh5P415TFyVY_fBB-FBEffQoFtHBHhExQTyDnzOSEfnOe9pP_U70OA8PvPYPTT_VwlwlJeMyABw8xHptTT1uY0-XnFMLTtkZnhverUR0aR51por5NDH',
  //   imageAlt: 'Circuit board illuminated by cyan light',
  //   stats: [
  //     { label: 'LATENCY', value: '12ms' },
  //     { label: 'THROUGHPUT', value: '40Gbps' },
  //     { label: 'STATUS', value: 'Active', active: true },
  //   ],
  // },
]
