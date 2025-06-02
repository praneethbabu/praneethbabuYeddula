import { Project, Skill, Experience, Education, Certification, SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Bharat Leadership Excellence Awards",
    description: "A comprehensive platform to recognize and celebrate outstanding leadership across various sectors in India.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com/praneethbabu",
  },
  {
    id: 2,
    title: "Event Eye",
    description: "An event management solution that streamlines planning, scheduling, and participant management for corporate events.",
    technologies: ["React.js", "Spring Boot", "MySQL", "REST API"],
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com/praneethbabu",
  },
  {
    id: 3,
    title: "Traffic Challan Management System",
    description: "A digital solution for traffic authorities to issue, track, and manage traffic violations and penalties.",
    technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    image: "https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com/praneethbabu",
  },
  {
    id: 4,
    title: "Resume Builder Web App",
    description: "An interactive web application that helps users create professional resumes with customizable templates.",
    technologies: ["React.js", "Firebase", "Material UI"],
    image: "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com/praneethbabu",
  },
  {
    id: 5,
    title: "Smart Weather Outfit Recommender",
    description: "An innovative application that suggests appropriate outfits based on current weather conditions and personal preferences.",
    technologies: ["Node.js", "Express.js", "Weather API", "React.js"],
    image: "https://images.pexels.com/photos/1198264/pexels-photo-1198264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com/praneethbabu",
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", category: "frontend", proficiency: 4 },
  { name: "HTML5", category: "frontend", proficiency: 5 },
  { name: "CSS3", category: "frontend", proficiency: 4 },
  { name: "JavaScript", category: "frontend", proficiency: 4 },
  
  // Backend
  { name: "Node.js", category: "backend", proficiency: 4 },
  { name: "Express.js", category: "backend", proficiency: 4 },
  { name: "Spring Boot", category: "backend", proficiency: 3 },
  { name: "Java", category: "backend", proficiency: 4 },
  
  // Database
  { name: "MongoDB", category: "database", proficiency: 4 },
  { name: "MySQL", category: "database", proficiency: 3 },
  
  // Tools
  { name: "Git", category: "tools", proficiency: 4 },
  { name: "GitHub", category: "tools", proficiency: 4 },
  { name: "Postman", category: "tools", proficiency: 4 },
  { name: "VS Code", category: "tools", proficiency: 5 },
  
  // Other
  { name: "REST APIs", category: "other", proficiency: 4 },
  { name: "Agile", category: "other", proficiency: 3 },
  { name: "Debugging", category: "other", proficiency: 4 }
];

export const experiences: Experience[] = [
  {
    company: "Brain O Vision",
    role: "Junior Developer",
    period: "April 2023 – Present",
    description: [
      "Developed and maintained multiple web applications using MERN stack",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Implemented responsive designs ensuring compatibility across devices",
      "Participated in code reviews and adopted best practices"
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript"]
  }
];

export const education: Education[] = [
  {
    institution: "G. Pulla Reddy Engineering College",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2021 - 2025",
    gpa: "7.3 / 10"
  }
];

export const certifications: Certification[] = [
  {
    name: "Java Programming",
    issuer: "Ebox",
    date: "2022",
    link: "#"
  },
  {
    name: "Java Certification",
    issuer: "GeeksforGeeks",
    date: "2023",
    link: "#"
  }
];

export const workshops = [
  {
    title: "MERN Stack Development",
    description: "Led workshops for 200+ students on building full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
    date: "2023"
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/praneethbabu",
    icon: "Linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/praneethbabu",
    icon: "Github"
  },
  {
    name: "Email",
    url: "mailto:praneethbabu2003@gmail.com",
    icon: "Mail"
  },
  {
    name: "Phone",
    url: "tel:+916305052434",
    icon: "Phone"
  }
];

export const personalInfo = {
  name: "Praneeth Babu Yeddula",
  title: "Full Stack Developer | MERN & Java Spring Boot Enthusiast",
  location: "Dhone, Andhra Pradesh, India",
  bio: "Passionate full-stack developer with expertise in MERN stack and Java Spring Boot. Currently pursuing B.Tech in CSE, I combine technical skills with problem-solving abilities to create efficient, user-friendly applications. Experienced in leading workshops and committed to continuous learning.",
  email: "praneethbabu2003@gmail.com",
  phone: "+91 63050 52434"
};