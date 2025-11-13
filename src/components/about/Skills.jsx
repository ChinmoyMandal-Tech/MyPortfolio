import reactLogo from '../../assets/TechIcon/React.svg';
import jsLogo from '../../assets/TechIcon/Javascript.svg';
import nodejsLogo from '../../assets/TechIcon/Node.svg';
import html5Logo from '../../assets/TechIcon/Html.svg';
import gitLogo from '../../assets/TechIcon/Git.svg';
import githubLogo from '../../assets/TechIcon/Github.svg';
import cssLogo from '../../assets/TechIcon/Css.svg';
import mongoLogo from '../../assets/TechIcon/Mongo.svg';
import TailwindLogo from '../../assets/TechIcon/Tailwind.svg';
import postmanLogo from '../../assets/TechIcon/Postman.svg';
import CPlusLogo from '../../assets/TechIcon/C++.svg';

import vscode from '../../assets/TechIcon/VSCode.svg';
import chrome from '../../assets/TechIcon/Google Chrome.svg';


function Skills() {

    const tools = [
        { titel: "VS Code", link: vscode },
        { titel: "Chrome DevTools", link: chrome },
        { titel: "Postman", link: postmanLogo },
    ];

    const skills = [
        { titel: "JavaScript", link: jsLogo },
        { titel: "React", link: reactLogo },
        { titel: "Node.js", link: nodejsLogo },
        { titel: "HTML5", link: html5Logo },
        { titel: "CSS3", link: cssLogo },
        { titel: "MongoDB", link: mongoLogo },
        { titel: "Git", link: gitLogo },
        { titel: "GitHub", link: githubLogo },
        { titel: "Tailwind CSS", link: TailwindLogo },
        { titel: "C++", link: CPlusLogo },
    ];

    return (<>
        <div className="max-w-3xl mx-auto my-15 px-4 text-center">
            <h2 className="text-4xl font-semibold mb-6 text-[var(--text)]"><span className="font-bold text-[var(--text_highlight)]">Skills & Technologies</span></h2>
            <div className="flex flex-wrap justify-center gap-6">
                {skills.map((skill) => (
                    <span key={skill.titel} className="flex bg-[var(--skill_bg)] text-[var(--skill_text)] text-2xl px-4 py-2 rounded-full shadow-md hover:scale-105  hover:bg-gray-50/50 hover:shadow-lg transition-transform duration-300 cursor-pointer ">
                        <img src={skill.link} className="w-7 pr-1" /> {skill.titel}
                    </span>
                ))}
            </div>
        </div>

        <div className="max-w-3xl mx-auto my-15 px-4 text-center">
            <h2 className="text-4xl font-semibold mb-6 text-center text-[var(--text)]"><span className="font-bold text-[var(--text_highlight)]">Tools</span> I Use</h2>
            <div className="flex flex-wrap justify-center gap-6 mt-4">

                {tools.map((tool) => (
                    <span key={tool.titel} className="flex bg-[var(--skill_bg)] text-[var(--skill_text)] text-2xl px-4 py-2 rounded-full shadow-sm hover:scale-105 hover:bg-gray-50/50 hover:shadow-lg transition-transform duration-300 cursor-pointer ">
                        <img src={tool.link} className="w-7 pr-1" /> {tool.titel}
                    </span>
                ))}
            </div>
        </div>
    </>
    );
}

export default Skills;