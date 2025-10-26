import About from "./components/About";
import Experience from "./components/Experience";
import Profile from "./components/Profile";
import ProjectsList from "./components/ProjectsList";
import TechLists from "./components/TechLists";

export default function Home() {
    return (
        <>
            <div>
                <main className="mt-5 p-4">
                    <Profile />
                    <About />
                    <ProjectsList />
                    <TechLists />
                    <Experience />
                </main>
            </div>
        </>
    );
}
