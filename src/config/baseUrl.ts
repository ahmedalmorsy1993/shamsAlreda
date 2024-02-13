export const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://dash.shamsreda.com/api/site/';
  } else {
    return 'https://dash.shamsreda.com/api/site/';
  }
};
