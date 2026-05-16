import { skills } from "@/data/data";

export default function TechLists() {
    return (
        <div className="mt-10">
            <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
                Skills
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="rounded-md border border-base-content/15 px-3 py-1 text-sm text-base-content/75"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
