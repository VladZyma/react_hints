import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export default function Counter({ children }) {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((count) => count + 1);
  }
  function decrementCount() {
    if (count === 0) return;
    setCount((count) => count - 1);
  }
  return (
    <CounterContext.Provider value={{ count, incrementCount, decrementCount }}>
      {children}
    </CounterContext.Provider>
  );
}

function IncreaseButton({ icon }) {
  const { incrementCount } = useContext(CounterContext);

  return <button onClick={incrementCount}>{icon}</button>;
}

function DecreaseButton({ icon }) {
  const { decrementCount } = useContext(CounterContext);

  return <button onClick={decrementCount}>{icon}</button>;
}

function ShowValue() {
  const { count } = useContext(CounterContext);

  return <span>{count}</span>;
}

Counter.IncreaseButton = IncreaseButton;
Counter.DecreaseButton = DecreaseButton;
Counter.ShowValue = ShowValue;
