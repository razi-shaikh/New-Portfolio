import {
  HTML,
  CSS,
  JavaScript,
  ReactJS,
  NextJS,
  TailwindCSS,
  MaterialUI,
  NodeJS,
  ExpressJS,
  MongoDB,
  Git,
  Github,
  VSCode,
  Figma,
  Bootstrap,
  ecommerce,
  signInUp,
  meta,
  pdfNotes,
  VIKAS,
  SKRAI,
  TypeScript,
  Prisma,
  Neon,
  Convex,
  Zustand,
} from "./assets/export";
// import { FoundationalAI, Webexcep, GirlScript, Hack2Skill } from './assets/export';
import { CSMU } from "./assets/export";
import {} from "./assets/export";

export const Bio = {
  name: "Razi Shaikh",
  roles: [
    "Frontend Developer",
    "Backend Developer",
    "Web Designer",
    "Open Source Contributor",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  resume: "./RaziResume.pdf",
  linkedin: "",
  github: "https://github.com/razi-shaikh",
  leetcode: "https://leetcode.com/u/Razi9913/",
  geeksforgeeks: "",
  X: "",
  whatsapp:
    "https://wa.me/9967908218?text=Hi Razi! I'd like to know more about your services.",
};

export const skills = [
  // Frontend
  {
    title: "Frontend",
    skills: [
      { name: "HTML", image: HTML },
      { name: "CSS", image: CSS },
      { name: "JavaScript", image: JavaScript },
      { name: "React JS", image: ReactJS },
      { name: "Next JS", image: NextJS },
      { name: "Zustand", image: Zustand },
      { name: "TypeScript", image: TypeScript },
      { name: "Tailwind CSS", image: TailwindCSS },
      { name: "Bootstrap", image: Bootstrap },
      { name: "Material UI", image: MaterialUI },
    ],
  },
  // Backend
  {
    title: "Backend",
    skills: [
      { name: "Node JS", image: NodeJS },
      { name: "Express JS", image: ExpressJS },
      { name: "MongoDB", image: MongoDB },
      { name: "Prisma", image: Prisma },
      { name: "Convex DB", image: Convex },
      { name: "Neon DB", image: Neon },
    ],
  },
  // Languages
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", image: JavaScript },
      { name: "TypeScript", image: TypeScript },
      // { name: "Python", image: JavaScript },
    ],
  },
  // others
  {
    title: "Others",
    skills: [
      { name: "Git", image: Git },
      { name: "Github", image: Github },
      { name: "VS Code", image: VSCode },
      { name: "Figma", image: Figma },
    ],
  },
];

// export const experiences = [
//   {
//     img: FoundationalAI,
//     role: "Frontend Developer Intern",
//     company: "Foundational AI",
//     date: "Dec 2023 - May 2024",
//     desc: "During my internship at Foundational AI, I had developed and maintained end-to-end functionality for Foundational AI's SAAS products, including a CRM Outlook integration and internal application management tools. I Have Integrated various APIs to enable seamless data flow and functionality within the applications.",
//     skills: ["HTML", "CSS", "JavaScript", "React JS", "Redux", "Next JS", "GSAP", "SASS"],
//     doc: ""
//   },
// ];

export const education = [
  {
    img: CSMU,
    school: "Chhatrapati Shivaji Maharaj University",
    date: "2024 - Present",
    grade: "75%",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science at Chhatrapati Shivaji Maharaj University, Panvel, where I am honing my skills in computer science and information technology. This program is equipping me with the knowledge and expertise required to thrive in the dynamic field of technology and software development.",
    degree: "MCA (Master of Computer Applications)",
  },
  {
    img: VIKAS,
    school: "Chhatrapati Shivaji Maharaj University",
    date: "2021 - 2024",
    grade: "64%",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science at Chhatrapati Shivaji Maharaj University, Panvel, where I am honing my skills in computer science and information technology. This program is equipping me with the knowledge and expertise required to thrive in the dynamic field of technology and software development.",
    degree: "BCA (Bachelor of Computer Applications)",
  },
  {
    img: SKRAI,
    school: "Chhatrapati Shivaji Maharaj University",
    date: "2020 - 2021",
    grade: "67%",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science at Chhatrapati Shivaji Maharaj University, Panvel, where I am honing my skills in computer science and information technology. This program is equipping me with the knowledge and expertise required to thrive in the dynamic field of technology and software development.",
    degree: "HSC (Higher Secondary Certificate)",
  },
];

export const projects = [
  {
    title: "E-Commerce Website",
    description:
      "An e-commerce platform built with HTML, SCSS, React, and JavaScript for a responsive and dynamic user experience. It integrates Stripe for secure payments and uses Strapi for backend content management, providing a smooth shopping and checkout process.",
    image: ecommerce,
    tags: ["HTML", "scss", "React", "Stripe", "Strapi"],
    github: "https://github.com/razi-shaikh/E-commerce",
    link: "",
  },
  {
    title: "Sign-in/Login System",
    description:
      "A secure and efficient sign-in/login system built using HTML, Tailwind CSS, React, Node.js, Express, and MongoDB. The system includes robust security features like JWT (JSON Web Token) authentication, password hashing for secure password storage, cookies for session management, and OTP (One-Time Password) verification for enhanced account protection. This ensures a seamless and secure user login experience, with a modern UI and reliable backend support.",
    image: signInUp,
    tags: ["HTML", "Tailwind CSS", "MonogDB", "React", "Node.js", "Express"],
    github: "https://github.com/razi-shaikh/SignIn-SignUp",
    link: "",
  },
  {
    title: "Pdf Notes With AI",
    description:
      "A note-taking website that allows users to extract and organize notes from PDFs, integrated with AI-powered Q&A using Gemini AI for instant assistance. Built with Next.js, TypeScript, Tailwind CSS, Convex DB, and ShadCN UI, it offers a seamless and interactive learning experience.",
    image: pdfNotes,
    tags: [
      "nextjs",
      "typescript",
      "tailwindcss",
      "convex DB",
      "gemini AI",
      "shadcn ui",
    ],
    github: "https://github.com/razi-shaikh/pdf-notes-with-ai",
    link: "https://pdf-notes-ai.vercel.app",
  },
  {
    title: "Meta Automation",
    description:
      "An Instagram automation tool that automatically replies to comments on posts and sends direct messages (DMs) based on user interactions. Developed with Next.js, TypeScript, Tailwind CSS, Prisma, Neon DB, Redux, and ShadCN UI, it streamlines social media engagement for businesses and creators.",
    image: meta,
    tags: [
      "nextjs",
      "typescript",
      "tailwindcss",
      "shadcn ui",
      "prisma",
      "neon DB",
      "redux",
    ],
    github: "https://github.com/razi-shaikh/meta-automation-complete",
    link: "https://meta-automations.vercel.app",
  },
];
