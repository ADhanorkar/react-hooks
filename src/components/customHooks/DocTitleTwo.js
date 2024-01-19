import { useState } from "react";
import useDocumentTitle from "./hooks/useDocumentTitle";

const DocTitleTwo = () => {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <div>
      <div>Custom Hook</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
      </div>
    </div>
  );
};

export default DocTitleTwo;
