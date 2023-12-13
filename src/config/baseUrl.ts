export const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://fakestoreapi.com/';
  } else {
    return 'https://fakestoreapi.com/';
  }
};
