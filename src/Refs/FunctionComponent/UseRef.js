import React, { useRef, useEffect } from "react";
const UseRef = () => {
  const DivRef = useRef(null);
  useEffect(() => {
    console.log(DivRef.current);
  }, []);
  return <div ref={DivRef}>Hello</div>;
};
export default UseRef;
