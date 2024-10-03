export const creditCard = (value) => {
  // trim the value
  value = value.trim();

  // Remove the internal spaces
  value = value.replaceAll(" ", "");

  // Check if the value contains only numbers
  if (/^\d+$/.test(value)) {
    // Do the Luhn algorithm check
    let sum = 0;
    let shouldDouble = false;

    // Loop through the value from right to left
    for (let i = value.length - 1; i >= 0; i--) {
      let digit = parseInt(value.charAt(i));

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    // If the sum is divisible by 10, the number is valid
    if (sum % 10 === 0) {
      // Do different length validations based on the prefix and card brand (Amex, Visa, Mastercard, Discover)
      if (/^3[47]\d{13}$/.test(value)) {
        return true;
      }
      if (/^4\d{12}(\d{3})?$/.test(value)) {
        return true;
      }
      if (/^5[1-5]\d{14}$/.test(value)) {
        return true;
      }
      if (/^6(?:011|5\d{2})\d{12}$/.test(value)) {
        return true;
      }
      return false;
    }

    return false;
  }

  return false;
};
