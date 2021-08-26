function bubbleSort(array) {
  let needToIterate = true; // Assume the worst: iterate at least once.

  let end = array.length - 1;

  while (needToIterate === true) {
    needToIterate = false; // Assume the best case.

    for (let i = 0; i < end; i++) {
      if (array[i] > array[i+1]) {
        // Destructuring for parallel assignment
        [ array[i], array[i+1] ] = [ array[i+1], array[i] ];
        needToIterate = true;
      }
    }
  }
  end--;

  return array;
}

module.exports = bubbleSort;
