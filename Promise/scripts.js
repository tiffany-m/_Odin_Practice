let myPromise = new Promise((resolve, reject) => {
  // "Producing Code" (May take some time)
  const a = 1 + 2;

  if (a == 2) {
    resolve("Success"); // when successful
  } else {
    reject("Fail"); // when error
  }
});

// "Consuming Code" (Must wait for a fulfilled Promise)
// anything in .then runs for resolve
myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    //catches any reject/errors
    console.log(err);
  });

  

fetch("url")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
