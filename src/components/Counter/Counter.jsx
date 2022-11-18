import { useState } from "react";
import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";

export const Counter = React.memo(({ className }) => {
  const [count, setCount] = useState(0);
  return (
    <div className={classnames(styles.counter, className)}>
      <button
        className={styles.counter__button}
        onClick={() => setCount(count - 1)}
        disabled={count === 0}
      >
        -
      </button>
      <span className={styles.counter__text}>{count}</span>
      <button
        className={styles.counter__button}
        onClick={() => setCount(count + 1)}
        disabled={count === 10}
      >
        +
      </button>
    </div>
  );
});
