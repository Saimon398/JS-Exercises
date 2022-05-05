/**
 * Sort elements by bubble sort (in-place). Complexity - O(n^2)
 * This sort is simple but not effective
 * @param {object} coll Collection to be sorted
 * @returns Sorted collection
 */
const bubbleSort = (coll) => {
  for(let j = coll.length - 1; j > 0; j--) {
    for(let i = 0; i < j; i++) {
      if(coll[i] > coll[i + 1]) {
        let currentElement = coll[i];
        coll[i] = coll[i + 1];
        coll[i + 1] = currentElement;
      }
    }
  }
  return coll;
};
