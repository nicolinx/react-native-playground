import React from "react";
// Ganti ListView dengan FlatList
import { Text, View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { Icon } from "react-native-elements";

const App = () => {
  const lessons = [
    "Data Structures",
    "STL",
    "C++",
    "Java",
    "Python",
    "ReactJS",
    "Angular",
    "NodeJs",
  ];

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={lessons} // Langsung masukin array-nya
        keyExtractor={(item, index) => index.toString()} // Wajib ada key
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.rowText}>{item}</Text>
            {/* Pastikan react-native-elements sudah terinstall */}
            <Icon name="eye" type="font-awesome" color="#C2185B" />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 20,
  },
  row: {
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 10,
  },
  rowText: {
    fontSize: 18,
  },
});

export default App;
