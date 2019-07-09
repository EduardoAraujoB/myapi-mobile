import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 60px;
  background: #fc6963;
  padding: 10px;
`;

export const ReturnButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const ReturnButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;
