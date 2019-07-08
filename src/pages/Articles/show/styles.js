import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-content: center;
  padding: 20px;
  background: #eee;
`;

export const Article = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 15px;
`;

export const ReturnButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: #fc6963;
  border-radius: 25px;
  width: 100%;
  height: 40px;
`;
export const ReturnButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fc6963;
`;
