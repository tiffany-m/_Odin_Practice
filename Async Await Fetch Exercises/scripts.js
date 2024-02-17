// https://www.youtube.com/watch?v=_tYZSrwzOD0
// Exericse 1 --------------------------------------------------------------------

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   console.log(response);

//   const data = await response.json()
//   console.log(data)
// }

// getData();

// Exercise 2 -----------------------------------------------------------------------
// async function getData() {
//   const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//   console.log(response)

//   const data = await response.json()
//   console.log(data)

//   console.log(data.sprites.other['official-artwork'].front_default);

// }

// getData();

// Exercise 3 ------------------------------------------------------------------------
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

// https://www.youtube.com/watch?v=dIOhHgreIbE -----------------------------------------------------------------------------------
// Warmup

// function fetchPokemon() {
//   return new Promise((resolve, reject) => {
//     //   setTimeout(() => resolve({ data: { name: "Pickachu", power: 20 } }), 2000);
//     // })
//     setTimeout(() => {
//       reject('Danger, danger!')
//     }, 2000)
//   })
// }

// console.log("Program Starting");

// async function useFetchPokemon() {
//   try {
//     const data = await fetchPokemon();
//     console.log(data);
//     console.log('Done Fetching')
//   } catch (error) {
//     console.log(error)
//   }
// }

// useFetchPokemon();
// console.log("Program Complete");

// Exercise 1 -----------------------------------------------------------------------------------------
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ data: { user: "Monkey", admin: true } });
//     }, 3000);
//   });
// }

// function login(obj) {
//   if (obj.admin === true) {
//     console.log("Sucessfully logged in!");
//   } else {
//     console.log("Failed to log in, please try again!");
//   }
// }

// console.log("Program Starting...");

// async function userLoggingIn() {
//   let user = await fetchUser();

//   console.log(user);
//   login(user.data);
// }

// userLoggingIn();
// console.log("Program Completed!");

// Exercise 2 --------------------------------------------------------------------
// function fetchFast() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Fast Done!");
//     }, 2000);
//   });
// }

// function fetchSlow() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Slow Done!");
//     }, 6000);
//   });
// }

// console.log("Program Starting...");

// async function fetching() {
//   let fast = await fetchFast();
//   console.log(fast);

//   let slow = await fetchSlow();
//   console.log(slow);
// }

// fetching();
// console.log("Program Complete!");

// Exercise 3 -------------------------------------------------------------------
// function goGetCandies() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ candy: "sour keys", quantity: 10 });
//     }, 2000);
//   });
// }

// function sellCandies(obj) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${(obj.quantity * 25)}`);
//     }, 3000);
//   });
// }

// async function moneyMade() {
//   let candyData = await goGetCandies()
//   let saleData = await sellCandies(candyData)

//   console.log(`We made ${saleData} cents after selling the candy`)
// }

// console.log("Program Starting...")
// moneyMade()
// console.log("Program Complete.")