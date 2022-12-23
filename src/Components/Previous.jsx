import { useRef, useEffect } from "react";

//This hook is used to store the previous value of a prop or state.
export default function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
