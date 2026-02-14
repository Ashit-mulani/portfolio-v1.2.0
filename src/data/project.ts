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
        live: string
    }
    techStack: {
        name: string,
        icon?: HTMLOrSVGElement
    }[]
}

export const projects: ProjectInterface[] = [
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
                name: 'reactjs',
            },
            {
                name: 'expressjs',
            },
            {
                name: 'mongodb',
            },
            {
                name: 'imagekit.io',
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
                name: 'etherjs',
            },
            {
                name: 'reactjs',
            },
            {
                name: 'moralis.com',
            },
            {
                name: '1inch.com',
            },
            {
                name: 'expressjs',
            }
        ]
    },
]