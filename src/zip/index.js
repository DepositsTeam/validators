export const zip = (value) => {
  // Remove any whitespace
  value = value.trim();

  // Check if the value is a valid 5-digit or 9-digit zip code
  const regex = /^\d{5}(\d{4})?$/;

  return regex.test(value);
};

