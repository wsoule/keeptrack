export function FruitListItem(props : any): JSX.Element{
  return <li>{props.fruit.name}</li>
}

export function FruitList(props: { fruits: { id: number; name: string; }[]; }): JSX.Element {
  const fruitListItems = props.fruits.map((fruit: { id: number; name: string; }) => (
    <FruitListItem key={fruit.id} fruit={fruit} />
  ));
  return <ul>{fruitListItems}</ul>;
}
