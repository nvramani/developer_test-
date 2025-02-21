import {
  Blog,
  CardData,
  FooterColumn,
  HomeSectionData,
  HORIZONTAL,
  SuccessStory,
  WireframeData,
} from "./interfaces";

// Header
export const NAV_ITEMS = ["Home", "About Us", "Service", "Contact"];

// Home section
export const HOME_SECTION_DATA: HomeSectionData = {
  title: "MODERN WEB DESIGN",
  subtitle: "Create Stunning User Experiences",
  description:
    "We craft visually appealing and highly functional websites that engage users and enhance brand presence. Our designs are intuitive, responsive, and optimized for performance.",
  inputPlaceholder: "Enter your email to get updates",
  buttonText: "GET STARTED",
  imageUrl:
    "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg", // Better Image URL
};

//  card section
export const CARD_DATA: CardData[] = [
  {
    id: 1,
    title: "Wireless Headphones",
    subtitle: "Noise-canceling over-ear",
    description: "Experience crystal clear sound with deep bass.",
    imageUrl:
      "https://images.pexels.com/photos/3394657/pexels-photo-3394657.jpeg",
  },
  {
    id: 2,
    title: "Smartwatch Pro",
    subtitle: "Track your fitness & stay connected",
    description: "Advanced health tracking with seamless connectivity.",
    imageUrl:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
  },
  {
    id: 3,
    title: "Portable Speaker",
    subtitle: "High-quality sound with good design",
    description: "Powerful bass and long battery life for outdoor use.",
    imageUrl:
      "https://images.pexels.com/photos/374888/pexels-photo-374888.jpeg",
  },
];

// Wireframe Data
export const WIREFRAME_DATA: WireframeData = {
  title: "Wireframe Design",
  description:
    "Discover the power of well-structured wireframes to bring your design ideas to life with efficiency and clarity.",
  buttonText: "Load More",
  imageUrl:
    "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg",
  subImageUrl:
    "https://images.pexels.com/photos/3184160/pexels-photo-3184160.jpeg",
};

// Horizontal Cards
export const HORIZONTAL_CARDS_DATA: HORIZONTAL[] = [
  {
    id: 1,
    title: "User Experience",
    description:
      "Our intuitive design ensures a smooth and enjoyable experience across all devices.",
  },
  {
    id: 2,
    title: "Powerful Performance",
    description:
      "Built with the latest technology, our platform delivers speed and efficiency.",
  },
  {
    id: 3,
    title: "Secure and Reliable",
    description:
      "We prioritize security, ensuring your data remains protected at all times.",
  },
  {
    id: 4,
    title: "Scalable and Flexible",
    description:
      "Designed to grow with your needs, our solution adapts to any business size.",
  },
];

// Blog
export const BLOG_DATA: Blog[] = [
  {
    id: 1,
    title: "The Future of AI in Healthcare",
    description:
      "Explore how AI is transforming the healthcare industry, improving diagnosis accuracy, and streamlining patient care.",
    imageUrl:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
  {
    id: 2,
    title: "10 JavaScript Tricks for Faster Development",
    description:
      "Master these JavaScript tips and tricks to write cleaner, more efficient code in less time.",
    imageUrl:
      "https://images.pexels.com/photos/11035371/pexels-photo-11035371.jpeg",
  },
  {
    id: 3,
    title: "How to Build Scalable React Apps",
    description:
      "A guide to designing scalable React applications using best practices, state management, and performance optimizations.",
    imageUrl:
      "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg",
  },
  {
    id: 4,
    title: "The Rise of Web 3.0",
    description:
      "Discover the impact of decentralized web technologies and how they’re shaping the internet's future.",
    imageUrl:
      "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
  },
  {
    id: 5,
    title: "Understanding UI/UX Design Principles",
    description:
      "Learn key UI/UX design principles that improve user experience and engagement.",
    imageUrl:
      "https://images.pexels.com/photos/3182766/pexels-photo-3182766.jpeg",
  },
  {
    id: 6,
    title: "Next.js vs React: Which One Should You Choose?",
    description:
      "A detailed comparison of Next.js and React, helping developers decide which framework suits their needs best.",
    imageUrl:
      "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg",
  },
];

// success stories
export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 1,
    name: "John Doe",
    story: "Overcame career challenges.",
    description:
      "John struggled with job rejections but persisted in learning new skills. Now, he works at a leading tech firm.",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    story: "Built a successful startup.",
    description:
      "Jane transformed her passion into a business, facing multiple failures before finally succeeding.",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    story: "Transitioned career into tech.",
    description:
      "Alice was a teacher but shifted to coding. Through self-learning and mentorship, she landed a software engineer role.",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    story: "Won multiple innovation awards.",
    description:
      "Michael's relentless innovation and creativity led him to be recognized in global tech competitions.",
    imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

// Footer columns
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "About Us",
    links: [
      "Our Story",
      "Why Choose Us",
      "Careers",
      "Press & Media",
      "Sustainability",
    ],
  },
  {
    title: "Quick Links",
    links: ["Home", "Services", "Pricing", "Testimonials", "FAQs"],
  },
  {
    title: "Support",
    links: [
      "Help Center",
      "Contact Us",
      "Shipping & Returns",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  },
];
