import React from 'react';
import MiniCard from './MiniCard';
import Container from './Section';

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
  return (
    <Container id="experience">
      <div className="flex flex-col ">
        <div className="flex flex-col mb-4">
          <h2>Experience</h2>
          <div className="default-card p-4 md:p-5 lg-4/5 mix-blend-luminosity">
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
        </div>
        <div className="flex flex-col">
          <h2>Skills</h2>
          <div className="auto-rows-fr grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5 ">
            {skills.map(({ title, altTitle, logo }) => (
              <MiniCard
                key={title}
                altTitle={altTitle}
                title={title}
                logo={logo}
                responsive={true}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
