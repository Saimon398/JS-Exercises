/*
  Here you cand find information solutions to Fibbonachi Sequence
*/

// Redundant solution

/**
 * This function finds value of Fibbonachi sequence under given number
 * @param {number} number Given number
 * @returns {number} Value under given number
 */
export const findFibbSequenceNum1 = (number) => {
  const result = [0, 1];
  for (let i = 2; i <= number; i += 1) {
    result.push(result[i - 2] + result[i - 1]);
  }
  return result[number];
};

// Fast solution

/**
 * This function finds value of Fibbonachi sequence under given number
 * @param {number} number Given number
 * @returns {number} Value under given number
 */
export const findFibbSequenceNum2 = (number) => {
  let first = 1;
  let second = 1;
  for (let i = 3; i <= number; i += 1) {
    const third = first + second;
    first = second;
    second = third;
  }
  return second;
};

// Recursive solution - Slowest Solution

/**
 * This function finds value of Fibbonachi sequence under given number by recursion
 * @param {number} number Given number
 * @returns {number} Value under given number
 */
export const findFibbSequenceNum3 = (number) => {
  if (number < 3) {
    return 1;
  }
  return findFibbSequenceNum3(number - 1) + findFibbSequenceNum3(number - 2);
};
