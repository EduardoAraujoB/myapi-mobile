import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

export const FormContainer = styled.View`
  width: 300px;
  background: white;
  padding: 20px;
  border-radius: 15px;
`;

export const Title = styled.Text`
  margin: 5px;
  text-align: center;
  color: #fc6963;
  font-size: 20px;
  font-weight: bold;
`;

export const Label = styled.Text`
  margin: 5px;
  color: #888888;
  font-size: 15px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  color: #5e5e5e;
  width: 100%;
  height: 50px;
`;

export const FormButton = styled.TouchableOpacity`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #fc6963;
  border-radius: 15px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

export const ErrorContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  width: 100%;
  height: 40;
  padding: 20px;
  border: 1px solid #ff3333;
  border-radius: 10px;
`;
export const ErrorMessage = styled.Text`
  color: #ff3333;
  font-size: 15px;
  font-weight: bold;
`;
