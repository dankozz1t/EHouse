import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://apt-booking-api.herokuapp.com/",
});

export const axiosToken = {
  set: (value) => {
    axiosInstance.defaults.headers.Authorization = `Bearer ${value}`;
  },

  unset: () => {
    axiosInstance.defaults.headers.Authorization = null;
  },
};
