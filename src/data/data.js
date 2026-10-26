export const about = {
    name: "Kishor Krishna K",
    role: "Software Engineer",
    tagline: "Building geospatial AI products and the systems behind them.",
    about: "I build software across geospatial data, AI, and product engineering. At TECHG-X, I work on GriidAI, an agentic GeoAI platform that turns natural-language requests into geospatial workflows. My work spans agent runtimes, distributed execution, and geospatial data pipelines.",
    email: "kishorkrishna500@gmail.com",
};

export const seo = {
    title: `${about.name} | ${about.role}`,
    description: "Kishor Krishna K is a software engineer building geospatial AI products and full-stack systems.",
    keywords: "Kishor Krishna K, software engineer, geospatial AI, GIS, full-stack engineer",
}

export const skills = [
    "Python",
    "TypeScript",
    "React",
    "PostgreSQL",
    "PostGIS",
    "LangGraph",
    "Celery",
    "GCP",
    "GDAL",
    "GeoPandas",
    "Rasterio",
    "Cesium",
    "MapLibre GL JS",
    "Leaflet",
    "Docker",
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
            title: "Sailwatch",
            description:
                "3D maritime simulation with animated vessel routes, dynamic headings, and real-time proximity and danger-zone detection.",
            tags: ["React", "TypeScript", "Cesium", "Turf.js", "Tailwind CSS"],
            link: "https://sailwatch.vercel.app",
            github: "https://github.com/kishorkrishnak/sailwatch",
        },
        {
            title: "GeoLens",
            description:
                "Full-stack WebGIS for discovering and sharing points of interest, with routing, reverse geocoding, weather, social features, and GeoJSON export.",
            tags: [
                "React", "Leaflet", "Material UI", "Express.js", "MongoDB"
            ],
            link: "https://geolens-two.vercel.app/",
            github: "https://github.com/kishorkrishnak/GeoLens",
        },
    ],

    otherProjects: [
        {
            title: "Sonify",
            description:
                "Built a Spotify client that turns listening history into charts and personal listening insights.",
            tags: [
                "React", "Tailwind CSS", "Express.js", "Chart.js", "Spotify API"
            ],
            link: "https://sonify-one.vercel.app/",
        },
        {
            title: "Animebliss",
            description:
                "Anime streaming app with show browsing and a Netflix-inspired interface.",
            tags: ["HTML5", "CSS3", "Bootstrap5", "Javascript"],
            link: "https://animehub-inky.vercel.app/",
        },
        {
            title: "Storylink",
            description:
                "A platform for reading and publishing stories.",
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
                "Crypto market dashboard for prices, charts, and currency conversion.",
            tags: ["HTML5", "CSS3", "Bootstrap5"],
            link: "https://cryptonite-eight.vercel.app/",
        },
        {
            title: "NovaMart",
            description:
                "Ecommerce storefront with product browsing and a streamlined shopping interface.",
            tags: ["HTML5", "CSS3", "Javascript", "React", "Tailwind"],
            link: "https://novamart-vert.vercel.app/",
        },
        {
            title: "ApathBandava",
            description:
                "Donation platform supporting gaushalas across India.",
            tags: ["HTML5", "CSS3", "Javascript", "React", "Tailwind"],
            link: "https://apathbandava.vercel.app",
        },
        {
            title: "HireFlow",
            description:
                "Job board for candidates and employers.",
            tags: ["HTML5", "CSS3", "Javascript", "React", "Tailwind"],
            link: "https://hireflow.vercel.app/",
        },
    ],
};

export const experience = [
    {
        title: "Software Engineer at TECHG-X",
        description: [
            "Developed GriidAI, an agentic GeoAI platform that turns natural-language requests into executable geospatial workflows for data discovery, analysis, and visualization.",
            "Built a LangGraph-based agent runtime that coordinates geospatial tools and generates multi-step Python workflows for spatial analysis.",
            "Implemented distributed execution for long-running geospatial workloads using Celery and GCP, allocating resources by workload size and reducing out-of-memory failures.",
            "Built STAC-based agent tools for Planetary Computer and other open geospatial data sources, enabling automated dataset discovery and analysis.",
            "Designed a geospatial ingestion and serving pipeline for raster and vector data, normalizing assets into GeoParquet, COG, and PMTiles and serving raster imagery through TiTiler.",
        ],
        date: "April 2025 – Present",
        location: "Remote"
    },
    {
        title: "Sarvajna Edutech Pvt. Ltd.",
        positions: [
            { title: "Full Stack Developer", date: "Aug 2024 – Mar 2025" },
            { title: "Full Stack Developer Intern", date: "Jan 2024 – Jul 2024" },
        ],
        description: [
            "Developed an agentic AI tutor using retrieval-augmented generation (RAG) for personalized, syllabus-aligned tutoring and explanations.",
            "Designed background workflows for AI-generated activities, explainer videos, and audiobooks from curriculum content.",
            "Implemented Razorpay subscriptions and payments, including billing logic, webhook handling, and subscription-based access management.",
            "Managed production deployments across AWS and DigitalOcean, including application hosting, databases, and environment configuration.",
        ],
        location: "Mangalore, Karnataka, India"
    }
];


export const blogs = [
];
