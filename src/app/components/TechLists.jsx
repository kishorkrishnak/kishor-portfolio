import { skills } from "@/data/data";

export default function TechLists() {
    return (
        <div className="mt-10">
            <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
                Tech Stack
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 mt-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-2 w-full p-2"
                    >
                        <div className="border-2 p-2 border-base-content/20 shadow-md rounded-sm dark:bg-base-content">
                            <img
                                src={`${skill.icon}`}
                                className="w-10 h-10"
                                alt={`${skill.alt}`}
                            />
                        </div>
                        <span className="text-sm text-center">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
