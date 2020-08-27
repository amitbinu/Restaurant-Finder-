import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [images, setImages] = useState([]);

  const search = async (searchId) => {
    try {
      const response = await yelp.get(`/${searchId}`);
      setImages(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const searchImage = (id) => {
    useEffect(() => {
      search(id);
    }, [1]);
  };

  return [images, searchImage];
};
