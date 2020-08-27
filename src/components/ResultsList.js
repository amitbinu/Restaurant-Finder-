import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ResultDetails from "./resultDetails";

const ResultsList = ({ header, restaurants }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>{header}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => {
          return <ResultDetails result={item} />;
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5,
  },
  viewStyle: {
    marginBottom: 10,
  },
});
export default ResultsList;
