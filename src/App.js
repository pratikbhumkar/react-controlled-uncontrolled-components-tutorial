import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  var uncontrolledData = useRef(null);
  const formData = e => {
    e.preventDefault();
    console.log("Data coming from uncontrolled component=", uncontrolledData.current.value);
    console.log("Data coming from controlled component=", data);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Learning Controlled and Uncontrolled components</h2>
        <p>Please open console for outcome.</p>
        <form onSubmit={e => {formData(e)}}>
          <p>Uncontrolled components</p>
          <input
            type="text"
            ref={uncontrolledData}
          />
          <p>Controlled Components</p>
          <input
            value={data}
            onChange={e => {
              setData(e.target.value);
            }}
          />
          <br /><br />
          <button>Submit form</button>
        </form>
      </header>
    </div>
  );
}

export default App;
