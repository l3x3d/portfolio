import React, { FC } from 'react';

interface Project {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'Description for Project 1',
    thumbnail: 'path/to/project1-thumbnail.jpg',
    link: 'https://example.com/project1',
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2',
    thumbnail: 'path/to/project2-thumbnail.jpg',
    link: 'https://example.com/project2',
  },
  // Add more projects here
];

const AboutPage: FC = () => {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Projects and Collaborations</h1>
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

export default AboutPage;