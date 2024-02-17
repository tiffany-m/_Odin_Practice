// Assignment 1
// The Fibonacci Sequence, which sums each number with the one before it, is a great example of a problem that can be solved recursively.
// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence.
// Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
// Now write another function fibsRec which solves the same problem recursively.

// Iteration
function fibs(num) {
  let newArr = [];
  let currentNum = 0;
  let nextNum = 1;
  let sum = 0;

  for (let i = 0; i < num; i++) {
    newArr.push(sum);

    currentNum = nextNum;
    nextNum = sum;
    sum = currentNum + nextNum;
  }

  return newArr;
}

console.log("Assignment 1 - Iteration", fibs(8));

// Recursion
// function fibsRec(num) {
//   let newArr = [];
//   let currentNum = 0;
//   let nextNum = 1;
//   let sum = 0;

//   if (num === 0) {
//     return newArr
//   } else {
//     newArr.push(sum);
//     currentNum = nextNum;
//     nextNum = sum;
//     sum = currentNum + nextNum;
//     num--

//     return fibsRec(num);
//   }
// }

let newArr = [];
let currentNum = 0;
let nextNum = 1;
let sum = 0;

function fibsRec(num) {
  if (num === 0) {
    return newArr;
  } else {
    newArr.push(sum);
    currentNum = nextNum;
    nextNum = sum;
    sum = currentNum + nextNum;

    return fibsRec(num - 1);
  }
}

console.log("Assignment 1 - Recursion", fibsRec(8, 0, 1, 0));
