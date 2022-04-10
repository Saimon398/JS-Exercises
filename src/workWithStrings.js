/*
  Here you can find a manual implementation of methods for Strings
*/

/**
 * This function is a manual realization of "substr" method
 * @param {string} string String that should be processed
 * @param {number} startIndex Start index which substring should be cutted from
 * @param {number} length Length of substring
 * @returns {string} New substring
 */
const getSubstr = (string, startIndex = 0, substrLength = string.length) => {
  if (startIndex >= string.length) {
    return '';
  }
  const currentIndex = startIndex < 0 ? 0 : startIndex;
  let lastIndex = currentIndex + (substrLength - 1);
  if (substrLength < 0) {
    lastIndex = currentIndex;
  } else if (lastIndex > string.length - 1) {
    lastIndex = string.length - 1;
  }
  let resultString = '';
  for (let i = currentIndex; i <= lastIndex; i += 1) {
    resultString = `${resultString}${string[i]}`;
  }
  return resultString;
};
