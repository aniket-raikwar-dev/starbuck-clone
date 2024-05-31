export const importImage = (path) => {
  try {
    return require(`../images/${path}`);
  } catch (err) {
    return require("../images/Starbucks_logo.png");
  }
};
