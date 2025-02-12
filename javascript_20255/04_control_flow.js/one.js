// if

const isUserloggedIn = true
const temperature = 41

// if(temperature < 50){
//     console.log("Less than 50")
// }

/* comparison operations

<, <, <=, >=, ==, !=, ===, !==

*/

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`)
// }

// console.log(`user power: ${power}`)

const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2");

// if(balance < 500) {
//     console.log("less than 500")
// }else if (balance < 750) {
//     console.log("less than 750")
// }else{
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to Buy course!")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in")
}