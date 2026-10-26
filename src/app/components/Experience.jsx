import { experience } from "../../data/data";

export default function Experience() {
    return (
        <>
            <div className="mt-10 scroll-mt-14" id="experience">
                <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
                    Work Experience
                </h2>
                <div className="mt-6">
                    <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-500 mt-4 p-2">
                        {experience.map((item, index) => (
                            <li
                                key={index}
                                className="relative -ms-1.5 flex items-start gap-4"
                            >
                                <span className="size-3 shrink-0 rounded-full bg-base-content"></span>

                                <div className="-mt-2">
                                    {item.date && (
                                        <time className="text-xs font-medium text-base-content/80">
                                            {item.date}
                                        </time>
                                    )}

                                    <h3 className="text-lg font-semibold text-base-content">
                                        {item.title}
                                    </h3>

                                    {item.positions && (
                                        <div className="mt-1 flex flex-col gap-0.5">
                                            {item.positions.map((position) => (
                                                <p key={position.title} className="text-sm text-base-content/75">
                                                    {position.title} <span className="text-xs text-base-content/60">· {position.date}</span>
                                                </p>
                                            ))}
                                        </div>
                                    )}

                                    {Array.isArray(item.description) ? (
                                        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-base-content/80">
                                            {item.description.map((point, pointIndex) => (
                                                <li key={pointIndex}>{point}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="mt-0.5 whitespace-pre-line text-sm text-base-content/80">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
}
