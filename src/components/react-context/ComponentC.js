import React, { useContext } from "react";
import UserContext from "./contex/UserContext";
import GreetContext from "./contex/GreetContext";

const ComponentC = () => {
  const user = useContext(UserContext);
  const greet = useContext(GreetContext);
  return (
    <div>
      <p>{user}</p>
      <p>{greet}</p>
    </div>
  );
};

export default ComponentC;
