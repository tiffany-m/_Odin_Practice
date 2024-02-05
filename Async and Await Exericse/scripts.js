// PROMISE
// const img = document.querySelector("img");
// fetch("https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats", {
//   mode: "cors",
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (response) {
//     img.src = response.data.images.original.url;
//   });

// ASYNC
const img = document.querySelector("img");

  async function getCats() {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=020EP8tODb1ySZNcVO7iWgWhEUqawzgT&s=cats",
      { mode: "cors" }
    );
    const catData = await response.json();
    img.src = catData.data.images.original.url;
  }
  getCats();


// ANOTHER EXAMPLE PROMISE
function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  })
}

async function addAsync(x) {
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    return x + a + b + c;
}

addAsync(10).then((sum) => {
  console.log(sum);
});