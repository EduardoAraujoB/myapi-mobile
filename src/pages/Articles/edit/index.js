import React, { Component } from "react";
import { ActivityIndicator } from "react-native";

import api from "../../../services/api";
import TabBar from "../../../components/TabBar";
import {
  Container,
  FormContainer,
  Title,
  ErrorContainer,
  ErrorMessage,
  Label,
  Input,
  FormButton,
  ButtonText
} from "./styles";

class ArticleEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      article: "",
      title: "",
      content: "",
      loading: true
    };
  }

  componentWillMount = async () => {
    const article = await api.get(
      `/articles/${this.props.navigation.getParam("id")}`
    );
    this.setState({
      article: article.data,
      title: article.data.title,
      content: article.data.content,
      loading: false
    });
  };

  handleSubmit = async () => {
    const { title, content, article } = this.state;
    try {
      await api.put(`/articles/${article._id}`, { title, content });
      this.props.navigation.navigate("SignedIn");
    } catch (error) {
      this.setState({ error: "Erro ao atualizar" });
    }
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
        <>
          <TabBar navigation={this.props.navigation} title="Editar Artigo" />
          <Container
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <FormContainer>
              <Title>Editar Artigo</Title>
              {!!this.state.error && (
                <ErrorContainer>
                  <ErrorMessage>{this.state.error}</ErrorMessage>
                </ErrorContainer>
              )}
              <Label>Título</Label>
              <Input
                value={this.state.title}
                onChangeText={title => this.setState({ title })}
              />
              <Label>Conteúdo</Label>
              <Input
                value={this.state.content}
                onChangeText={content => this.setState({ content })}
              />
              <FormButton activeOpacity={0.8} onPress={this.handleSubmit}>
                <ButtonText>Atualizar</ButtonText>
              </FormButton>
            </FormContainer>
          </Container>
        </>
      );
    }
  }
}

export default ArticleEdit;
