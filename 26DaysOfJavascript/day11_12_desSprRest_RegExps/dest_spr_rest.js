//Destructing and Spread

//Destructing: Array'leri ve objeleri unpack etme ve farklı bir değişkene assign etme yoludur.
/*
//dizilerde

const numbers = [10, 12 ,14]
const [number1, number2, number3] = numbers

console.log(numbers[0]) //10
console.log(number1) //10

console.log(numbers[1]) //12
console.log(number2) //12

console.log(numbers[2]) //14
console.log(number3) //14
*/
//API'den gelen datalarda isimlendirerek çıkarmak işe yarar bir yöntem olabilir.
/*
const names = ['Cagatay', 'Mahmut', 'Teceryanidis', 'Joe']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)
*/
/*
const scientificBS = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificBS
console.log(e, pi, gravity, bodyTemp, boilingTemp)
*/
/*
const fullStack = [
    ['Html', 'Css', 'JS', 'Angular'],
    ['CSharp', 'EFCore', 'T-SQL']
]

const [frontEnd, backEnd] = fullStack

console.log(frontEnd)
console.log(backEnd)

//array'in içindeki array'in elemanalrı
const [[frontEndBasic, frontEndBasic2], [backEndBasic]] = fullStack
console.log(frontEndBasic, frontEndBasic2) //Html Css
console.log(backEndBasic) //CSharp
*/
/*
const fullStack = [
    ['Html', 'Css', ['JS', 'React', 'Svelte'], 'Angular'],
    ['CSharp', 'EFCore', 'T-SQL']
]

//const [[frontEndBasic, frontEndBasic2, frontEndAdvanced], [backEndBasic]] = fullStack
//console.log(frontEndAdvanced) //bir dizi olarak çıkar. ['JS', 'React', 'Svelte']

const [[frontEndBasic, frontEndBasic2, [frontEndAdvanced1]], [backEndBasic]] = fullStack
console.log(frontEndAdvanced1) //JS'i basar. Dizi içindeki dizinin dizisindeki ilk elemana eriştik. Diziception.
*/

//Bir değeri isimlendirmeden es geçmek istersek fazladan bir , kullanırız.
/*
const numbers = [1,2,3]

let[numOne, , numThree] = numbers
console.log(numOne, numThree)

let[, , num3] = numbers
console.log(num3)
*/

//eğer ki dizideki bir değer undefined ise array'i dağıtırken default bir değeri vererek dağıtabiliriz.
/*
const names = [undefined, 'Ali', 'Natalia']
let [
    firstPerson = 'Cagatay',
    secondPerson,
    thirdPerson,
    fourthPerson = 'John'
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson) //Cagatay Ali Natalia John
*/

//uzun dizilerde geri kalanı tanımlamak için ...rest kullanılabilir.
/*
const nums = [1,2,3,4,5,6,7,8,9]
let[num1, num2, num3, ...rest] = nums
console.log(num1, num2, num3) //1 2 3
console.log(rest) //(6) [4, 5, 6, 7, 8, 9] kalanı bir dizi halinde verir.
*/
/*
const names = ['Mahmut', 'Ali', 'Natalia', 'Brook', 'LeBron', 'Alperen', 'Yoda', 'Serpilay', 'Gamze']
let [
    firstPerson,
    secondPerson,
    thirdPerson,
    ...otherNames
] = names

console.log(firstPerson, secondPerson, thirdPerson)
console.log(otherNames) //(6) ['Brook', 'LeBron', 'Alperen', 'Yoda', 'Serpilay', 'Gamze']
console.log(...otherNames) //Brook LeBron Alperen Yoda Serpilay Gamze
*/

//iterasyon sırasında Destructing
/*
const countries = [
    ['Türkiye', 'Ankara'],
    ['Finland', 'Helsinki'],
    ['Norway', 'Oslo'],
    ['Sweden', 'Stockholm']
]

//yeni yöntem
for(const[country, city] of countries) {
    console.log(country, city)
}

//eski yöntem
for(const country of countries) {
    console.log(country)
}
//eski ama şık yöntem
for(const country of countries) {
    console.log(`Ülke: ${country[0]} - Başkent: ${country[1]}`)
}
*/
/*
const fullStack = [
    ['Html', 'Css', ['JS', 'React', 'Svelte'], 'Angular'],
    ['CSharp', 'EFCore', 'T-SQL']
]

for(const [first, second, third] of fullStack){
    console.log(first, second, third)
}
*/

//-----------------------------------------------

