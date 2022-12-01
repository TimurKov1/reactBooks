import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectBookById } from "../../store/book/selectors";

export const Order = ({ books }) => {
  const books_data = [];
  let price = 0;
  Object.keys(books).forEach((bookId) => {
    if (books[bookId] != 0) {
      const book = useSelector((state) => selectBookById(state, bookId));
      price += book.price * books[bookId];
      books_data.push(book);
    }
  });
  console.log(books_data);

  return (
    <section className={styles.order}>
      <div className={styles.order__body}>
        <h3 className={styles.order__title}>Ваш заказ:</h3>
        <ul className={styles.order__items}>
          {books_data.map((book) => (
            <li className={styles.order__item} key={book.id}>
              <h4 className={styles.order__itemName}>{book.name}</h4>
              <h4 className={styles.order__itemPrice}>
                {books[book.id]} x {book.price} ₽
              </h4>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.order__footer}>
        <h2 className={styles.endPrice}>Итого: {price} ₽</h2>
        <button className={styles.button}>Купить</button>
      </div>
    </section>
  );
};
