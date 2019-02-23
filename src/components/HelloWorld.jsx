import React, { useState } from 'react';

const HelloWorld = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Hello World {count}</h1>
      <button onClick={handleCount}>Add</button>
    </>
  )
}

export default HelloWorld;