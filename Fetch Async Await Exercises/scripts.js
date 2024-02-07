// https://www.youtube.com/watch?v=_tYZSrwzOD0
// Exericse 1 -----------------------------------------------------------------------

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   console.log(response);

//   const data = await response.json()
//   console.log(data)
// }

// getData();

// Exercise 2 --------------------------------------------------------------------------------
// async function getData() {
//   const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//   console.log(response)

//   const data = await response.json()
//   console.log(data)

//   console.log(data.sprites.other['official-artwork'].front_default);

// }

// getData();

// Exercise 3 --------------------------------------------------------------------------------
// Not working because not using node stuff.
// wallpaper url https://w.wallhaven.cc/full/2y/wallhaven-2yjp6x.png
// import fetch from "node-fetch"
// import fs from "fs/promises"

// async function getImage() {
//   const response = await fetch(
//     "https://w.wallhaven.cc/full/2y/wallhaven-2yjp6x.png"
//   );
//   console.log(response);

//   const data = await response.arrayBuffer();
//   console.log(data);

//   const image = await fs.writeFile("wallpaper.png", Buffer.from(data));
// }

// getImage();

//