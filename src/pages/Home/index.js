import React, { Component } from "react";
import { FlatList, ActivityIndicator } from "react-native";

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
          <ActivityIndicator size={80} color="#fc6963" />
        </Container>
      );
    } else {
      return (
        <Container
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <FlatList
            data={this.state.articles}
            keyExtractor={article => article._id}
            renderItem={({ item, index }) => (
              <ArticleContainer
                lastItem={
                  this.state.articles.length === index + 1 ? true : false
                }
              >
                <ArticleTitle>{item.title}</ArticleTitle>
                <ArticleAuthor>Autor: {item.member.name}</ArticleAuthor>
                <ArticleButton
                  activeOpacity={0.8}
                  onPress={() =>
                    this.props.navigation.navigate("ArticleShow", {
                      id: item._id
                    })
                  }
                >
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
