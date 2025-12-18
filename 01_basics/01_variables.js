const accountId = 144553
let accountEmail = "atul@gmail.com"
var accountPassword = "12345"
accountCity = "Varanassi"
let accountState;

// accountId = 2 // not allowed


accountEmail = "Ay@.com"
accountPassword = "21212121"
accountCity = "varaansi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
