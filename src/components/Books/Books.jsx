import { Book } from "../Book/Book";
import styles from "./styles.module.css";
import classnames from "classnames";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBooksIfNotExist } from "../../store/book/loadBooksIfNotExist";
import { selectIsBooksLoading } from "../../store/book/selectors";
import { selectGenreBookIds } from "../../store/genre/selectors";

export const Books = ({ genreId, className }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBooksIfNotExist(genreId));
  }, [genreId]);

  const bookIds = useSelector(state => selectGenreBookIds(state, genreId));
  const isLoading = useSelector((state) => selectIsBooksLoading(state));

  if (!bookIds) {
    return null; 
  }

  if (isLoading) {
    return <span className={styles.books}>Загрузка...</span>;
  }

  return (
    <section className={classnames(styles.books, className)}>
      <ul className={styles.books__body}>
        {bookIds.map((id) => (
          <li className={styles.books__item} key={id}>
            <Book position="center" bookId={id} />
          </li>
        ))}
      </ul>
    </section>
  );
};
