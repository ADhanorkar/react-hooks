import React, { useEffect, useState, useRef } from "react";

const Timer = () => {
  const intervalRef = useRef();
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <div>Timer - {timer}</div>
      <div>
        <button onClick={() => clearInterval(intervalRef.current)}>
          Clear Timer
        </button>
      </div>
    </>
  );
};

export default Timer;
