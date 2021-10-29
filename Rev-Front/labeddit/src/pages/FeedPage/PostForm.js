import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, CardContent, CardHeader } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { createPost } from "../../services/posts";
import { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { Card } from "@material-ui/core";

const PostForm = ({ getData }) => {
  const [form, handleInputChange, clear] = useForm({
    title: "",
    body: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();

    createPost(form, clear, getData, setIsLoading);
  };
  return (
    <Card>
      <CardHeader title="Post about anything" />
      <CardContent>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"title"}
            value={form.title}
            onChange={handleInputChange}
            label={"title"}
            variant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />
          <TextField
            name={"body"}
            value={form.body}
            onChange={handleInputChange}
            label={"body"}
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
            {isLoading ? (
              <CircularProgress size={24} color={"inherit"} />
            ) : (
              <>Post</>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PostForm;
