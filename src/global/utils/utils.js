export const toArray = (obj) => {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};
