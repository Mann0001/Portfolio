export const siteConfig = {
  name: "Manmeet Singh",
  title: "Computer Science Student",
  description: "Portfolio website of Manmeet Singh",
  accentColor: "#1d4ed8",
  social: {
    email: "mann.does.code@gmail.com",
    linkedin: "https://www.linkedin.com/in/manmeet-singh-a000b3208/",
    twitter: "#",
    github: "https://github.com/Mann0001",
  },
  aboutMe:
    "Hi, I’m Manmeet. I’m a Computer Science student with a strong interest in software development, cloud technologies, and problem-solving. I enjoy turning ideas into working projects and constantly improving my technical skills. I’ve worked with Java, HTML/CSS, JavaScript, React, Node.js, and SQL, and I’m actively building real-world projects to strengthen my experience. I like clean code, learning new tools, and creating things that are practical. My goal is to grow as a software engineer and contribute to impactful projects.",
  skills: ["Javascript", "React", "Node.js", "Mongo DB", "My SQL", "Java", "Docker"],
  projects: [
    {
      name: "Wanderlust Travel Booking Platform",
      description:
        "A full-stack travel accommodation platform inspired by Airbnb, where users can explore listings, view details, and book stays. Built with modern UI, secure authentication, and dynamic listing features.",
      link: "https://wanderlust-1pmn.onrender.com/listings",
      skills: ["Node.js", "Express", "MongoDB", "Cloudinary", "EJS", "Bootstrap"],
    },
    {
      name: "ReUseIt: E-Waste Recycling Platform",
      description:
        "E-waste recycling platform built with React featuring device component analysis, Leaflet.js mapping for recycling centers with geolocation, chatbot for user queries, and multi-step pickup booking system",
      link: "https://component-reuse-frontend.vercel.app/",
      skills: ["React", "Leaflet.js", "Material-UI", "Axios", "React Router"],
    },
    {
      name: "Real-Time Weather App",
      description:
        "A fast and lightweight web app that shows real-time weather conditions using live API data. Includes temperature, humidity, wind speed, and location-based forecasts with a clean, responsive UI.",
      link: "https://mann-weather.vercel.app/",
      skills: ["React", "JavaScript", "Vercel"],
    },
  ],
  experience: [
  {
    company: "Tata Motors – Lucknow (Deva Plant)",
    title: "Software Developer Intern (Full Stack)",
    dateRange: "Jan 2026 - Feb 2026",
    bullets: [
      "Designed and developed a production-oriented Maintenance & Production Management System inspired by real Jishu Hosen (JH) manufacturing workflows.",
      "Architected a role-based access control system (Admin, Supervisor, Operator) with secure login handling and structured relational schema design.",
      "Built RESTful backend APIs using Node.js and Express.js integrated with MySQL for machine assignment, maintenance scheduling, and workflow enforcement.",
      "Engineered a customizable preventive maintenance engine supporting time-based scheduling (seconds, minutes, hours, days) stored per machine in the database.",
      "Implemented automatic maintenance ticket generation based on next_maintenance_due_at and maintenance_interval_seconds logic.",
      "Developed dynamic maintenance ownership resolution where temporary machine reassignment overrides primary ownership.",
      "Created time-bound temporary machine reassignment logic with automatic expiry and restoration of original operator ownership.",
      "Designed normalized database schema including machines, users, roles, user_roles, machine_operator_assignment, temporary_assignments, and abnormalities tables.",
      "Built responsive dashboards for Operators and Supervisors using HTML, CSS, and JavaScript with real-time machine visibility.",
      "Implemented maintenance lifecycle tracking including ticket creation, completion, due dates, and automatic machine status updates.",
      "Ensured data integrity through relational constraints, foreign key design patterns, and business-rule-based validation logic."
    ],
  },
],
  education: [
    {
      school: "University Of Lucknow",
      degree: "Bachelor of Computer Science and Engineering",
      dateRange: "2022 - 2026",
      achievements: [
        "Actively building projects in web development",
        "Participating in coding challenges and tech programs",
        "Strong academic performance",
      ],
    },
    {
      school: "Apna College",
      degree: "Full Stack Development",
      dateRange: "2025",
      achievements: [
        "Completed 200+ hours of coursework",
        "Built 5+ projects",
        "Specialized in React and Node.js",
      ],
    },
    {
      school: "GeeksforGeeks",
      degree: "Data Structures & Algorithms (Java)",
      dateRange: "2024 – 2025",
      achievements: [
        "Solved 200+ DSA problems using Java across LeetCode and GeeksforGeeks",
        "Built strong foundation in arrays, strings, recursion, linked lists, stacks, queues, trees",
        "Practiced problem-solving with focus on time and space complexity optimization",
        "Strengthened core Java concepts through extensive hands-on coding practice",
      ],
    },
  ],
};
