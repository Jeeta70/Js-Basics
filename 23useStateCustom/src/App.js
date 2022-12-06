import { useState } from "react";
import { useSetState } from "./useChangeNumber";
import "./App.css";
function App() {
  // const [count, setCount] = useState(0);
  // const [number, setNumber] = useState(1);
  const [state, setState] = useSetState({ count: 9, number: 0 });
  return (
    <>
      <div>Count {state.count}</div>
      <div>Number {state.number}</div>

      <button onClick={() => setState({ count: state.count + 1 })}>
        Change Count
      </button>
      <button onClick={() => setState({ number: state.number + 1 })}>
        Change Number
      </button>
    </>
  );
}

export default App;
