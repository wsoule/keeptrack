import './App.css';
// import ProjectsPage from './projects/ProjectsPage';
import { Clock } from './add-minutes/clock';


function App(): JSX.Element {
  return (
    <div className='container'>
      {/*<ProjectsPage /> */}
      <Clock />
    </div>
  );
}

export default App;
