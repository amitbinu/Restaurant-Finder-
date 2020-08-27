import React from "react";

const filterRestaurants = (restaurants, price) => {
  console.log(`in filterRestaurants with params  ${price}`);
  return restaurants.filter((restaurants) => {
    return restaurants.price === price;
  });
};

export default filterRestaurants;
