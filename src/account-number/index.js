const accountNumber = (value) => {
  // Remove any whitespace
  value = value.trim();

  // Define minimum and maximum length
  const minLength = 4;
  const maxLength = 17;

  // Regular expression pattern:
  // - Starts and ends with allowed characters
  // - Allowed characters: digits (0-9)
  // If letters are allowed, adjust the pattern accordingly
  const pattern = /^[0-9]+$/;

  // Check length
  if (value.length < minLength || value.length > maxLength) {
    return false;
  }

  // Check allowed characters
  return pattern.test(value);
};

module.exports = {
  accountNumber,
};
