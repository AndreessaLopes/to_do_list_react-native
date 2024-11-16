import { combineReducers } from "@reduxjs/toolkit";

import todoListReducer from "./todoListReducer";
import editingTodoReducer from "./editingTodoReducer";

export default rootReducer = combineReducers({
  todos: todoListReducer,
  editingTodo: editingTodoReducer,
});
