import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background: #fc6963;
`;

export const ReturnButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 40px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const Space = styled.View`
  width: 40px;
`;
