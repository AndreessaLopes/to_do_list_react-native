import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function TodoListItem({ todo, onPressTodo, onLongPressTodo }) {
  return (
    <TouchableOpacity onPress={onPressTodo} onLongPress={onLongPressTodo}>
      <View style={styles.line}>
        <Text style={[styles.lineText, todo.done ? styles.lineThrough : null]}>
          {todo.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  line: {
    height: 50,
    width: "80%",
    padding: 5,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "pink",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: "10%",
  },
  lineText: {
    fontSize: 14,
    paddingLeft: 10,
    flex: 7,
  },
  lineThrough: {
    textDecorationLine: "line-through",
  },
});

export default TodoListItem;
