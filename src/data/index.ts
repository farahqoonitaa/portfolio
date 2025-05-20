import { Project, Experience, Education, Skill, ContactInfo } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my experience in Product Management, Strategy & Operations',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Product Management', 'Strategy', 'Operations'],
    link: 'https://www.notion.so/11845c300cf4809e9499fe5c3e7f0571?v=12245c300cf48058a34f000c3295d007',
    github: '',
    featured: true,
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Scubago',
    position: 'Operations and Strategy Manager',
    duration: 'November 2024 - Present',
    description: [
      'Launched new B2C sales channels (Flash Sale Diving Package & Early Bird promotions) at DRT Shanghai 2025, generating $20K+ in revenue within three days',
      'Designed & executed O2O exhibition strategies (DRT Shanghai & DRT Hong Kong), tripling lead generation with a 40% conversion rate',
      'Expanded B2B sales channels by launching corporate dive programs, onboarding community-based & corporate clients',
      'Boosted customer lifetime value (CLV) across three branches by implementing a loyalty program, leading to a 30% increase in user retention'
    ],
  },
  {
    id: '2',
    company: 'RedDoorz (Commeasure Ltd)',
    position: 'Product - Corporate and Operations (B2B, B2C & B2B2C)',
    duration: 'August 2022 - January 2025',
    description: [
      'Led new market entry in the Philippines, exceeding 110% of new lead targets and generating 1K+ SGD in the first month',
      'Streamlined corporate operations, reducing ticket resolution time by 50% and generating 6K+ SGD in additional monthly revenue',
      'Revamped B2B credit limits & contract management, driving a 20% surge in client acquisition',
      'Developed Fixed Price revenue streams (RedSeller & Corporate Sales), boosting sales by 20% across 500+ B-Level properties'
    ],
  },
  {
    id: '3',
    company: 'IMT Mitra Solusi',
    position: 'Project Manager',
    duration: 'June 2021 - July 2022',
    description: [
      'Led distribution of 3 monitoring items across 9+ remote areas in Indonesia, achieving 100% project completion',
      'Migrated team communications and implemented Agile framework for project tracking',
      'Transformed agile methodologies in the company, resulting in 35% operational efficiency improvement'
    ],
  }
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'Bandung Institute of Technology - AACSB Accredited',
    degree: 'Master of Business and Administration (cum laude)',
    duration: 'Jan 2021 - Oct 2022',
    description: 'Finance and Operations. GPA 3.87/4.00',
  },
  {
    id: '2',
    institution: 'Sepuluh Nopember Institute of Technology - IABEE Accredited',
    degree: 'Bachelor of Engineering',
    duration: 'Aug 2016 - Oct 2020',
    description: 'Engineering Physics',
  },
  {
    id: '3',
    institution: 'Asia University',
    degree: 'Tourism',
    duration: '2018',
    description: 'Tourism Studies',
  }
];

export const skills: Skill[] = [
  { id: '1', name: 'Microsoft Office', category: 'technical' },
  { id: '2', name: 'JIRA', category: 'technical' },
  { id: '3', name: 'Google Analytics', category: 'technical' },
  { id: '4', name: 'Power BI', category: 'technical' },
  { id: '5', name: 'MySQL', category: 'technical' },
  { id: '6', name: 'Figma', category: 'design' },
  { id: '7', name: 'Notion', category: 'other' },
  { id: '8', name: 'OpenAI', category: 'other' },
  { id: '9', name: 'Python', category: 'technical' },
  { id: '10', name: 'SEO', category: 'other' }
];

export const contactInfo: ContactInfo = {
  email: 'farahqoonita2@gmail.com',
  phone: '+628112100600',
  location: 'Indonesia',
  socials: [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/farahqoonita/',
      icon: 'Linkedin',
    }
  ],
};