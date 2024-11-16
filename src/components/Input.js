import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Input = ({ onChangeText, value }) => (
    <TextInput onChangeText={ onChangeText } value={ value } style={ styles.input } underlineColorAndroid={ "pink" } />
)

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingBottom: 10,
        fontSize: 17,
    }
});

export default Input;