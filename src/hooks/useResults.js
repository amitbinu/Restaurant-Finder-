import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setError] = useState("");

  const searchApi = async (searchTerm) => {
    console.log(`in search api with term ${searchTerm}`);
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Toronto",
        },
      });
      setError("");
      setResults(response.data.businesses);
    } catch (err) {
      //console.error(err);
      setError("Something went wrong");
    }
    console.log(`ending search api with term ${searchTerm}`);
  };
  useEffect(() => {
    searchApi("beef");
  }, []);
  return [searchApi, results, errorMessage];
};
