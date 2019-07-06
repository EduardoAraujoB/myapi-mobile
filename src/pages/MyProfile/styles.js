import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #eee;
`;

export const ProfileContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 20px;
  background: #fff;
`;

export const Title = styled.Text`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #fc6963;
`;

export const SubTitle = styled.Text`
  margin: 0 0 20px 5px;
  align-self: flex-start;
  font-size: 15px;
  font-weight: bold;
  color: #5e5e5e;
`;

export const TextContent = styled.Text`
  font-size: 15px;
  color: #888888;
`;

export const LogoutButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #fc6963;
  border-radius: 15px;
`;

export const LogoutButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
