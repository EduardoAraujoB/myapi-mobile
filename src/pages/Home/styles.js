import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 10px 30px;
  background: #eee;
  width: 100%;
  height: 100%;
`;

export const ArticleContainer = styled.View`
  background: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 300px;
`;

export const ArticleTitle = styled.Text`
  color: #fc6963;
  font-size: 20px;
  font-weight: bold;
`;

export const ArticleAuthor = styled.Text`
  margin: 10px;
  font-size: 15px;
  font-weight: bold;
  color: #5e5e5e;
`;

export const ArticleButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: #fc6963;
  border-radius: 25px;
  width: 100%;
  height: 40px;
`;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;
