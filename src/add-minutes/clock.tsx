import React from 'react';

function changeMinutes(date: Date, minutes: number): Date {
  // multiply minutes by 6000 is to convert minutes to milliseconds
  return new Date(date.getTime() + minutes * 60000);
}

export function Clock(): JSX.Element {
  const [time, setTime] = React.useState(new Date());

  const handleClick1 = (): void => {
    setTime(changeMinutes(time, 10));
  };
  const handleClick2 = (): void => {
    setTime((previousState) => changeMinutes(previousState, -10));
  };
  const refresh = (): void => {
    setTime(new Date());
  };
  return (
    <div>
      <p>{time.toLocaleString()}</p>
      <button onClick={handleClick2}>- 10 Minutes</button>
      <button onClick={refresh}>Refresh</button>
      <button onClick={handleClick1}>+ 10 Minutes</button>
    </div>
  );
}
