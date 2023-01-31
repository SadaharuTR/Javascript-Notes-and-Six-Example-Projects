//JavaScript ile yazılmış bir fonksiyon, belirli bir işlemi yapmak için tasarlanmış kod bloğudur.

//function declaration
/*
function functionName() {
    //codes
}

functionName() //calling function
*/
/*
function sayHello() {
    console.log('hello!')
}

sayHello()
*/

//function without a parameter and return
/*
function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
    console.log(sum)
}

addTwoNumbers()
*/

//function returning value
/*
function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
    return sum
}

console.log(addTwoNumbers())
*/

//function with a parameter
/*
function functionName(parm1) {
    //codes
}
functionName(parm1)
*/
/*
function multiply (num1, num2){
    return num1 * num2 
}

let total = multiply(50,2)
console.log(total)
*/
/*
function multiply (num1, num2){
    return num1 * num2 
}
let sayi1 = 10
let sayi2 = 20
let total = multiply(sayi1,sayi2)
console.log(total)
*/
/*
function sumArrayValues(arr) {
    let sum = 0
    for( let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}

const numbers = [1,2,3,4,5]
console.log(sumArrayValues(numbers))
*/

//unlimited number of parameteres in regular functions
/*
function sumAllNums(){
    let sum = 0
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
console.log(sumAllNums(1,2,3,4))
console.log(sumAllNums(10,20,30,40))
*/

//Anonymous Function
//Anonim fonksiyonların (Anonymous Functions) bir adı yoktur ve bir değişkene atanarak yeri 
//geldiğinde kullanılırlar.
/*
const anonymousFunc = function() {
    console.log('ben bir garip anonim fonksiyonum ve değerim anonymousFunc içinde tutuluyor')
}
*/
/*
const sayHello = function(name) {
    return `Hello ${name}`
}
console.log(sayHello('Cagatay'))
*/

//expression functions - yukarıdakinin aynısı
/*
const square = function(n) {
    return n*n
}
console.log(square(2))
*/

//self-invoking functions
/*
let squaredNum = (function(n){
    console.log(n*n)
})(10)

console.log(squaredNum)

;(function() {
    console.log('co co co')
})()

;let sayHello = (function(name){
    console.log(`Hello ${name}`)
})('Cagatay')
*/

//Arrow Function

//function hello() {  } //regular function

//const hello = () => { } //arrow function

/*
const hello = name => {
    return `Hello ${name}`
}
*/

/*
//yukarıdaki gibi tek satırda return işlemi yapıyorsa,
const hello = name => `Hello ${name}` //yazabiliriz.
console.log(hello('Cagatay'))

const hello2 = (name, surname) => `Hello ${name} ${surname}`
console.log(hello2('Cagatay', 'Demirtas'))
*/
//arguments ifadesi array fonksiyonlarda yoktur. onun yerine rest ... operatörünü kullanabiliriz.
/*
const sayilar = (...numbers) => {
    console.log(numbers)
}
sayilar(2,4,5,6,7,8,99)
*/
/*
const sayilar = (num1, ...numbers) => { //num1'i parametre olarak al, kalanları dizi olarak ver.
    console.log(num1)
    console.log(numbers)
}
sayilar(2,4,5,6,7,8,99)
*/

//example
/*
const changeToUpperCase = arr => {
    const newArr = []
    for(const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}

const countries = ['Finland', 'Sweden', 'Turkey', 'Norway', 'Denmark']
console.log(changeToUpperCase(countries))
*/

/*
const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}
console.log(printFullName('Cagatay', 'Demirtas'))

//or 

const printFullName2 = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName2('Cagatay', 'Demirtas'))
*/

//function with default paramaters
//fonksiyonu çağırdığımızda değer göndermemişsek default olarak işlenecek parametreler gönderilebilir.

//syntax
/*
function functionName(parameter = value) {
    //codes
}
//calling function
functionName()
functionName(arg)
*/
/*
function multiply (num1, num2 = 2) {
    return num1 * num2
}
console.log(multiply(10))
console.log(multiply(10,20))
*/
/*
function calculateAge (birthYear, currentYear = 2023) {
    let age = currentYear - birthYear
    return age
}
console.log('Age:', calculateAge(1994),'is just a number.')
*/
//
/*
function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity
    return weight
}
console.log('Weight of an object in Newton: ', weightOfObject(100), ' N') //in Earth default
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62), ' N') //moon
*/

//with arrow functions
/*
const greetings = (name = 'Cagatay') => {
    let message = name + ', babuş hoşgelmişsen.'
    return message
}
console.log(greetings())
console.log(greetings('Maho Ağa'))
*/
/*
const arrowName = (firstName = 'Cagatay', lastName = 'Demirtas') => {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}

console.log(arrowName())
console.log(arrowName('Sertaç', 'Farukyanidis'))
*/

const calculateAge = (birthYear, currentYear = 2023) => currentYear - birthYear
console.log('Age:', calculateAge(1994), 'is just a number.')

const weightOfObject = (mass, gravity = 9.81) => mass * gravity 
console.log('Weight of an object in Newton:', weightOfObject(100), 'N')
console.log('Weight of an object in Newton:', weightOfObject(100, 1.62), 'N')


//call vs invoke

function test() {
    console.log('test fonksiyonu çalıştı')
}

//call
test()


function invoker(funcPar){
    funcPar()
}

//invoke
invoker(test)