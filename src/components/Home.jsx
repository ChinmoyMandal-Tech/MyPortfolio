import Typing from "./Typing.jsx";


function Home() {

    return (<section className="m-5">
        <div className="md:flex md:justify-around  md:min-h-70 min-[320px]:min-h-130 min-h-150">
        <div className="m-5">
            <div className="flex flex-wrap gap-2">
                <h2 className="text-4xl whitespace-nowrap"> Hi There !</h2>
                <span className="text-4xl hand_wave">👋🏻</span>
            </div>
            <div className="text-4xl my-4">
                I'm <span className="font-bold text-[var(--nav_git_link)] uppercase pr-30">Chinmoy Mandal</span>
            </div>
            <div className="text-4xl min-h-20 mb-4 text-indigo-500">
                <Typing />
            </div>
            </div>
            
            <div className=" md:mt-5 md:relative w-60 absolute right-[10%]">
                {/* <span className="absolute top-0 left-0 w-full h-full bg-[var(--nav_git_link)] rounded-lg opacity-30 blur-lg animate-pulse"></span> */}
                <span className=" absolute right-5 border px-2 rounded-2xl animaHello">Hello</span>
                <div className="absolute right-17 top-5 h-2 w-2 rounded-full bg-[var(--text)]"></div>
                <div className="absolute right-20 top-7 h-1 w-1 rounded-full bg-[var(--text)]"></div>
                <div className="absolute right-22 top-8 h-1 w-1 rounded-full bg-[var(--text)]"></div>

            <img src="/developer.png" alt="developer" className="w-full max-w-md mx-auto text-shadow-black text-shadow-sm" />
            </div>
        </div>


        <div className="flex flex-col items-center justify-center h-full py-10 px-5 text-center">
            <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
            <p className="text-lg mb-8">Explore my projects and skills.</p>
            <a href="/projects" className="flex items-center justify-center gap-2 text-white bg-green-600 hover:bg-green-800 px-6 py-3 rounded-md transition-colors duration-300">
                <i className="fa-solid fa-folder-open"></i> View Projects
            </a>
        </div>
    </section>
    );
}

export default Home;