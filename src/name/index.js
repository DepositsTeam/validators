export const name = (value) => {
  if (value.length > 40 || value.length < 2) {
    return false;
  }

  const regex = /^[a-zA-Z0-9'.-]*$/;
  return regex.test(value);
};
