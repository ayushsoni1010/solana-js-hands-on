// const a = 15;
// const b = 11;

// if (a > b) {
//   console.log("A is greater");
// } else {
//   console.log("B is greater");
// }

// // For loop basics
// // initialize
// // condition
// // initializer

// try {
//   if (a > b) {
//     console.log("GM");
//   } else {
//     throw new Error("Say GM");
//   }
// } catch (err) {
//   console.log(err);
// }

// const square = (x) => x * x;

// console.log(square(10));

const Quote = require("inspirational-quotes");

const cowText = Quote.getQuote(); // returns quote (text and author)
console.log(Quote.getQuote({ author: false }));
console.log(Quote.getRandomQuote()); // return any random quote

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: cowText.text,
    e: "oO",
    T: "U ",
  })
);
