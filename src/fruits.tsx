export function FruitList(props: { fruits: { id: number; name: string; }[]; }) {
  const fruitListItems = props.fruits.map((fruit: { id: number; name: string; }) => (
    <li key={fruit.id}>{fruit.name}</li>
  ));
  return <ul>{fruitListItems}</ul>;
}

export function addFruit(list: { appendChild: (arg0: JSX.Element) => void; }){
  list.appendChild(createFruit());
}

function createFruit(){
  const fruitAdd = prompt('Fruit to add');
  return <li>{fruitAdd}</li>;
}
// ReactDOM.createRoot(document.getElementById('root')).render(
// )