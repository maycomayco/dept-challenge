/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* this is a custom implementation of uuid */
export const uuid = () => {
  const date = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2);

  return `${date}${random}`;
};
