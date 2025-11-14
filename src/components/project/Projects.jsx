import githubLogo from '../../assets/TechIcon/Github.svg';

function Projects() {

    const projects = [
        {
            title: "Civix: Digital Civic Engagement Platform",
            description:
                "Developed during my internship at Infosys, where I worked in a collaborative team environment and followed industry-standard development practices. Civix is a full-stack civic engagement platform that lets citizens create petitions, vote in polls, track governance activity, and receive real-time updates. It features secure authentication, petition workflows, dashboards, and role-based access for citizens and public officials.",
            githubLink: "https://github.com/ChinmoyMandal-Tech/Civix-Team2",
            link: "https://civix-team2.onrender.com/"
        },
        {
            title: "Tic-Tac-Toe (React)",
            description:
                "A React-based Tic-Tac-Toe game built to reinforce component-driven architecture, state management, and clean UI updates. Features turn tracking, win detection logic, game reset functionality, and a responsive layout.",
            githubLink: "https://github.com/ChinmoyMandal-Tech/Tic-Tac-Toi-usingReact",
            link: "https://chinmoymandal-tech.github.io/Tic-Tac-Toi-usingReact/"
        },
        {
            title: "Analog Clock (React + Real-Time Audio Tick)",
            description:
                "A fully functional analog clock built in React with real-time ticking sound. Uses `useEffect`, `useRef`, and controlled audio playback to comply with browser autoplay rules. The clock updates every second with accurate rotation logic for hour, minute, and second hands.",
            githubLink: "https://github.com/ChinmoyMandal-Tech/",
            link: "https://github.com/ChinmoyMandal-Tech/"
        },
        {
            title: "Stone–Paper–Scissors Game",
            description:
                "A simple and interactive Stone–Paper–Scissors game built with React. Includes randomized computer moves, score tracking, result logic, and a clean responsive interface. Built to practice state updates, conditional rendering, and quick UI feedback.",
            githubLink: "https://github.com/ChinmoyMandal-Tech/",
            link: "https://github.com/ChinmoyMandal-Tech/"
        },

    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:my-10">

            {projects.map((project, index) => (
                <div key={index} className="flex flex-col justify-between  bg-[var(--nav_bg)] text-[var(--nav_text)] border border-gray-300 rounded-lg p-6 hover:shadow-lg shadow-gray-400 hover:scale-105 transition-transform  duration-300 select-none">

                    <h3 className="text-2xl font-semibold mb-4 text-[var(--nav_git_link)] text-shadow-sm text-shadow-pink-700/80">{project.title}</h3>

                    <p className="font-sans font-semibold mb-6">{project.description}</p>

                    <div className='flex flex-wrap justify-center gap-6'>
                        <a href={project.githubLink} target='_blank' className='flex justify-center items-center bg-gradient-to-b from-gray-200 to-gray-400 text-gray-900 font-semibold hover:scale-105 hover:shadow-md shadow-gray-500 transition-transform duration-200 px-3 py-1.5 rounded-2xl gap-2'>
                            <img className='h-4' src={githubLogo}></img>GitHub</a>

                        <a href={project.link}
                            target='_blank' className="text-black font-bold bg-gradient-to-b from-[var(--nav_git_link)] to-pink-300/80 hover:scale-105 hover:shadow-md shadow-gray-400 transition-transform duration-200 px-3 pt-1.5 rounded-2xl">View Project</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;