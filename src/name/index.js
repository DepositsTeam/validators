const name = (value) => {
  if (value.length > 40) {
    return false;
  }

  const regex = /^[a-zA-Z0-9'.-]*$/;
  return regex.test(value);
};

module.exports = {
  name: name,
};
