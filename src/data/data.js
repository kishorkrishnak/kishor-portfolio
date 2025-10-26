export const about = {
    name: "Kishor Krishna K",
    role: "Software Engineer",
    about: "Hi, I’m Kishor and I live in Kerala, India. I work as a Software Engineer focused on Geospatial technologies. When I’m not coding, I enjoy reading books, exploring new tech, and watching my favorite TV shows.",
    email: "kishorkrishna500@gmail.com",
};

export const seo = {
    title: `${about.name} | ${about.role}`,
    description: "Kishor Krishna K",
    keywords: "portfolio, web developer, Next.js, developer portfolio, minimal portfolio",
}

export const skills = [
    { name: "HTML", alt: "html logo", icon: "/html5.svg" },
    { name: "CSS3", alt: "css3 logo", icon: "/css3.svg" },
    { name: "Javascript", alt: "javascript logo", icon: "/javascript.svg" },
    { name: "Typescript", alt: "typescript logo", icon: "/ts.svg" },
    { name: "React", alt: "react logo", icon: "/react.svg" },
    { name: "Next.js", alt: "nextjs logo", icon: "/next-js.svg" },
    { name: "Tailwind CSS", alt: "tailwind logo", icon: "/tailwind.svg" },
    { name: "Material UI", alt: "mui logo", icon: "/mui.png" },
    { name: "Node.js", alt: "nodejs logo", icon: "/nodejs.svg" },
    { name: "Express.js", alt: "express logo", icon: "/express.png" },
    { name: "MongoDB", alt: "mongodb logo", icon: "/mongodb.svg" },
    { name: "Django", alt: "django logo", icon: "/django.svg" },
    { name: "Leaflet", alt: "leaflet logo", icon: "/leaflet.svg" },
    { name: "Geoserver", alt: "geoserver logo", icon: "/geoserver.png" },
    { name: "QGIS", alt: "qgis logo", icon: "/qgis.svg" },
    { name: "MySQL", alt: "mysql logo", icon: "/mysql.svg" },
    { name: "PostgreSQL", alt: "postgresql logo", icon: "/postgresql.svg" },
    { name: "AWS", alt: "aws logo", icon: "/aws.svg" },
];


export const socials = {
    github: "https://github.com/kishorkrishnak",
    twitter: "https://twitter.com/kishorkrishnaa",
    instagram: "https://www.instagram.com/kxshor",
    facebook: "https://www.facebook.com/imsachinbhujel",
    linkedin: "https://www.linkedin.com/in/kishorkrishnak",
};

export const projects = {
    pinProjects: [
        {
            title: "GeoLens",
            description:
                "WebGIS platform to discover and share interesting places and landmarks in your region.",
            tags: [
                "React", "Leaflet", "Material UI", "Express.js", "MongoDB"
            ],
            link: "https://geolens-two.vercel.app/",
        },
        {
            title: "Sailwatch",
            description:
                "Interactive 3D web app to visualize global ship movements, featuring real-time spatial analysis and smooth ship animations with Cesium and Turf.js.",
            tags: ["React", "TypeScript", "Cesium", "Turf.js", "Tailwind CSS"],
            link: "https://sailwatch.vercel.app",
        },

        {
            title: "Sonify",
            description:
                "Spotify web client integrating Spotify API with visualized listening habits through charts.",
            tags: [
                "React", "Tailwind CSS", "Express.js", "Chart.js", "Spotify API"
            ],
            link: "https://sonify-one.vercel.app/",
        },

    ],

    otherProjects: [
        {
            title: "Animebliss",
            description:
                "Watch your favorite anime shows with a smooth, Netflix-like streaming experience.",
            tags: ["HTML5", "CSS3", "Bootstrap5", "Javascript"],
            link: "https://animehub-inky.vercel.app/",
        },
        {
            title: "Storylink",
            description:
                "A stories platform where users can read and share stories from around the world.",
            tags: [
                "HTML5",
                "CSS3",
                "Bootstrap5",
                "Javascript",
                "React",
                "React-Bootstrap",
                "Node JS",
                "Express JS",
                "MongoDB",
            ],
            link: "https://storylink.vercel.app/",
        },
        {
            title: "Cryptonite",
            description:
                "Cryptocurrency website showing prices, market data, charts, and a currency converter.",
            tags: ["HTML5", "CSS3", "Bootstrap5"],
            link: "https://cryptonite-eight.vercel.app/",
        },
        {
            title: "NovaMart",
            description:
                "Ecommerce website with a neat and minimal user interface for a smooth shopping experience.",
            tags: ["HTML5", "CSS3", "Javascript", "React", "Tailwind"],
            link: "https://novamart-vert.vercel.app/",
        },
        {
            title: "ApathBandava",
            description:
                "Donation website built to support financially struggling gaushalas across India.",
            tags: ["HTML5", "CSS3", "Javascript", "React", "Tailwind"],
            link: "https://apathbandava.vercel.app",
        },
        {
            title: "HireFlow",
            description:
                "Minimal job portal web app that simplifies job searching and hiring processes.",
            tags: ["HTML5", "CSS3", "Javascript", "React", "Tailwind"],
            link: "https://hireflow.vercel.app/",
        },
    ],
};

export const experience = [
    {
        title: "Software Engineer at TECHG-X",
        description: `Developed a React-based GIS dashboard for visualizing climate risk data across multiple timeframes.
Built an Agentic AI platform for geospatial data engineering and visualization using LangGraph.
Implemented a background job system using Celery and Redis for asynchronous geospatial data processing workflows.
Developed real-time progress tracking for background tasks using Redis Pub/Sub and SSE.
Created interactive map components with Leaflet, including custom layer controls and Geoserver integration.`,
        date: "June 2025 – Present",
        location: "Tampa, Florida, USA (Remote)"
    },
    {
        title: "Full Stack Developer at CherriLearn",
        description: `Developed a gamified quiz platform with leaderboards, rewards, mini games, and performance analytics through interactive charts.
Implemented push notifications, role-based access control for quizmasters and players, and automated quiz scheduling using cron jobs.
Built an AI-powered blog generator POC using Next.js and LangChain.
Reduced server latency by 60% via client and server-side caching, improving website loading times.`,
        date: "Jan 2024 – May 2025",
        location: "Mangalore, Karnataka, India"
    }
];


export const blogs = [
    {
        title: "Understanding React Hooks",
        date: "12/03/2025",
        link: "#",
    },
    {
        title: "CSS Grid vs Flexbox: When to Use Which",
        date: "25/12/2024",
        link: "#",
    },
    {
        title: "Next.js SEO Best Practices",
        date: "10/07/2024",
        link: "#",
    },
];
