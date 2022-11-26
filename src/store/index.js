import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./book";
import { cartSlice } from "./cart";
import { genreSlice } from "./genre";

export const store = configureStore({
  reducer: combineReducers({
    genre: genreSlice.reducer,
    book: bookSlice.reducer,
    cart: cartSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});