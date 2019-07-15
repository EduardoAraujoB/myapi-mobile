import React, { Component } from "react";
import { FlatList, ActivityIndicator } from "react-native";

import api from "../../services/api";
import {
  Container,
  Title,
  ArticleCreateButton,
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
      articles: [],
      loading: true
    };
  }

  componentWillMount = async () => {
    const articles = await api.get("/articles");
    this.setState({ articles: articles.data, loading: false });
  };

  render() {
    if (this.state.loading) {
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
          <Title>Artigos</Title>
          <FlatList
            data={this.state.articles}
            keyExtractor={article => article._id}
            renderItem={({ item }) => (
              <ArticleContainer>
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
          <ArticleCreateButton
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("ArticleCreate")}
          >
            <Label>Cadastrar um Artigo</Label>
          </ArticleCreateButton>
        </Container>
      );
    }
  }
}

export default Home;
