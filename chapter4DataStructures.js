// Q.1 Sum of a range:
// // 1----- Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
// // 2-----Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
// // 3----As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
// //1
// function ranger(start, end) {
//     const rangeArr = [];
//     for (let i = start; i<=end; i++) {
//         rangeArr.push(i);
//     }
//     return(rangeArr)
// }

// //2
// function sum(arr) {
//     let arrCounter = 0;
//     for(elem of arr) {
//         arrCounter +=elem;
//     }
//     return arrCounter;
// }

// //3
// function rangeStep(start, end, step=1) {
//     const range = [];
//     for(let i=start; i<=end; i+=step) {
//         range.push(i);
//     }
//     return range;
// }

// Q2. Reversing an array
// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

function reverseArray(arr) {
    const reversedArr = [];
    for (let i =arr.length-1; i >=0; i--) {
        reversedArr.push(arr[i])
    }
    return reversedArr
}
// Function that mutates the arr. using Math.floor() and half of arr.length, so that it only loops through half of the arr, then switches places of the values from front to back and vice versa.
function reverseArrayInPlace(arr) {
    for (let i =arr.length-1; i >=Math.floor(arr.length/2); i--) {
        let previousValue = arr[i];
        // arr[i]=arr[arr.length-1-i];
        arr[i]= arr[arr.length-1-i];
        arr[arr.length-1-i] = previousValue;
        }
    return arr;
}
let arrs = ['a','b','c','d']
console.log(reverseArrayInPlace(arrs))