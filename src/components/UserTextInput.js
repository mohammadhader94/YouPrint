import React from "react";
import { TextInput, StyleSheet } from "react-native";

const UserTextInput = props => {
  return (
    <TextInput
      style={styles.textInput}
      onChangeText={props.changeHandler}
      value={props.placeName}
      placeholder="Aoewsom place!"
    />
  );
};
const styles = StyleSheet.create({
  textInput: {
    width: "70%",
    borderWidth: 1
  }
});
export default UserTextInput;
