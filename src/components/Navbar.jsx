import { NavLink } from "react-router-dom";
import { useState } from "react";

function Sidebar({ toggleMode, mode, SidebarOpen, setSidebarOpen }) {
    return (
        <div id="sidebar"
            className={`fixed top-15 right-0 sm:hidden flex flex-col w-40 border-2 border-[var(--nav_border)] border-r-0 rounded-bl-2xl justify-center items-center gap-3 pb-4 bg-[var(--nav_bg)] backdrop-blur-sm ${SidebarOpen ? "translate-x-0" : "translate-x-[100%]"} transition-transform duration-500 ease-in-out z-50`}>

            <NavLink
                to="/"
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                    ` py-2 flex items-center justify-center gap-2 ${isActive ? "text-[var(--nav_item_active)] border-b-2" : ""} hover:text-[var(--nav_item_hover)] w-30`}>
                <i className="fa-solid fa-house"></i>
                Home
            </NavLink>

            <NavLink
                to="/about"
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                    ` py-2 flex items-center justify-center gap-2 ${isActive ? "text-[var(--nav_item_active)] border-b-2" : ""} hover:text-[var(--nav_item_hover)] w-30`}>
                <i className="fa-jelly-duo fa-regular fa-user"></i>
                About
            </NavLink>

            <NavLink
                to="/projects"
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                    ` py-2 flex items-center justify-center gap-2 ${isActive ? "text-[var(--nav_item_active)] border-b-2" : ""} hover:text-[var(--nav_item_hover)] w-30`}>
                <i className="fa-duotone fa-solid fa-computer"></i>
                Projects
            </NavLink>

            <NavLink
                to="/resume"
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                    ` py-2 flex items-center justify-center gap-2 ${isActive ? "text-[var(--nav_item_active)] border-b-2" : ""} hover:text-[var(--nav_item_hover)] w-30`}>
                <i className="fa-regular fa-file-lines"></i>
                Resume
            </NavLink>

            <a
                href="https://github.com/ChinmoyMandal-Tech/MyPortfolio"
                target="_blank"
                className={`py-2 mb-1 px-3 w-18 text-gray-200 bg-[var(--nav_git_link)] hover:text-gray-700 border rounded-2xl flex justify-center gap-2 cursor-pointer`
                }>
                <i className="fa-solid fa-code-branch"></i>
                <i className="fa-regular fa-star"></i>
            </a>


            <div className={`relative border-2 rounded-full px-2 p-1 h-9 w-18 flex-shrink-0 ${mode === "light" ? "bg-black border-gray-500" : "bg-orange-500/95"}`}>
                {/* moving ball */}
                <div
                    className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 z-2 rounded-full transition-transform duration-500 ease-out ${mode === "light" ? "translate-x-0 bg-white" : "translate-x-[2rem] bg-black"
                        }`}
                ></div>

                {/* icons */}
                <button onClick={toggleMode} className="absolute left-3 text-white cursor-pointer">
                    <i className="fa-solid fa-sun"></i>
                </button>

                <button onClick={toggleMode} className="absolute right-3 text-gray-300 cursor-pointer">
                    <i className="fa-regular fa-moon"></i>
                </button>
            </div>

        </div>
    )
}

function Navbar() {
    const [SidebarOpen, setSidebarOpen] = useState(false);
    const [mode, setMode] = useState('light');
    const toggleMode = () => {
        if (mode === 'light') {
            document.body.classList.add('dark')
            document.body.classList.remove('light')
            setMode('dark')
        } else {
            document.body.classList.add('light')
            document.body.classList.remove('dark')
            setMode('light')
        }
    }
    return (<>
        <nav className="fixed top-0 h-15 w-full min-w-50 flex justify-center text-[var(--nav_text)] bg-[var(--nav_bg)] backdrop-blur-sm z-50">
            
            <div className="flex items-center text-2xl absolute left-10 h-full">Cm.</div>

            <div className="absolute left-22 hidden sm:flex w-[calc(100vw-88px)] h-full justify-center items-center gap-3 px-2 pr-25">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `py-2 pr-4 pl-3 flex flex-wrap justify-center gap-1 ${isActive ? "text-[var(--nav_item_active)] border-b-3" : ""} hover:text-[var(--nav_item_hover)]`}>
                    <i className="fa-solid fa-house pt-1"></i>
                    <span className="whitespace-nowrap">Home</span>
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `py-2 pr-4 pl-3 flex flex-wrap justify-center gap-1 ${isActive ? "text-[var(--nav_item_active)] border-b-3" : ""} hover:text-[var(--nav_item_hover)]`}>
                    <i className="fa-jelly-duo fa-regular fa-user pt-1"></i>
                    About
                </NavLink>

                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        `py-2 pr-4 pl-3 flex flex-wrap justify-center gap-1 ${isActive ? "text-[var(--nav_item_active)] border-b-3" : ""} hover:text-[var(--nav_item_hover)]`}>
                    <i className="fa-duotone fa-solid fa-computer pt-1"></i>
                    Projects
                </NavLink>

                <NavLink
                    to="/resume"
                    className={({ isActive }) =>
                        `py-2 pr-4 pl-3 flex flex-wrap justify-center gap-1 ${isActive ? "text-[var(--nav_item_active)] border-b-3" : ""} hover:text-[var(--nav_item_hover)]`}>
                    <i className="fa-regular fa-file-lines mt-1"></i>
                        Resume
                </NavLink>

                <a
                    href="https://github.com/ChinmoyMandal-Tech/MyPortfolio"
                    target="_blank"
                    className={
                        `py-2 px-3 w-18 text-gray-200 bg-[var(--nav_git_link)] hover:text-gray-700 border rounded-2xl flex justify-center gap-3 cursor-pointer`
                    }>
                    <i className="fa-solid fa-code-branch"></i>
                    <i className="fa-regular fa-star"></i>
                </a>

                
                <div className={`absolute right-5 border-2 rounded-full px-2 p-1 h-9 w-[72px] flex-shrink-0 ${mode==="light"?"bg-black border-gray-500": "bg-orange-500/95"}`}>
                    {/* moving ball */}
                    <div
                        className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 z-2 rounded-full transition-transform border duration-500 ease-out ${mode === "light" ? "translate-x-0 bg-white" : "translate-x-[2rem] bg-gray-800"
                            }`}
                    ></div>

                    {/* icons */}
                    <button onClick={toggleMode} className="absolute left-3 text-white cursor-pointer">
                        <i className="fa-solid fa-sun"></i>
                    </button>

                    <button onClick={toggleMode} className="absolute right-3 text-gray-300 cursor-pointer">
                        <i className="fa-regular fa-moon"></i>
                    </button>
                </div>

            </div>

            <div className={`absolute right-10 sm:hidden items-center mt-3 cursor-pointer ${SidebarOpen ? "open" : ""}`}
                onClick={() => setSidebarOpen(!SidebarOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div> 
        </nav>

        <Sidebar toggleMode={toggleMode} mode={mode} SidebarOpen={SidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>)
}

export default Navbar;