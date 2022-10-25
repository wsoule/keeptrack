import { FC } from 'react';
import { Project } from './Project';
import { ProjectCard } from './ProjectCard';
import { ProjectForm } from './ProjectForm';

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  const handleEdit = (project: Project): void => {
    console.log(project);
  };
  const items = projects.map((project) => (
    <div key={project.id} className="cols-sm">
      <ProjectCard
        project={project}
        onEdit={handleEdit}
      ></ProjectCard>
      <ProjectForm></ProjectForm>
    </div>
  ));
  return (
    <div className="row">{items}</div>
  );
};
