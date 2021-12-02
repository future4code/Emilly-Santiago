import React, { useState } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import PostCard from "../../components/PostCard/PostCard";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import { FeedCardContainer, FeedContainer, InputCardContainer } from "./styled";
import { gotToPost } from "../../routes/coordinator";
import { useHistory } from "react-router";
import PostForm from "./PostForm";

const FeedPage = () => {
  useProtectedPage();
  const history = useHistory();
  const [posts, isLoading, error, getData] = useRequestData(
    [],
    `${BASE_URL}/posts`
  );
  console.log(posts);

  const onClickCard = (id) => {
    gotToPost(history, id);
  };

  const postCards = posts.map((post, index) => {
    return (
      <PostCard
        key={index}
        title={post.title}
        username={post.username}
        body={post.body}
        onClick={() => onClickCard(post.id)}
        postID={post.id}
        curtido={post.userVote}
        voteSum={post.voteSum}
        getData={getData}
        createdAt={post.createdAt}
      />
    );
  });

  return (
    <FeedContainer>
      <FeedCardContainer>{postCards}</FeedCardContainer>
      <InputCardContainer>
        <PostForm getData={getData} />
      </InputCardContainer>
    </FeedContainer>
  );
};

export default FeedPage;
