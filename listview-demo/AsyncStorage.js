// Import necessary libraries
import React, { useState } from "react";
// Import components from React Native
import { StyleSheet, Text, View, Button } from "react-native";
// Import AsyncStorage for local storage
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [data, setData] = useState("");

  const add = async () => {
    try {
      await AsyncStorage.setItem("gfg", "GeeksForGeeks");
    } catch (e) {
      console.log(e);
    }
  };

  const get = async () => {
    try {
      const value = AsyncStorage.getItem("gfg");
      if (value != null) setData(value);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Data: {data}</Text>
      <View style={styles.button}>
        <Button title={"add"} onPress={add} />
      </View>

      <View style={styles.button}>
        <Button title={"get"} onPress={get} />
      </View>
    </View>
  );
}

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    marginBottom: 30,
  },
  button: {
    margin: 20,
    width: 250,
  },
});
