import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function App() {
  const [name, setName] = useState("");

  const handleText = (text) => {
    setName(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleText}
        placeholder="Enter Name"
        value={name}
      />
      <Text style={styles.text}>Your name is: {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    borderColor: "green",
    borderWidth: 1,
    margin: 10,
    fontSize: 18,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
    color: "green",
    marginTop: 20,
  },
});
