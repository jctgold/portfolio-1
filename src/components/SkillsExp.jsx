import React, { useRef } from 'react';
import MiniCard from './MiniCard';
import Container from './Section';
import { motion, useInView } from 'framer-motion';

const skills = [
  {
    title: 'Javascript',
  },
  {
    title: 'React',
    altTitle: 'React/React Native',
  },
  {
    title: 'Next.js',
  },
  {
    title: 'Kotlin',
  },
  {
    title: 'Firebase',
  },
  {
    title: 'MongoDB',
  },
  {
    title: 'Git',
  },
  {
    title: 'TailwindCss',
  },
  {
    title: 'Sass',
  },
];

export default function SkillsExp() {
  const ref = useRef(false);
  const isInView = useInView(ref, { once: false });

  return (
    <Container id="experience">
      <div className="flex flex-col">
        <motion.div
          ref={ref}
          style={{
            transform: isInView ? 'none' : 'translateY(100px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1s cubic-bezier(1, 0.55, 0.55, 1)',
          }}
          className="flex flex-col mb-4 mix-blend-luminosity"
        >
          <h2>Experience</h2>
          <div className="default-card p-4 md:p-5 lg-4/5">
            <h3>Mobile Development Intern</h3>
            <p className="text-sm mb-4">LexMeet, Inc. | April - July 2022</p>
            <ul>
              <li>
                used React Native for the development of a new feature of the
                legal service mobile app
              </li>
              <li>
                collaborated with a team and served as the team leader of the
                mobile development team by performing quality assurance
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col"
          style={{
            transform: isInView ? 'none' : 'translateY(100px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1s cubic-bezier(1, 0.55, 0.55, 1) 0.5s',
          }}
        >
          <h2 className="mix-blend-luminosity">Skills</h2>
          <div className="auto-rows-fr grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5 ">
            {skills.map(({ title, altTitle, logo }, index) => (
              <div>
                <MiniCard
                  key={title}
                  altTitle={altTitle}
                  title={title}
                  logo={logo}
                  responsive={true}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
