import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../../constants";
import { ITodoItem } from "../../../interfaces";

interface ITodosInitialState {
  usersList: ITodoItem[];
}

const initialState: ITodosInitialState = {
  usersList: users,
};

export const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default todosSlice.reducer;
