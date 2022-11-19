import axiosInstance from "@/utils/http";

export const getApartmentsList = () => {
  return axiosInstance.get("/apartments");
};

export const getApartmentById = (id) => {
  return axiosInstance.get(`/apartments/${id}`);
};

export const getReviewsApartmentById = (id) => {
  return axiosInstance.get(`/apartments/${id}/reviews`);
};
