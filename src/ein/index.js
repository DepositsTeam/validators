const ein = (value) => {
  value = value.trim();
  const pattern = /^\d{2}-\d{7}$/;
  return pattern.test(value);
};

module.exports = {
  ein,
};
