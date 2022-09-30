import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { RiArrowRightUpLine } from 'react-icons/ri';
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiReact,
  SiSass,
  SiLaravel,
  SiPhp,
  SiFirebase,
  SiJavascript,
  SiGit,
  SiGithub,
} from 'react-icons/si';

import { MdDisabledByDefault } from 'react-icons/md';

export default function ProjectItem({ item }) {
  function getTechIcon(techTool) {
    var techIcon = {
      Javascript: <SiJavascript size={24} />,
      'Next.js': <SiNextdotjs size={24} />,
      MongoDB: <SiMongodb size={24} />,
      TailwindCss: <SiTailwindcss size={24} />,
      React: <SiReact size={24} />,
      Sass: <SiSass size={24} />,
      Laravel: <SiLaravel size={24} />,
      php: <SiPhp size={24} />,
      Firebase: <SiFirebase size={24} />,
      Git: <SiGit size={24} />,
      GitHub: <SiGithub size={24} />,
      default: <MdDisabledByDefault size={24} />,
    };

    return techIcon[techTool] || techIcon['default'];
  }

  return (
    <div className="rounded-md rounded-t-5xl items-stretch bg-white backdrop-blur-xl bg-opacity-50 shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-3">
      <img src={item.image} className="aspect-video" alt={item.name} />
      <div className="flex flex-col p-3.5 gap-2">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl m-0 p-0">{item.name}</h2>
          <a href={item.url}>
            <RiArrowRightUpLine size={32} />
          </a>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <div
              key={tag}
              className="text-xs px-2 py-0.5 border border-primary rounded-full italic"
            >
              {tag}
            </div>
          ))}
        </div>
        <p className="text-sm">{item.description}</p>
        <div className="flex flex-col gap-1">
          <h4 className="text-sm uppercase font-semibold">Tech Used</h4>
          <div className="flex flex-wrap gap-1.5 ">
            {item.tech.map((techTool) => (
              <Tooltip key={techTool} title={techTool} placement="bottom">
                <div>{getTechIcon(techTool)}</div>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}