import { Book } from "../Book/Book";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectPurchasedBooksIds } from "../../store/cart/selectors";

export const CartBooks = () => {
  const booksIds = useSelector(state => selectPurchasedBooksIds(state));

  return (
    <section className={styles.books}>
        <ul className={styles.books__body}>
            {booksIds.map((id) => (
                <li className={styles.books__item} key={id}>
                    <Book position="center" bookId={id} />
                </li>
            ))}
        </ul>
    </section>
  );
};