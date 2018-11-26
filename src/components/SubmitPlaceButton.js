import React from "react";
import {  Button, StyleSheet } from "react-native";
const SubmitPlaceButton = props => {
  return (
    <Button
      style={styles.buttonInput}
      onPress={props.placeSubmitHandler}
      title="Add"
      color="#841584"
      accessibilityLabel="Learn more about thiss purple button"
    />
  );
};
const styles = StyleSheet.create({
    buttonInput: {
    width: "30%"
  }
});
export default SubmitPlaceButton;
