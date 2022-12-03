import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../store/cart";
import { selectBookCount } from "../../store/cart/selectors";

export const Counter = React.memo(({ className, bookId }) => {
  const dispatch = useDispatch();
  const count = useSelector(state => selectBookCount(state, bookId));
  return (
    <div className={classnames(styles.counter, className)}>
      <button
        className={styles.counter__button}
        onClick={() => dispatch(cartSlice.actions.removeBook(bookId))}
        disabled={count === 0}
      >
        -
      </button>
      <span className={styles.counter__text}>{count || 0}</span>
      <button
        className={styles.counter__button}
        onClick={() => dispatch(cartSlice.actions.addBook(bookId, 'asd'))}
        disabled={count === 10}
      >
        +
      </button>
    </div>
  );
});


Counter.displayName = 'Counter';