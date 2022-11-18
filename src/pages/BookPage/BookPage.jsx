import { Book } from "../../components/Book/Book";
import { Description } from "../../components/Description/Description";
import { Reviews } from "../../components/Reviews/Reviews";
import styles from "./styles.module.css";

export const BookPage = ({ book }) => {
  return (
    <>
      <div className={styles.main__flexBlock}>
        <Book position={"bottom"} className={styles.main__book} book={book} />
        <Description className={styles.main__description} book={book} />
      </div>
      <Reviews reviews={book.reviews} />
    </>
  );
};