import { BooksPage } from "./pages/BooksPage/BooksPage";
// import { BookPage } from "./pages/BookPage/BookPage";
import { genres } from "./constants/mock";
import styles from "./styles.module.css";
import { Header } from "./components/Header/Header";

export function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* <BookPage book={genres[0].books[0]}/> */}
        <BooksPage genres={genres} />
      </main>
    </>
  );
}
