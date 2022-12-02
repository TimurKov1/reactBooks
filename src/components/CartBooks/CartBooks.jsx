import { Book } from "../Book/Book";
import styles from "./styles.module.css";

export const CartBooks = ({ books }) => {
    const books_data = [];
    Object.keys(books).forEach((bookId) => {
      if (books[bookId] != 0) {
        books_data.push(bookId);
      }
    });

  return (
    <section className={styles.books}>
        <ul className={styles.books__body}>
            {books ? books_data.map((id) => (
                <li className={styles.books__item} key={id}>
                    <Book position="center" bookId={id} />
                </li>
            )) : null}
        </ul>
    </section>
  );
};