import {useState } from "react";
import "./App.css";
import useSetCount from "./useSetCount";
function App() {
  const [count, setCount] = useState(0);
  useSetCount(setCount);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}></button>
    </>
  );
}

export default App;
