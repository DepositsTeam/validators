export const ssn = (value) => {
  // Remove any whitespace
  value = value.trim();

  const regex = /^[0-8]\d{2}-\d{2}-\d{4}$/;

  return regex.test(value);
};
