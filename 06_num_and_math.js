const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 23.8966;

// console.log(otherNumber.toPrecision(3));

const hundreds = 100000;
// console.log(hundreds.toLocaleString('en-IN'));



// ++++++++++++++++++++++ MATHS ++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));// change the value
// console.log(Math.round(4.6));// gives estimated value
// console.log(Math.ceil(4.2)); // it will chose the top value only, even if it is slightly bigger
// console.log(Math.floor(4.3)); // it will chose the bottom value
// console.log(Math.min(2,3,5,6,1)); // for minimum value
// console.log(Math.max(2,3,51,7,2)); // for maximum value

console.log(Math.random());// gives me a random number
console.log((Math.random()*10) + 1);// it will not return 0
console.log(Math.floor(Math.random()*10) + 1);// random vlaue of one digit


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random vlaue between 10 to 20 