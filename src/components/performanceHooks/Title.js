import React from "react";

const Title = () => {
  console.log("Rendering Title");
  return (
    <div>
      <h2>useCallback Hook</h2>
    </div>
  );
};

// * without using memo, component will re-render on every parent re-render
// export default Title;
// * Memoize component to prevent re-renders if its props or state did not change
export default React.memo(Title);
