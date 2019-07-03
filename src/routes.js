import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";

import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import SignIn from "./pages/SignIn";

export const SignedOut = createDrawerNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      tabBarLabel: "SignIn"
    }
  }
});

export const SignedIn = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home"
      }
    },
    MyProfile: {
      screen: MyProfile,
      navigationOptions: {
        tabBarLabel: "Profile"
      }
    }
  },
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
);

const Routes = auth => {
  return createAppContainer(
    createSwitchNavigator(
      { SignedIn, SignedOut },
      { initialRouteName: auth ? "SignedIn" : "SignedOut" }
    )
  );
};

export default Routes;
