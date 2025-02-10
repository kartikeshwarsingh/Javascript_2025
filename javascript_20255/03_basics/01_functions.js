function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("M")
    console.log("A")
    console.log("N")
}

// sayMyName()  (function call)
// sayMyName   (reference to function)

// function addTwoNumbers(number1, number2) /* parameters*/{
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    // console.log(result)
    return number1 + number2
}

// addTwoNumbers(4, "a")  // arguments

const result = addTwoNumbers(3, 5)
// console.log("Result:", result)

function loginUserMessage(username){
    if/*(username === undefined)*/ (!username){
       console.log("Please enter a username")
       return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Singh"))
console.log(loginUserMessage("Rahul"))