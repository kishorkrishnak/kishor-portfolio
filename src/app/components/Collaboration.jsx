import { about } from "@/data/data";

export default function Collaboration() {
    return (
        <section className="mt-10 scroll-mt-14" id="contact">
            <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
                Contact
            </h2>
            <p className="mt-4 text-base text-base-content/80">
                Open to engineering work, collaborations, and conversations around geospatial products, AI, and full-stack systems.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
                <a
                    href={`mailto:${about.email}`}
                    className="rounded-md border border-base-content/20 px-4 py-2 text-sm font-medium transition-colors hover:bg-base-content/10"
                >
                    Send Email
                </a>
                <a
                    href="/resume.pdf"
                    download
                    className="rounded-md border border-base-content/20 px-4 py-2 text-sm font-medium transition-colors hover:bg-base-content/10"
                >
                    Download Resume
                </a>
            </div>
        </section>
    );
}
