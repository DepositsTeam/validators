export const email = (value) => {
  if (value.length > 63) {
    return false;
  }
  const regex =
    /^[A-Za-z0-9]+(\.[A-Za-z0-9]+)*@[a-zA-Z]([a-zA-Z0-9\-]*[a-zA-Z0-9])*(\.[a-zA-Z]([a-zA-Z0-9\-]*[a-zA-Z0-9])*)*\.([a-zA-Z]+)*$/;
  return regex.test(value);
};
