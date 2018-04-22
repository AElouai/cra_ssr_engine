import { Api } from "./api";

export const getBooks = () => {
  return Api(`books`).then(response => response.data, error => null);
};

export const getBook = ({ id }) => {
  return Api(`books/${id}`).then(response => response.data, error => null);
};
