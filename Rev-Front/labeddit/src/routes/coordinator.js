export const gotToLogin = (history) => {
  history.push("/");
};

export const gotToFeed = (history) => {
  history.push("/feed");
};

export const gotToRegister = (history) => {
  history.push("/register");
};

export const gotToPost = (history, id) => {
  history.push(`/post/${id}`);
};
