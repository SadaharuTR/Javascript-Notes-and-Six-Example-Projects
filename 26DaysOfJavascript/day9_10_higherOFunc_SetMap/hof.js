//Yüksek Mertebe Fonksiyonlar: Parametre olarak başka bir fonksiyonu alan ve/veya sonuç olarak //başka bir fonksiyonu dönen fonksiyonlardır.

//callback: bir başka fonksiyona parametre olarak geçebilen bir fonksiyondur.
/*
//bir callback fonksiyonudur. ismi callback olmak zorunda değildir.
const callback = (n) => {
    return n ** 2;
}
////bir başka fonksiyonu callback olarak alan fonksiyon

function cube(callback, n) {
    return callback(n) * n
}
console.log(cube(callback, 3)) //27
*/
/*
const fonksiyon = number => number ** 2
function cube(cb, number) {
    return cb(number) * number 
}
console.log(cube(fonksiyon, 3))
*/

//returning function

//geriye değer olarak fonksiyon döndürme işlemi
/*
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))
*/
/*
const a = s1 => {
    const b = s2 => {
        const c = s3 => {
            return s1 + s2 + s3
        }
        return c
    }
    return b
}
console.log(a(5)(10)(15))
*/

//forEach, call back kullanır.
/*
const numbers = [1,2,3,4]
const sumArray = arr => {
    let sum = 0
    const callback = function(element) {
        sum += element
    }
    arr.forEach(callback)
    return sum
}
console.log(sumArray(numbers))
*/

//or
/*
const numbers = [1,2,3,4]
const sumArray = arr => {
    let sum = 0
    arr.forEach(function(element) {
        sum+=element
    })
    return sum
}
console.log(sumArray(numbers))
*/
//or
/*
const numbers = [1,2,3,4]
let total = 0
numbers.forEach(number => total += number)
console.log(total)
*/

//JS'de bazı olayları belirli bir zaman aralığında çalıştırabildiğimiz gibibelli bir zamanda da çalışalacak şekilde planlayabiliriz.

//setInterval ve setTimeout

//setInterval
//syntax : ilk parametre olarak bir call back fonksiyonu alır, ikinci parametre olarak zamanı(ms) alır.
/*
function callback() {
    //codes
}
setInterval(callback, duration)
*/
/*
 function sayHello() {
    console.log('Hello')
 }
 setInterval(sayHello, 1000)
 */

 //setTimeout
/*
 function callback(){
    //codes
 }
 setTimeout(callback, duration)
 */
/*
 function sayHello() {
    console.log('Hello')
 }
 setTimeout(sayHello, 10000)
 */
/*
 function sayHello() {
    console.log('Hello')
 }
 const interval = setInterval(sayHello, 1000)

 const timeout = setTimeout(() => {
    clearInterval(interval)
    console.log('interval işlemi iptal edildi.')
 }, 5000)

setTimeout(() => {
    clearTimeout(timeout)
    console.log('timeout işlemi iptal edildi. interval devam edecek.')
}, 3000)
*/
//3. saniyede 5. saniyede intervali iptal edecek olan timeout'u iptal ettiğimiz için hello basmaya devam eder.

//Functional Programming

//parametre olarak callback fonksiyon alan yerleşik metotlarla loop'lar olmadan sorunları çözebiliriz.

//forEach, map, filter, reduce, find, every , some and sort.
/*
const numbers = [1,2,3,4,5]
let total = 0
let calculate = (number, index) => total += (number + index)
numbers.forEach(calculate)
console.log(total)
*/
/*
const numbers = [1,2,3,4,5]
numbers.forEach(num => console.log(num))
*/
/*
let sum = 0
const numbers = [1,2,3,4,5]
numbers.forEach(num => console.log(sum += num))
console.log(sum)
*/
/*
const countries = ['Türkiye', 'İzlanda', 'Narnia', 'Mordor', 'Rohan']
countries.forEach((element) => console.log(element.toLocaleUpperCase()))
*/

//map
//elemanları itere ederken manipüle de edebiliriz.
/*
const numbers = [1,2,3,4,5]
const numbersSquare = numbers.map((num) => num * num)
console.log(numbersSquare)

let users = [
    {
        id: 1,
        name: 'Cagatay',
        age: 28
    },
    {
        id: 2,
        name: 'Mahmut',
        age: 23
    },
    {
        id: 3,
        name: 'Necmi',
        age: 30
    }
]

users = users.map( user => {
    if(user.id === 2){
        user.name = 'Sertaç'
    }
    return user
})
console.log(users)
*/
/*
const countries = [
    'Albania',
    'Turkey',
    'Serbia',
    'Narnia',
    'Adanaland',
    'Ireland',
    'Japan',
    'Korea'
]
const countriesThreeLetters = countries.map((country) => 
    country.toUpperCase().slice(0,3))
console.log(countriesThreeLetters)
*/

