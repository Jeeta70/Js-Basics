import { useEffect } from "react";

function useSetCount(setCount) {
  useEffect(() => {
    setCount(9);
  }, []);
}

export default useSetCount;
