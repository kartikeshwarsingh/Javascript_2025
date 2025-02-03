const account_Id = 144553
let accountEmail = "singh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// account_Id = 2  // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(account_Id)

console.table([account_Id, accountEmail, accountPassword, accountCity, accountState])

/* 
Prefer not to use var
- Because of issue in block scope and functional scope
*/