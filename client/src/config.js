export const API_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000';
export const IMG_URL =
  process.env.NODE_ENV === 'production'
    ? '/courses'
    : 'http://localhost:3000/courses';