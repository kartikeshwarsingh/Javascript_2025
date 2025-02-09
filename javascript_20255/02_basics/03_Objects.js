// singleton

// object literals
//Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "Singh",
    "fullname": "Kartikeshwar Singh",
    [mySym]: "mykey1",
    age: 21,
    location: "Jammu",
    email: "singh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["fullname"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser.mySym)

// JsUser.email = "singh01@chatgpt.com"
// console.log(JsUser.email)
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User")
}

JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())