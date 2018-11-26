import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import ListItem from "./src/components/ListItem";
import UserTextInput from "./src/components/UserTextInput";
import SubmitPlaceButton from "./src/components/SubmitPlaceButton";
export default class App extends React.Component {
  state = {
    placeName: "",
    places: []
  };
  changeHandler = val => {
    this.setState({
      placeName: val
    });
  };
  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    } else {
      this.setState(prevState => {
        return {
          places: prevState.places.concat(prevState.placeName)
        };
      });
    }
  };
  render() {
    const placesOutput = this.state.places.map((place, i) => (
      // <Text key={i}>{place}</Text>
      <ListItem place={place} key={i} />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <UserTextInput
            changeHandler={this.changeHandler}
            placeName={this.state.placeName}
          />
          <SubmitPlaceButton placeSubmitHandler={this.placeSubmitHandler} />
        </View>
        <View style={styles.listContainer}>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 46,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  placeInput: {
    width: "70%",
    borderWidth: 1
  },
  buttonInput: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});
