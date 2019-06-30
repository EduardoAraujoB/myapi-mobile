import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import Home from "./pages/Home";
import Articles from "./pages/Articles";

export default createAppContainer(
  createBottomTabNavigator(
    { Home, Articles },
    {
      tabBarOptions: {
        activeBackgroundColor: "#fc6963",
        inactiveBackgroundColor: "#ff837e",
        activeTintColor: "#fff",
        inactiveTintColor: "#fff",
        labelStyle: {
          fontSize: 15,
          paddingBottom: 12
        }
      }
    }
  )
);
