import React from "react";

const Child = () => {
  const [count, setCount] = React.useState(0);
  console.log("Child component rendered!");
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="child-component">
      <h2>Child Component!</h2>
      Total Count: {count}{" "}
      <div className="app-items">
        <a style={{ color: "blue", cursor: "pointer" }} onClick={increment}>
          Child Increment
        </a>
        &nbsp;|&nbsp;
        <a
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => setCount(0)}
        >
          Reset
        </a>
      </div>
    </div>
  );
};

export default Child;
