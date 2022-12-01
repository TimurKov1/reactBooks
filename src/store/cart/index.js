import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addFilm: (state, action) => {
      state[action.payload] = (state[action.payload] || 0) + 1;
      if (!Object.keys(state).includes('books')) {
        state.books = {};
      }
      if (Object.keys(state.books).includes(action.payload)) {
        state.books[action.payload] += 1;
      }
      else {
        state.books[action.payload] = 1;
      }
    },
    removeFilm: (state, action) => {
      state[action.payload] =
        state[action.payload] === 0 ? 0 : state[action.payload] - 1;
      if (Object.keys(state['books']).includes(action.payload)) {
        if (state.books[action.payload] > 0) {
          state['books'][action.payload] -= 1;
        }
      }
    },
  },
});
