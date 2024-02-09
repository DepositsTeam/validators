const email = (value) => {
  const regex = /^[A-Za-z0-9]+(\.[A-Za-z0-9]+)*@[A-Za-z0-9]+(\.[A-Za-z]+)*$/;
  return regex.test(value);
};

module.exports = {
  email,
};
