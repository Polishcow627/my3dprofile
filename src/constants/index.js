import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Blender Developer",
      icon: web,
    },
    {
      title: "3D Modeler",
      icon: mobile,
    },
    {
      title: "Video Editor",
      icon: backend,
    },
    {
      title: "Graphic Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Schooling",
      company_name: "St. Joseph's Boys' High School",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Aug 2021 - March 2023",
      points: [
        "Studied Commerce with added Computer Applications.",
        "Learnt how to balance workload in intense deadlines while maintaining stability.",
        "Worked on multiple art and non art based group projects which helped develop skillset of communicating with peers.",
      ],
    },
    {
      title: "Higher Studies",
      company_name: "St. Joseph's University",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2023 - March 2026 (Expected)",
      points: [
        "Learnt core concepts like principles of photography, animation and design.",
        "Gained hands-on experience with industry standard tools like photoshop, blender etc..",
        "Learned integration of vfx in 3d and 2d.",
      ],
    },
  
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "A very dedicated and honest individual.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Very efficient and makes good counter points.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "A very productive individual and a good team player.",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Solar System",
      description:
        "Web-based solar system educational game that allows users to explore the solar system, learn about different planets, and interact with various celestial objects.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "vscode",
          color: "green-text-gradient",
        },
        {
          name: "planets",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Polishcow627/Solar_System.git",
    },
    {
      name: "AR Planets App",
      description:
        "An AR app for mobile which lets people to view planets through camera.",
      tags: [
        {
          name: "vscode",
          color: "blue-text-gradient",
        },
        {
          name: "unity",
          color: "green-text-gradient",
        },
        {
          name: "planets",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Polishcow627/Planets_AR_Application.git",
    },
    {
      name: "AR Visiting Card",
      description:
        "An interactive visiting card which plays clip upon usage of camera.",
      tags: [
        {
          name: "vistingcard",
          color: "blue-text-gradient",
        },
        {
          name: "ar",
          color: "green-text-gradient",
        },
        {
          name: "vscode",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Polishcow627/AR-Visiting-Card-Web..git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };