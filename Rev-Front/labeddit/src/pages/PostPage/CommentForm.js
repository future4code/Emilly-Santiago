import React from "react";
import useForm from "../../hooks/useForm";
import TextField from "@material-ui/core/TextField";
import { Button, Card, CardHeader } from "@material-ui/core";
import { createComment } from "../../services/comments";
import { InputCardContainer } from "./styled";
import { Typography } from "@material-ui/core";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import { useState } from "react";
import { CircularProgress } from "@material-ui/core";

const CommentForm = ({ getData, params }) => {
  const [form, handleInputChange, clear] = useForm({
    body: "",
  });

  const [posts, isLoading, error] = useRequestData([], `${BASE_URL}/posts`);
  const [isLoadingComment, setIsLoadingComment] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    createComment(form, params, clear, getData, setIsLoadingComment);
  };

  const findPost = (posts) => {
    const postIndex = posts.find((post) => post.id == params);
    //console.log(postIndex);
    //console.log(posts);
    return postIndex;
  };
  console.log(findPost(posts));

  return (
    <InputCardContainer>
      <Card>
        <CardHeader title="Comment about this post!"/>
        {params && posts && !isLoading && findPost(posts) ? (
          <div>
            <Typography variant="h6" align={"center"}>
              {findPost(posts).title}
            </Typography>
            <Typography align={"center"}>{findPost(posts).body}</Typography>
          </div>
        ) : (
          <p>{error}</p>
        )}
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"body"}
            value={form.body}
            onChange={handleInputChange}
            label={"type your comment"}
            variant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />

          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
          >
            {isLoadingComment ? (
              <CircularProgress size={24} color={"inherit"} />
            ) : (
              <>Comment</>
            )}
          </Button>
        </form>
      </Card>
    </InputCardContainer>
  );
};

export default CommentForm;
