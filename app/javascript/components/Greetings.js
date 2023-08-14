// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
 import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/greetings/random')
      .then(response => {
        setMessage(response.data.message);
      });
  }, []);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{message}</p>
    </div>
  );
};

export default Greeting;
