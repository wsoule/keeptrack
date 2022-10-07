import './App.css';
import Hello from './Hello';
import ProjectsPage from './projects/ProjectsPage';
import { FruitList } from './fruits';
import { data } from './fruitData';

function App() {
  return (
   <div className='container'>
    {/* <Hello name='Elvis' enthusiasmLevel={2} /> */}
    {/* <ProjectsPage /> */}
     <FruitList fruits={data} /> 

   </div>
  );
}

export default App;
