import React, { Component } from "react";

import {
  Container,
  Article,
  ReturnButton,
  ReturnButtonText,
  Title
} from "./styles";

class ArticleShow extends Component {
  render() {
    return (
      <Container>
        <Article>
          <Title>Artigo</Title>
          <ReturnButton
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("SignedIn")}
          >
            <ReturnButtonText>Voltar</ReturnButtonText>
          </ReturnButton>
        </Article>
      </Container>
    );
  }
}

export default ArticleShow;
