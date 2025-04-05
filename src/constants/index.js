import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies on React as well as back-end technologies like Node.js, MySQL and PHP. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Feb 2022 - Present",
    role: "Software Engineer",
    company: "To the New",
    description: `"Developed and optimized backend systems with Node.js, AWS Lambda, MySQL and PHP, while enhancing front-end performance using React. Integrated seamless APIs, improved scalability, and reduced downtime, ensuring an efficient and responsive user experience."`,
    technologies: [ "AWS", "React", "mySQL", "Node.js", "PHP"],
  },
  {
    year: "Oct 2021 - Dec 2021",
    role: "Software Engineer Intern",
    company: "Vyolve Paisa",
    description: `Developed and maintained web applications using Python and Django. Designed and implemented RESTful APIs for data communication. Integrated Payment Gateway for web application.`,
    technologies: ["Python", "Django"],
  },
  {
    year: "Dec 2020 - Feb 2021",
    role: "IT Engineer Interm",
    company: "Bharat Electronics Limited",
    description: `As an IT Engineer Intern at Bharat Electronics Limited, I contributed to various technical projects and gained hands-on experience in IT infrastructure management. I worked on optimizing systems and supporting operational efficiency across teams.`,
    technologies: ["CISCO Networks", "Linux"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
