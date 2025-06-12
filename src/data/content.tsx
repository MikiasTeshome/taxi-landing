import { AiOutlineDollarCircle } from 'react-icons/ai';
import {
  BsAndroid2,
  BsApple,
  BsFacebook,
  BsLinkedin,
  BsPersonBadge,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { LuBadgePercent, LuWallet } from 'react-icons/lu';

import chat from '@/images/chat.png';
import driver from '@/images/driver.png';
import settings from '@/images/login.png';
import drivers from '@/images/payment.png';
import qrCode from '@/images/qr-code.png';

export const navLinks = [
  {
    id: 'suka33',
    href: '/',
    name: 'Home',
  },
  {
    id: 'hjv44',
    href: '/#',
    name: 'Features',
  },
  {
    id: 'bdf00',
    href: '/#',
    name: 'About Us',
  },
  {
    id: 'cfe32',
    href: '/#',
    name: 'How It Works',
  },
  {
    id: '357pp',
    href: '/#reviews',
    name: 'Testimonial',
  },
  {
    id: 'sre56',
    href: '/#',
    name: 'Blog',
  },
];

export const headingData = {
  description: 'The Most Reliable Taxi Booking App',
  spanText: 'Taxi Booking App',
  title: 'Your On Demand',
  subtext:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
};

export const profilesPhotos = [
  'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1930&q=80',
  'https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
];

export const downloadStats = {
  title: '5 million +',
  description: 'Worldwide downloads',
};

export const downloadSectionData = {
  headingStart: 'Download',
  headingEnd: 'Application Now',
  spanText: 'Taxi Booking',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  stats: [
    {
      title: '5 Million+',
      description: 'Woldwide Active Users',
    },
    {
      title: '200+',
      description: 'Countries',
    },
    {
      title: '8000+',
      description: 'Taxi Drivers',
    },
  ],
  downloadLinks: [
    {
      title: 'For iOS',
      OSversion: 'IOS 15.6+',
      qrCode,
      href: '/#',
      svg: <BsApple className="text-5xl" />,
    },
    {
      title: 'For Android',
      OSversion: 'Android 8.0+',
      qrCode,
      href: '/#',
      svg: <BsAndroid2 className="text-5xl" />,
    },
  ],
};

export const benefitsData = {
  headingStart: 'Benefits of',
  span: 'Taxi Booking App',
  description: 'Benefits of App',
  benefits: [
    {
      svg: <AiOutlineDollarCircle className="text-2xl" />,
      title: 'Fare Estimates',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      svg: <LuWallet className="text-2xl" />,
      title: 'Secure Payments',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      svg: <LuBadgePercent className="text-2xl" />,
      title: 'Exclusive Offers',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      svg: <BsPersonBadge className="text-2xl" />,
      title: 'SOS Button',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
  ],
};

export const aboutUsData = {
  headingStart: 'About',
  spanText: 'Our Taxi Booking',
  headingEnd: 'App',
  description: 'About Us',
  downloadHref: '/#',
  list: [
    'Lorem ipsum dolor sit amet, consectetur incididunt ut labore et',
    'Adipiscing elit, sed do eiusmod tempor, dolor sit amet, consectetur',
    'incididunt ut labore et dolore magna aliqua em ipsum dolor sit ame',
    'Lorem ipsum dolor sit amet, consectetur ut labore et dolore',
  ],
};

export const sectionDemoData = {
  headingStart: 'View',
  spanText: 'Our App Demo',
  description: 'App Demo',
  mockup:
    'https://cdn.dribbble.com/users/8491023/screenshots/19772741/media/7ae7e21d9757b69788a4e9c2b24dc3aa.png',
};

export const featuresData = {
  spanText: 'Key Features',
  headingEnd: 'of Taxi Booking App',
  descriptionTwo: 'Best Features',
  descriptionOne:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  features: [
    {
      title: 'Instant Driver & call chat',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      screenshot: chat,
    },
    {
      title: 'Instant Notifications',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      screenshot: drivers,
    },
    {
      title: 'Wide Selection of drivers',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      screenshot: settings,
    },
  ],
};

export const pricingData = {
  headingStart: 'Let us know the Pricing',
  spanText: 'Plan for you',
  description: 'Pricing & Plans',
  plans: [
    {
      name: 'Basic',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      priceMonthly: 69,
      priceYearly: 199,
      href: '/#',
      plans: [
        'Lorem ipsum dolor sit amet',
        'Consectetur adipiscing elit',
        'Sed do eiusmod tempor',
      ],
    },
    {
      name: 'Standard',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      priceMonthly: 89,
      priceYearly: 299,
      href: '/#',
      plans: [
        'Lorem ipsum dolor sit amet',
        'Consectetur adipiscing elit',
        'Sed do eiusmod tempor',
      ],
    },
    {
      name: 'Premium',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      priceMonthly: 109,
      priceYearly: 599,
      href: '/#',
      plans: [
        'Lorem ipsum dolor sit amet',
        'Consectetur adipiscing elit',
        'Sed do eiusmod tempor',
      ],
    },
  ],
};

export const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'Germany',
  'France',
  'Japan',
  'Brazil',
  'India',
  'China',
  'South Korea',
  'Russia',
  'Mexico',
  'Spain',
  'Italy',
];

export const reviewSectionData = {
  headingStart: 'Our Customer',
  spanText: 'Testimonials',
  description: 'Testimonials',
  reviews: [
    {
      name: 'John Doe',
      occupation: 'Web Developer',
      review:
        'John is an exceptional web developer. He delivers high-quality code on time and always goes the extra mile to ensure a successful project.',
      profilePhoto:
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Alice Smith',
      occupation: 'Graphic Designer',
      review:
        "Alice is a talented graphic designer. Her creative designs have greatly improved our brand's image. She's a pleasure to work with.",
      profilePhoto:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=500',
    },
    {
      name: 'Mark Johnson',
      occupation: 'Marketing Specialist',
      review:
        "Mark's marketing strategies have boosted our sales significantly. He's a results-driven professional who understands our target audience.",
      profilePhoto:
        'https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Sarah Adams',
      occupation: 'Accountant',
      review:
        'Sarah is a highly organized accountant who has helped us streamline our financial processes. Her attention to detail is impressive.',
      profilePhoto:
        'https://images.unsplash.com/photo-1619420674819-da50b9f76950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Michael Brown',
      occupation: 'Sales Manager',
      review:
        "Michael's leadership has motivated our sales team. He consistently meets and exceeds our sales targets. An asset to the company.",
      profilePhoto:
        'https://images.unsplash.com/photo-1513152697235-fe74c283646a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Emily Wilson',
      occupation: 'Customer Support',
      review:
        "Emily's friendly demeanor and prompt responses make her a valuable member of our customer support team. She leaves our customers satisfied.",
      profilePhoto:
        'https://images.unsplash.com/photo-1607982863027-0cb6818ee8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
  ],
};

export const driversSectionData = {
  headingStart: 'The',
  spanText: 'Best Drivers',
  headingEnd: 'at Your Fingertips',
  description: 'Top Rated Driver',
  href: '/#',
  drivers: [
    {
      profile: driver,
      name: 'Eleanor Simmons',
      car: 'CityCruiser',
      rating: 5.0,
    },
    {
      profile: driver,
      name: 'Victor Ramirez',
      car: 'UrbanShuttle XL',
      rating: 5.0,
    },
    {
      profile: driver,
      name: 'Isabella Chen',
      car: 'EcoCab 2000',
      rating: 5.0,
    },
  ],
};

export const blogSectionData = {
  headingStart: 'Our Latest',
  spanTextOne: 'Blogs',
  spanTextTwo: 'News',
  descriptionOne: 'Blogs & News',
  descriptionTwo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  blogs: [
    {
      coverImage:
        'https://img.freepik.com/foto-gratis/mujer-usando-su-telefono-movil-computadora-portatil-coche_23-2148510578.jpg?w=740&t=st=1697629361~exp=1697629961~hmac=2769a9a56100adb27c0ec6ecdd666f04726820575d105629c211873d60c18a41',
      tag: 'Taxi Booking',
      title: 'How to Choose the Best Taxi Booking App for You',
      date: '23 Oct, 2023',
      writer: 'By Admin',
    },
    {
      coverImage:
        'https://img.freepik.com/free-photo/woman-talking-with-taxi-driver-car_23-2149149582.jpg?w=740&t=st=1697629261~exp=1697629861~hmac=146835e791ae4331efe49d60d3918388b25b4277fd323ac1f22c33c159759846',
      tag: 'Taxi Booking',
      title: 'The Best Taxi Booking Apps for Budget Travelers',
      date: '23 Oct, 2023',
      writer: 'By Admin',
    },
    {
      coverImage:
        'https://img.freepik.com/free-photo/business-woman-using-smartphone-car_23-2148213555.jpg?w=740&t=st=1697629299~exp=1697629899~hmac=27a4606d05e6ef696cdd7a3c6ffa260cfb47aa4e63b82c82d6120026102f5123',
      tag: 'Taxi Booking',
      title: 'The Best Taxi Booking Apps for the Safety-Conscious',
      date: '23 Oct, 2023',
      writer: 'By Admin',
    },
  ],
};

export const footerBannerData = {
  heading: 'Download the App Now!',
  descriptionOne: 'Unlock Your Dream Ride: Your Taxi Booking Destination',
  descriptionTwo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
};

const contactLinks = [
  {
    id: 'suka33',
    href: 'tel:+1(234)567-890',
    name: '+1(234)567-890',
  },
  {
    id: 'hjv44',
    href: 'mailto:taxiBooking@email.com',
    name: 'taxiBooking@email.com',
  },
];

export const footerData = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
  footerLinks: [
    {
      title: 'Company',
      links: navLinks,
    },
    {
      title: 'Contact',
      links: contactLinks,
    },
  ],
};

export const socials = [
  <BsTwitter key="twitter" className="text-lg" />,
  <BsLinkedin key="linkedIn" className="text-lg" />,
  <BsFacebook key="facebook" className="text-lg" />,
  <FaTelegramPlane key="telegram" className="text-lg" />,
  <BsYoutube key="youtube" className="text-lg" />,
];
