/*
  Here you cand find information how to use recursion
  for solving different exercises. Any exercise can be solved
  by using regural cycles.
*/

// CONSTRUCTION OF RECURSIVE FUNCTIONS THAT DEPEND ON INTEGER ARGUMENTS

/*
  In the area of non-negative numbers, as a rule, the simpler numbers are,
  numbers that are smaller in magnitude are considered simpler. For example,
  for the number N are N-1, N-2, etc. Obviously, this reduction
  of a number can be done only a finite number of times, up to 0
*/

/**
 * This function calulates factorial of given number by recursion
 * @param {number} number Number, factotial of which to be found
 * @returns {number} Factorial
 */
export const factorial1 = (number) => (number < 1 ? 1 : number * factorial1(number - 1));

/**
  * This function calulates factorial of given number by the cycle
  * @param {number} number Number, factotial of which to be found
  * @returns {number} Factorial
  */
export const factorial2 = (number) => {
  let factorial = 1;
  let counter = 1;
  while (counter <= number) {
    factorial *= counter;
    counter += 1;
  }
  return factorial;
};

/**
 * This function calculates (x^n)n! by recursion
 * @param {number} numer x
 * @param {number} denom n
 * @returns {number} (x^n)n!
 */
export const recursion1 = (numer, denom) => (denom < 1 ? 1 : numer / (denom * recursion1(numer, denom - 1)));

/**
 * This function calculaters remainder of first divided by second by recursion
 * @param {number} first First number
 * @param {number} second Second number
 * @returns {number} Calculated remainder
 */
export const modRecursion = (first, second) => (first < second ? first : modRecursion(first - second, second));

/**
 * This function calculaters remainder of first divided by second by cycle
 * @param {number} first First number
 * @param {number} second Second number
 * @returns {number} Calculated remainder
 */
export const modCycle = (first, second) => {
  let remainder = first;
  while (remainder >= second) {
    remainder -= second;
  }
  return remainder;
};

/**
 * This function calculates what degree of given number is the natural number
 * by recursion
 * @param {number} number Number
 * @param {number} degree Degree
 * @returns {number} Result of calculations - degree
 */
export const calcDegreeRecursion = (number, degree) => {
  if (degree === 1) {
    return 0;
  }
  if (degree % number !== 0) {
    return -1;
  }
  const count = calcDegreeRecursion(number, degree / number);
  if (count === -1) {
    return -1;
  }
  return count + 1;
};

/**
 * This function calculates what degree of given number is the natural number
 * by cycle
 * @param {number} number Number
 * @param {number} degree Degree
 * @returns {number} Result of calculations - degree
 */
export const calcDegreeCycle = (number, degree) => {
  if (degree === 1) {
    return 0;
  }
  let searchedDegree = degree;
  let counter = 0;
  while (searchedDegree >= number) {
    searchedDegree /= number;
    counter += 1;
  }
  return searchedDegree === 1 ? counter : -1;
};

// CONSTRUCTION OF RECURSIVE FUNCTIONS THAT DEPEND ON A NUMBER POSITION

/*
  Now consider the class of integer processing problems,
  where it is not not the value of the numbers,
  but the set of digits that make up the records of these numbers.
*/

/**
 * This function finds max number among all numbers in given combination
 * @param {number} number - Combination of numbers
 * @returns {number} Max number
 */
export const findMaxNumberInRecordByRecursion = (number) => {
  if (number < 10) {
    return number;
  }
  let maxNumber = findMaxNumberInRecordByRecursion(Math.trunc(number / 10));
  const lastNumber = number % 10;
  return lastNumber > maxNumber ? maxNumber = lastNumber : maxNumber;
};

/**
 * This function reverses given string by recursion (FIRST WAY)
 * @param {string} string Given string
 * @returns {string} Reversed string
 */
const reverseStringByRecursion1 = (string) => {
  const stringLength = string.length;
  if (stringLength < 1) {
    return string;
  }
  const newString = string.slice(stringLength - 1);
  return newString + reverseStringByRecursion1(string.slice(0, stringLength - 1));
};

/**
 * This function reverses given string by recursion (Ternary operator is used)
 * @param {string} string Given string
 * @returns {string} Reversed string
 */
const reverseStringByRecursion2 = (string) => (string.length < 1 ? string : `${string.slice(-1)}${reverseStringByRecursion2(string.slice(0, -1))}`);

/**
 * This function reverses given number by cycle
 * @param {number} number Number to be reversed
 * @returns {number} Reversed number
 */
export const reverseNumberByCycle = (number) => {
  let newNumber = '';
  let counter = String(number).length - 1;
  while (counter >= 0) {
    newNumber += String(number)[counter];
    counter -= 1;
  }
  return Number(newNumber);
};

// RECURSION AND SINGLE DIMENSION ARRAYS


