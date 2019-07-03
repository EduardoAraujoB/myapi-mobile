import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";

export default createAppContainer(
  createBottomTabNavigator(
    { Home, MyProfile },
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
