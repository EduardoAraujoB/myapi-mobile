import React, { Component } from "react";
import { ActivityIndicator } from "react-native";

import api from "../../../services/api";
import {
  Container,
  Article,
  Title,
  Content,
  Author,
  ReturnButton,
  ReturnButtonText
} from "./styles";

class ArticleShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: "",
      loading: true
    };
  }

  componentWillMount = async () => {
    const response = await api.get(
      `/articles/${this.props.navigation.getParam("id")}`
    );
    this.setState({ article: response.data, loading: false });
  };

  render() {
    const { article } = this.state;
    if (this.state.loading) {
      return (
        <Container>
          <ActivityIndicator size={80} color="#fc6963" />
        </Container>
      );
    } else {
      return (
        <Container>
          <Article>
            <Title>{article.title}</Title>
            <Content>{article.content}</Content>
            <Author>{article.member.name}</Author>
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
}

export default ArticleShow;
