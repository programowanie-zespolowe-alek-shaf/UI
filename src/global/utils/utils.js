export const toArray = (obj) => {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};

export const deepCopy = (obj) => {
  return JSON.parse(
    JSON.stringify(obj, function (key, value) {
      if (value instanceof RegExp) {
        return value.toString();
      }
      return value;
    })
  );
};
