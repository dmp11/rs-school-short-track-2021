/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const ar = arr;
  let swap = 0;
  let n = 0;
  for (let i = 0; i < ar.length - 1; i++) {
    n = 0;
    for (let j = 1; j < ar.length - i; j++) {
      if (ar[j] !== -1) {
        if (ar[n] > ar[j]) {
          swap = ar[j];
          ar[j] = ar[n];
          ar[n] = swap;
        }
        n = j;
      }
    }
  }
  return ar;
}

module.exports = sortByHeight;
