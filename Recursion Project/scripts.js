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
// function fibsRec(num, arr = [0, 1]) {
//   if (num === 0) return [];
//   if (num === 1) return [0];
//   if (num === 2) return arr.slice(0, num);

//   const nextNum = arr[arr.length - 1] + arr[arr.length - 2];
//   arr.push(nextNum);

//   return arr.length === num ? arr : fibsRec(num, arr);
// }

function fibsRec(num, currNum, nextNum, newArr) {
  let sum = 0

  if (num === 0) return newArr;

  newArr.push(currNum)
  sum = currNum + nextNum

  return fibsRec(num - 1, currNum = nextNum, nextNum = sum, newArr)
}

console.log("Assignment 1 - Recursion", fibsRec(8, 0, 1, []));
