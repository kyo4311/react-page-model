import { useState } from "react";

export default function aboutModel() {
  const [count, setCount] = useState(0);

  return {
    count,
    setCount
  };
}
