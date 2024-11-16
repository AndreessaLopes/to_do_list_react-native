import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default class ButtonComponent extends React.Component {
  render() {
    const { onPress, todo } = this.props;
    const id = todo ? todo.id : null;

    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{id ? "SAVE" : "ADD"}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
    borderRadius: 5,
    height: 30,
  },
  buttonText: {
    color: "white",
  },
});
