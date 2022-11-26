import { Genres } from "../../components/Genres/Genres";
import { Books } from "../../components/Books/Books";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectGenres } from "../../store/genre/selectors";
import { loadGenresIfNotExist } from "../../store/genre/loadGenresIfNotExist";

export const BooksPage = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => selectGenres(state));
  const [activeGenre, setActiveGenre] = useState(genres[0]);

  useEffect(() => {
    dispatch(loadGenresIfNotExist);
  }, []);

  return (
    <>
      <Genres
        className={styles.main__genres}
        activeGenre={activeGenre}
        genres={genres}
        func={setActiveGenre}
      />
      {activeGenre && <Books className={styles.main__books} genreId={activeGenre.id} />}
    </>
  );
};
