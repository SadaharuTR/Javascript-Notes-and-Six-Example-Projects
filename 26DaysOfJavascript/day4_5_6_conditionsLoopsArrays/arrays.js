//syntax

//using array constructor

//const arr = Array()
//let arr = new Array()
//console.log(arr)
/*
const arr = [] //boş bir array oluşturmak için önerilen yol.
console.log(arr)
*/

//create array with values
/*
console.log('cagatay'.length) //7

const names = ['Cagatay', 28, 1994, 'Demirtas']
console.log(names) 
console.log(names.length) //4
*/

//create array using split
/*
let js = 'JavaScript'
const charsInJS = js.split('')
console.log(charsInJS)

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companiesString)
console.log(companies)

console.log('cagatay'.split(''))
*/

//access array items using index
/*
const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0]

let secondFruit = fruits[1]

// let lastFruit = fruits[3]
// console.log(lastFruit)
//or
let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]
console.log(lastFruit)
*/

//modify array element
/*
const numbers = [1,2,3,4,5]
numbers[0] = 10
numbers[1] = 20

console.log(numbers)
*/

//methods to manipulate array

//const arr = Array() //boş bir array
//const eightEmptyValues = Array(8) //8 boş elemanlı bir array
//const array = [,,,,,,,,] yazmamız gerekirdi.

/*
const eightX = Array(8).fill('X')
console.log(eightX)
const eight0 = Array(8).fill(0)
console.log(eight0)
*/

//array birleştirme concat
/*
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)
*/
/*
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const addList = [7, 8, 9]
const thirdList = firstList.concat(secondList, addList, [10, 11], 12, 13, 14)
console.log(thirdList)
*/
/*
let names =['Cagatay', 'Ali' , 'Farukcan']

console.log(names.indexOf('Mehmet')) //-1
console.log(names.indexOf('Ali')) //1 -> index değeri 1
console.log(names.indexOf('Farukcan')) //2
*/
/*
const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana') //0

if (index != -1) {
    console.log('Böyle bir meyve var.')
} else {
    console.log('Böyle bir meyve yok.')
}
*/
/*
let names = ['Cagatay', 'Ali' , 'Farukcan', 'Cagatay', 'Cagatay']
console.log(names.lastIndexOf('Cagatay'))
*/
/*
let names = ['Cagatay', 'Ali' , 'Farukcan', 'Cagatay', 'Cagatay']
console.log(names.includes('Ali'))
console.log(names.includes('cagatay')) //case sensitive
*/
/*
let names = ['Cagatay', 'Ali' , 'Farukcan']
let names2 = 'Cagatay'
let names3 = 'Cagatay'.split('')

console.log(typeof names)
console.log(Array.isArray(names))
console.log(Array.isArray(names2))
console.log(Array.isArray(names3))
*/

//diziyi string'e çevirme
/*
let names = ['Cagatay', 'Ali' , 'Farukcan']
console.log(names)
console.log(names.toString())
*/

//array elemenlarını join'leme

//default olarak , ile join'ler
/*
const numbers = [1,2,3,4,5]
console.log(numbers.join())

const names = ['Cagatay', 'Ali' , 'Farukcan', 'Sertaç']

console.log(names.join())
console.log(names.join(''))
console.log(names.join(' '))
console.log(names.join(', '))
console.log(names.join(' # '))
console.log(names.join(' messi '))
*/

//slice array elements
/*
const names = ['Cagatay', 'Ali' , 'Farukcan', 'Sertaç', 'Hakan']
console.log(names.slice()) //hepsini kopyalar
console.log(names.slice(0)) //hepsini kopyalar
console.log(names.slice(0, names.length)) //hepsini kopyalar
console.log(names.slice(1,4)) //1'den başla 4 hariç al.
*/

//splice in arrays

/*
const numbers2 = [1,2,3,4,5]
console.log(numbers2.splice(0,1)) //ilk elemanı çıkar
console.log(numbers2)

const numbers3 = [1,2,3,4,5,6]
console.log(numbers3.splice(3,3,7,8,9)) //3.'den başla 3 eleman çıkar, yerlerine 7,8,9 ekle.
console.log(numbers3)
*/

//adding item to arrasy using push
/*
const arr = ['item1', 'item2', 'item3']
arr.push('new item')
console.log(arr)
*/
/*
const names = ['Cagatay', 'Ali' , 'Farukcan', 'Sertaç', 'Hakan']
console.log(names)
names.push('Gökhan')
console.log(names)
names.push(25)
console.log(names)
names.push({
    name: 'Göknur'
})
console.log(names)
*/

//remove item using pop
/*
const names = ['Cagatay', 'Ali' , 'Farukcan', 'Sertaç', 'Hakan']
let sonDeger = names.pop()
let sonDeger2 = names.pop()
console.log(sonDeger)
console.log(sonDeger2)
console.log(names)
*/

//remove item from the beginning
/*
const names = ['Cagatay', 'Ali' , 'Farukcan', 'Sertaç', 'Hakan']
let ilkDeger = names.shift()
console.log(ilkDeger)
console.log(names)
let sonDeger = names.pop()
console.log(names)
console.log(sonDeger)
*/
 
//ilk değere eleman ekleme
/*
const names = ['Cagatay', 'Ali' , 'Farukcan', 'Sertaç', 'Hakan']
names.unshift('Mahmut')
console.log(names)
*/

//reverse array
//console.log('cagatay'.split('').reverse().join(''))


//sorting elements in array
/*
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

webTechs.sort() //ascending
console.log(webTechs)
webTechs.reverse() //descending
console.log(webTechs)
*/

//array of array
/*
const numbers = [4, 10, 1, [1,2,3], 8, 'Ali'.split(''), ['a','b','c']]
console.log(numbers)
console.log(numbers[3])
console.log(numbers[6])
console.log(numbers[5])
*/
