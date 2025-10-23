export const getUser = () => {
  const data = JSON.parse(localStorage.getItem("currentUser"));
  return data?.data;
};

export const addUser = (token) => {
  localStorage.setItem("currentUser", JSON.stringify(token));
};

export const removeUser = () => {
  localStorage.removeItem("currentUser");
};

export const getToken = () => {
  const data = JSON.parse(localStorage.getItem("currentUser"));
  return data?.token;
};
