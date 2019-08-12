import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
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

export const Title = styled.Text`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
  color: #fc6963;
`;

export const ActionsContainer = styled.View`
  background: transparent;
  width: 100%;
  height: auto;
  flex-direction: row;
`;

export const ActionButton = styled.TouchableOpacity`
  margin-right: 5px;
  background: #fc6963;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 35px;
  border-radius: 10px;
`;
export const ActionButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;

export const Content = styled.Text`
  align-self: flex-start;
  font-size: 15px;
  margin-bottom: 15px;
  color: #5e5e5e;
`;

export const Author = styled.Text`
  align-self: flex-end;
  font-size: 15px;
  font-weight: bold;
  color: #fc6963;
  margin-bottom: 15px;
`;

export const CommentsContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 15px;
`;

export const Comment = styled.View`
  width: 100%;
  padding: 5px;
`;

export const CommentAuthor = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #fc6963;
`;

export const CommentContent = styled.Text`
  margin: 5px 0 0 10px;
  font-size: 14px;
  color: #777;
`;

export const NewCommentInput = styled.TextInput`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #5e5e5e;
  width: 100%;
  height: auto;
`;

export const NewCommentSubmit = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px;
  width: 100%;
  height: 40px;
  background: #fc6963;
  border-radius: 10px;
`;

export const NewCommentSubmitText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;

export const ErrorContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 10px;
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

export const CommentDeleteButton = styled.TouchableOpacity`
  margin-left: 5px;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 25px;
  border-radius: 8px;
  background: #fc6963;
`;

export const CommentDeleteButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 10px;
`;
