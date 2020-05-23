import React, { useState, useEffect } from 'react';

const App = () => {
  const initialCount = +localStorage.getItem('storageCount') || 0;
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () =>
    setCount(currentCount => currentCount + 1);

  const handleDecrement = () =>
    setCount(currentCount => currentCount - 1);

  useEffect(() => localStorage.setItem('storageCount', count), [
    count,
  ]);

  return (
    <div>
      <h1>{count}</h1>

      <Button type="button" onClick={handleIncrement}>
        Increment
      </Button>
      <Button type="button" onClick={handleDecrement}>
        Decrement
      </Button>
    </div>
  );
};

// CSS STYLES
const Button = styled.button`
  height: 40vmin;
  margin-bottom: 16px;
  pointer-events: none;
  font-size: 15px;


export default App;
