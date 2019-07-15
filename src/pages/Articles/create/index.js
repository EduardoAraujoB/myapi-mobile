import React, { Component } from "react";

import TabBar from "../../../components/TabBar";

class ArticleCreate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TabBar navigation={this.props.navigation} title="Cadastrar Artigo" />
    );
  }
}

export default ArticleCreate;
