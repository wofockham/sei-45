import React, { useState } from 'react';

const Echo = () => {
  const [message, setMessage] = useState(''); // Initial state
  const [name, setName] = useState('hessam');

  return (
    <div>
      <h2>{ message }</h2>
      <input onInput={ (event) => setMessage( event.target.value ) } placeholder="your message here" />

      <h2>{ name }</h2>
      <input onInput={ (event) => setName( event.target.value ) } placeholder="your name here" />
    </div>
  )
};

export default Echo;
