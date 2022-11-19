import axiosInstance from "@/utils/http";

export const loginUser = (payload) => {
  return axiosInstance.post("/users/login", payload);
};

export const registerUser = (payload) => {
  return axiosInstance.post("/users/register", payload);
};

export const logoutUser = () => {
  return axiosInstance.post("/users/logout");
};

export const currentUser = () => {
  return axiosInstance.get("/users/current");
};
