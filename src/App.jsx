import { BooksPage } from "./pages/BooksPage/BooksPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { BookPage } from "./pages/BookPage/BookPage";
import { CartPage } from "./pages/CartPage/CartPage";
import styles from "./styles.module.css";
import { Header } from "./components/Header/Header";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main className={styles.main}>
            <Routes>
              <Route index element={<BooksPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path=":bookId" element={<BookPage />} />
              <Route path="*" element={<NotFoundPage />}/>
            </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  );
}
