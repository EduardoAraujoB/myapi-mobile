import React, { Component } from "react";
import { ActivityIndicator } from "react-native";

import api from "../../../services/api";
import TabBar from "../../../components/TabBar";
import {
  Container,
  Article,
  Title,
  Content,
  Author,
  CommentsContainer,
  Comment,
  CommentAuthor,
  CommentContent
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
        <>
          <TabBar
            navigation={this.props.navigation}
            title="Visualizar Artigo"
          />
          <Container>
            <Article>
              <Title>{article.title}</Title>
              <Content>{article.content}</Content>
              <Author>{article.member.name}</Author>
            </Article>
            <CommentsContainer>
              <Title>Comentários</Title>
              <Comment>
                <CommentAuthor>Pessoa Qualquer</CommentAuthor>
                <CommentContent>Comentário Qualquer</CommentContent>
              </Comment>
              <Comment>
                <CommentAuthor>Pessoa Qualquer</CommentAuthor>
                <CommentContent>Comentário Qualquer</CommentContent>
              </Comment>
              <Comment>
                <CommentAuthor>Pessoa Qualquer</CommentAuthor>
                <CommentContent>Comentário Qualquer</CommentContent>
              </Comment>
              <Comment>
                <CommentAuthor>Pessoa Qualquer</CommentAuthor>
                <CommentContent>Comentário Qualquer</CommentContent>
              </Comment>
            </CommentsContainer>
          </Container>
        </>
      );
    }
  }
}

export default ArticleShow;
