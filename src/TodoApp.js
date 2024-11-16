import React from "react";
import { View, StyleSheet } from "react-native";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
});

export default class TodoApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TodoForm />
          <TodoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
