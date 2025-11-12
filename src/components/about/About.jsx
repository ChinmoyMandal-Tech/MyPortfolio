function About() {
    const skills = ["JavaScript", "React", "Node.js", "Express", "MongoDB", "C++", "HTML5", "CSS3", "Tailwind CSS", "Git"];
    const skillsLogo = {
        "JavaScript": "/skills/javascript.png",
        "React": "/skills/react.png",
        "Node.js": "/skills/nodejs.png",
        "Express": "/skills/express.png",
        "MongoDB": "/skills/mongodb.png",
        "C++": "/skills/cpp.png",
        "HTML5": "/skills/html5.png",
        "CSS3": "/skills/css3.png",
        "Tailwind CSS": "/skills/tailwindcss.png",
        "Git": "/skills/git.png"
    };
  return (
    <section id="about" className="m-5">
          <h2 id="about_main" className="text-4xl pl-5">Know Who <span className="text-[var(--text_highlight)]"> I'M</span></h2>
      <p>
        Hello! I'm a passionate developer with experience in building web applications. I love coding and continuously learning new technologies.
          </p>
          <div className="max-w-3xl mx-auto my-5 px-4 text-center">
              <h2 className="text-4xl font-semibold mb-6 text-[var(--text)]">Skills & Technologies</h2>
              <div className="flex flex-wrap justify-center gap-6">
                  {skills.map((skill) => (
                      <span key={skill} className="bg-[var(--skill_bg)] text-[var(--skill_text)] px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer ">
                          <i className="fa-brands fa-js pr-1"></i> {skill}
                      </span>
                  ))}
              </div>
          </div>
    </section>
  );
}

export default About;