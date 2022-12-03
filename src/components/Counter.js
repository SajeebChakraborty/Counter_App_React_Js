import React, { useState } from 'react';


const [count,setCount]=useState(0);


const increase=()=>{

  setCount(count+1)


}

const decrease=()=>{

  setCount(count-1)


}

const reset=()=>{

  setCount(0)


}

const Counter = () => {
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={increase}>+</button>
          <button className="btn card__btn" onClick={decrease}>-</button>
          <button className="btn card__btn" onClick={reset}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
