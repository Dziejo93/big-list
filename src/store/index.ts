import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: reducers,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
