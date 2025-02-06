const name = "singh"
const repoCount = 7

// console.log(name + repoCount)

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)  // String interpolation (Follow this not '+')

const gameName = new String('GodofWar')

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 4)
// console.log(newString)

const anotherString = gameName.slice(-7, 4)
console.log(anotherString)

const newString1 = "  hitesh   "
// console.log(newString1);
// console.log(newString1.trim())

const url = "https://singh.com/singh%20kartik"
// console.log(url.replace('%20', '-'))

// console.log(url.includes('kartik'))
// console.log(url.includes('dotcom'))

const gameName1 = "Red/dead/Redemption"
console.log(gameName1.split('/'))
