import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [counterOne, setConterOne] = useState(0);
  const [counterTow, setCounterTow] = useState(0);

  const incrementOne = () => {
    setConterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTow(counterTow + 1);
  };

  // * When we use isEven without useMemo, it will re-run on every render,
  // * even though we click on Count Two button
  //   const isEven = () => {
  //     let i = 0;
  //     while (i < 1000000000) i++;
  //     return counterOne % 2 === 0;
  //   }

  // * When we use useMemo, it will re-run only when counterOne changes.
  // * useMomo will refer cached value on other renders when we click on Count Two button
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? " Even" : " Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {counterTow}</button>
      </div>
    </div>
  );
};

export default UseMemo;
