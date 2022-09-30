import React from 'react';

import { MdEmail } from 'react-icons/md';
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
  SiKotlin,
  SiLinkedin,
} from 'react-icons/si';

import { MdDisabledByDefault } from 'react-icons/md';

function getTechIcon(title) {
  var icon = {
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
    Github: <SiGithub size={24} />,
    Kotlin: <SiKotlin size={24} />,
    Email: <MdEmail size={24} />,
    Linkedin: <SiLinkedin size={24} />,
    default: <MdDisabledByDefault size={24} />,
  };

  return icon[title] || icon['default'];
}

export default function MiniCard({ title, altTitle, url, responsive }) {
  return (
    <a href={url}>
      <div
        className={`default-card mini-card ${
          responsive && 'mini-card-responsive'
        }`}
      >
        {getTechIcon(title)}
        <p className="text-xs sm:text-sm">{altTitle || title}</p>
      </div>
    </a>
  );
}
