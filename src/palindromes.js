/*
  Here you can find solutions to palindromes 
  If you have your own working solution - do not hesitate to share it
*/

/**
 * This functions checks if the given word is a palindrome 
 * by comparing first and last symbols step by step
 * @param {string} word Word which is has to be checked if one is a palindrome
 * @returns {boolean} Result of checking
 */
export const isPalindrome_1 = (word) => {
  const wordLength = word.length;
  if (wordLength < 2) {
    return true;
  }
  const firstChar = word[0];
  const lastChar = word[wordLength - 1];
  if (firstChar !== lastChar) {
    return false;
  }
  const wordWithNoFirstAndLastChars = word.substring(1, lastChar);
  return isPalindrome(wordWithNoFirstAndLastChars);
};

/**
 * This functions checks if the given word is a palindrome 
 * by creating new string, filling it by symbols backward and comparing with 
 * the given one
 * @param {string} word Word which is has to be checked if one is a palindrome
 * @returns {boolean} Result of checking
 */
export const isPalindrome_2 = (word) => {
  let newWord = '';
  for(let i = word.length - 1; i >= 0; i -= 1) {
    newWord += word[i];
  }
  return word === newWord;
};

