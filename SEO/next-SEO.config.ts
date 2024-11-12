import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Linktree DevGustavoGantois',
    description: 'Meios de contato para solicitar orçamentos e conhecer minha experiência profissional como desenvolvedor web.',
    openGraph: {
        type: 'website', 
        url: 'https://linktreedevgg.vercel.app/',
        title: 'Linktree DevGustavoGantois',
        description: 'Meios de contato para solicitar orçamentos e conhecer minha experiência profissional como desenvolvedor web.',
        images: [
            { url: 'https://linktreedevgg.vercel.app/Perfillogo.svg', width: 1200, height: 630, alt: 'Linktree DevGustavoGantois' } 
        ],
    },
    twitter: {
        card: 'summary_large_image', 
        site: '@DevGustavoGantois', 
        title: 'Linktree DevGustavoGantois',
        description: 'Meios de contato para solicitar orçamentos e conhecer minha experiência profissional como desenvolvedor web.',
    },
    robots: {
        index: true, 
        follow: true, 
    },
    keywords: ['Desenvolvedor Web', 'Gustavo Gantois', 'Linktree', 'Orçamento Web', 'Desenvolvimento de Sites', 'Desenvolvedor Front-End'], 
};
