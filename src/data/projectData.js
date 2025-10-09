

// **ACHTUNG:** Stellen Sie sicher, dass dieser Pfad zu Ihrem assets-Ordner korrekt ist.
const images = import.meta.glob('../assets/images/projects/*.{png,jpg,jpeg,svg}', {
    eager: true,
    import: 'default',
});

export const imageMap = {};
for (const path in images) {
    const fileName = path.split('/').pop();
    imageMap[fileName] = images[path];
}

export const projects = [
    // UI/UX Design Projekte (wird zu 'Design' in Work.jsx)
    {
        category: "Design",
        items: [
            {
                title: "Rewards App",
                slug: "rewards-app", // Eindeutiger URL-Bezeichner
                image: imageMap['kitchener.jpg'],
                description: "A gamified app concept developed for Kitchener that rewards users for completing sustainable living challenges with points that can be redeemed for eco-friendly rewards.",
                technologies: ["Figma"],
                type: "uni",
                link: "https://michelleree.github.io/love-letter/",
                descriptionImages: [
                    imageMap['kitchener-1.png'],
                    imageMap['kitchener-2.png'],
                    imageMap['kitchener-3.png'],
                    imageMap['kitchener-4.png'],
                    imageMap['kitchener-5.png'],
                    imageMap['kitchener-6.png'],
                    imageMap['kitchener-7.png'],
                    imageMap['kitchener-8.png'],
                    imageMap['kitchener-9.png']
                ],
                descriptionImageGridClass: "grid-cols-2 sm:grid-cols-3"
            },
            {
                title: "WISP: Connect with your Horse",
                slug: "wisp-connect",
                image: imageMap['wisp.jpg'],
                description: "An app to strengthen the emotional connection between horses and their owners. The app includes a physical smart collar for the horse which tracks their activity, mood and health. Owners can share moments, send heartfelt voice messages and see who their horse connects with.",
                technologies: ["Figma"],
                type: "uni",
                link: "https://www.figma.com/proto/6IF5RaRFieDbWhR5XJr4Wz/Visual-Design-I?page-id=88%3A557&node-id=88-630&viewport=814%2C430%2C0.13&t=DAzkzAXyUhROn97J-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=88%3A630&show-proto-sidebar=1",
                descriptionImages: [
                    imageMap['wisp-Onboarding 1.png'],
                    imageMap['wisp-Onboarding 2.png'],
                    imageMap['wisp-Onboarding 3.png'],
                    imageMap['wisp-Onboarding 4.png'],
                    imageMap['wisp-Onboarding 5.png'],
                    imageMap['wisp-Onboarding 6.png'],
                    imageMap['wisp-Home.png'],
                    imageMap['wisp-Home with Route.png'],
                    imageMap['wisp-Record.png'],
                    imageMap['wisp-Profile.png'],
                    imageMap['wisp-Report.png'],
                ],
                descriptionImageGridClass: "grid-cols-2 sm:grid-cols-3"
            },
            {
                title: "AR Zoo Basel",
                slug: "ar-zoo-basel",
                image: imageMap['zoo-basel.jpg'],
                description: "An innovative AR mobile app for Zoo Basel, featuring real-time navigation, animal discovery, ticketing, and live updates to enhance visitor experience.",
                technologies: ["Figma"],
                type: "personal",
                link: "https://michelleree.github.io/love-letter/",
                descriptionImages: [ /* ... */ ],
                descriptionImageGridClass: "grid-cols-2 sm:grid-cols-3"
            },
            {
                title: "Recycling App",
                slug: "recycling-app",
                image: imageMap['recycle.jpg'],
                description: "A resourceful app designed to help newcomers in Switzerland understand the country's recycling system with informative guides and games to encourage the recycling lifestyle.",
                technologies: ["Figma", "Miro"],
                type: "uni",
                link: "https://www.figma.com/proto/uSK5T4Ze8abjWEVs57rnhi/Recycling---Prototyp--Design-Thinking-?page-id=0%3A1&node-id=141-3243&viewport=-1822%2C-67%2C0.33&t=Igb7mN4mrOKr1t0v-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=141%3A3243&show-proto-sidebar=1",
                descriptionImages: [ /* ... */ ],
                descriptionImageGridClass: "grid-cols-2 sm:grid-cols-3"
            },
            {
                title: "Cuisine Companion",
                slug: "cuisine-companion",
                image: imageMap['cuisine-companion.jpg'],
                description: "A concept for a smart tablet aimed at seniors, mounted magnetically on fridges to recognize stored food and suggest simple recipes based on available ingredients.",
                technologies: ["Figma"],
                type: "uni",
                descriptionImages: [ /* ... */ ],
                descriptionImageGridClass: "grid-cols-2 sm:grid-cols-3"
            },
        ],
    },
    // Frontend Development Projekte (wird zu 'Code' in Work.jsx)
    {
        category: "Code",
        items: [
            {
                title: "Silent Hill 2 Remake Fanpage",
                slug: "silent-hill-fanpage",
                image: imageMap['silent-hill.jpg'],
                description: "An immersive fan-made website dedicated to the horror game 'Silent Hill 2 Remake'. It presents a gripping overview of the plot, artworks and main characters.",
                technologies: ["HTML", "CSS", "JavaScript"],
                type: "personal",
                link: "https://github.com/michelleree/silent-hill-2",
                repositoryURL: "https://github.com/michelleree/silent-hill-2",
                descriptionImages: [ /* ... */ ]
            },
            {
                title: "The Evolution of Music",
                slug: "evolution-of-music",
                image: imageMap['evo-music.jpg'],
                description: "An interactive storytelling website that explores the evolution of music through dynamic visualizations, revealing how musical genres and trends have changed over the decades.",
                technologies: ["D3 JavaScript", "HTML", "CSS"],
                type: "uni",
                link: "https://01-rickenmann-lanz-evomusic-d18b11.pages.fhnw.ch/",
                descriptionImages: [ /* ... */ ]
            },
            {
                title: "Animal Crossing: New Horizons Fanpage",
                slug: "animal-crossing-db",
                image: imageMap['animal-crossing.png'],
                description: "A dynamic Animal Crossing: New Horizons character database that allows users to explore, edit, delete, favorite, and even create new characters in a user-friendly interface.",
                technologies: ["JavaScript", "HTML", "CSS", "Grails 6"],
                type: "uni",
                repositoryURL: "https://github.com/WebEngineering-FHNW/hs24-web-engineering-graded-exercise-michelleree",
                descriptionImages: [ /* ... */ ]
            },
            {
                title: "Love Letter",
                slug: "love-letter",
                image: imageMap['love-letter.jpg'],
                description: "A heartfelt digital space for couples to share memories, love letters, and special moments in a beautifully designed, nostalgic setting.",
                technologies: ["HTML", "CSS", "JavaScript"],
                type: "personal",
                link: "https://michelleree.github.io/love-letter/",
                repositoryURL: "https://github.com/michelleree/love-letter",
                descriptionImages: [ /* ... */ ]
            },
            {
                title: "Portfolio Web Design",
                slug: "portfolio-web-design",
                image: imageMap['portfolio-web.jpg'],
                description: "A professional portfolio website created for a fictional company as part of a group project, showcasing skills and interactive web elements.",
                technologies: ["HTML", "CSS", "JavaScript"],
                type: "uni",
                link: "https://michelleree.github.io/love-letter/",
                repositoryURL: "https://github.com/urielBrawer/Portfolio?tab=readme-ov-file",
                descriptionImages: [ /* ... */ ]
            },
        ],
    },
    // Interdisciplinary Projects (wird zu 'Others' in Work.jsx)
    {
        category: "Others",
        items: [
            {
                title: "WWF Power Tower Challenge",
                slug: "wwf-power-tower",
                image: imageMap['power-tower.jpg'],
                description: "A complementary web application to the WWF Power Tower Challenge game. The Power Tower Challenge is a physical game where users build a tower with 22 blocks that should represent Switzerland's energy demand by the year 2035. The web app gives the user an introduction to the game and lets them explore the different blocks. The player can then scan the tower, receives feedback and answer multiple choice questions to encourage independent learning.",
                technologies: ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "Next.js", "Tailwind CSS", "PostgreSQL"],
                overviewLink: "https://web0.fhnw.ch/ht/informatik/ip34/25vt/powertower/index.html",
                exploreLink: "https://powertower.ch/",
                descriptionImages: [ /* ... */ ],
                descriptionImageGridClass: "grid-cols-2 sm:grid-cols-3"
            },
            {
                title: "Powerhouse",
                slug: "powerhouse-game",
                image: imageMap['powerhouse.png'],
                description: "Powerhouse is an interactive learning game designed for young people to explore energy consumption and saving in everyday life. By experimenting with different household scenarios and turning LED lights on and off, players learn how their habits impact energy use and discover ways to live more sustainably.",
                link: "https://web0.fhnw.ch/ht/informatik/ip12/24vt/energieeffizienz/index.html",
                descriptionImages: [ /* ... */ ],
                descriptionImageGridClass: "grid-cols-2 sm:grid-cols-3"
            },
        ],
    },
];

// Hilfsfunktion zum Suchen eines Projekts anhand seines 'slug'
export const findProjectBySlug = (slug) => {
    for (const group of projects) {
        const found = group.items.find(item => item.slug === slug);
        if (found) return found;
    }
    return null;
};