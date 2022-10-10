import React, { SyntheticEvent } from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}

class Hello extends React.Component<Props, State> {
  state = { currentEnthusiasm: this.props.enthusiasmLevel || 1};
  
  onIncrement = (event: SyntheticEvent): void => {
    console.log(event);
    this.updateEnthusiasm(1);
  };
  onDecrement = (event: SyntheticEvent): void => {
    console.log(event.target);
    this.updateEnthusiasm(-1);
  };

  render(): JSX.Element {
    const { name } = this.props;
    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You should be more enthusiastic.');
    }

    return (
      <div className='hello'>
        <div className='greeting'>
          Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }
  
  updateEnthusiasm(change: number): void{
    this.setState((currentState) => {
      return { currentEnthusiasm: currentState.currentEnthusiasm + change };
    });
  }
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number): string{
  return Array(numChars + 1).join('!');
}
