// Mock data for the training institute website

export const courses = [
  {
    id: 1,
    title: "Cloud Computing & AWS",
    category: "Cloud",
    duration: "8 Weeks",
    level: "Intermediate",
    rating: 4.8,
    students: 2547,
    price: "$499",
    image: "https://images.unsplash.com/photo-1667984390535-6d03cff0b11a",
    description: "Master AWS cloud services, architecture, and deployment strategies",
    highlights: ["Hands-on labs", "AWS Certification prep", "Real-world projects"]
  },
  {
    id: 2,
    title: "Artificial Intelligence & Machine Learning",
    category: "AI/ML",
    duration: "12 Weeks",
    level: "Advanced",
    rating: 4.9,
    students: 3124,
    price: "$699",
    image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf",
    description: "Deep dive into AI algorithms, neural networks, and ML frameworks",
    highlights: ["Python & TensorFlow", "Real AI projects", "Industry mentorship"]
  },
  {
    id: 3,
    title: "Cybersecurity & Ethical Hacking",
    category: "Security",
    duration: "10 Weeks",
    level: "Intermediate",
    rating: 4.7,
    students: 1893,
    price: "$599",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    description: "Learn penetration testing, network security, and threat prevention",
    highlights: ["CEH certification", "Live hacking labs", "Security tools mastery"]
  },
  {
    id: 4,
    title: "DevOps & CI/CD Pipeline",
    category: "DevOps",
    duration: "9 Weeks",
    level: "Intermediate",
    rating: 4.8,
    students: 2156,
    price: "$549",
    image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6",
    description: "Master Docker, Kubernetes, Jenkins, and automation practices",
    highlights: ["Docker & Kubernetes", "Jenkins automation", "Azure DevOps"]
  },
  {
    id: 5,
    title: "Data Science & Analytics",
    category: "Data",
    duration: "11 Weeks",
    level: "Beginner",
    rating: 4.6,
    students: 2789,
    price: "$579",
    image: "https://images.unsplash.com/photo-1720962158812-d16549f1e5a3",
    description: "Learn data analysis, visualization, and predictive modeling",
    highlights: ["Python & R", "Tableau & Power BI", "Statistical analysis"]
  },
  {
    id: 6,
    title: "Full Stack Development",
    category: "Development",
    duration: "14 Weeks",
    level: "Beginner",
    rating: 4.7,
    students: 3567,
    price: "$649",
    image: "https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg",
    description: "Build complete web applications with modern tech stacks",
    highlights: ["React & Node.js", "MongoDB & APIs", "Deployment strategies"]
  }
];

export const categories = [
  {
    id: 1,
    name: "Cloud Computing",
    icon: "Cloud",
    courses: 45,
    image: "https://images.unsplash.com/photo-5203849/pexels-photo-5203849.jpeg",
    description: "AWS, Azure, GCP & Cloud Architecture"
  },
  {
    id: 2,
    name: "Artificial Intelligence",
    icon: "Brain",
    courses: 38,
    image: "https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg",
    description: "Machine Learning, Deep Learning & NLP"
  },
  {
    id: 3,
    name: "Cybersecurity",
    icon: "Shield",
    courses: 32,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    description: "Ethical Hacking, Network Security & Compliance"
  },
  {
    id: 4,
    name: "DevOps",
    icon: "GitBranch",
    courses: 28,
    image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6",
    description: "CI/CD, Kubernetes, Docker & Automation"
  },
  {
    id: 5,
    name: "Data Science",
    icon: "BarChart3",
    courses: 41,
    image: "https://images.unsplash.com/photo-1720962158812-d16549f1e5a3",
    description: "Analytics, Visualization & Big Data"
  },
  {
    id: 6,
    name: "Software Development",
    icon: "Code",
    courses: 52,
    image: "https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg",
    description: "Full Stack, Mobile & Web Development"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Cloud Architect at Amazon",
    image: "https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg",
    rating: 5,
    text: "The AWS course completely transformed my career. Within 3 months of completion, I landed my dream job at Amazon. The hands-on approach and real-world projects made all the difference.",
    course: "Cloud Computing & AWS"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "ML Engineer at Google",
    image: "https://images.pexels.com/photos/8107821/pexels-photo-8107821.jpeg",
    rating: 5,
    text: "Best investment I've made in my career. The AI/ML curriculum is cutting-edge and the instructors are industry experts. Got placed at Google with 180% salary hike!",
    course: "AI & Machine Learning"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Security Analyst at Microsoft",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    rating: 5,
    text: "The cybersecurity program is extremely comprehensive. From basics to advanced penetration testing, everything is covered with practical labs. Highly recommended!",
    course: "Cybersecurity"
  }
];

export const stats = [
  { id: 1, value: 50000, label: "Students Trained", suffix: "+" },
  { id: 2, value: 95, label: "Placement Rate", suffix: "%" },
  { id: 3, value: 500, label: "Corporate Clients", suffix: "+" },
  { id: 4, value: 150, label: "Expert Instructors", suffix: "+" }
];

export const instructors = [
  {
    id: 1,
    name: "Dr. Arjun Mehta",
    title: "AI/ML Lead",
    experience: "15+ Years",
    company: "Ex-Google, Microsoft",
    courses: 12,
    students: 8500,
    rating: 4.9,
    image: "https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Cloud Architect",
    experience: "12+ Years",
    company: "Ex-AWS, IBM",
    courses: 8,
    students: 6200,
    rating: 4.8,
    image: "https://images.pexels.com/photos/8107821/pexels-photo-8107821.jpeg"
  },
  {
    id: 3,
    name: "Vikram Singh",
    title: "Security Expert",
    experience: "10+ Years",
    company: "Ex-Cisco, Palo Alto",
    courses: 6,
    students: 4800,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Top 10 Cloud Computing Trends in 2025",
    excerpt: "Explore the latest trends shaping cloud computing including serverless, edge computing, and multi-cloud strategies...",
    category: "Cloud",
    author: "Tech Team",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1667984390535-6d03cff0b11a"
  },
  {
    id: 2,
    title: "How AI is Transforming Business Operations",
    excerpt: "Discover how artificial intelligence and machine learning are revolutionizing business processes across industries...",
    category: "AI/ML",
    author: "Dr. Arjun Mehta",
    date: "Dec 12, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf"
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for 2025",
    excerpt: "Learn essential security measures to protect your organization from evolving cyber threats and vulnerabilities...",
    category: "Security",
    author: "Vikram Singh",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  }
];

export const companies = [
  "Google", "Microsoft", "Amazon", "IBM", "Accenture", "Deloitte", 
  "TCS", "Infosys", "Wipro", "Cognizant", "Adobe", "Oracle"
];

export const certifications = [
  "AWS Certified Solutions Architect",
  "Google Cloud Professional",
  "Microsoft Azure Administrator",
  "Certified Ethical Hacker (CEH)",
  "Certified Information Security Manager (CISM)",
  "Kubernetes Administrator (CKA)",
  "TensorFlow Developer Certificate",
  "PMP - Project Management Professional"
];
