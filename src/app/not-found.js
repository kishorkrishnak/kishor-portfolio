import Link from "next/link";

export default function NotFound() {
    return (
        <main className="mt-5 p-4">
            <h1 className="text-xl font-medium before:content-['>'] before:mr-1">
                Page not found
            </h1>
            <p className="mt-4 text-base text-base-content/80">
                The page you are looking for does not exist.
            </p>
            <Link href="/" className="mt-4 inline-block font-medium hover:underline">
                Go home
            </Link>
        </main>
    );
}
