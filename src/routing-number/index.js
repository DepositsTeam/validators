export const routingNumber = (value) => {
  value = value.trim();

  // Routing number must be exactly 9 digits
  const pattern = /^\d{9}$/;

  if (!pattern.test(value)) {
    // Error Message: Routing number must be exactly 9 digits.
    return false;
  }

  // Perform checksum validation using the ABA algorithm
  let checksum = 0;
  for (let i = 0; i < value.length; i += 3) {
    checksum +=
      parseInt(value.charAt(i), 10) * 3 +
      parseInt(value.charAt(i + 1), 10) * 7 +
      parseInt(value.charAt(i + 2), 10);
  }

  // Error Message: Invalid routing number checksum.
  return checksum % 10 === 0;
};
