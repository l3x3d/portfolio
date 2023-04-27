import React, { FC } from 'react';
import { motion } from "framer-motion"

interface Project {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'DEPARTAMENTO',
    description: 'From 2017 Until xxxx I was the senior Technical Lead for dpto.la',
    thumbnail: './departamento.jpg',
    link: 'https://dpto.la',
  },
  {
    title: 'CVVE MUSIC',
    description: 'Description for Project ',
    thumbnail: './cvve.jpg',
    link: 'https://cvvemusic.com',
  },
  {
    title: 'SECOND / LAYER',
    description: 'Description for Project ',
    thumbnail: './sl.jpg',
    link: 'https://secondlayer.us',
  },
  {
    title: 'FALSEZERO',
    description: 'Description for Project ',
    thumbnail: './falsezero-neon.jpg',
    link: 'https://falsezero.io',
  },
  {
    title: 'ATRIUM NYC (KITH)',
    description: 'Description for Project ',
    thumbnail: './atrium.jpg',
    link: 'https://example.com/project',
  },
  // Add more projects here
  /* 
  {
    title: '',
    description: 'Description for Project ',
    thumbnail: '',
    link: '',
  },
  */
];

const WorkPage: FC = () => {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif"> work projects and collaborations</h1>
      <div className="my-5 text-neutral-800 dark:text-neutral-200 grid grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full object-cover h-48"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkPage;