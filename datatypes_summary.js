// primitive datatypes
// 7 types: string, number, boolean, null, undefined, symbol, bigInt
// in primitive datatype we don't get the original value, we only get the copied 

//refernce (non primitive)
// arrays, objects, functions


//is js static or dyanamic

const hero = ["fashion", "fashion"]

let myObj = {
    name: "red",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World!");
}




//-----------------------------------------------------------------------------------------------

// stack(primitive),  heap(non-primitive)

// let myYoutubeName = "red"
// let anotherName = myYoutubeName
// anotherName = "pearl" // the real value is not changing because it is using stack memory

// console.log(myYoutubeName)
// console.log(anotherName)


let userOne = {
    email: "user@gmail.com",
    upi: "user@bl"
}

let userTwo = userOne;// this time the real value will change because it is using heap meomry

userTwo.email = "red@gmail.com"