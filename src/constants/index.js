import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "C/C++ developer",
        company_name: "CNPq",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "January 2017- December 2020",
        points: [
            "Developing and maintaining Computer applications using C++ and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating Coding in a development of simulation .",
        ],
    },
    {
        title: "Automation Development",
        company_name: "Support Automacao Industrial",
        icon: tesla,
        iconBg: "#90EE90",
        date: "Jan 2020 - October 2023",
        points: [
            "Developing and maintaining Automation applications using PLCs, HMIs, and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in the development of a particle collision simulation application.",
            "Coding with ST, C++.",
        ],
    },
    {
        title: "Web Fullstack Developer",
        company_name: "WEG",
        icon: shopify,
        iconBg: "#a2d2ff",
        date: "November 2023 - Today",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating coding with Nextjs, Java SpringBoot, React, Typescript, Javascript.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Votos de Funcionarios da Empresa',
        description: 'Developed to employees can vote to the best employee of the month.',
        link: 'https://github.com/MateusVergennes/votos-funcionarios',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Wallet',
        description: 'Created a full-stack wallet to control the expanses and incomes.',
        link: 'https://github.com/MateusVergennes/myWallet',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'e-commerce',
        description: 'Fullstack, working and published e-commerce application.',
        link: 'https://github.com/MateusVergennes/ecommerce',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'To Do application with Firebase DataBase',
        description: 'to do application with communication in web with firebase Database',
        link: 'https://github.com/MateusVergennes/React_loginSystem_w_firebaseDatabase',
    }
];