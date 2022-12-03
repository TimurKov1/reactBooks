import { selectBookById } from "../book/selectors";

export const selectCartModule = (state) => state.cart;

export const selectPurchasedBooksIds = (state) =>
  Object.keys(selectCartModule(state));

export const selectBooksByIds = (state, booksIds) => {
  const books = [];
  booksIds.map((bookId) => {
    books.push(selectBookById(state, bookId));
  });
  return books;
};

export const selectBookCount = (state, bookId) =>
  selectCartModule(state)[bookId];