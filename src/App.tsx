import './App.css';
// import Hello from './Hello';
// import ProjectsPage from './projects/ProjectsPage';
// // import { FruitList } from './fruits';
// import { data } from './fruitData';
import { Button } from './fruits';

function App(): JSX.Element {
  return (
    <div className='container'>
      {/* <Hello name='Elvis' enthusiasmLevel={2} /> */}
      {/* <ProjectsPage /> */}
      {/*<FruitList fruits={data} /> */}
      <Button />
    </div>
  );
}

export default App;
