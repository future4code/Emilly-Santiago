import React from "react";
import {
  PostCardContainer,
  PostCardContent,
  Img,
  CommentFooter,
} from "./styled";
import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import {
  likeComment,
  changeComment,
  deleteComment,
} from "../../services/comments";
import { Card, CardHeader, Avatar } from "@material-ui/core";

const CommentsCard = (props) => {
  const onClickCurtida = () => {
    if (props.curtido === -1) {
      changeComment(props.postID, 1, props.getData);
    } else if (props.curtido === null) {
      likeComment(props.postID, props.getData);
    } else if (props.curtido === 1) {
      deleteComment(props.postID, props.getData);
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
        <PostCardContent>{props.body}</PostCardContent>
        <CommentFooter>
          <Img alt={"icone"} src={iconeCurtida} onClick={onClickCurtida} />
          <p>{props.voteSum} </p>
        </CommentFooter>
      </Card>
    </PostCardContainer>
  );
};

export default CommentsCard;
