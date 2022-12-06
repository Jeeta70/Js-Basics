import { useState } from "react";

export const useSetState = (initialState = {}) => {
  const [state, setRegularSetState] = useState(initialState);
  const setState = (newState) => {
    setRegularSetState((prevState) => ({ ...prevState, ...newState }));
  };
  return [state, setState];
};
  