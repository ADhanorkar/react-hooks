import React, { useContext } from "react";
import CountContext from "./CountContext";

const ComponentF = () => {
  const { countState, countDispatch } = useContext(CountContext);
  return (
    <div>
      ComponentF Count: {countState}
      <button
        onClick={() => {
          countDispatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          countDispatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          countDispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ComponentF;
