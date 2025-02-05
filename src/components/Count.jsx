import React from 'react';

const Count = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div className="container">
      <h2 className="h2">Value = {count}</h2>
      <div>
        <button onClick={increment} className="btn btn-primary mr-3">INC</button>
        <button onClick={decrement} className="btn btn-success">DEC</button>
      </div>
    </div>
  );
};

export default Count;
