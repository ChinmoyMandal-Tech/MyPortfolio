import Projects from "./Projects";

function ProjectPage() {
    return (
        <section className="flex flex-col items-center justify-center h-full py-10 px-5 text-center">
            <h1 className="text-4xl font-bold mb-6 select-none">My Recent <span className="text-[var(--nav_git_link)] font-sans" >Works</span></h1>
            <p className="text-2xl mb-8">Here are a few project I've worked on recently.</p>
            <Projects />
        </section>
    );
}

export default ProjectPage;