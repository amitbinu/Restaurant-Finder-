import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const resultDetais = ({ result }) => {
  return (
    <View style={styles.viewStyle}>
      <Image source={{ uri: result.image_url }} style={styles.imageStyle} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginHorizontal: 10,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 10,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: "bold",
  },
});

export default resultDetais;
