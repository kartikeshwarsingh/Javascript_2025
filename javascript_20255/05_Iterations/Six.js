// map() method
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) =>  {return num + 10})

// const newNums = myNumbers
//                 .map((num) => num * 10)
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)


// console.log(newNums)

// Reduce Method

const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "Data science course",
        price: 12999
    }
]

const priceTopay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceTopay)

