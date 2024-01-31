// fetch("url.url.com/api", {
//   mode: "cors",
// });

const img = document.querySelector("img");
const btn = document.getElementById("btn");
const submit = document.getElementById("submit");
const searchBar = document.getElementById("searchBar");

function errorMessage() {
  alert('Please enter a valid search term');
}

submit.addEventListener("click", () => {
  let searchBarValue = searchBar.value;

  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=020EP8tODb1ySZNcVO7iWgWhEUqawzgT&s=${searchBarValue}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch(errorMessage)
});