// Assignment 1
// The Fibonacci Sequence, which sums each number with the one before it.
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
function fibsRec(num, currNum, nextNum, newArr) {
  let sum = 0;

  if (num === 0) return newArr;

  newArr.push(currNum);
  sum = currNum + nextNum;

  return fibsRec(num - 1, (currNum = nextNum), (nextNum = sum), newArr);
}

console.log("Assignment 1 - Recursion", fibsRec(8, 0, 1, []));

// Assignment 2
// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
// An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13],
// and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].
// Tips:
//     Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same function!).
//     It may be helpful to check out the background videos again if you don’t quite understand what should be going on.

//function to sort the given array
function mergeSort(arr) {
   if (arr.length <= 1) {
      return arr;
   }

   const mid = Math.floor(arr.length / 2);
   const left = arr.slice(0, mid);
   const right = arr.slice(mid);

   return merge(mergeSort(left), mergeSort(right));
}
 
//function to merge the left and right elements
function merge(left, right) {
   const result = [];
    
   while (left.length && right.length) {
      if (left[0] < right[0]) {
         result.push(left.shift());
      } else {
         result.push(right.shift());
      }
   }

   return [...result, ...left, ...right];
}


console.log("Assignment 2", mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));

