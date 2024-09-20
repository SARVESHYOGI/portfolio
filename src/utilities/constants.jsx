import { LuLinkedin, LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { IoMdDocument } from "react-icons/io";
export const navLinks = [
    {
        url: "/#",
        name: "Home",
    },
    {
        url: "/#about",
        name: "About",
    },

    {
        url: "/#projects",
        name: "Projects",
    },
    {
        url: "/#contact",
        name: "Contact",
    },
];

export const skills = [
    "C++",
    "JavaScript (ES6+)",
    "React Js",
    "Redux Toolkit",
    "Tailwind css",
    "API Handling",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Next.js",
];

export const social_links = [
    {
        url: "https://github.com/SARVESHYOGI",
        icon: <LuGithub className="w-[22px] h-[22px]" />,
        name: "Github",
    },
    {
        url: "https://www.linkedin.com/in/sarveshyogi/",
        icon: <LuLinkedin className="w-[22px] h-[22px]" />,
        name: "Linkedin",
    },
    {
        url: "https://twitter.com/SarveshYogi9305",
        icon: <FaXTwitter className="w-[22px] h-[22px]" />,
        name: "Twitter",
    },
    {
        url: "https://drive.google.com/file/d/1Kbnne-t-Xm6dR0_7gf1oAouOH0sDiFry/view?usp=sharing",
        icon: <IoMdDocument className="w-[22px] h-[22px]" />,
        name: "Resume",
    },

    //{
    // url: "https://leetcode.com/sarvesh2005/",
    //icon: <SiLeetcode className="w-[22px] h-[22px]" />,
    // name: "Leetcode",
    // },
];

export const mainProjects = [
    {
        title: "E-BHARAT",
        description:
            "created E-bharat, a fully functional shopping e-commerce website using React.js, Tailwind CSS, Firebase, and Redux, where admins can add products and customers can make purchases.",
        tags: ["React.js", "Tailwind CSS", "Firebase", "Redux"],
        github: "https://github.com/SARVESHYOGI/Ecom",
        demo: "https://ecom-orpin-iota.vercel.app/",
        image: 'https://res.cloudinary.com/dztzgqzjp/image/upload/v1721666327/Screenshot_2024-07-22_174232_bnrxqc.png',
    },
    {
        title: "IETE-TSEC",
        description:
            "Built the official website for IETE-TSEC , Technical Society of my college.Leading a team and emphasis on Git Workflow, I developed the site using React, Tailwind and Framer-motion.",
        tags: ["React.js", "Tailwind CSS", "Express", "Material UI", "Framer-motion"],
        github: "https://github.com/SARVESHYOGI",
        demo: "https://www.ietetsec.in/",
        image:
            "https://res.cloudinary.com/dztzgqzjp/image/upload/v1721666195/Screenshot_2024-07-22_175341_uqewzt.png",
    },
    {
        title: "realtime-tracker",
        description:
            "A real-time tracking application developed with Node.js, Socket.io, and Express. This project enables live updates and tracking of data, providing an interactive user experience. It demonstrates real-time communication and data synchronization using WebSocket technology.",
        tags: ["node.js", "socket.io", "JavaScript", "Express"],
        github: "https://github.com/SARVESHYOGI/realtime-tracker",
        demo: "https://realtime-tracker-zg12.onrender.com/",
        image: "https://res.cloudinary.com/dztzgqzjp/image/upload/v1721670630/Screenshot_2024-07-22_232002_kfl0li.png"
    },


    // {
    //     title: "TODOS",
    //     description:
    //         " Created a fully functional to-do application using React, Redux, and Tailwind CSS. The app features intuitive task management, real-time updates, and a sleek user interface. It demonstrates my ability to build efficient and user-friendly applications.",
    //     tags: ["React.js", "Redux", "HTML", "Tailwind-CSS", "JavaScript"],
    //     github: "https://github.com/SARVESHYOGI/TodoinReact",
    //     demo: "https://todoisnreact-nu.vercel.app/",
    //     image:
    //         "https://res.cloudinary.com/dztzgqzjp/image/upload/v1721666312/Screenshot_2024-07-22_175248_kbqbhr.png",
    // },
];

export const otherProjects = [
    {
        title: "Tinder-Cards",
        description:
            "created a Tinder-like card application with sleek design and smooth interactions, using React, the Tinder npm package, MongoDB, Express, and Material UI.",
        tags: ["React.js", "Tailwind CSS", "mongoDB", "Express", "Node"],
        github: "https://github.com/SARVESHYOGI/tinder-clone",
        demo: "https://tinder-clone-chi.vercel.app/",
        // image:
        //     "https://res.cloudinary.com/dztzgqzjp/image/upload/v1721666328/Screenshot_2024-07-22_174543_gulbij.png",
    },
    {
        title: "Login-Logout-API",
        description:
            "A secure login and logout API built with React.js, Express, MongoDB, and Node.js. This application utilizes JWT for authentication and Bcrypt for password hashing, ensuring robust security measures. The demo showcases a streamlined user authentication process with a clean, responsive interface.",
        tags: ["React.js", "Express", "MongoDB", "Node", "JWT", "Bcrypt"],
        github: "https://github.com/SARVESHYOGI/login_logout_app",
        demo: "https://login-logout-app.vercel.app/login",
    },

    {
        title: "Add your Blog",
        description:
            "A blog application built with React.js, Node.js, Express, and MongoDB. This platform allows users to create, read, update, and delete blog posts. It features a user-friendly interface for managing content and demonstrates full-stack development capabilities with seamless integration between the frontend and backend.",
        tags: ["Reactjs", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/SARVESHYOGI/blog",
        demo: "https://blog-88o5l6n6k-sarvesh-yogis-projects.vercel.app/",
    },
    {
        title: "TODOS",
        description:
            " Created a fully functional to-do application using React, Redux, and Tailwind CSS. The app features intuitive task management, real-time updates, and a sleek user interface. It demonstrates my ability to build efficient and user-friendly applications.",
        tags: ["React.js", "Redux", "HTML", "Tailwind-CSS", "JavaScript"],
        github: "https://github.com/SARVESHYOGI/TodoinReact",
        demo: "https://todoisnreact-nu.vercel.app/",
        image:
            "https://res.cloudinary.com/dztzgqzjp/image/upload/v1721666312/Screenshot_2024-07-22_175248_kbqbhr.png",
    },
    {
        title: "Git-Profile-Checker",
        description:
            "A GitHub profile checker built with React.js, Redux, and Material UI. It lets users search and view profiles using the GitHub API, with a responsive and user-friendly interface.",
        tags: ["React.js", "redux", "Material UI", "api"],
        github: "https://github.com/SARVESHYOGI/git-c",
        demo: "https://git-c.vercel.app/",
    },
    {
        title: "Tic Tac Toe Game",
        description: "A basic Tic Tac Toe game created with React, CSS, and JavaScript. It features a simple, interactive interface for a classic game experience.",
        tags: ["React", "CSS", "JavaScript"],
        github: "https://github.com/SARVESHYOGI/tic-tac-toe",
        demo: "https://tic-tac-toe-five-ruby.vercel.app/",
    },
    {
        title: "Password-Generator",
        description:
            "A password generator built with React, HTML, CSS, and JavaScript. It allows users to create strong, customizable passwords with various complexity options.",
        tags: ["React", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/SARVESHYOGI/password",
        demo: "https://password-s274.vercel.app/",
    },
    {
        title: "Stopwatch-Timer",
        description:
            "A stopwatch and timer application developed with React, HTML, Vanilla CSS, and JavaScript. It features a clean interface for accurate timekeeping and simple functionality.",
        tags: ["React", "HTML", "Vanilla CSS", "JavaScript"],
        github: "https://github.com/SARVESHYOGI/Stopwatch-Timer",
        demo: "https://sarveshyogi.github.io/Stopwatch-Timer/",
    },
    {
        title: "backgroundchanger",
        description:
            " A background changer application built with React and JavaScript. It allows users to locally change backgrounds, with enhancements made to existing Scrimba code.",
        tags: ["React-Hooks", "JavaScript", "React"],
        github: "https://github.com/SARVESHYOGI/backgroundchanger",
        demo: "https://backgroundchanger-eta.vercel.app/",
    },
    {
        title: "Checkvowels",
        description:
            " A simple application for checking vowels in a given text, built with HTML5, CSS, and JavaScript. It offers a straightforward interface for vowel identification and counting.",
        tags: ["HTML5", "CSS", "JavaScript"],
        github: "https://github.com/SARVESHYOGI/Checkvowels",
        demo: "https://sarveshyogi.github.io/Checkvowels/",
    },
    {
        title: "dark-light-mode",
        description:
            " A dark and light mode toggle feature built with React, Redux, JavaScript, and Tailwind CSS. It allows users to switch between themes for a customizable user experience.",
        tags: ["React", "Redux", "JavaScript", "Taliwind CSS"],
        github: "https://github.com/SARVESHYOGI/dark-light-mode",
        demo: "https://dark-light-mode-fawn.vercel.app/",
    },

    {
        title: "Parallax Animation",
        description:
            "A parallax animation project created with HTML5 and CSS. It features dynamic, layered scrolling effects for a visually engaging experience.",
        tags: ["HTML5", "CSS"],
        github: "https://github.com/SARVESHYOGI/parallex",
        demo: "https://parallex-fawn.vercel.app/",
    },
    {
        title: "currency-converter",
        description: "A currency converter application built with React, Tailwind CSS, and JavaScript. It uses APIs to provide real-time exchange rates and convert currencies seamlessly.",
        tags: ["React", "Api", "Tailwind CSS", "JavaScript"],
        github: "https://github.com/SARVESHYOGI/currency-converter",
        demo: "https://currency-converter-swart-nu.vercel.app/",
    },
    {
        title: "game-sps-",
        description: "A game of Rock, Paper, Scissors (SPS) developed with JavaScript, HTML, and CSS. It features interactive gameplay with a user-friendly interface.",
        tags: ["javascript", "HTML", "CSS"],
        github: "https://github.com/SARVESHYOGI/game-sps-",
        demo: "https://sarveshyogi.github.io/game-sps-/",
    },
];
