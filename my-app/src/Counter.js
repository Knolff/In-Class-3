import React from "react";
import "./Counter.css";

const Counter = () => {
  //sets the inital count to 0
  const initialCount = parseInt(sessionStorage.getItem("counter")) || 0;
  const [count, setCount] = React.useState(initialCount);
  React.useEffect(() => {
    //updates the local storage to display current count
    sessionStorage.setItem("counter", count.toString());
  }, [count]);
  //increase by 1
  const increase = () => {
    setCount(count + 1);
  };
  //decrease by 1
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="counter-container">
      <div className="value">{count}</div>
      <div className="buttons">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
};
export default Counter;
