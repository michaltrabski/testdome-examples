import React from "react";
import "./styles.css";

const taskName = "Focusable Input";
const taskDescription =
  "Finish the FocusableInput component so that the input element automatically receives focus on the first render if the shouldFocus prop is true. The component should use React Hooks.";
const techStack = ["HTML5", "CSS3", "React v16"];
const taskUrl =
  "https://www.testdome.com/questions/react-js/focusable-input/85204";

const githubUrl = "https://github.com/michaltrabski/testdome-examples";
const FocusableInput = (props: any) => {
  // Write your code here

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (props.shouldFocus) {
      inputRef.current?.focus();
    }
  }, [props.shouldFocus]);

  return <input ref={inputRef} />;
};

const Description = () => {
  return (
    <div>
      <p>
        <strong>Task name:</strong>
      </p>
      <p>{taskName}</p>
      <p>
        <strong>Task Description:</strong>
      </p>
      <p>{taskDescription}</p>
      <p>
        <strong>Tech Stack:</strong>
      </p>
      <p>{techStack.toString()}</p>
      <p>
        <strong>Task source:</strong>
      </p>
      <p>
        <a href={taskUrl}>{taskUrl}</a>
      </p>
      <p>
        <strong>Solution on github:</strong>
      </p>
      <p>
        <a href={githubUrl}>{githubUrl}</a>
      </p>
      <p>
        <strong>Solution previev:</strong>
      </p>
      <p>This input should have focus on page load.</p>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>TestDome</h1>
      <Description />
      <FocusableInput shouldFocus={false} />
      <br />
      <FocusableInput shouldFocus={true} />
    </div>
  );
}
