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
