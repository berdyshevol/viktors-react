import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(2);
  const [timer, setTimer] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
      setDate(new Date());
    }, 1000);
  }, []);

  const onClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="App">
      <div>
        Date: {date.getHours()}: {date.getMinutes()}: {date.getSeconds()}
      </div>
      <div className="counter">Timer : {timer}</div>
      <div className="counter">Counter: {counter}</div>
      <button className="button" onClick={onClick}>
        normal button
      </button>
    </div>
  );
}

export default App;
