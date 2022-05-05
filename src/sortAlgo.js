/**
 *Bubble Sort
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
 * Comb Sort
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

/**
 * Find min index in the collection
 * @param {collection} coll Analyed collection
 * @returns {number} Min index
 */
const findMinIndex = (coll) => {
  let minIndex = 0;
  for(let i = 0; i < coll.length; i++) {
    const minElement = coll[minIndex];
    const element = coll[i];
    if(element < minElement) {
      minIndex = i;
    }
  }
  return minIndex;
};

/**
 * Selection sort
 * @param {object} coll Collection to be sorted
 * @returns Sorted collection
 */
const selectionSort = (coll) => {
  const result = [];
  while(coll.length !== 0) {
    const minIndex = findMinIndex(coll);
    result.push(coll[minIndex]);
    coll.splice(minIndex, 1)
  }
  return result;
};
