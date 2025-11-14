import Github from "./Github";
import Skills from "./Skills";

function About() {

  return (
    <section id="about" className="m-5">
      <h2 id="about_main" className="text-4xl pl-5">Know Who <span className="text-[var(--text_highlight)]"> I'M</span></h2>
      <p className="text-2xl p-5">
        <span className="font-bold text-[var(--text_highlight)]">Hello!</span> I'm a passionate developer with experience in building <span className="font-bold text-[var(--text_highlight)]">web applications.</span>  I love coding and continuously learning <span className="font-bold text-[var(--text_highlight)]">new technologies</span>.
      </p>

      <Skills />
      <Github />
    </section>
  );
}

export default About;