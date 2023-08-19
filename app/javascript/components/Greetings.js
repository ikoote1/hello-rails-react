import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [randomGreeting, setRandomGreeting] = useState('');

  useEffect(() => {
    fetch('/random_greeting')
      .then(response => response.json())
      .then(data => setRandomGreeting(data.greeting));
  }, []);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{randomGreeting}</p>
    </div>
  );
};

export default Greeting;
