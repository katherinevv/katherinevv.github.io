import useScrollFade from "./hooks/useScrollFade";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  const [aboutRef, aboutVisible] = useScrollFade();
  const [experienceRef, experienceVisible] = useScrollFade();
  const [projectsRef, projectsVisible] = useScrollFade();
  const [researchRef, researchVisible] = useScrollFade();
  const [skillsRef, skillsVisible] = useScrollFade();
  const [contactRef, contactVisible] = useScrollFade();

  return (
    <>
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Top Glow */}
        <div
          className="
            absolute
            left-1/2
            top-[-250px]
            h-[700px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            blur-[140px]
            opacity-20
          "
          style={{
            background:
              "radial-gradient(circle, rgba(58,122,255,0.7) 0%, transparent 70%)",
          }}
        />

        {/* Bottom Glow */}
        <div
          className="
            absolute
            bottom-[-350px]
            right-[-150px]
            h-[600px]
            w-[600px]
            rounded-full
            blur-[160px]
            opacity-10
          "
          style={{
            background:
              "radial-gradient(circle, rgba(58,122,255,0.6) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Website */}
      <main className="relative min-h-screen bg-transparent text-[color:var(--text)]">
        <div className="navbar-fade-overlay" aria-hidden="true"></div>
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* About */}
        <div ref={aboutRef} className={`fade-section ${aboutVisible ? "is-visible" : ""}`}>
          {/* <About /> */}
        </div>

        {/* Experience */}
        <div ref={experienceRef} className={`fade-section ${experienceVisible ? "is-visible" : ""}`}>
          {/* <Experience /> */}
        </div>

        {/* Projects */}
        <div ref={projectsRef} className={`fade-section ${projectsVisible ? "is-visible" : ""}`}>
          {/* <Projects /> */}
        </div>

        {/* Research */}
        <div ref={researchRef} className={`fade-section ${researchVisible ? "is-visible" : ""}`}>
          {/* <Research /> */}
        </div>

        {/* Skills */}
        <div ref={skillsRef} className={`fade-section ${skillsVisible ? "is-visible" : ""}`}>
          {/* <Skills /> */}
        </div>

        {/* Contact */}
        <div ref={contactRef} className={`fade-section ${contactVisible ? "is-visible" : ""}`}>
          {/* <Contact /> */}
        </div>

        {/* Footer */}
      </main>
    </>
  );
}

export default App;