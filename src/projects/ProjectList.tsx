import { FC, useState } from 'react';
import { Project } from './Project';
import { ProjectCard } from './ProjectCard';
import { ProjectForm } from './ProjectForm';

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});
  const handleEdit = (project: Project): void => {
    setProjectBeingEdited(project);
  };
  const items = projects.map((project) => (
    <div key={project.id} className="cols-sm">
      {project === projectBeingEdited ? (
        <ProjectForm />
      ) : (
        <ProjectCard project={project} onEdit={handleEdit} />
      )}
    </div>
  ));
  return (
    <div className="row">{items}</div>
  );
};
