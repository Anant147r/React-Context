import React, { useRef, useEffect, useState } from "react";
const SetInterval = () => {
  const TimerRef = useRef();
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    TimerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(TimerRef);
  }, []);
  return (
    <div>
      {timer}
      <button
        onClick={() => {
          clearInterval(TimerRef.current);
        }}
      >
        Click Here to stop the time
      </button>
    </div>
  );
};
export default SetInterval;
