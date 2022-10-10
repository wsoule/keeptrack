import { MOCK_PROJECTS } from './MockProjects';
// import { ProjectList } from './ProjectList';
import ProjectList from './ProjectList';

function ProjectsPage(): JSX.Element{
  return (
    <>
      <h1>Projects</h1>
      <ProjectList projects={MOCK_PROJECTS} />
    </>
  );
}

export default ProjectsPage;
