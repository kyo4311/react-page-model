import React from "react";
import { usePageModel } from "react-page-model";
import Part2 from "./Part2";

const Part1 = () => {
  const { count, setCount } = usePageModel();

  const handChangeCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: 10 }}>
      <h3>Part1</h3>
      <div>count: {count}</div>
      <button onClick={handChangeCount}>Change count</button>
      <Part2 />
    </div>
  );
};

export default Part1;
