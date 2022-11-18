import { Genres } from "../../components/Genres/Genres";
import { Books } from "../../components/Books/Books";
import { useState } from "react";
import styles from "./styles.module.css";

export const BooksPage = ({ genres }) => {
  const [activeGenre, setActiveGenre] = useState(genres[0]);
  return (
    <>
      <Genres
        className={styles.main__genres}
        activeGenre={activeGenre}
        genres={genres}
        func={setActiveGenre}
      />
      <Books className={styles.main__books} books={activeGenre.books} />
    </>
  );
};
