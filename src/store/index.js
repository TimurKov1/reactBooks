import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./book";
import { cartSlice } from "./cart";
import { genreSlice } from "./genre";
import { reviewSlice } from "./review";
import { userSlice } from "./user";

export const store = configureStore({
  reducer: combineReducers({
    genre: genreSlice.reducer,
    book: bookSlice.reducer,
    cart: cartSlice.reducer,
    review: reviewSlice.reducer, 
    user: userSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});