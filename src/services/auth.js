import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";

export const isAutenticated = async () => {
  const token = await getToken();
  if (!token) {
    return false;
  } else {
    const response = await axios.post(
      "https://test-of-myapi.herokuapp.com/token/validate",
      token
    );
    if (response.data.token === "valid") {
      return true;
    } else {
      return false;
    }
  }
};

export const getToken = async () => {
  const response = await AsyncStorage.getItem("token");
  return response;
};

export const login = async token => {
  await AsyncStorage.setItem("@MobileTes:token", token);
};

export const logout = async () => {
  await AsyncStorage.removeItem("token");
};
