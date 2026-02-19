// Import necessary libraries and components
import React from "react";
// Import Text, View, StyleSheet, Alert, Pressable, and Image from react-native
import { Text, View, StyleSheet, Alert, Pressable, Image } from "react-native";

const App = () => {
  return <PressableExample></PressableExample>;
};

const PressableExample = () => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          console.log("Pressable Example"); // Log message to console
          Alert.alert("Text Pressable Example");
        }}
      >
        <Text style={styles.text}>Press Me!</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          Alert.alert("Image Pressable Example"); // Show an alert when pressed
        }}
      >
        <Image
          source={{
            uri: "https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3.png", // Image source URL
          }}
          style={styles.image} // Apply styles to the image
        />
      </Pressable>
    </View>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  text: {
    fontSize: 30, // Font size for the text
    fontWeight: "bold", // Bold font weight
  },
  container: {
    padding: 100, // Padding around the container
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  image: {
    marginTop: 40, // Margin above the image
    height: 200, // Height of the image
    width: 200, // Width of the image
  },
});

export default App;
