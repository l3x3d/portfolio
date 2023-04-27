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
    title: 'HARDGROOVE',
    description: 'Description',
    thumbnail: './hardgroove.jpg',
    link: 'https://hardgoove.framer.website/',
  },
  /*
  {
    title: '',
    description: 'Description for Project ',
    thumbnail: '',
    link: '',
  },
  {
    title: '',
    description: 'Description for Project ',
    thumbnail: '',
    link: '',
  },
  {
    title: '',
    description: 'Description for Project ',
    thumbnail: '',
    link: '',
  },
  {
    title: ' ',
    description: 'Description for Project ',
    thumbnail: '',
    link: '',
  },
  {
    title: '',
    description: 'Description for Project ',
    thumbnail: '',
    link: '',
  },
  */
  // Add more projects here
];

const FunPage: FC = () => {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">fun projects</h1>
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

export default FunPage;