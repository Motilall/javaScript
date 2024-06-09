const accountId = 144553
let accountEmail = "wow@gmail.com"
var accountPassword = "12345"
accoutnCity = "BBSR "
let accountState;

// accountId = 2   //not allowed
accountEmail = "bs@bs.com"
accountPassword = "121212"
accoutnCity = "Angul"


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accoutnCity, accountState])

/* 
    Prefer not to use var 
    because of issue in block scope and functional scope
*/