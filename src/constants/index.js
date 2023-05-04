import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    mysql,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    springboot,
    figma,
    docker,
    meta,
    starbucks,
    thoughtclanLogo,
    walkoverLogo,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    toolInventoryLogo,
    dportfolio,
    movieApp,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Engineer",
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySql",
      icon: mysql,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Spring Boot",
      icon: springboot,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Engineer Trainee",
      company_name: "Walkover Pvt. Ltd.",
      icon: walkoverLogo,
      iconBg: "#383E56",
      date: "March 2022 - June 2022",
      points: [
        "Engaged as a trainee for an application based integrated training and assessment program.",
        "Key Learning: Concept of OOPS, DBMS, HTML and CSS.",
        "Developing and maintaining web applications .",
        "Implementing responsive design and ensuring cross-browser compatibility.",
       
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Thoughtclan Technologies",
      icon: thoughtclanLogo,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Tool Inventory System",
      description:
        "Web-based platform that allows users to manage the tools and machines in a factory. Add new manager through admin page, add new operator through manager page, operator can request new tools, manager can approve/decline the tools request, can add new tools to a machine and can even see ledger.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "springboot",
          color: "pink-text-gradient",
        },
      ],
      image: toolInventoryLogo,
      source_code_link: "https://github.com/",
    },
    {
      name: "3D Portfolio",
      description:
        "Web application that enables users to know about me and my achievements, what all technologies I have worked on and my projects with some of my skills showcasing.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        // {
        //   name: "scss",
        //   color: "pink-text-gradient",
        // },
      ],
      image: dportfolio,
      source_code_link: "https://github.com/",
    },
    {
      name: "Movie App",
      description:
        "A comprehensive movie app platform that allows users to watch movies, enjoy lastest movies and even comes with authentication.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tmdb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: movieApp,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };