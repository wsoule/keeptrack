import './App.css';
import Hello from './Hello';
import ProjectsPage from './projects/ProjectsPage';

function App() {
  return (
   <div className='container'>
    <Hello name='David' enthusiasmLevel={1} />
    {/* <ProjectsPage /> */}
   </div>
  );
}

export default App;
