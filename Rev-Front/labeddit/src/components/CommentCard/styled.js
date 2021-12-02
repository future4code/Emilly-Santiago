import styled from "styled-components";

export const PostCardContainer = styled.div`
  width: 300px;
  margin-top: 20px;
`;
export const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const PostCardContent = styled.div`
  margin: 5px;
  padding: 25px;
  background-color: #90b4ce;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CommentFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

export const Img = styled.img`
  :hover {
    /* background-color: #90b4ce; */
    cursor: pointer;
  }
`;
