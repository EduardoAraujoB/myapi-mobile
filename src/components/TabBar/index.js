import React from "react";
import { Container, ReturnButton, ReturnButtonText } from "./styles";

const TabBar = () => {
  return (
    <Container>
      <ReturnButton activeOpacity={0.5}>
        <ReturnButtonText>Voltar</ReturnButtonText>
      </ReturnButton>
    </Container>
  );
};

export default TabBar;
