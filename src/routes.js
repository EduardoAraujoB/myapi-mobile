import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";

import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ArticleCreate from "./pages/Articles/create";
import ArticleShow from "./pages/Articles/show";

export const SignedOut = createDrawerNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        title: "Login"
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: "Cadastro"
      }
    }
  },
  {
    contentOptions: {
      activeBackgroundColor: "#ff837e",
      activeTintColor: "#fff",
      inactiveTintColor: "#fff"
    },
    drawerBackgroundColor: "#fc6963"
  }
);

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
      { SignedIn, SignedOut, ArticleCreate, ArticleShow },
      { initialRouteName: auth ? "SignedIn" : "SignedOut" }
    )
  );
};

export default Routes;
