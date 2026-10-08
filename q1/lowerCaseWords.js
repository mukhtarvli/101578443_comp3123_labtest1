/**
 * @param {Array}
 * @returns {Promise<string[]>}
 */

const lowerCaseWords = (mixedArray) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(mixedArray)) {
      reject(new Error("Input must be an array."));
      return;
    }

    const lowerCaseStrings = mixedArray
      .filter((item) => typeof item === "string")
      .map((word) => word.toLowerCase());

    resolve(lowerCaseStrings);
  });
};

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(mixedArray)
  .then((words) => console.log(words))
  .catch((error) => console.error(error.message));

module.exports = lowerCaseWords;
