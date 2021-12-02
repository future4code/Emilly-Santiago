import axios from "axios";
import { BASE_URL } from "../constants/url";

// POST - Create Post
export const createPost = (body, clear, getData, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      alert(res.data);
      clear();
      getData();
      setIsLoading(false);
    })
    .catch((err) => {
      alert(err.response);
      setIsLoading(false);
    });
};

// POST - Create Post Vote
export const likePost = (id, getData) => {
  const body = {
    direction: 1,
  };
  axios
    .post(`${BASE_URL}/posts/${id}/votes`, body, {
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

//PUT - Change Post Vote
export const changePost = (id, value, getData) => {
  const body = {
    direction: value,
  };
  axios
    .put(`${BASE_URL}/posts/${id}/votes`, body, {
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

// DEL - Delete Post Vote
export const deletePost = (id, getData) => {
  axios
    .delete(`${BASE_URL}/posts/${id}/votes`, {
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
