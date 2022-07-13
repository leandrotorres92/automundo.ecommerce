import "./ItemCount.css";
import { useState } from "react";

const Counter = ({ initial = 0, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="counter">
      <button className="buttonCounter" onClick={increment}>+</button>
      <h1 className="tittleCounter">{count}</h1>
      <button className="buttonCounter" onClick={decrement}>-</button>
      <button className="buttonCounter" onClick={() => onAdd(count)}>Cotizar</button>
    </div>
  );
};

export default Counter;
