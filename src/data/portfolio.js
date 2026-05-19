export const navLinks = [
  { href: '#home', label: 'Home', icon: 'home' },
  { href: '#projects', label: 'Projects', icon: 'code' },
  { href: '#experience', label: 'History', icon: 'timeline' },
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

export const experiences = [
  {
    id: 'university',
    period: '2023 - PRESENT',
    title: 'King mongkut university of technology thonburi',
    description:
      "School of Information Technology",
    tags: ['KMUTT'],
  },
  {
    id: 'school',
    period: '2021-2023',
    title: 'Nawamintharachinuthit Triamudomsuksapattanakarn School',
    description:
      'Science and Mathematics - Innovation and Technology Class.',
    tags: ['NMR.T.U.P'],
    reverse: true,
  },
]

export const galleryItems = [
  {
    id: 'laboratory',
    title: 'The Laboratory',
    label: 'Workspace',
    layout: 'feature',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDgN9nYcA6dfWnR1aYvEF0i6_nHxVcXpJ_tK92RwvWUp3gYydq5LTiK9e85Sw-yGM7aML1K6Ex3B5sZBM6BESy9Du7hFbgnCKbtYaW4AvMfX54AoVubSot0HkEgtvGd4gcKvBC162WvzU_jUYDTQswwDYhSj-3lPO87DUnPvKYRMwlOlyu-yU0Zf1EnQv4e1iNIoktzHYH-pZt15f3xoZ1_3ybU0tzNmzTE3lWWtVmjX18jDZZoN1RCjI-Pj1HEjM8d0MdyLKYcu2Wi',
    alt: 'High-tech coding setup in a dimly lit apartment',
  },
  {
    id: 'harmony',
    title: 'Harmony',
    layout: 'tag',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbIbpdUoZj3QofrrIAsH3n_G_tM8E6lobmiYNT-0ZYZqt6UNN-bfu1KX8KefQ_xzuC0aSgKImS4TU8qFFomLr2DrEYE1iTLQraYrE0GrB1v18EEgvZUD9bna4iPa_QrZoQYxe1yJ4xLpAM7cskmKLnx1pi8BQv-2AMkr-0HzvbepL-ObLiCjF_a0iDfgv1IaZILLj8-aTVyE5KD5GovRQaS5jIWtLTZ-JPnuJMrdPWA5lrj6BnZY-0MuyPRR419h_wLu8TcN7_iI9K',
    alt: 'Zen garden with subtle cyan data overlay',
  },
  {
    id: 'luminous-depth',
    title: 'Luminous Depth',
    layout: 'tall',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8H54R4BuYvE9zyeNqYbkSVT0jHBZ6pgyRO-nY2ipoixDMFU6oXCHD7UAIAFPqofB6IJbis8y2y1ocFePbkH2BYpwzwVC_ydSszRqeLb5eDEP_Edj2nO9F-qOQOSQRVwDxmEjteuiKCIvh8wkz4u_spOWO8mYT2c-eTCFitdeYcbOzupaYae9g6vzdXMXZ4B9DIOb_BHCZwWlxADVu5wVI3o_Nng-YlYFde8KrH6u1eueuohx5WwHyR9QKkcaeC1c3Qs6Mv_rp9aYq',
    alt: 'Abstract cyan and blue glass ribbons',
  },
  {
    id: 'focus',
    title: 'Focus Frequencies',
    subtitle: 'Lo-Fi & Synthwave',
    layout: 'note',
    icon: 'headphones',
  },
]

export const contactIcons = ['code', 'alternate_email', 'share']
