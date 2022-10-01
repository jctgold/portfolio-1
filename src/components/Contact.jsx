import React from 'react';
import Container from './Section';
import MiniCard from './MiniCard';

const links = [
  {
    title: 'Github',
    url: 'https://github.com/jctgold',
  },
  {
    title: 'Behance',
    url: 'https://www.behance.net/juliaguinto1',
  },
  {
    title: 'Linkedin',
    url: 'https://www.linkedin.com/in/julia-guinto-9b1046131/',
  },
  {
    title: 'Email',
    url: 'mailto:juliatguinto@gmail.com',
  },
];

export default function Contact() {
  return (
    <Container id="contact">
      <div className="flex flex-col gap-8">
        <h1 className="text-7xl italic font-bold text-primary mix-blend-luminosity">
          contact <span className="text-primary-light">me</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl ">
          {links.map(({ title, url }) => (
            <MiniCard key={title} title={title} url={url} responsive={false} />
          ))}
        </div>
      </div>
    </Container>
  );
}
