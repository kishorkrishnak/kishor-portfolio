export const about = {
    name: "Kishor Krishna K",
    role: "Software Engineer",
    tagline: "Full Stack + AI + GIS",
    about: "I build software at the intersection of geospatial data, AI, and product engineering. I've shipped across startups, client projects, and early-stage products, taking ideas from concept to usable software. I'm comfortable working across the stack, from backend systems and cloud infrastructure to maps, workflows, and user-facing product experiences. Outside of work, I like experimenting with new tools and contributing to open-source or developer communities.",
    email: "kishorkrishna500@gmail.com",
};

export const seo = {
    title: `${about.name} | ${about.role}`,
    description: "Kishor Krishna K",
    keywords: "portfolio, web developer, Next.js, developer portfolio, minimal portfolio",
}

export const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "PostgreSQL",
    "MongoDB",
    "Leaflet",
    "GeoServer",
    "QGIS",
    "LangGraph",
    "Celery",
    "Redis",
    "Docker",
    "AWS",
    "GCP",
    "Tailwind CSS",
];


export const socials = {
    github: "https://github.com/kishorkrishnak",
    twitter: "https://twitter.com/kishorkrishnaa",
    instagram: "https://www.instagram.com/kxshor",
    linkedin: "https://www.linkedin.com/in/kishorkrishnak",
};

export const projects = {
    pinProjects: [
        {
            title: "GeoLens",
            description:
                "WebGIS platform for discovering and sharing location-based landmarks with interactive mapping and spatial search.",
            tags: [
                "React", "Leaflet", "Material UI", "Express.js", "MongoDB"
            ],
            link: "https://geolens-two.vercel.app/",
        },
        {
            title: "Sailwatch",
            description:
                "3D vessel-tracking interface built with Cesium, Turf.js, and React for visualizing ship movement and spatial behavior.",
            tags: ["React", "TypeScript", "Cesium", "Turf.js", "Tailwind CSS"],
            link: "https://sailwatch.vercel.app",
        },

        {
            title: "Sonify",
            description:
                "Spotify client that turns listening history into visual insights using the Spotify API and charting tools.",
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
        description: [
            "First software engineer at TECHG-X; built the MVP and launched the beta of GriidAI, a GeoAI platform for prompt-driven geospatial workflows.",
            "Built an internal Python SDK for composing modular geospatial tools into multi-stage workflows, supporting LLM-assisted code generation and cloud worker execution.",
            "Engineered geospatial ingestion pipelines that normalize raster and vector uploads into cloud-optimized formats like COG, GeoParquet, and PMTiles.",
            "Designed AI-assisted resource allocation for geospatial jobs, dynamically provisioning compute and reducing average job cost by 30%.",
        ],
        date: "June 2025 – Present",
        location: "Tampa, Florida, USA (Remote)"
    },
    {
        title: "Full Stack Developer at CherriLearn",
        description: [
            "Developed an agentic AI tutor using retrieval-augmented generation to deliver personalized, syllabus-aligned learning support.",
            "Designed background job workflows for AI-driven content generation, including activities, explainer videos, and audiobooks from curriculum input.",
            "Implemented subscription and payment infrastructure with Razorpay, including billing logic, webhook handling, and automated access control.",
            "Managed production infrastructure across AWS Elastic Beanstalk and DigitalOcean App Platform, with PostgreSQL provisioning and DNS configuration through Cloudflare.",
        ],
        date: "Jan 2024 – May 2025",
        location: "Mangalore, Karnataka, India"
    }
];


export const blogs = [
];
