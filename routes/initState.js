export const initState = () => {
  return {
    movies: { favorites: [], lists: [], film: [] },
    books: { favorites: [], lists: [], car: [] }
  };
};

export const getInitState = async () => {
  return await initState();
};
