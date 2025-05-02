import React from "react";
import "./App.css";
import Parent from "./components/Parent";

function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  console.clear();
  console.log("App component rendered!");
  return (
    <div className="layout">
      <h1>App Component!</h1>
      Total Count: {count}
      <div className="app-items">
        <a style={{ color: "blue", cursor: "pointer" }} onClick={increment}>
          App Increment
        </a>
        &nbsp;|&nbsp;
        <a
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => setCount(0)}
        >
          Reset
        </a>
      </div>
      <Parent />
      <div className="notes">
        <h2>Notes:</h2>
        <ul>
          <li>
            The Parent component is a child of the App component, and the Child
            component is a child of the Parent component.{" "}
            <strong>
              When you click on the "App Increment" or "Reset" links, entire app
              will be re-render as state is getting updated for app component so
              it would re-render all child components respectively.
            </strong>
          </li>
          <li>
            When you click on the "Parent Increment" link, only the Parent and
            child components will re-render.
          </li>
          <li>
            When you click on the "Child Increment" link, only the Child
            component will re-render.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
