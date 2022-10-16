import React from 'react';

function addMinutes(date: Date, minutes: number): Date {
  // multiply minutes by 6000 is to convert minutes to milliseconds
  return new Date(date.getTime() + minutes * 60000);
}

export function Clock(): JSX.Element {
  const [time, setTime] = React.useState(new Date());

  const handleClick1 = (): void => {
    setTime(addMinutes(time, 10));
    setTime(addMinutes(time, 10));
  };
  const handleClick2 = (): void => {
    setTime((previousTime) => addMinutes(previousTime, 10));
    setTime((previousTime) => addMinutes(previousTime, 10));
  };
  return (
    <div>
      <p>{time.toLocaleString()}</p>
      <button onClick={handleClick1}>+ 10 Minutes</button>
      <button onClick={handleClick2}>+ 10 Minutes2</button>
    </div>
  );
}
