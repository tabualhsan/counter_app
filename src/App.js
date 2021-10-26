
import React, { useState } from 'react';
import './App.css';


function App() {

  const [count, setCount] = useState(0);

  const incrementCount = (e) => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = (e) => {
    setCount(prevCount => prevCount - 1)
  }
  return (
    <div className="App">
        
      <div className="count">
        <h3>Count: </h3>
        <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>{count} </h1>
      
        <div className="buttons">
          <button title ={"-"} onClick={decrementCount}>-</button>
          <button title ={"+"} onClick={incrementCount}>+</button>
        </div>


    </div>
    </div>
  );
}

export default App;
