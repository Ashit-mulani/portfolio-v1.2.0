export interface ProjectInterface {
    id: string,
    image: string,
    avtar: string,
    name: string,
    title: string,
    description: string,
    link: {
        github: string,
        read: string,
        live?: string
    }
    techStack: {
        name: string,
        icon?: HTMLOrSVGElement
    }[]
}

export const featuredProjects: ProjectInterface[] = [
    {
        id: 'imageBox',
        image: '/project/imagebox.png',
        avtar: '/avatar/imagebox.jpg',
        name: 'Imagebox',
        title: 'Seamless Cloud Photo Organizer',
        description: 'A cloud-based photo management app that lets users easily upload, organize, and share images online.',
        link: {
            github: 'https://github.com/Ashit-mulani/imagebox',
            read: '/read/imagebox',
            live: 'https://imagebox.fluoce.com/user/home'
        },
        techStack: [
            {
                name: 'Reactjs',
            },
            {
                name: 'Expressjs',
            },
            {
                name: 'Mongodb',
            },
            {
                name: 'Imagekit.io',
            },
        ]
    },
    {
        id: 'goldphin',
        image: '/project/goldphin.png',
        avtar: '/avatar/goldphin.png',
        name: 'Goldphine',
        title: 'Dashboard for Crypto Wallets',
        description: 'Connect your crypto wallet and view all your wallet stats in one place. Includes a built-in token swap service that lets you seamlessly exchange tokens across multiple blockchains.',
        link: {
            github: 'https://github.com/Ashit-mulani/GoldPhin.io',
            read: '/read/goldphin',
            live: 'https://goldphin.fluoce.com'
        },
        techStack: [
            {
                name: 'Etherjs',
            },
            {
                name: 'Reactjs',
            },
            {
                name: 'Moralis.com',
            },
            {
                name: '1inch.com',
            },
            {
                name: 'Expressjs',
            }
        ]
    },
    {
        id: 'auth-fluoce',
        image: '/project/auth-fluoce.png',
        avtar: '/avatar/auth-fluoce.svg',
        name: 'Auth Fluoce',
        title: 'Centralized Authentication Service',
        description: 'A robust authentication layer built to power multiple applications and microservices. Implemented with NestJS, it offers RS256 JWT access tokens, rotating refresh tokens, multi-device session management, and secure rate limiting. Developed using clean architecture principles with an emphasis on production-readiness.',
        link: {
            github: 'https://github.com/fluoce/auth/tree/main/auth',
            read: '/read/auth-fluoce',
            live: 'https://auth.fluoce.com/auth'
        },
        techStack: [
            {
                name: 'Nestjs',
            },
            {
                name: 'Redis',
            },
            {
                name: 'Postgresql',
            },
            {
                name: 'Jwt',
            },
            {
                name: 'Prisma',
            },
            {
                name: 'React',
            },
        ]
    },
]

export const allProjects: ProjectInterface[] = [
    ...featuredProjects,
    {
        id: 'cloud-fluoce',
        image: '/project/cloud-fluoce.png',
        avtar: '/avatar/auth-fluoce.svg',
        name: 'Cloud Fluoce',
        title: 'Cloud Storage & File Management',
        description: 'Effortlessly store, organize, and share your files in one secure, unified cloud. Designed for simplicity and productivity, Cloud Fluoce ensures your workflow is seamless and your files are always at your fingertips.',
        link: {
            github: 'https://github.com/Ashit-mulani/fluoce',
            read: '/read/cloud-fluoce',
            live: 'In-Beta'
        },
        techStack: [
            {
                name: 'Nestjs',
            },
            {
                name: 'Redis',
            },
            {
                name: 'Postgresql',
            },
            {
                name: 'Jwt',
            },
            {
                name: 'Prisma',
            },
            {
                name: 'React',
            },
        ]
    },
    {
        id: 'tasky',
        image: '/project/tasky.png',
        avtar: '/avatar/tasky.png',
        name: 'Tasky',
        title: 'Team & Project Management Platform',
        description: "A lightweight organization management system enabling teams to collaborate through structured projects, sections, and task. Supports member invitations, team-based access control, and flexible task assignment across projects.",
        link: {
            github: 'https://github.com/Ashit-mulani/TaSky.app',
            read: '/read/tasky',
            live: 'https://tasky-ten-beta.vercel.app'
        },
        techStack: [
            {
                name: 'Reactjs',
            },
            {
                name: 'Expressjs',
            },
            {
                name: 'Mongodb',
            },
        ]
    },
]