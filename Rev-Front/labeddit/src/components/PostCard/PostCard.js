import {
  Avatar,
  Card,
  CardActionArea,
  Typography,
  CardHeader,
} from "@material-ui/core";
import React from "react";
import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import { likePost, changePost, deletePost } from "../../services/posts";
import { PostCardContainer, PostCardContent, Img, PostFooter } from "./styled";

const PostCard = (props) => {
  const onClickCurtida = () => {
    if (props.curtido === -1) {
      changePost(props.postID, 1, props.getData);
    } else if (props.curtido === null) {
      likePost(props.postID, props.getData);
    } else if (props.curtido === 1) {
      deletePost(props.postID, props.getData);
    }
  };
  const iconeCurtida =
    props.curtido > 0 ? iconeCoracaoPreto : iconeCoracaoBranco;

  return (
    <PostCardContainer>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={""} aria-label="name">
              {props.username.substring(0, 1).toUpperCase()}
            </Avatar>
          }
          title={props.username}
          subheader={props.createdAt}
        />
        <CardActionArea>
          <PostCardContent onClick={props.onClick}>
            <Typography variant="h6" align={"center"}>
              {props.title}
            </Typography>
            <Typography align={"center"}>{props.body}</Typography>
          </PostCardContent>
        </CardActionArea>
        <PostFooter>
          <Img alt={"icone"} src={iconeCurtida} onClick={onClickCurtida} />
          <Typography>{props.voteSum} </Typography>
        </PostFooter>
      </Card>
    </PostCardContainer>
  );
};

export default PostCard;
