export const oneWord = (value) => {
  if (!value) {
    return false;
  }

  const regex = /^\S*$/;

  return regex.test(value);
};
