import React from "react";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}

class Hello extends React.Component<Props> {
  
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number){
  return Array(numChars + 1).join('!');
}