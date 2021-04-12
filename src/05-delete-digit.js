/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let toArr = (`${n}`).split('');
  let newNum = 0;
  let endNum = 0;
  for (let i = 0; i < toArr.length; i++) {
    toArr.splice(i, 1);
    newNum = toArr.join('') * 1;
    if (newNum > endNum) {
      endNum = newNum;
    }
    toArr = (`${n}`).split('');
  }
  return endNum;
}

module.exports = deleteDigit;
