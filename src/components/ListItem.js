import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const ListItem = props => (
  <TouchableOpacity onPress={props.handleOnPress}>
    <View style={styles.ListItem}>
      <Text>{props.place}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  ListItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 5
  }
});
export default ListItem;
