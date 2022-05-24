
/**
 * Insertion Sort
 * @param {object} coll Collection to be sorted
 * @returns Sorted collection
 */
const insertionSort = (coll) => {
  for(let i = 1; i < coll.length; i += 1) {
    let k = i;
    while(k > 0 && coll[k - 1] > coll[k]) {
      const temp = coll[k];
      coll[k] = coll[k - 1];
      coll[k - 1] = temp;
      k -= 1;
    }
  }
  return coll;
};

/**
 * Bubble Sort
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

const first = [1, 0, 2, 5, 1, 2, 0, -4];


/**
 * Merge two collections 
 * @param {object} leftColl First collection
 * @param {object} rightColl Second collection
 * @returns {object} Merged collection
 */
const mergeColls = (leftColl, rightColl) => {
  const resultColl = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < leftColl.length && rightIndex < rightColl.length) {
    const leftElement = leftColl[leftIndex];
    const rightElement = rightColl[rightIndex];
    if(leftElement < rightElement) {
      resultColl.push(leftElement);
      leftIndex += 1;
    } else {
      resultColl.push(rightElement);
      rightIndex += 1;
    }
  }
  return resultColl.concat(leftColl.slice(leftIndex)).concat(rightColl.slice(rightIndex));
};

/**
 * Merge Sort
 * @param {object} coll Collection to be sorted
 * @returns Sorted collection
 */
const mergeSort = (coll) => {
  if(coll.length <= 1) {
    return coll;
  }

  const middleIndex = Math.trunc(coll.length / 2);
  const left = coll.slice(0, middleIndex);
  const right = coll.slice(middleIndex);

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  return mergeColls(leftSorted, rightSorted);
};

/**
 * Quick Sort
 * @param {object} coll Collection to be sorted
 * @returns Sorted collection
 */
const quickSort = (coll) => {
  if(coll.length < 2) {
    return coll;
  }
  const [pivot] = coll;
  const smallerElements = [];
  const biggerElements = [];

  for(let i = 1; i < coll.length; i++) {
    if(coll[i] < pivot) {
      smallerElements.push(coll[i]);
    } else {
      biggerElements.push(coll[i]);
    }
  }
  return quickSort(smallerElements).concat(pivot, quickSort(biggerElements));
};

