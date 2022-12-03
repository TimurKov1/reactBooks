import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectPurchasedBooksIds, selectBooksByIds, selectCartModule } from "../../store/cart/selectors";

export const Order = () => {
  const books_count = useSelector(state => selectCartModule(state));
  const booksIds = useSelector(state => selectPurchasedBooksIds(state));
  const books = useSelector(state => selectBooksByIds(state, booksIds));
  let price = 0;
  books.map((book) => {
    price += books_count[book.id] * book.price;
  });

  if (books.length === 0) {
    return <span>Ваша корзина пуста</span>;
  }

  return (
    <section className={styles.order}>
      <div className={styles.order__body}>
        <h3 className={styles.order__title}>Ваш заказ:</h3>
        <ul className={styles.order__items}>
          {books.map((book) => (
            <li className={styles.order__item} key={book.id}>
              <h4 className={styles.order__itemName}>{book.name}</h4>
              <h4 className={styles.order__itemPrice}>
                {books_count[book.id]} x {book.price} ₽
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
