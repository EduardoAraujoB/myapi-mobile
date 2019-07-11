import React, { Component } from "react";
import { ActivityIndicator, FlatList } from "react-native";

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
      comments: "",
      loading: true
    };
  }

  componentWillMount = async () => {
    const article = await api.get(
      `/articles/${this.props.navigation.getParam("id")}`
    );
    const comments = await api.get(
      `/comments/${this.props.navigation.getParam("id")}`
    );
    this.setState({
      article: article.data,
      comments: comments.data,
      loading: false
    });
  };

  render() {
    const { article, comments } = this.state;
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
              {!(comments.length === 0) ? (
                <FlatList
                  data={this.state.comments}
                  keyExtractor={comment => comment._id}
                  renderItem={({ item }) => (
                    <Comment>
                      <CommentAuthor>{item.member.name}</CommentAuthor>
                      <CommentContent>{item.content}</CommentContent>
                    </Comment>
                  )}
                />
              ) : (
                <CommentContent>Seja o primeiro a comentar!</CommentContent>
              )}
            </CommentsContainer>
          </Container>
        </>
      );
    }
  }
}

export default ArticleShow;
