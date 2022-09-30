import React from 'react';
import Section from './Section';

export default function About() {
  return (
    <Section id="about">
      <div className="flex flex-col md:flex-row justify-between gap-10 mix-blend-luminosity">
        <div className="">
          <p>Hello! I'm</p>
          <h1 className="text-9xl md:text-11xl font-bold italic">
            julia<span className="text-primary-light">,</span>
          </h1>
        </div>
        <div className="flex justify-end self-end max-w-lg">
          <p>
            a front-end developer and ui/ux designer with a passion for building
            web and mobile applications.
          </p>
        </div>
      </div>
    </Section>
  );
}
