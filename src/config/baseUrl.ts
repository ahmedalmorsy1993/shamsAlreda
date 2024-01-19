export const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === 'production') {
    return 'http://localhost:8000/api/v1/';
  } else {
    return 'http://localhost:8000/api/v1/';
  }
};
