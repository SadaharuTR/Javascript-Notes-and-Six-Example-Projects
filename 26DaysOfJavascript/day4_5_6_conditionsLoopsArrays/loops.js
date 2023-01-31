//for loop

/*
for (let i = 0; i <= 5; i++){
    console.log(i)
}

for (let i = 5; i >= 0; i--){
    console.log(i)
}
*/
/*
for (let i = 1; i <= 100; i++) {
    if(i < 10) {
        console.log('i: ', `0${i}`)
    }else {
    console.log('i: ', `${i}`)
    }
}
*/
/*
for ( let i = 1; i <= 5; i++ ){
    console.log(`${i} * ${i} = ${i*i}`)
}
*/
/*
const names = ['Ali', 'Veli', 'Celi' , 'Guli', 'Deli', 'Muli']

for(let i = 0; i < names.length; i++) {
    console.log(names[i])
}
*/
/*
const numbers = [1,2,3,4,5,6]
let sum = 0
for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log(sum)
*/
/*
const countries = ['Türkiye', 'Finlandiya', 'Danimarka', 'Norveç', 'Buzlanda']
const newArr = []

for(let i = 0; i < countries.length; i++){
    newArr.push(countries[i].toLocaleUpperCase('TR'))
}
console.log(newArr)
*/
/*
let numbers = [1,2,3,4,5]
const newArr = []

for(let i = 0; i < numbers.length ; i++){
    newArr.push(numbers[i] ** 2)
}
console.log(newArr)
*/

//while loop
/*
let i = 0
while (i <= 5) {
    console.log(i)
    i++
}
*/

//do while loop
/*
let i = 0
do {
    console.log(i)
    i++
} while (i <= 5)
*/

//for of loop
/*
const names = ['Ali', 'Veli', 'Celi' , 'Guli', 'Deli', 'Muli']

for(let name of names ) {
    console.log('Ad:', name)
}

for(let name of names ) {
    console.log(name[0]) //first letter of each element
}

const newArr = []
for(let name of names ) {
    newArr.push(name.toLocaleUpperCase('TR'))
}
console.log(newArr)
*/

//break is used to interrupt a loop.
/*
for (let i = 0; i <= 5; i++){
    if (i == 3){
        break
    }
    console.log(i)
}
*/
/*
const names = ['Ali', 'Veli', 'Celi' , 'Guli', 'Deli', 'Muli']

for(let name of names ) {
    if (name == 'Guli') {
        console.log(`${name} bulundu.`)
        break
    }
    console.log('Ad:', name)
}
*/

//continue
/*
const names = ['Ali', 'Veli', 'Celi' , 'Guli', 'Deli', 'Muli']

for(let name of names ) {
    if (name == 'Guli') {
        continue //Guli'yi bulduğunda geç. Ekrana yazma.
    }
    console.log('Ad:', name)
}
*/
/*
const names = ['Ali', 'Veli', 'Celi' , 'Guli', 'Deli', 'Muli']

for(let name of names ) {
    if (name == 'Guli') {
        console.log(`${name} es geç.`)
        continue 
    }
    if (name == 'Deli') {
        console.log(`${name} yaz dur.`)
        break 
    }
    console.log('Ad:', name)
}
*/
