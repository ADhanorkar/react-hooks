import React, { useReducer } from "react";
import CountReducer from "./CountReducer";
import CountState from "./CountState";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import CountContext from "./CountContext";

const ReducerAndContext = () => {
  const [count, dispatch] = useReducer(CountReducer, CountState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div>
        Count: {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
};

export default ReducerAndContext;
