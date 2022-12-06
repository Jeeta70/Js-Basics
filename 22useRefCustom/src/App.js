import { useState, useRef } from "react";
import "./App.css";
function App() {
  const first = useRef(null);
  return (
    <>
      <input type="text" ref={first} />
      <button>Click me</button>
    </>
  );
}

export default App;
