const naics = (value) => {
  const validSectors = {
    11: true,
    21: true,
    22: true,
    23: true,
    31: true,
    32: true,
    33: true,
    41: true,
    42: true,
    44: true,
    45: true,
    48: true,
    49: true,
    51: true,
    52: true,
    53: true,
    54: true,
    55: true,
    56: true,
    61: true,
    62: true,
    71: true,
    72: true,
    81: true,
    91: true,
    92: true,
  };

  value = value.trim();

  // Check if the value is a numeric string with 2 to 6 digits
  const regex = /^\d{2,6}$/;
  if (!regex.test(value)) {
    return false;
  }

  // Extract the first two digits and convert to a number
  const sector = parseInt(value.substring(0, 2), 10);

  // Check if the sector is within the valid range (11-99)
  return !!validSectors[sector];
};

module.exports = {
  naics,
};
