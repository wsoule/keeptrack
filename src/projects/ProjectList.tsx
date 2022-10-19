import { FC } from 'react';
import { Project } from './Project';
import { ProjectCard } from './ProjectCard';
import { ProjectForm } from './ProjectForm';

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          <ProjectCard project={project}></ProjectCard>
          <ProjectForm />
        </div>
      ))}
    </div>
  );
};
