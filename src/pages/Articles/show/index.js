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
  CommentContent,
  NewCommentInput,
  NewCommentSubmit,
  NewCommentSubmitText,
  ErrorContainer,
  ErrorMessage
} from "./styles";

class ArticleShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: "",
      comments: "",
      newComment: "",
      error: "",
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

  handleSubmit = async () => {
    const { newComment } = this.state;
    if (!newComment) {
      this.setState({ error: "Você não pode enviar um comentário vazio =D" });
    } else {
      const send = {
        content: newComment,
        article: this.props.navigation.getParam("id")
      };
      try {
        await api.post("/comments", send);
        this.props.navigation.navigate("SignedIn");
      } catch (error) {
        console.log(error);
        this.setState({
          error: "Erro ao enviar o comentário, dessculpe pelo inconveniente"
        });
      }
    }
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
              {!!this.state.error && (
                <ErrorContainer>
                  <ErrorMessage>{this.state.error}</ErrorMessage>
                </ErrorContainer>
              )}
              <NewCommentInput
                onChangeText={newComment => this.setState({ newComment })}
              />
              <NewCommentSubmit activeOpacity={0.5} onPress={this.handleSubmit}>
                <NewCommentSubmitText>Comentar</NewCommentSubmitText>
              </NewCommentSubmit>
            </CommentsContainer>
          </Container>
        </>
      );
    }
  }
}

export default ArticleShow;
