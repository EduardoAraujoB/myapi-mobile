import React, { Component } from "react";
import { FlatList } from "react-native";

import api from "../../services/api";
import {
  Container,
  ArticleContainer,
  ArticleTitle,
  ArticleAuthor,
  ArticleButton,
  Label
} from "./styles";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  _isMounted = false;
  loading = false;

  componentWillMount = async () => {
    this._isMounted = true;
    this.loading = true;
    const articles = await api.get("/articles");
    if (this._isMounted) {
      this.loading = false;
      console.log(articles.data);
      this.setState({ articles: articles.data });
    }
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  render() {
    if (this.loading) {
      return (
        <Container>
          <ArticleTitle>Carregando</ArticleTitle>
        </Container>
      );
    } else {
      return (
        <Container>
          <FlatList
            data={this.state.articles}
            keyExtractor={article => article._id}
            renderItem={({ item }) => (
              <ArticleContainer>
                <ArticleTitle>{item.title}</ArticleTitle>
                <ArticleAuthor>Autor: {item.member.name}</ArticleAuthor>
                <ArticleButton activeOpacity={0.8}>
                  <Label>Acessar</Label>
                </ArticleButton>
              </ArticleContainer>
            )}
          />
        </Container>
      );
    }
  }
}

export default Home;
