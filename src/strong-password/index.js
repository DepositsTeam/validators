export const strongPassword = (value) => {
  value = value.trim();

  return !!(
    value &&
    value.length > 7 &&
    /\d/.test(value) &&
    /[a-z]/.test(value) &&
    /[A-Z]/.test(value) &&
    /[^a-zA-Z0-9]/.test(value)
  );
};
