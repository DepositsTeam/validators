export const swiftCode = (value) => {
  // Remove any whitespace
  value = value.trim();

  const regex = /^[A-Za-z0-9]{8}([A-Za-z0-9]{3})?$/;

  return regex.test(value);
};
