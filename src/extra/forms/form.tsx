import { FC, useState } from 'react';

export const SinginForm: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }): void => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='username'
        value={username}
        onChange={(event): void => setUsername(event.target.value)}
      />
      <input
        type='password'
        name='password'
        value={password}
        onChange={(event): void => setPassword(event.target.value)}
      />

      <button type='submit'>Sign In</button>

    </form>
  );
};
