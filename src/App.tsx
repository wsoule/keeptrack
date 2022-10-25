import './App.css';
// import { ProjectsPage } from './projects/ProjectsPage';
import { Clock, DropdownMenu, Counting } from './add-minutes/clock';

function App(): JSX.Element {
  return (
    <div className='container'>
      {/*<ProjectsPage />*/}
      <Clock />
      <Counting />
      <DropdownMenu />
    </div>
  );
}

export default App;
