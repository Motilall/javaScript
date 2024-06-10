let score = "33abc"

console.log(typeof score)

let valueInNumber = Number(score) // NaN --> not a number
console.log( valueInNumber)

// 33 --> 33
// "33" --> 33
// "33abc" --> NaN
// true --> 1
// false --> 0


let isLoggedIn = 1;

let  booleanIsLoggedIn = Boolean(isLoggedIn) // this statement is used for conversion
console.log(booleanIsLoggedIn)


// 0 --> false
// 1 --> true 
// "" --> false
// "anything" --> true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber)