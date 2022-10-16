export function FruitListItem(props : any) : JSX.Element{
  function handleClick(e: any, id: number) : void {
    console.log(e);
    console.log(`removed ${id}`);
  }

  return (
    <li onClick={(e) : void => handleClick(e, props.fruit.id)}>
      {props.fruit.name}{' '}
    </li>
  );
}

export function FruitList(props: { fruits: { id: number; name: string; }[]; }): JSX.Element {
  const fruitListItems = props.fruits.map((fruit: { id: number; name: string; }) => (
    <FruitListItem key={fruit.id} fruit={fruit} />
  ));
  return <ul>{fruitListItems}</ul>;
}
