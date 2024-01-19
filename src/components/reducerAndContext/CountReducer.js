import CountState from "./CountState";

const CountReducer = (currentState, action) => {
  console.log("+++", [action]);
  switch (action.type) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return CountState;
    default:
      return currentState;
  }
};

export default CountReducer;
