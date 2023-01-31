//Error Handling - Error Management

//JavaScript is a loosely-typed language. 
/*
try {
    //hata verebilecek kod parçası.
} catch(err) {
    //hata verildiğinde execute edilecek kodlar.
} finally {
    //hata verilsin ya da verilmesin execute edilecek kodlar.
}
*/
/*
try {
    let firstName = 'cagatay'
    let lastName = 'demirtas'
    let fullName = firstName + ' ' + lastName
} catch{
    console.log('bir hata var!')
}

console.log(fullName) //try bloğu içerisinde tanımlandığından ulaşamayız.
*/
/*
let fullName
try {
    let firstName = 'cagatay'
    let lastName = 'demirtas'
    fullName = firstName + ' ' + lastName
} catch{
    console.log('bir hata var!')
}

console.log(fullName) //artık ulaşılabilir.
*/
/*
let fullName
try {
    let firstName = 'cagatay'
    let lastName = 'demirtas'
    fullName = firstName + ' ' + surname
} catch (e){
    console.log('Name of the error:', e.name)
    console.log('Error message:', e.message)
    console.table(e)
}

console.log(fullName) //undefined
*/

//throw: custom error yaratmakta kullanılır.
/*
throw 'Error2' //string value exception
throw 42 // number value exception
throw true //bool exception
throw new Error('Required') //error object with message of Required
*/
/*
let fullName
try {
    let firstName = 'cagatay'
    let lastName = 'demirtas'
    fullName = firstName + ' ' + lastName
    //throw 'keyfimin hatası'
    throw new Error('bir hata var')
} catch (e){
    console.log('Name of the error:', e.name)
    console.log('Error message:', e.message)
    console.table(e)
}
console.log(fullName)
*/
/*
const throwErrorExampleFun = () => {
    let x = prompt('Enter a number: ')
    try{
        if(x == '') throw 'empty'
        if(isNaN(x)) throw 'not a number'
        x = Number(x)
        if (x < 5) throw 'too low'
        if (x > 10) throw 'too high'
    
    }catch(err) {
        console.log(err)
    }
}
throwErrorExampleFun()
*/
/*
let age = prompt('Kaç yaşındasın sen?')

try {
    if (age > 28) throw new Error('Nasıl sorular bunlar?')
} catch {
    alert('İsmini ver ismini.')
}
*/
/*
let age = prompt('Kaç yaşındasın sen?')

try {
    if (age > 28) throw new Error('Nasıl sorular bunlar?')
} catch(e) {
    alert(e.message)
}
*/

//Error Types

//ReferanceError: belirtilmemiş değişken kullanılırsa
/*
let firstName = 'cagatay'
console.log(firstName + lastName)
//Uncaught ReferenceError: lastName is not defined
*/

//Syntax Error: yazım diline aykırı hatalar, sonraki kodların çalışmasını durdurur.
/*
console.log(5*5)
console.log(5x5) //Uncaught SyntaxError: Invalid or unexpected token (at errorHandling.js:120:13)
*/

//typeError: değişkenin türü ile kullandıldığı işlem farklı ise,
/*
let firstName = 'cagatay'
console.log(firstName.toLocaleUpperCase())

let age = 25
console.log(age.toLocaleUpperCase())
//Uncaught TypeError: age.toLocaleUpperCase is not a function
*/
/*
let firstName = 'cagatay'
let age = 25
console.log(age.toFixed())
console.log(firstName.toFixed())
//Uncaught TypeError: firstName.toFixed is not a function
*/
