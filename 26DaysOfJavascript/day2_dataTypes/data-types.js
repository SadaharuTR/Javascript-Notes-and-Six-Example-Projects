/*
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo) //true

let js = 'JavaScript'
let pyt = 'Python'

console.log(js == pyt) //false

let lightOn = true
let lightOff = false
let sayi = 1

console.log(lightOff == lightOn) //false
console.log(sayi == lightOn) //true
*/

/*------------------*/

/*
let nums = [1, 2, 3]
console.log(nums)
let nums2 = [1, 'mahmut', null, undefined, []]
console.log(nums2)

nums[0] = 10
console.log(nums)
console.log(nums[1])
console.log(nums[2])

let numsClone = [1, 2, 3]
console.log(nums == numsClone) //false, non-primitives cannot be compared by value
console.log([1,2,3] == [1,2,3]) //false

let userOne = {
    name:'Cagatay',
    surName:'Demirtas'
}
let userTwo = {
    name:'Cagatay',
    surName:'Demirtas'
}

console.log(userOne == userTwo)
*/

// let nums1 = [1, 2, 3]
// let nums2 = nums1
// console.log(nums1 == nums2)

/*---------------------------*/

//numbers - number data types
/*
let age = 35
const gravity = 9.81
let mass = 72
const PI = 3.14

const boilingPoint = 100
const bodyTemp = 37

console.log(nums1, nums2, gravity, mass, PI, boilingPoint, bodyTemp)
*/

//math object
/*
const PI = Math.PI
console.log(PI)

console.log(Math.round(PI)) //3
console.log(Math.round(9.81)) //10
console.log(Math.floor(PI)) //3
console.log(Math.floor(9.81)) //9
console.log(Math.ceil(PI)) //4
console.log(Math.min(-5, 3, 20, 4, 5, 110)) //-5

const ranNum = Math.random() //random number between 0-1
console.log(ranNum)

const num = Math.floor(Math.random() * 11) //random number between 0-10
console.log(num)

console.log(Math.abs(-100)) //absolute

console.log(Math.sqrt(100)) //square root
console.log(Math.sqrt(2)) //square root

console.log(Math.pow(3,4)) //power
console.log(3**4)

console.log(Math.E) //Euler

Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)
*/

/*------------------------- */

//Strings

let space = ' '
let firstName = 'Cagatay'
let lastName = 'Demirtas'
let country = 'Turkey'
let age = 28
let quote = "The saying, 'Seeing is Believeing' is not correct in 2020"
let quoteBackTick = `The saying, 'Seeing is Believeing' is not correct in 2020.`

console.log(space, firstName, quote, quoteBackTick)

//string concatenation
/*
//the old way
let fullName = firstName + space + lastName
console.log(fullName)

let fullName2 = firstName + ' ' + lastName
console.log(fullName2)
//ES6 way suggested. (later)
//---------------------------

let fullName3 = firstName + space + lastName
let personInfoOne = fullName + ' I am ' + age + '. I live in ' + country + '.'; //ES5 string addition
console.log(personInfoOne)
*/

//Escape Squences
/*
let paragraph2 = "menim\nadım\ncagatay\ndemirtas"
console.log(paragraph2)

let name = "caga\\tay"
console.log(name)

let room = "cagatay'in odası"
let room2 = 'cagatay\'in odası'
let room3 = 'cagatay"in odası'

console.log(room3)
*/

//Template strings
/*
let fullName = `${firstName} 
${lastName}`
console.log(fullName)

let a = 5
let b = 4

let fullName2 = `${firstName} 
ali
veli
123
a + b = ${a + b}
${a} + ${b} = ${a + b}
${lastName}`
console.log(fullName2)

//ES6 string interpolation method
let personInfoTwo = `I am ${firstName}. I am ${age}. I live in ${country}.`
console.log(personInfoTwo)

let a1 = 2
let b1 = 3
console.log(`Is ${a} greater than ${b}?: ${a>b}`)
*/

//String Methods
/*
let js = 'Javaskrip123'
console.log(js.length)

let dizi = ['c', 'a', 'g', 'a', 't', 'a', 'y']
console.log(dizi[0])
console.log(dizi[6])

console.log(js.toUpperCase())
console.log(js.toLocaleLowerCase())

console.log(js.substr(4,6)) //start from 4th index and take next 6
console.log(js.substring(4,8)) //take between 4 and 8

let fullName = 'ahmet cagatay demirtas'
console.log(fullName.split()) //['ahmet cagatay demirtas']

console.log(fullName.split('')) //her harfi diziye böl
//['a', 'h', 'm', 'e', 't', ' ', 'c', 'a', 'g', 'a', 't', 'a', 'y', ' ', 'd', 'e', 'm', 'i', 'r', 't', 'a', 's']

console.log(fullName.split(' ')) //boşluk karakterinden itibaren böl ve diziye çevir.
//['ahmet', 'cagatay', 'demirtas']
*/
/*
'cagatay'.split('')
(7) ['c', 'a', 'g', 'a', 't', 'a', 'y']
'cagatay'.split('').reverse()
(7) ['y', 'a', 't', 'a', 'g', 'a', 'c']
'cagatay'.split('').reverse().join('')
'yatagac'
*/

//console.log('  asdsadas asdasdf'.trim())
/*
let string = '30 Days of Javascript'

console.log(string.includes('Days'))
console.log(string.includes('days')) //case sensitive
console.log(string.includes(' of'))
console.log(string.includes('scr'))
console.log(string.includes('30'))

console.log(string.replace('Javascript', 'Python')) //30 Days of Python, bir kere değiştirir.
console.log(string) //30 Days of Javascript

let string2 = 'bol a olan bir a cümlesi a'
console.log(string2.replaceAll('a','b')) //tüm a'ları b ile değiştir.

console.log(string.charAt(0))
console.log(string.charAt(3))

let lastIndex = string.length - 1
console.log(string.charAt(lastIndex))

console.log(string.charCodeAt(lastIndex)) //ascii

console.log(string.indexOf('D')) //3
console.log(string.indexOf('Days')) //3
console.log(string.indexOf('days')) //-1
console.log(string.indexOf('a')) //4
console.log(string.indexOf('Javascript')) //11

console.log('-----------')

let string3 = 'I love Rock n Roll. If you do not love Rocka Rolla what else can you even love.'

console.log(string3.lastIndexOf('love')) //74
console.log(string3.lastIndexOf('n')) //72
console.log(string3.lastIndexOf('do')) //27
console.log(string3.lastIndexOf('Roll')) //45
console.log(string3.lastIndexOf('.')) //78
console.log(string3.lastIndexOf(',')) //-1

console.log('-----------')

let loveString = 'Love is the best thing after potato chips' 

console.log(loveString.startsWith('Love'))
console.log(loveString.startsWith('love'))
console.log(loveString.startsWith('chips'))

console.log(loveString.endsWith('Love'))
console.log(loveString.endsWith('chips'))
console.log(loveString.endsWith(' potato chips'))

console.log('love'.repeat(10))
*/

//Changing data types (casting)

//string to int
/*
let num = '10'
let num2 = '50'
console.log(typeof(num))
let numInt = parseInt(num)
console.log(typeof(numInt))

console.log(typeof(Number('5')))

console.log(typeof+('5'))
console.log(typeof+num2)
let num3 = +num2
console.log(typeof(num3))
*/

//strig to float
/*
let num = '9.81'
let numFloat = parseFloat(num)
console.log(numFloat)
console.log(typeof(numFloat))

*/

//float to int
/*
let num = '9.81'
let numInt = parseInt(num)
console.log(numInt) //9
console.log(typeof(numInt)) 
*/