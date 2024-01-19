import React from "react";

const Button = ({ handleClick, children }) => {
  console.log("Rending Button - ", children);
  return <button onClick={handleClick}>{children}</button>;
};

// * without using memo, component will re-render on every parent re-render
// export default Button;
// * Memoize component to prevent re-renders if its props or state did not change
export default React.memo(Button);
