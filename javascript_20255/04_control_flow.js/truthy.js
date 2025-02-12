const userEmail = "singh@email.ai"

if(userEmail) {
    console.log("Got user email")
} else {
    console.log("Don't have user email")
}

/*
 Falsy values (Always considered false)
false, 0, -0, BigInt 0n, "", null, undefined, NaN

Truthy values
"0", 'false', " ", [], {}, function(){}
*/

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty")
// }

// Nullish Coalescing Opeartor (??): works only for null & undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15
val1 = null ?? 10 ?? 10


console.log(val1)

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("Greater than 80") : console.log("Less than 80")