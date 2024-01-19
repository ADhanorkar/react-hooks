import { useState } from "react";

const useCounter = (initialValue = 0, byValue = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prevCount) => prevCount + byValue);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - byValue);
  };
  const reset = () => {
    setCount(initialValue);
  };

  return [count, increment, decrement, reset];
};

export default useCounter;
