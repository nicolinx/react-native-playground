import React, { useState } from "react";
// Import StyleSheet, Text, View, and Button components from React Native
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  const changeCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button title={"Click Me"} onPress={changeCount} />
    </View>
  );
}

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
});
