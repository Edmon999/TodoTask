import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../features/Todos/reducer";

export const store = configureStore({
  reducer: {
    todo: todosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
