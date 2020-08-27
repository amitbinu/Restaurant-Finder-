import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import SearchScreen from "./src/screens/SearchScreen";
import resultsShowScreen from "./src/screens/resultsShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: resultsShowScreen,
  },
  {
    initialRouteName: "Search",
  }
);

export default createAppContainer(navigator);
