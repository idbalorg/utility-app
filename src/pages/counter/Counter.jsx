import React, { useState, useContext } from "react";
import {
  CounterContext,
  INCREMENT,
  DECREMENT,
  RESET,
} from "../../context/CounterContext";
import styles from "./Counter.module.css";

const Counter = () => {
  const [incrementBy, setIncrementBy] = useState(1);
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.counterTitle}>Counter: {state.count}</h1>

      <div className={styles.inputContainer}>
        <label>
          Increment/Decrement by:
          <input
            className={styles.input}
            type="number"
            value={incrementBy}
            onChange={(e) => setIncrementBy(Number(e.target.value))}
          />
        </label>
      </div>

      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => dispatch({ type: INCREMENT, payload: incrementBy })}
        >
          Increment by {incrementBy}
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch({ type: DECREMENT, payload: incrementBy })}
        >
          Decrement by {incrementBy}
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch({ type: RESET })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
