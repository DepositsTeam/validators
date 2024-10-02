const passportNumber = (value) => {
  // Remove any whitespace
  value = value.trim();

  // Check if the value is an alphanumeric string with 6 to 9 characters
  const regex = /^[a-zA-Z0-9]{9}$/;

  return regex.test(value);
};

module.exports = {
  passportNumber,
};
