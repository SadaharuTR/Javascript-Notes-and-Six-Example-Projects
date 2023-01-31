/*
Most common JavaScript Style Guides;

-Airbnb JavaScript Style Guide
-JavaScript Standard Style Guide
-Google JavaScript Style Guide
*/

/*
let firstName = 'Cagatay'
let lastName = 'Demirtas'
let country = 'Turkey'
let city = 'Mut'

const PI = Math.PI
const gravity = 9.81
*/

// arrays
/*
const names = ['Cagatay', 'İsmail', 'Fatma', 'Tarçın']
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
const countries = ['Belçika', 'Danimarka', 'İsveç', 'Norveç', 'İzlanda']
const languages = ['Türkçe', 'Arapça', 'İngilizce', 'Fransızca', 'İspanyolca']
const skills = ['HTML', 'CSS', 'JavaScript', 'Angular', 'Python']
const fruits = ['muz', 'portakal', 'mango', 'limon']

*/
/*
// function which return full name of a person
const printFullName = (firstName, lastName) => firstName + ' ' + lastName
console.log(printFullName('cagatay', 'demirtas'))

// function which calculates a square of a number
const square = (n) => n * n
console.log(square(2))

// a function which generate random hexa colors
const hexaColor = () => {
  const str = '0123456789abcdef'
  let hexa = '#'
  let index
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length)
    hexa += str[index]
  }
  return hexa
}
console.log(hexaColor())

// a function which shows date and time
const showDateTime = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const date = now.getDate()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }

  const dateMonthYear = date + '.' + month + '.' + year
  const time = hours + ':' + minutes
  const fullTime = dateMonthYear + ' ' + time
  return fullTime
}

console.log(showDateTime())

console.log(new Date().toLocaleDateString())
*/

//standart for loop
/*
for (let i = 0; i < n; i++){
    console.log()
}
*/
/*
// declaring an array variable
const names = ['Cagatay', 'Mahmut', 'Eliyasta', 'Buruk']

// iterating an array using regular for loop
let len = names.length;
for(let i = 0; i < len; i++){
    console.log(names[i].toUpperCase())
}


// iterating an array using for of
for( const name of names) {
    console.log(name.toUpperCase())
}

// iterating array using forEach 
names.forEach((name) => name.toUpperCase())


const person = {
  firstName: 'Cagatay',
  lastName: 'Demirtaş',
  age: 28,
  country: 'Ankara',
  city: 'Sincan',
  skills: ['HTML','CSS','JavaScript','Angular','Node','MongoDB','C#','D3.js'],
  isMarried: true
}
for(const key in person) {
    console.log(key)
}

for(const key in person) {
    console.log(person[key])
}
*/

//objeleri const ile oluşturmak daha mantıklıdır.

//

//class'larda ilk harf büyük.
/*
// syntax
class ClassName {
    // code goes here
}
*/

// defining class
/*
class Person {
    constructor(firstName, lastName) {
        console.log(this)
        this.firstName = firstName
        this.lastName = lastName
    }
}
*/

//Unutma!

//Kodunu insan okuyacak insan!

