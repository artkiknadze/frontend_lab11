import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div data-testid="counter">
      <h1 data-testid="counter-text">Лічильник: {count}</h1>
      <button data-testid="counter-add" onClick={() => setCount(count + 1)}>+1</button>
      <button data-testid="counter-reset" onClick={() => setCount(0)}>Зкинути до нуля</button>
    </div>
  );
};

export default Counter;
