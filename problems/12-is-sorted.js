/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/


function isSorted(arr) {
    // base case : if the array has either 0 or 1 element, it is sorted.
  if(arr.length <= 1){
    return true;
  }
  // Check if the first two elements are in ascending order
  if (arr[0] < arr[1]){
  return isSorted(arr.slice(1))
}
     return false
}

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 2, 4, 3, 5])); // false
console.log(isSorted([2, 4, 6, 7, 8])); // true
console.log(isSorted([5, 4, 3, 2, 1])); // false

//// slicing from the beginning above ^ from the end below \/

let isSorted2 = function(arr) {
    if(arr.length <= 1) return true;
        let last = arr[arr.length - 1];
        console.log(last);
        let secondL = arr[arr.length - 2];
        console.log(secondL);
    if(secondL < last) {
        return isSorted2(arr.slice(0, -1))
    }
    return false;
}

console.log(isSorted2([1, 2, 3, 4, 5])); // true
console.log(isSorted2([1, 2, 4, 3, 5])); // false
console.log(isSorted2([2, 4, 6, 7, 8])); // true
console.log(isSorted2([5, 4, 3, 2, 1])); // false


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
