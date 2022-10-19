import { FC } from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import { ProjectList } from './ProjectList';

export const ProjectsPage: FC = () => {
  return (
    <>
      <h1>Projects</h1>
      <ProjectList projects={MOCK_PROJECTS} />
    </>
  );
};
