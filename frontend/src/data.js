// Premium course data with COMPREHENSIVE information

export const courses = [
  {
    id: 1,
    title: "Salesforce Training",
    description: "Master the world's #1 CRM platform with hands-on training",
    rating: 4.8,
    reviews: 2847,
    students: 2671,
    duration: "30 Hrs",
    lectures: 45,
    projects: 8,
    quizzes: 12,
    brandColor: "#00A1E0",
    brandColorLight: "#E3F5FF",
    category: "CRM",
    level: "Intermediate",
    trending: true,
    bestseller: false,
    instructor: {
      name: "Sarah Johnson",
      title: "Salesforce MVP",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    nextBatch: "Jan 5, 2025",
    certificate: true,
    languages: ["English", "Spanish"],
    originalPrice: 699,
    price: 499,
    completionRate: 94,
    enrolledThisWeek: 143,
    whatYouLearn: [
      "Salesforce Administration & Configuration",
      "Custom Objects & Fields",
      "Process Automation with Flow",
      "Reports & Dashboards Mastery"
    ],
    partner: "Salesforce Official Partner"
  },
  {
    id: 2,
    title: "AWS Cloud Training",
    description: "Build, deploy and scale applications on Amazon Web Services",
    rating: 4.9,
    reviews: 4892,
    students: 4521,
    duration: "35 Hrs",
    lectures: 52,
    projects: 10,
    quizzes: 15,
    brandColor: "#FF9900",
    brandColorLight: "#FFF3E0",
    category: "Cloud",
    level: "Advanced",
    trending: true,
    bestseller: true,
    instructor: {
      name: "Michael Chen",
      title: "AWS Solutions Architect",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    nextBatch: "Dec 28, 2024",
    certificate: true,
    languages: ["English", "Hindi"],
    originalPrice: 799,
    price: 599,
    completionRate: 96,
    enrolledThisWeek: 289,
    whatYouLearn: [
      "AWS Core Services (EC2, S3, RDS)",
      "Serverless Architecture",
      "DevOps on AWS",
      "AWS Security Best Practices"
    ],
    partner: "AWS Training Partner"
  },
  {
    id: 3,
    title: "Azure Training",
    description: "Microsoft Azure cloud solutions and enterprise integration",
    rating: 4.7,
    reviews: 3421,
    students: 3184,
    duration: "30 Hrs",
    lectures: 48,
    projects: 7,
    quizzes: 10,
    brandColor: "#0078D4",
    brandColorLight: "#E5F3FF",
    category: "Cloud",
    level: "Intermediate",
    trending: false,
    bestseller: true,
    instructor: {
      name: "Emma Williams",
      title: "Azure DevOps Expert",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    nextBatch: "Jan 8, 2025",
    certificate: true,
    languages: ["English"],
    originalPrice: 699,
    price: 499,
    completionRate: 92,
    enrolledThisWeek: 167,
    whatYouLearn: [
      "Azure Fundamentals & Architecture",
      "Virtual Machines & Networking",
      "Azure DevOps Pipelines",
      "Azure AI Services Integration"
    ],
    partner: "Microsoft Certified Partner"
  },
  {
    id: 4,
    title: "Python Programming",
    description: "Learn Python for data science, web development and automation",
    rating: 4.9,
    reviews: 5892,
    students: 5234,
    duration: "40 Hrs",
    lectures: 65,
    projects: 12,
    quizzes: 18,
    brandColor: "#3776AB",
    brandColorLight: "#E3F2FD",
    secondaryColor: "#FFD43B",
    category: "Programming",
    level: "Beginner",
    trending: true,
    bestseller: true,
    instructor: {
      name: "Dr. Raj Kumar",
      title: "Python Core Developer",
      avatar: "https://i.pravatar.cc/150?img=14"
    },
    nextBatch: "Dec 30, 2024",
    certificate: true,
    languages: ["English", "Hindi", "Spanish"],
    originalPrice: 649,
    price: 449,
    completionRate: 97,
    enrolledThisWeek: 412,
    whatYouLearn: [
      "Python Fundamentals & OOP",
      "Data Analysis with Pandas",
      "Web Development with Django",
      "Automation & Scripting"
    ],
    partner: "PSF Certified Training"
  },
  {
    id: 5,
    title: "MuleSoft Training",
    description: "API-led connectivity and integration platform mastery",
    rating: 4.8,
    reviews: 1876,
    students: 1611,
    duration: "22 Hrs",
    lectures: 38,
    projects: 6,
    quizzes: 8,
    brandColor: "#00A0DF",
    brandColorLight: "#E0F7FF",
    category: "Integration",
    level: "Advanced",
    trending: false,
    bestseller: false,
    instructor: {
      name: "James Rodriguez",
      title: "MuleSoft Architect",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    nextBatch: "Jan 12, 2025",
    certificate: true,
    languages: ["English"],
    originalPrice: 899,
    price: 699,
    completionRate: 91,
    enrolledThisWeek: 87,
    whatYouLearn: [
      "Anypoint Platform Overview",
      "API Design & Development",
      "DataWeave Transformations",
      "MuleSoft Integration Patterns"
    ],
    partner: "MuleSoft Official Partner"
  },
  {
    id: 6,
    title: "Machine Learning",
    description: "Build intelligent systems with ML algorithms and frameworks",
    rating: 4.8,
    reviews: 3567,
    students: 3124,
    duration: "45 Hrs",
    lectures: 58,
    projects: 10,
    quizzes: 14,
    brandColor: "#76B900",
    brandColorLight: "#F1F8E9",
    category: "AI/ML",
    level: "Advanced",
    trending: true,
    bestseller: true,
    instructor: {
      name: "Dr. Priya Sharma",
      title: "AI Research Scientist",
      avatar: "https://i.pravatar.cc/150?img=10"
    },
    nextBatch: "Jan 2, 2025",
    certificate: true,
    languages: ["English", "Hindi"],
    originalPrice: 899,
    price: 699,
    completionRate: 89,
    enrolledThisWeek: 234,
    whatYouLearn: [
      "ML Algorithms & Theory",
      "Deep Learning with TensorFlow",
      "NLP & Computer Vision",
      "Model Deployment & MLOps"
    ],
    partner: "Google ML Partner"
  }
];

export const features = [
  {
    id: 1,
    title: "Industry Curriculum",
    description: "Tailored to meet current market demands",
    icon: "BookOpen"
  },
  {
    id: 2,
    title: "Real-World Projects",
    description: "Hands-on experience with live scenarios",
    icon: "Briefcase"
  },
  {
    id: 3,
    title: "Flexible Schedules",
    description: "Learn at your own pace and time",
    icon: "Clock"
  },
  {
    id: 4,
    title: "Certification Support",
    description: "Official exam preparation and guidance",
    icon: "Award"
  }
];

export const stats = [
  { id: 1, value: 200, label: "Corporate Clients", suffix: "+" },
  { id: 2, value: 510578, label: "Happy Students", suffix: "" },
  { id: 3, value: 570, label: "Courses Available", suffix: "+" },
  { id: 4, value: 210, label: "Expert Instructors", suffix: "+" }
];

export const testimonials = [
  {
    id: 1,
    name: "Anna Przygodzka",
    role: "HR & Training Department",
    company: "Tech Solutions Inc",
    text: "MindMajix conducted excellent training for our team. Very proactive and professional service.",
    rating: 5
  },
  {
    id: 2,
    name: "Sai Kumar",
    role: "Director - Technology",
    company: "TAG Techdemocracy",
    text: "Organized truly professional training for 43 employees. Extremely interactive and resourceful.",
    rating: 5
  },
  {
    id: 3,
    name: "Srinivasa Rao",
    role: "Associate Manager",
    company: "Jadeglobal",
    text: "Impressive training delivery. Exceptional trainer expertise helped our team immensely.",
    rating: 5
  }
];
