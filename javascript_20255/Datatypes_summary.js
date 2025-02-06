// Primitive
// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

 const bigNumber = 3433383992876363787885n


// Reference (Non Primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 21
}

const myFunction = function(){
    console.log("Hello World")
}

// console.log(typeof(myFunction))
// console.log(typeof(heroes))
// console.log(typeof(null))




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "singhdesignddotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

// console.log(myYoutubename)
// console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"
userTwo.upi = "singh@ybl"

console.log(userOne.email)
console.log(userTwo.email)

console.log(userOne.upi)
console.log(userTwo.upi)