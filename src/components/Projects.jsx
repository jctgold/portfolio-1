import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

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
    url: 'https://flixstats.vercel.app',
    description:
      'An e-commerce web application using Next.js, MongoDb, and Tailwind CSS.',
    tech: ['Next.js', 'MongoDB', 'TailwindCss'],
    tags: ['In-Progress', 'Responsive', 'UI/UX', 'Web Design'],
    image: shopreverImg,
  },
  {
    name: 'Personal Portfolio',
    url: 'https://juliaguinto.vercel.app',
    description:
      'An e-commerce web application using Next.js, MongoDb, and Tailwind CSS.',
    tech: ['React', 'TailwindCss'],
    tags: ['Responsive', 'UI/UX', 'Web Design'],
    image: portfolioImg,
  },

  {
    name: 'FlixStats',
    url: 'https://shoprever.vercel.app',
    description:
      "A web application that utilizes Spotify API to visualize a user's top tracks and artist.",
    tech: ['React', 'Javascript', 'Sass'],
    tags: ['UI/UX', 'Web Design'],
    image: flixstatsImg,
  },
  {
    name: 'To Do App',
    url: 'https://flixstats.vercel.app',
    description:
      "A web application that utilizes Spotify API to visualize a user's top tracks and artist.",
    tech: ['Laravel', 'php'],
    tags: ['UI/UX', 'Web Design'],
    image: todoImg,
  },
  {
    name: 'To Do App',
    url: 'https://flixstats.vercel.app',
    description:
      "A web application that utilizes Spotify API to visualize a user's top tracks and artist.",
    tech: ['Laravel', 'php'],
    tags: ['UI/UX', 'Web Design'],
    image: todoImg,
  },
];

export default function Projects() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Container id="projects">
      <div className="flex flex-col">
        <div className="w-full mix-blend-luminosity">
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
            {projects.map((project) => (
              <SwiperSlide key={project}>
                <ProjectItem item={project} />
              </SwiperSlide>
            ))}
            <div className="flex w-full justify-between">
              <div
                ref={navigationPrevRef}
                className={`cursor-pointer text-2xl italic select-none`}
              >
                &lt;
              </div>
              <div
                ref={navigationNextRef}
                className={`cursor-pointer text-2xl italic select-none`}
              >
                &gt;
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </Container>
  );
}
