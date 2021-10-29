import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

export const PostCardContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`;

export const PostCardContent = styled.div`
  margin: 5px;
  padding: 25px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const InputCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  margin-top: 100px;
  margin-left: 50px;
`;
