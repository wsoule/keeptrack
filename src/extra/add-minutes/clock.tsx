import { FC, useEffect, useState } from 'react';

export const Clock: FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerID = setInterval(refresh, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const refresh = (): void => {
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <div>
      <p>{time}</p>
    </div>
  );
};

export const DropdownMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (): void => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  let menu;
  if (isOpen) {
    menu = (
      <ul>
        <li>Edit</li>
        <li>Remove</li>
        <li>Archive</li>
      </ul>
    );
  }
  return (
    <div>
      <button onClick={handleClick}>Actions</button>
      {menu}
    </div>
  );
};

interface buttonProps {
  onClickFunction: () => void;
  number: string;
}

interface resultsProps {
  value: number;
}

const Button: FC<buttonProps> = ({ onClickFunction, number }) => {
  return <button onClick={onClickFunction}>{number}</button>;
};


const Result: FC<resultsProps> = ({ value }) => {
  return <div>Result: {value}</div>;
};

export const Counting: FC = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = (): void => {
    setCounter((previousCounter) => previousCounter + 1);
  };

  const decrementCounter = (): void => {
    setCounter((previousCounter) => previousCounter - 1);
  };

  return (
    <div>
      <Button onClickFunction={decrementCounter} number={'-1'} />
      <Button onClickFunction={incrementCounter} number={'+1'} />
      <Result value={counter} />
    </div>
  );
};
