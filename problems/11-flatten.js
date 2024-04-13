/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten2([]); // []
flatten2([1, 2]); // [1, 2]
flatten2([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/


function flatten(arr) {
    if(arr.length === 0) {
        return [];
    }

    // if first element is an array, recursively flatten it
    if(Array.isArray(arr[0])) {
                                              // slices everything off of the first index
        return flatten(arr[0]).concat(flatten(arr.slice(1)));
    }
    // if element is not an array, put it in array and concat with flatten remainder of array
    return [arr[0]].concat(flatten(arr.slice(1)));
}


// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
// console.log(flatten([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(flatten([1,
                      [2,
                        [3]]])); // [1, 2, 3]



// first try not working
// let newArr = [];

// function flatten2(arr) {
//     if(arr.length === 0) {
//         return arr;
//     } else {
//         console.log(arr);
//         let last = arr[arr.length-1];
//         console.log(last);

//         arr.pop(last);
//         console.log(arr);
//         newArr.push(last);
//         console.log(newArr);

//         return flatten2(arr);
//     }

// }

// console.log(flatten2([])); // []
// console.log(flatten2([1, 2])); // [1, 2]
// console.log(flatten2([1,
//                       [2,
//                         [3]]])); //


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
