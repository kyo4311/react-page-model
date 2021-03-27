import React from "react";
import { usePageModel } from "react-page-model";

const Part2 = () => {
  const { count, setCount } = usePageModel();

  const handChangeCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ border: "1px solid blue", padding: 10 }}>
      <h3>Part2</h3>
      <div>count: {count}</div>
      <button onClick={handChangeCount}>Change count</button>
    </div>
  );
};

export default Part2;
