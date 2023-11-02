/*
    in url of chrome browser, type react.new
 */ 
import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [process, setProcess] = useState(undefined);
  useEffect(() => {
    console.log(count);

    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      console.log("count: ", count);
    }, 1000);

    setProcess(intervalId);
    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button>start count</button>
      <button onClick={()=> clearInterval(process)}>stop count</button>
    </div>
  );
}