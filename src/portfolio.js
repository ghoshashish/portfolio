/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Ashish Ghosh",
  title: "Hi all, I'm Ashish",
  subTitle: emoji(
    "A passionate Frontend Software Engineer 🚀 having an experience of designing and building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/17xGpgb7b4nZkzHDge6Ntdtp0YkYdVrmF/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ghoshashish",
  // linkedin: "https://www.linkedin.com/in/",
  gmail: "ghoshashish43@gmail.com",
  // gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/ashish.ghosh.906",
  // medium: "https://medium.com/@davidrakosi",
  stackoverflow: "https://stackoverflow.com/users/11499600/ashish-ghosh",
  instagram: "https://www.instagram.com/smart.ash43/",
  twitter: "https://twitter.com/ashish91774069",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ MongoDB"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift",
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Guru Ghasidas Central University",
      logo: require("./assets/images/guru_ghasidas.png"),
      subHeader: "Master of Computer Application (MCA)",
      duration: "June 2010 - June 2013",
      desc:
        "Guru Ghasidas Vishwavidyalaya is a Central University located in Bilaspur, Chhattisgarh, India.",
      descBullets: [
        " It is one of the largest and oldest institution of higher education of Chhattisgarh",
      ],
    },
    {
      schoolName: "Guru Ghasidas Central University",
      logo: require("./assets/images/guru_ghasidas.png"),
      subHeader: "Bachelor of Computer Application (BCA)",
      duration: "June 2008 - June 2010",
      desc:
        "Guru Ghasidas Vishwavidyalaya is a Central University located in Bilaspur, Chhattisgarh, India.",
      descBullets: [
        " It is one of the largest and oldest institution of higher education of Chhattisgarh",
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "90%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Nityo Infotech Services Pvt Ltd",
      companylogo: require("./assets/images/nityo.jpg"),
      date: "December 2020 – June 2021",
      desc:
        "Revamping UI, UX and overall design aesthetic of the critical online service",
      // descBullets: [
      //   "React Hooks to build new Component",
      //   "Customization of React Redux concept ",
      //   "JEST/React Testing Library ",
      //   "Context API workflow",
      // ],
    },
    {
      role: "Software Developer",
      company: "Reventum Solutions LLP",
      companylogo: require("./assets/images/reventum.jpg"),
      date: "November 2018 – March 2020",
      desc: "Entire Frontend (UI/UX)  has been developed by Me ",
    },
    {
      role: "Software Developer",
      company: "RdWebsolution Pvt Ltd",
      companylogo: require("./assets/images/rd.jpg"),
      date: "November 2018 – July 2019",
      desc:
        "Performing internal knowledge sharing and Reporting and Management",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "ghoshashish", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME REPUTED COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/hockey.jpg"),
      projectName: "Hockey Advisor Pro",
      projectDesc:
        "Responsible for Developing and establish long-term client relationships in the office supplies industry.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.hockeyadvisorpro.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/staff.jpg"),
      projectName: "StaffingNation",
      projectDesc:
        "Admin Panel Design using ReactJS, Redux usage for storing data. Jest/React Testing Library Test cases for testing.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://d38mws8z3ove91.cloudfront.net/login",
        },
      ],
    },
    {
      image: require("./assets/images/cgx.jpg"),
      projectName: "CGX System",
      projectDesc:
        "CGX Dry High Density Systems equipped to transfer higher data rates with conventional technology.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.cgxsystems.com/",
        },
      ],
    },
    {
      image: require("./assets/images/itb.jpg"),
      projectName: "ITBrainiac",
      projectDesc:
        "Placing permanent and temporary candidates efficiently add Values to all stages of Recruiting Process.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.itbrainiac.com/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Certificate of Achievement",
      subtitle:
        "Recognition of Software Product Innovation & Excellence Award Dec 2019",
      image: require("./assets/images/certificate.jpg"),
      footerLink: [
        {
          name: "View Certification",
          url:
            "https://drive.google.com/file/d/1C1vYNfpS9R53BxH2JJaFgqpCb_6mgIal/view?usp=sharing",
        },
      ],
    },
    {
      title: "Achievement of Award",
      subtitle:
        "Recognition of Software Product Innovation & Excellence Award Dec 2019",
      image: require("./assets/images/certificate1.jpg"),
      footerLink: [
        {
          name: "View Award",
          url:
            "https://drive.google.com/file/d/1pgZSmk59sDhvfSG61v-3DKtYN9JWH2eJ/view?usp=sharing",
        },
      ],
    },
    {
      title: "Workshop Web Development",
      subtitle: "Workshop Work on Web Designing / Web Development",
      image: require("./assets/images/Workshop_Web_development.jpg"),
      footerLink: [
        {
          name: "View Certificate",
          url:
            "https://drive.google.com/file/d/1_5Vs5Cb5C4OnpZIWHpRet16lh0JlZeqL/view?usp=sharing",
        },
      ],
    },
    {
      title: "Computer Lecturer",
      subtitle:
        "Serve as a Computer Lecturer at Techno Valley institute, Ambikapur, Chhattisgarh",
      image: require("./assets/images/Computer_Lecturer.jpg"),
      footerLink: [
        {
          name: "View Certificate",
          url:
            "https://drive.google.com/file/d/1gC4fM2DaxMsUjzoTt6e6cV-6rpET0sJr/view?usp=sharing",
        },
      ],
    },
    {
      title: "Data Entry Operator",
      subtitle:
        "Serve as a Data Entry Operator at Techno Valley institute, Ambikapur, Chhattisgarh",
      image: require("./assets/images/Computer_Lecturer.jpg"),
      footerLink: [
        {
          name: "View Certificate",
          url:
            "https://drive.google.com/file/d/1lrYK4dxW2lkzqoNfapWP_fSslzw-CfS_/view?usp=sharing",
        },
      ],
    },
    {
      title: "CORE JAVA/J2EE",
      subtitle:
        "Certification of Completion of Core Java J2EE from Reboot Mind IT Solution, Indranagar, Bangalore",
      image: require("./assets/images/Core_Java_J2EE.jpg"),
      footerLink: [
        {
          name: "View Certificate",
          url:
            "https://drive.google.com/file/d/1QhWFr5ACz5YB0ULFkrD-1Vtp8nvDu2Fp/view?usp=sharing",
        },
      ],
    },
    {
      title: "College Project",
      subtitle:
        "Behavioural economics and Security Analyzer with MultiCharts, Hans Informatics, Bangalore",
      image: require("./assets/images/College_Project.jpg"),
      footerLink: [
        {
          name: "View Certificate",
          url:
            "https://drive.google.com/file/d/1Ldqb7s8VSdNSXGDtqiRJei5YwTWXJDUe/view?usp=sharing",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Projects",
  subtitle:
    "Responsible for Developing and establish long-term client relationships in the office supplies industry.",

  blogs: [
    {
      url: "https://www.hockeyadvisorpro.com/",
      title: "Hockey Advisor Pro",
      description:
        "To help serve the clients need more efficiently and grow businesses and places ability at best-fit and helps people better pursue career outcomes",
    },
    {
      url: "https://www.cgxsystems.com/",
      title: "CgxSystems",
      description:
        "CGX Dry High Density Systems are also equipped with a custom Bluetooth implementation to transfer higher data rates with conventional technology.",
    },
    {
      url: "https://d38mws8z3ove91.cloudfront.net/login",
      title: "Staffing Nation",
      description:
        "Admin Panel Design using ReactJS, Redux usage for storing data. Test cases for testing multiple units of components and functionality using Jest/React Testing Library ",
    },
    {
      url: "http://reventumsolutions.com/",
      title: "Reventum Solutions LLP",
      description:
        "A transformative agency partner with creative spark Digital combines data insights with design thinking to build strategies and experiences that transform businesses",
    },
    {
      url: "https://www.itbrainiac.com/",
      title: "ITBrainiac",
      description:
        "ITBrainiac successfully placing permanent and temporary candidates efficiently add Values to all stages of the Recruiting Process by Reducing Recruitment Cost.",
    },
    {
      url: "http://www.consultingknights.com/",
      title: "Consulting Knights",
      description:
        "Consulting Knights, Inc has been a force to reckon with, inTechnology and Consulting services. constant delivery of innovation, quality, consistency and value for money.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "91-7842122721, 91-9406480185 ",
  email_address: "ghoshashish43@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "ashish91774069", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
