const user = {
    username : "Kartikeshwar",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "Singh"
//     console.log(this.username)
// }

// chai()


// Arrow Function
const chai = () => {
    let username = "Rahul"
    console.log(this)
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2)   // Implicit return 

const addTwo = (num1, num2) => ({username: "hitesh"})   

console.log(addTwo(4, 6))