export const itin = (value) => {
  // Remove any whitespace
  value = value.trim();

  const regex = /^9\d{2}-\d{2}-\d{4}$/;

  return regex.test(value);
};
