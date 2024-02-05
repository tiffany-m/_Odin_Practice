// let myPromise = new Promise((resolve, reject) => {
//   // "Producing Code" (May take some time)
//   const a = 1 + 2;

//   if (a == 2) {
//     resolve("Success"); // when successful
//   } else {
//     reject("Fail"); // when error
//   }
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// // anything in .then runs for resolve
// myPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     //catches any reject/errors
//     console.log(err);
//   });

// fetch("url")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Exercises https://www.youtube.com/watch?v=ZJ3MdnzXCG4
// Exercise Warm Up --------------------------------------------------------------------------
// console.log("Program Started!");

// const myPromise1 = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     resolve("Program complete");
//   }, 3000);

// })

// console.log(myPromise1)
// console.log("Program in Progress")

// myPromise1
// .then((value) => {
//   console.log(value)
// })

// Exercuse 1 ----------------------------------------------------------------------------------
// console.log("Program Started")

// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve()
//   }, 3000)

//   setTimeout(() => {
//     reject()
//   }, 2000)
// })

// console.log(myPromise2)
// console.log("Program in Progress")

// myPromise2
// .then(() => {
//   console.log("Program Complete");
// })
// .catch(() => {
//   console.log("Program Faliure");
// })

// Exercise 2 ---------------------------------------------------------------------------------------
// console.log("Program Started");

// const myPromise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 3000);
// });

// console.log(myPromise3);
// console.log("Program pending");

// myPromise3
//   .then(() => {
//     console.log("Step 1 Complete");

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Step 2 Complete");
//       }, 3000);
//     });
//   })
//   .then((value) => {
//     console.log(value);
//   });

// Exercise 3 --------------------------------------------------------------------------------------------
// Both Promise chains run in parallel
// console.log("Program Started");

// const myPromise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ data: "Hello Friend!", error: null });
//   }, 5000);
// });

// console.log(myPromise4);
// console.log("Program Pending");

// Takes 7 seconds
// myPromise4
//   .then((value) => {
//     console.log(value);

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("First Promise Chain Complete");
//       }, 2000);
//     });
//   })
//   .then((value) => {
//     console.log(value);
//   });

// Takes 15 seconds
// myPromise4.then((value) => {
//   console.log(value);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Second Promise Chain Complete");
//     }, 10000);
//   });
// })
// .then((value) => {
//   console.log(value)
// })

// Bonus ----------------------------------------------------------------------------------------
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

console.log(myPromise1, myPromise2);

Promise.all([myPromise1, myPromise2]).then((values) => {
  let value1 = values[0];
  let value2 = values[1];
  let sum = value1 + value2;

  console.log(sum);
});
