import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { Container, ReturnButton } from "./styles";

const TabBar = ({ navigation }) => {
  return (
    <Container>
      <ReturnButton
        activeOpacity={0.5}
        onPress={() => navigation.navigate("SignedIn")}
      >
        <Icon name="ios-arrow-back" size={40} color="#fff" />
      </ReturnButton>
    </Container>
  );
};

export default TabBar;
