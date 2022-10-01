import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, useInView } from 'framer-motion';

import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import 'swiper/css';
// import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper';
import flixstatsImg from '../images/flixtstats.png';
import shopreverImg from '../images/shoprever.png';
import portfolioImg from '../images/portfolio.png';
import todoImg from '../images/todo.png';

import Container from './Section';
import ProjectItem from './ProjectItem';

const projects = [
  {
    name: 'Shop Rever',
    url: 'https://shoprever.vercel.app',
    description:
      'An e-commerce web application using Next.js, MongoDb, and TailwindCSS.',
    tech: ['Next.js', 'MongoDB', 'TailwindCss'],
    tags: ['In-Progress', 'Responsive', 'UI/UX', 'Web Design'],
    image: shopreverImg,
  },
  {
    name: 'Personal Portfolio',
    url: 'https://juliaguinto.vercel.app',
    description:
      'A simple responsive personal website using React and TailwindCss.',
    tech: ['React', 'TailwindCss'],
    tags: ['Responsive', 'UI/UX', 'Web Design'],
    image: portfolioImg,
  },

  {
    name: 'FlixStats',
    url: 'https://flixstats.vercel.app',
    description:
      "A web application that utilizes Spotify API to visualize a user's top tracks and artist.",
    tech: ['React', 'Javascript', 'Sass'],
    tags: ['UI/UX', 'Web Design'],
    image: flixstatsImg,
  },
  {
    name: 'To Do App',
    description:
      "A web application that utilizes Spotify API to visualize a user's top tracks and artist.",
    tech: ['Laravel', 'php', 'MySql'],
    tags: ['UI/UX', 'Web Design'],
    image: todoImg,
  },
];

export default function Projects() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const motionRef = useRef(false);
  const isInView = useInView(motionRef, { once: false });

  return (
    <Container id="projects">
      <div className="flex flex-col">
        <motion.div
          ref={motionRef}
          style={{
            transform: isInView ? 'none' : 'translateY(-100px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1s cubic-bezier(1, 0.55, 0.55, 1)',
          }}
          className="w-full mix-blend-luminosity"
        >
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            freeMode={true}
            cssMode={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            breakpoints={{
              620: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1860: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            modules={[FreeMode, Navigation]}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project}>
                <div className="h-full">
                  <ProjectItem item={project} />
                </div>
              </SwiperSlide>
            ))}
            <div className="flex w-full justify-end gap-4 cursor-pointer text-2xl  select-none">
              <div ref={navigationPrevRef} className="arrow-button">
                <MdNavigateBefore />
                {/* &lt; */}
              </div>
              <div ref={navigationNextRef} className="arrow-button">
                <MdNavigateNext />
                {/* &gt; */}
              </div>
            </div>
          </Swiper>
        </motion.div>
      </div>
    </Container>
  );
}
