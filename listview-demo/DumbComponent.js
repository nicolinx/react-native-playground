import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GFG = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Geeksforgeeks, {props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 5,
  },
});

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <GFG name="John" />
      <GFG name="Jane" />
      <GFG name="Bob" />
    </View>
  );
}
