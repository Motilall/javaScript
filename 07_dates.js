let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0 ,23, 5, 3);// Month starts form 0 in javascript 
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2023-01-23");// but here the months will start from 1 
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // to convert it into the seconds

let newDate = new Date();
// console.log(newDate);

newDate.toLocaleString('default',{
    weekday: "long",
})