import React from "react";
import "./styles.css";

const taskUrl =
  "https://www.testdome.com/questions/react-js/focusable-input/85204";

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

export default function App() {
  return (
    <div className="App">
      <h1>TestDome</h1>
      <p>
        Task name: <strong>Focusable Input</strong>
      </p>
      <p>
        <strong>Task Description:</strong>
      </p>
      <p>
        Finish the FocusableInput component so that the input element
        automatically receives focus on the first render if the shouldFocus prop
        is true. The component should use React Hooks. HTML5, CSS3, React v16
        (available as React and ReactDOM)
      </p>
      <p>
        Task source: <a href={taskUrl}>{taskUrl}</a>
      </p>
      <p>This input should have focus on page load.</p>

      <FocusableInput shouldFocus={true} />
    </div>
  );
}
