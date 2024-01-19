import React, { useState, useCallback, useMemo } from "react";
import Count from "./Count";
import Title from "./Title";
import Button from "./Button";

const MemoAndUseCallback = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);
  const labelAge = useMemo(() => "Age", []);
  const labelSalary = useMemo(() => "Salary", []);

  // * without useCallback incrementAge and increamentSalary would recreate on every render
  // * and it will log message, which will cause performance issue
  // const incrementAge = () => {
  //   setAge(age + 1);
  // };

  // const incrementSalary = () => {
  //   setSalary(salary + 1000);
  // };

  // * using useCallback to memoize incrementAge and incrementSalary will
  // * prevent recreation on every render unless dependencies change
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text={labelAge} count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text={labelSalary} count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default MemoAndUseCallback;
