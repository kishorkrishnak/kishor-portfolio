export default function ProjectCard({ item, headingLevel = 3 }) {
    const Heading = `h${headingLevel}`;

    return (
        <article className="group rounded-md border border-base-content/15 p-4 transition-colors hover:border-base-content/45 hover:bg-base-content/[0.03]">
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-4">
                    <Heading className="font-semibold text-lg">{item.title}</Heading>
                    <div className="flex shrink-0 items-center gap-3 text-sm">
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-2 hover:text-base-content/70"
                        >
                            Live
                        </a>
                        {item.github && (
                            <a
                                href={item.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-2 hover:text-base-content/70"
                            >
                                Code
                            </a>
                        )}
                    </div>
                </div>
                <p className="text-base-content/80 text-sm sm:text-base">
                    {item.description}
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                    {item.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded border border-base-content/15 px-2 py-0.5 text-xs font-medium text-base-content/65"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}
