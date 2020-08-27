import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import filterRestaurants from "../hooks/filterRestaurants";

const SearchScreen = () => {
  const [searchApi, results, errorMessage] = useResults();
  const [term, setTerm] = useState("");
  console.log(`We have found ${results.length} results`);
  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          header="Cost Effective"
          restaurants={filterRestaurants(results, "$")}
        />
        <ResultsList
          header="Bit Pricier"
          restaurants={filterRestaurants(results, "$$")}
        />
        <ResultsList
          header="Big Spender"
          restaurants={filterRestaurants(results, "$$")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flex: 1,
  },
});
export default SearchScreen;
