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

console.log(typeof(myFunction))
console.log(typeof(heroes))
console.log(typeof(null))