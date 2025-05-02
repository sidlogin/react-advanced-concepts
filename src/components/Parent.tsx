import React from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = React.useState(0);
  console.log("Parent component rendered!");
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="parent-component">
      <h2>Parent Component!</h2>
      Total Count: {count}{" "}
      <div className="app-items">
        <a style={{ color: "blue", cursor: "pointer" }} onClick={increment}>
          Parent Increment
        </a>
        &nbsp;|&nbsp;
        <a
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => setCount(0)}
        >
          Reset
        </a>
      </div>
      <Child />
    </div>
  );
};

export default Parent;
