import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { setTodoText, addTodo, updateTodo } from "../actions";
import Input from "./Input";
import ButtonComponent from "./ButtonComponent"; // Importe o componente Button personalizado

class TodoForm extends React.Component {
  onChangeText(text) {
    this.props.dispatchSetTodoText(text);
  }

  onPress() {
    const { todo } = this.props;
    if (todo.id) {
      return this.props.dispatchUpdateTodo(todo);
    }

    const { text } = todo;
    this.props.dispatchAddTodo(text);
  }

  render() {
    const { text, id } = this.props.todo;
    return (
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={(text) => this.onChangeText(text)}
            value={text}
          />
        </View>
        <View style={styles.buttonContainer}>
          {/* Substituindo o Button do React Native pelo ButtonComponent */}
          <ButtonComponent
            onPress={() => this.onPress()}
            todo={this.props.todo}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    paddingTop: 30,
    flexDirection: "row",
  },
  inputContainer: {
    flex: 4,
    paddingLeft: 5,
  },
  buttonContainer: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    todo: state.editingTodo,
  };
};

export default connect(mapStateToProps, {
  dispatchSetTodoText: setTodoText,
  dispatchAddTodo: addTodo,
  dispatchUpdateTodo: updateTodo,
})(TodoForm);
