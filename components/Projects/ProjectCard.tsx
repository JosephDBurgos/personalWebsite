import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  codeLink: string;
  demoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  codeLink,
  demoLink,
}) => (
  <div className="bg-black p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    <div className="flex space-x-4">
      <a
        href={codeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        Code
      </a>
      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 hover:underline"
      >
        Demo
      </a>
    </div>
  </div>
);

export default ProjectCard;
