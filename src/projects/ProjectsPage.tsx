import { FC } from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import { Project } from './Project';
import { ProjectList } from './ProjectList';

export const ProjectsPage: FC = () => {
  const saveProject = (project: Project): void => {
    console.log('Saving Project: ', project);
  };
  return (
    <>
      <h1>Projects</h1>
      <ProjectList
        projects={MOCK_PROJECTS}
        onSave={saveProject}
      />
    </>
  );
};
