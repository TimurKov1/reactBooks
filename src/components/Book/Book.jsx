import { Counter } from "../Counter/Counter";
import styles from "./styles.module.css";
import classnames from "classnames";

export const Book = ({ book, className, position }) => {
  return (
    <article
      className={classnames(
        styles.book,
        className,
        position === "center" ? styles.book_center : styles.book_bottom
      )}
    >
      <div>
        <h2 className={styles.book__name}>{book.name}</h2>
        <div className={styles.book__description}>
          {book.author !== "" ? (
            <h4 className={styles.book__author}>{book.author}</h4>
          ) : (
            <h4 className={styles.book__author}>Автор не известен</h4>
          )}
          <h4 className={styles.book__genre}>{book.genre}</h4>
          {book.review !== undefined ? (
            <h4 className={styles.book__review}>{book.review}</h4>
          ) : (
            <h4 className={styles.book__review}>Нет отзывов</h4>
          )}
        </div>
        <h3 className={styles.book__price}>{book.price} ₽</h3>
      </div>
      <Counter className={position === "bottom" ? styles.counter_bottom : ""} />
    </article>
  );
};