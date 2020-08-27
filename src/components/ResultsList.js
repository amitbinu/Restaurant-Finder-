import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ResultDetails from "./resultDetails";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const ResultsList = ({ header, restaurants, navigation }) => {
  if (!restaurants.length) {
    return null;
  }
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>{header}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id })
              }
            >
              <ResultDetails result={item} />
            </TouchableOpacity>
          );
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
export default withNavigation(ResultsList);
