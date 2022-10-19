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
