import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "../services/newsApi";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
  },
});
