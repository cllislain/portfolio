import {
    mobile,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    flutter,
    threejs,
    menchie,
    brain,
    todo,
    python,
    django,
    facebook,
    github,
    instagram,
  } from "../assets";
  import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';


  
  export const navLinks = [
    {
      id: "about",
      title: "About",
      url: "https://github.com/cllislain/",
      icons: FaGithub,
    },
    {
      id: "work",
      title: "Work",
      url: "https://github.com/cllislain/",
      icons: FaInstagram,
    },
    {
      id: "contact",
      title: "Contact",
      url: "https://github.com/cllislain/",
      icons: FaFacebook,
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Javascript Developer",
      icon: mobile,
    },
    {
      title: "Django Developer",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "django",
      icon: django,
    },
  ];
  
  const experiences = [
    {
      title: "Project MENCHIE",
      company_name: "Komunidad Global Pte Ltd",
      icon: flutter,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Mandlauyong Enhanced Monitoring of Natural hazards and Climate for Household Information and Education",
        "Detailed Risk Assessment of places around Philippines",
        "Advisories from Government Agencies"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non porta lacus. Praesent ut velit ipsum. Donec congue malesuada elementum.",
      name: "TBFL",
      designation: "TBFL",
      company: "TBFL",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non porta lacus. Praesent ut velit ipsum. Donec congue malesuada elementum.",
      name: "TBFL",
      designation: "TBFL",
      company: "TBFL",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non porta lacus. Praesent ut velit ipsum. Donec congue malesuada elementum.",
      name: "TBFL",
      designation: "TBFL",
      company: "TBFL",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Project Menchie",
      description:
        "Mandaluyong Enhanced monitoring of Natural Hazards and Climate Mobile Application",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "dart",
          color: "pink-text-gradient",
        },
      ],
      image: menchie,
      source_code_link: "https://github.com/cllislain/B.R.A.I.N",
    },
    {
      name: "B.R.A.I.N",
      description:
        "Student and Community Study Collaboration and Messaging Django Web Application",
      tags: [
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
      ],
      image: brain,
      source_code_link: "https://github.com/cllislain/komunidad",
    },
    {
      name: "CRUD To-Do-List",
      description:
        "A simple to-do list React Application using the essentials of Create, Read, Update and Delete methods",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "orange-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/cllislain/CRUD-to-do-list",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };