import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import SkillsExp from './components/SkillsExp';

function App() {
  const about = useRef();
  const skillsExp = useRef();
  const projects = useRef();
  const contact = useRef();

  const margin = { rootMargin: '-1.0px' };

  const { inViewport: inViewportAbout } = useInViewport(about, margin);
  const { inViewport: inViewportSkillsExp } = useInViewport(skillsExp, margin);
  const { inViewport: inViewportProjects } = useInViewport(projects, margin);
  const { inViewport: inViewportContact } = useInViewport(contact, margin);

  return (
    <div className="wrapper">
      <nav className="nav">
        <ul>
          <li className={`nav-item ${inViewportAbout && 'nav-item-active'}`}>
            <a href="#about">About</a>
          </li>
          <li
            className={`nav-item ${inViewportSkillsExp && 'nav-item-active'}`}
          >
            <a href="#experience">Skills &amp; Experience</a>
          </li>
          <li className={`nav-item ${inViewportProjects && 'nav-item-active'}`}>
            <a href="#projects">Projects</a>
          </li>
          <li className={`nav-item ${inViewportContact && 'nav-item-active'}`}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <p className="hidden sm:block px-4 text-primary-light">
          A Portfolio by Julia Guinto
        </p>
      </nav>
      <div className="main-container">
        <div ref={about}>
          <About />
        </div>
        <div ref={skillsExp}>
          <SkillsExp />
        </div>
        <div ref={projects}>
          <Projects />
        </div>
        <div ref={contact}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
