import { projects, seo } from "@/data/data";
import ProjectCard from "../components/ProjectCard";

export const metadata = {
    title: `Projects | ${seo.title}`,
    description: "Selected geospatial, AI, and full-stack projects by Kishor Krishna K.",
    keywords: "geospatial projects, AI projects, software engineering, GIS"
};

function Projects() {
    return (
        <div className="md:w-[700px] w-[100%] mt-5 p-4">
            <main className="flex flex-col gap-2">
                <h1 className="text-xl font-medium before:content-['>'] before:mr-1">
                    Projects
                </h1>
                <div className="flex flex-col gap-2">
                    <h2 className="mt-3 text-sm font-medium text-base-content/60">Selected projects</h2>
                    {projects.pinProjects.map((item) => (
                        <ProjectCard key={item.title} item={item} headingLevel={2} />
                    ))}
                    {projects.otherProjects.length > 0 && (
                        <h2 className="mt-6 text-sm font-medium text-base-content/60">Other projects</h2>
                    )}
                    {projects.otherProjects.map((item) => (
                        <ProjectCard key={item.title} item={item} headingLevel={2} />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Projects;
