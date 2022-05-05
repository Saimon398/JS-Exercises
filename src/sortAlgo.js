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

/**
 * Sort elements by comb sort (in-place).
 * This sort is simple and a bit more effective than bubble sort
 * @param {object} coll Collection to be sorted
 * @returns Sorted collection
 */
const combSort = (coll) => {
  const collLength = coll.length;
  const factor = 1.247;
  let gapFactor = collLength / factor;
  while(gapFactor > 1) {
    const gap = Math.round(gapFactor);
    for(let i = 0, j = gap; j < collLength; i++, j++) {
      if(coll[i] > coll[j]) {
        [coll[i], coll[j]] = [coll[j], coll[i]];;
      }
    }
    gapFactor = gapFactor / factor;
  }
  return coll;
};

