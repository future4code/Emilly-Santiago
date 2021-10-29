import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import CommentCard from "../../components/CommentCard/CommentCard";
import { ScreenContainer, PostContainer } from "./styled";
import CommentForm from "./CommentForm";

const PostPage = () => {
  useProtectedPage();
  const params = useParams();
  const [comments, isLoading, error, getData] = useRequestData(
    [],
    `${BASE_URL}/posts/${params.id}/comments`
  );
  console.log(comments);

  const commentsCard = comments?.map((comment, index) => {
    return (
      <CommentCard
        key={index}
        username={comment.username}
        body={comment.body}
        postID={comment.id}
        curtido={comment.userVote}
        voteSum={comment.voteSum}
        getData={getData}
        createdAt={comment.createdAt}
      />
    );
  });
  return (
    <ScreenContainer>
      <PostContainer>{commentsCard && commentsCard}</PostContainer>
      <CommentForm params={params.id} getData={getData} />
    </ScreenContainer>
  );
};

export default PostPage;
