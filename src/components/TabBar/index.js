import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { Container, ReturnButton, Title, Space } from "./styles";

const TabBar = ({ navigation, title }) => {
  return (
    <Container>
      <ReturnButton
        activeOpacity={0.5}
        onPress={() => navigation.navigate("SignedIn")}
      >
        <Icon name="ios-arrow-back" size={40} color="#fff" />
      </ReturnButton>
      <Title>{title}</Title>
      <Space />
    </Container>
  );
};

export default TabBar;
