import React from "react";

function Count({ text, count }) {
  console.log("Rendering Count - ", text);

  return (
    <div>
      <h2>
        {text}: {count}
      </h2>
    </div>
  );
}

// * without using memo, component will re-render on every parent re-render
// export default Count;
// * Memoize component to prevent re-renders if its props or state did not change
export default React.memo(Count);
