import { FC, useState } from 'react';
import { Project } from './Project';
import { ProjectCard } from './ProjectCard';
import { ProjectForm } from './ProjectForm';

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

export const ProjectList: FC<ProjectListProps> = ({ projects, onSave }) => {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});
  const handleEdit = (project: Project): void => {
    setProjectBeingEdited(project);
  };
  const cancelEditing = (): void => {
    setProjectBeingEdited({});
  };
  const items = projects.map((project) => (
    <div key={project.id} className="cols-sm">
      {project === projectBeingEdited ? (
        <ProjectForm onSave={onSave} onCancel={cancelEditing} />
      ) : (
        <ProjectCard project={project} onEdit={handleEdit} />
      )}
    </div>
  ));
  return (
    <div className="row">{items}</div>
  );
};
