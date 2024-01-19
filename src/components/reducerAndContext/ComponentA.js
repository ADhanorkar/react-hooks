import React, { useContext } from "react";
import CountContext from "./CountContext";

const ComponentA = () => {
  const { countState, countDispatch } = useContext(CountContext);
  return (
    <div>
      ComponentA Count: {countState}
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

export default ComponentA;
