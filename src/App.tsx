import React from "react";
import "./styles.css";

const taskUrl =
  "https://www.testdome.com/questions/react-js/focusable-input/85204";

const FocusableInput = (props: any) => {
  // Write your code heressfrwer

  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (props.shouldFocus) {
      // inputRef.current?.focus();
    }
  }, []);

  return <input className="xxx" ref={inputRef} />;
};

export default function App() {
  return (
    <div className="App">
      <h1>TestDome asd</h1>
      <p>
        Task name: <strong>Focusable Input</strong>
      </p>
      <p>
        Task Description: <strong>lorem..</strong>
      </p>
      <p>
        Task source: <strong>{taskUrl}</strong>
      </p>
      <p>This is component with solution:</p>

      <FocusableInput shouldFocus={true} />
    </div>
  );
}
