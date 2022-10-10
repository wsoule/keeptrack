import React from 'react';

// export function FruitListItem(props : any){
//   function handleClick(e: any, id: number) {
//     console.log(e);
//     console.log(`removed ${id}`);
//   }

//   return (
//     <li onClick={(e) => handleClick(e, props.fruit.id)}>
//       {props.fruit.name}{' '}
//     </li>
//   );
// }

// export function FruitList(props: { fruits: { id: number; name: string; }[]; }): JSX.Element {
//   const fruitListItems = props.fruits.map((fruit: { id: number; name: string; }) => (
//     <FruitListItem key={fruit.id} fruit={fruit} />
//   ));
//   return <ul>{fruitListItems}</ul>;
// }

export class Button extends React.Component {
  constructor(props: never) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(): void {
    console.log('clicked');
  }

  render(): JSX.Element {
    return <button onClick={this.handleClick}>Click Me!</button>;
  }
}
