/*
  Here you can find a manual implementation of methods for Strings
*/

// Array.prototype.includes()

/**
 * This function checks if the given collection includes number
 * @param {object} collection Collection
 * @param {number} number Number
 * @returns {boolean} Result of checking
 */
const includes = (collection, number) => {
  const iter = (index) => {
    if (index >= collection.length) {
      return false;
    }
    return collection[index] === number ? true : iter(index + 1);
  };
  return iter(0);
};

/**
 * This function flattens a given array
 * @param {object} collection 
 * @returns flattened array
 */
const flatten = (collection) => {
  return [].concat(...collection.map(item => {
    if(Array.isArray(item)) {
      return flatten(item);
    }
    return item;
  }));
};



