import axios from "axios";
import { BASE_URL } from "../constants/url";

//POST - Create Comment
export const createComment = (
  body,
  id,
  clear,
  getData,
  setIsLoadingComment
) => {
  setIsLoadingComment(true);
  axios
    .post(`${BASE_URL}/posts/${id}/comments`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      alert(res.data);
      clear();
      getData();
      setIsLoadingComment(false);
    })
    .catch((err) => {
      alert("error", err.response);
      setIsLoadingComment(false);
    });
};

// POST - Create Comment Vote
export const likeComment = (id, getData) => {
  const body = {
    direction: 1,
  };
  axios
    .post(`${BASE_URL}/comments/${id}/votes`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res);
      getData();
    })
    .catch((err) => {
      console.log(err);
    });
};

// PUT - Change Comment Vote
export const changeComment = (id, value, getData) => {
  const body = {
    direction: value,
  };
  axios
    .put(`${BASE_URL}/comments/${id}/votes`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res);
      getData();
    })
    .catch((err) => {
      console.log(err);
    });
};

// DEL - Delete Comment Vote
export const deleteComment = (id, getData) => {
  axios
    .delete(`${BASE_URL}/comments/${id}/votes`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res);
      getData();
    })
    .catch((err) => {
      console.log(err);
    });
};
