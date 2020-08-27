import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import searchImageApi from "../hooks/searchImageApi";
import { FlatList } from "react-native-gesture-handler";

const resultsShowScreen = ({ navigation }) => {
  const [images, searchImage] = searchImageApi();
  const id = navigation.getParam("id");
  searchImage(id);
  console.log(id);
  return (
    <FlatList
      style={styles.flatlist}
      data={images.photos}
      keyExtractor={(images) => images}
      renderItem={({ item }) => {
        return <Image source={{ uri: item }} style={styles.image} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  image: { width: 300, height: 200, marginBottom: 20 },
  flatlist: { width: "100%", height: "100%" },
});
export default resultsShowScreen;
