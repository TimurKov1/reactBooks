import { useSelector } from "react-redux";
import { selectBookById } from "../../store/book/selectors";
import { useParams } from "react-router-dom";
import { Book } from "../../components/Book/Book";
import { Description } from "../../components/Description/Description";
import { Reviews } from "../../components/Reviews/Reviews";
import styles from "./styles.module.css";

export const BookPage = () => {
  const { bookId } = useParams();
  const book = useSelector(state => selectBookById(state, bookId));
  
  if (!book) {
    return null;
  }

  return (
    <div>
      <div className={styles.main__flexBlock}>
        <Book position={"bottom"} className={styles.main__book} bookId={bookId} />
        <Description className={styles.main__description} description={book.description} />
      </div>
      <Reviews bookId={bookId} />
    </div>
  );
};