import './App.css';
// import { ProjectsPage } from './projects/ProjectsPage';
import { Clock, DropdownMenu } from './add-minutes/clock';

function App(): JSX.Element {
  return (
    <div className='container'>
      {/*<ProjectsPage />*/}
      <Clock />
      <DropdownMenu />
    </div>
  );
}

export default App;
