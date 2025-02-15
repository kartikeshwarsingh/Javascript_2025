// for-of loop

const arr = [1, 2,3, 4, 5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps   (Stores key-value pair like object but only unique not duplicate values)

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('USA', "United States of America")

// console.log(map)

for (const [key, value] of map) {
    // console.log(key, ':-', value)
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value)
// }


// for-each Loop

const coding = ["js", "cpp", "rb", "swift", "python"]

// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item ,index, arr);
    
// })

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },

    {
        languageName: "Python",
        languageFileName: "py"
    },

    {
        languageName: "C++",
        languageFileName: "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName)
    console.log(item.languageName)
})