//filter
//belli kriterlere göre filtrelememizi sağlar.
/*
let users = [
    {
        id: 1,
        name: 'Cagatay',
        age: 28,
        gender: 1
    },
    {
        id: 2,
        name: 'Nazmiye',
        age: 23,
        gender: 0
    },
    {
        id: 3,
        name: 'Necmi',
        age: 30,
        gender: 1
    },
    {
        id: 4,
        name: 'Şükriye',
        age: 30,
        gender: 0
    }
]

const women = users.filter(user => user.gender == 0)
const men = users.filter(user => user.gender == 1 && user.age > 28)

console.log(women)
console.log(men)
*/
/*
const numbers = [1,2,3,4,5]
const numbersFiltered = numbers.filter(num => num > 3 && num < 5)
console.log(numbersFiltered)
*/

//reduce : callback fonksiyon alır. bu call back fonksiyonu da accumulator, current ve opsiyonel initial değeri parametre olarak alır ve tek bir değer döner. Varsayılan olarak bir initial-başlangıç değeri vermezsek dizinin ilk elemanını alır. Dizimiz boş array'se JS hata verir.
/*
const numbers = [1,3,5,7,9]
console.log(numbers.reduce((oldValue, currentValue) => oldValue + currentValue, 0))
*/

//every
//her bir elemanın koşulu karşılayıp karşılamadığını kontrol eder.
/*
const names = ['Ali', 'Mahmut', 'Sertaç', 'Teresa', 3]
const areAllStr = names.every((name) => typeof name === 'string') //tüm elemanlar string mi?
console.log(areAllStr) //false

let users = [
    {
        id: 1,
        name: 'Cagatay',
        age: 28,
        gender: 1
    },
    {
        id: 2,
        name: 'Nazmiye',
        age: 23,
        gender: 0
    },
    {
        id: 3,
        name: 'Necmi',
        age: 30,
        gender: 1
    },
    {
        id: 4,
        name: 'Şükriye',
        age: 30,
        gender: 0
    }
]

console.log(users.every(user => user.gender == 1)) //false
console.log(users.every(user => user.gender == 1 || user.gender == 0)) //true
*/

//some
//every gibi ama koşul elemanlardan bir tanesinde varsa yeter diyor ve true döndürüyor.
/*
console.log(users.some(user => user.gender == 1)) //true
console.log(users.some(user => user.gender == 3)) //false
*/

//find
//koşula ilk uyan elemanı döndür.
/*
const numbers = [1,3,5,7,9]
console.log(numbers.find(number => number > 3)) //5
console.log(numbers.find(number => number > 3 && number % 7 == 0)) //7
*/
/*
let users = [
    {
        id: 4,
        name: 'Şükriye',
        age: 30,
        gender: 0
    },
    {
        id: 1,
        name: 'Cagatay',
        age: 28,
        gender: 1
    },
    {
        id: 3,
        name: 'Nazmiye',
        age: 23,
        gender: 0
    },
    {
        id: 2,
        name: 'Necmi',
        age: 30,
        gender: 1
    }
]

const currentUser = users.find(user => user.id == 3)
console.log(currentUser)
*/

//sort
//ascending veya descending olarak sıralar. Varsayılan olarak sıralayacağı elemanları string'e çevirir.
//sayıları sort ile sıralamak hata verir. Orjinal diziyi değiştirdiği için kullanmadan önce bir yere kopyalamak
//faydalı olacaktır.
/*
const names = ["Aaran", "Aaren", "Barez", "Aarman", "Aaron", "Caron-James", "Aarron", "Faryan", "Aaryn", "Zyan", "Mazaan", "Nbaan"]

names.sort()
console.log(names)

const numaralar = [3, 6, 2, 1, 10, 9]
numaralar.sort()
console.log(numaralar) //(6) [1, 10, 2, 3, 6, 9] zortladı.
*/

//sorting numerics
/*
const numbers = [9.81, 3.14, 100, 37, 3, 11, 28]

console.log(numbers.sort()) //hatalı

numbers.sort(function (a,b) {
    return a-b //küçükten büyüğe sıralar. b-a olsaydı büyükten küçüğe sıralardı.
})
console.log(numbers)

numbers.sort((a,b) => b-a)
console.log(numbers)
*/

let users = [
    {
        id: 2,
        name: 'Şükriye',
        age: 30,
        gender: 0
    },
    {
        id: 1,
        name: 'Cagatay',
        age: 28,
        gender: 1
    },
    {
        id: 4,
        name: 'Nazmiye',
        age: 23,
        gender: 0
    },
    {
        id: 3,
        name: 'Necmi',
        age: 30,
        gender: 1
    }
]

//id'sine göre sıralayalım.
/*
users.sort((a,b) => a.id - b.id)
//users.sort((a,b) => b.id - a.id) //ya da
console.log(users)
//name için a-b'yi kullanırsak yanlış sonuç verir.
*/

//sort'u stringler ile düzgünce kullanabilmek için;
//users.sort((a,b) => a.name - b.name) //hata
/*
users.sort((a,b) => a.name.localeCompare(b.name)) //a'dan z'ye
console.log(users)
users.sort((a,b) => b.name.localeCompare(a.name)) //z'den a'ya 
console.log(users)
*/
