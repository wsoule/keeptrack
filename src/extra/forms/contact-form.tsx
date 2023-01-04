import { FC, useState } from 'react';


export const ContactUsForm: FC = () => {
  const [department, setDepartmanet] = useState('');
  const [message, setMessage] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  const handleSubmit = (event: { preventDefault: () => void; }): void =>  {
    event.preventDefault();

    console.log('sumbitting', stateToString());
  };

  const stateToString = (): string => {
    return JSON.stringify(
      {
        department,
        message,
        agreedToTerms
      },
      null,
      ' '
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        name='department'
        value={department}
        onChange={(e):void => setDepartmanet(e.target.value)}
      >
        <option value=''>Select...</option>
        <option value='hr'>Human Recources</option>
        <option value='pr'>Public Relations</option>
        <option value='support'>Support</option>
      </select>
      <br />
      <br />
      <textarea
        name={'message'}
        value={message}
        onChange={(e):void => setMessage(e.target.value)}
        cols={30}
        rows={10}
      />
      <br />
      <input
        type={'checkbox'}
        name={'agreedToTerms'}
        checked={agreedToTerms}
        onChange={(e): void => setAgreedToTerms(e.target.checked)}
      />
      I agree to the terms and conditions
      <br />
      <button>Send</button>
    </form>
  );

};