//Destructing Object : Objelerden bir property'i destruct etmek istediğimizde aktarılacak değişkenin adı o property ile aynı olmalıdır.
/*
const user = {
    name: 'Cagatay',
    surname: 'Demirtas',
    age: 29,
    pets: {
        cats: ['Pamuk'],
        dogs: ['Tarçın']
    }
}

const {surname} = user
console.log(surname)
*/
/*
const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
let {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter) //20 10 200 undefined
*/

//Renaming during structiring: yine aynı isimde olması lazım ama kullanırken farklı bir isimde kullanabiliriz.
/*
const user = {
    name: 'Cagatay',
    surname: 'Demirtas',
    age: 29,
    pets: {
        cats: ['Pamuk'],
        dogs: ['Tarçın']
    }
}

const {surname: soyad} = user
console.log(soyad)
*/

//key yoksa undefined olur. Bu durumda default değer verebiliriz.
/*
const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
let {width, height, area, perimeter = 4} = rectangle
console.log(width, height, area, perimeter) //perimeter varsayılan 4
*/

/*
function multiply(num1, num2) {
    return num1 * num2
}
console.log(multiply(10, 10))
*/
/*
function multiply(numbers) {
    return numbers[0] * numbers[1]
}  

const numbers = [10, 10]
console.log(multiply(numbers))
*/
/*
function multiply([number1, number2]) {
    return number1 * number2
}  

const numbers = [10, 10]
console.log(multiply(numbers))
*/
/*
const user = {
    name: 'Cagatay',
    surname: 'Demirtas',
    age: 28,
    pets: {
        cats: ['Pamuk'],
        dogs: ['Tarçın']
    },
    skills: ['C#', 'Html', 'Css', 'JS'],
    hobbies: ['Gaming', 'Reading']
}

function showUserInfo({name, surname, age, pets: {dogs, cats}, skills:[skill1, ...otherSkills], ...others}) {
    console.log(skill1, otherSkills, others)
    return `Merhaba, ben ${name} ${surname}, ${age} yaşındayım ve ${cats.length} kedim ${dogs.length}'de köpeğim var.`
}
console.log(showUserInfo(user))
*/

//Spread or Rest Operator

//E gördük zaten.

//Ek olarak bir diziyi başka bir diziye yaymakta da kullanılır.
/*
const countries = [
    'Syria',
    'Iraq',
    'Iran',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland',
    'Turkey'
]

let [gem, fra, , ...extremelyPowerfulCountries] = countries

console.log(gem, fra)
console.log(extremelyPowerfulCountries)
*/

//spread operator to copy array
/*
const evens = [0,2,4,6,8]
const evenNums = [...evens]

const odds = [1,3,5,7,9]
const oddNums = [...odds]

const wholeNuumbers = [...evens, ...odds]

console.log(evenNums)
console.log(oddNums)
console.log(wholeNuumbers)
*/

/*
const numbers = [1,3,5]
const numbers2 = numbers

console.log(numbers)
numbers2.push(10)
console.log(numbers) //Referans aldığı için numbers'ta etkilenir.
*/
//etkilenmemesi için
/*
const numbers = [1,3,5]
const numbers2 = [...numbers]

console.log(numbers)
numbers2.push(10)
console.log(numbers) //(3) [1, 3, 5] 10'un eklenmemiş olduğunu görürüz.
*/

//objelerde,
/*
const user = {
    name: 'Cagatay',
    surname: 'Demirtas'
}

const user2 = user
user2.name = 'Faruk'

console.log(user) //user2'deki değişiklikten user'da etkilendi. Çünkü yine referans işlemi yapıldı.
*/
//düzeltelim,
/*
const user = {
    name: 'Cagatay',
    surname: 'Demirtas'
}

const user2 = {...user}
user2.name = 'Faruk'

console.log(user) //{name: 'Cagatay', surname: 'Demirtas'}
//user etkilenmedi. değişiklik sadece user2'de yapıldı.
*/

//objeyi kopyalarken değiştiredebiliriz.
/*
const user = {
    name: 'Cagatay',
    surname: 'Demirtas'
}

const user2 = {
    ...user, //user'dan name surname'i alır.
    name: 'Farukcan', //her zaman son değer geçerli olacağından,
    surname: 'Kalkantaş' //yeni değerler eskileri ezer.
}

console.log(user)
console.log(user2)
*/

//arrow function'lar ile 
/*
const sumAllNums = (...args) => {
    console.log(args)
}

sumAllNums(1,2,3,4,5) //[1,2,3,4,5]
*/
/*
const sumAllNums = (...args) => {
    let sum = 0
    for(const num of args) {
        sum += num
    }
    return sum
}
console.log(sumAllNums(1,2,3,4,5)) //15
*/
/*
const numbers = [1,3,5]

console.log(
    [0, ...numbers,5 , 6] // (5) [0, 1, 3, 5, 5, 6]
)
*/