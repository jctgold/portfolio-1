import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Section id="about">
      <div className="flex flex-col md:flex-row justify-between gap-10 mix-blend-luminosity">
        <div>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1, delay: 1 }}
          >
            Hello! I'm
          </motion.p>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1.2, delay: 1.5 }}
            className="text-9xl md:text-11xl font-bold italic"
          >
            julia<span className="text-primary-light">,</span>
          </motion.h1>
        </div>
        <div className="flex justify-end self-end max-w-lg">
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1, delay: 2 }}
          >
            a front-end developer and ui/ux designer with a passion for building
            web and mobile applications.
          </motion.p>
        </div>
      </div>
    </Section>
  );
}
