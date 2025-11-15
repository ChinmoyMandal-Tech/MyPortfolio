import Github from "./Github";
import Skills from "./Skills";

function About() {

  return (
    <section id="about" className="m-5 max-[400px]:mx-0">
      <h2 id="about_main" className="text-4xl pl-5">Know Who <span className="text-[var(--text_highlight)]">
        I'M</span></h2>
      <pre className="text-2xl p-5 max-[400px]:px-0 max-[400px]:text-xl whitespace-break-spaces">
        <span className="font-bold text-[var(--text_highlight)] text-shadow-xs text-shadow-gray-500">Hello!   </span>
        I am <span className="font-bold text-[var(--text_highlight)] text-shadow-xs text-shadow-gray-500">Chinmoy Mandal</span> from <span className="font-bold text-[var(--text_highlight)]">Digha, India.</span>
        I'm a passionate developer with experience in building
        <span className="font-bold text-[var(--text_highlight)] text-shadow-xs text-shadow-gray-500"> web applications.</span>
        I love coding and continuously learning
          <span className="font-bold text-[var(--text_highlight)]"> new technologies</span>.
        </pre>

      <Skills />
      <Github />
    </section>
  );
}

export default About;