export const route = {
    home: '/',
    about: '/about',
    projects: '/works',
    read: (slug: string) => {
        return `/read/${slug}`
    },
    projectsTab: (tab: "projects" | "componenets" | "scripts") => {
        return `/works?tab=${tab}`
    }
}

const portfolio = "http://localhost:3000"
// https://me.fluoce.com

const portfolioTwo = 'https://founder.fluoce.com';

export const socialLinks = {
    portfolio,
    portfolioTwo,
    fluoce: 'https://fluoce.com',
    authFluoce: `https://auth.fluoce.com/auth?ref=${portfolio}&path=${portfolio}`,
    github: 'https://github.com/Ashit-mulani',
}
