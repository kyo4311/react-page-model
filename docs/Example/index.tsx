import React from "react";
import { withPageModel, usePageModel } from "react-page-model";
import model from "./model";
import Part1 from "./Part1";

const Example: React.FC<{}> = () => {
  const { count } = usePageModel();

  return (
    <div style={{ border: "1px solid red", padding: 10 }}>
      <h3>Home</h3>
      <div>count: {count}</div>
      <Part1 />
    </div>
  );
};

export default withPageModel(model)(Example);
