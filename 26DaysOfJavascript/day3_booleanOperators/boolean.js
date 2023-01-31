/*
let truValue = 4 > 3
let falseValue = 3 > 4
console.log(truValue, falseValue)

let undef 
let empty = null
console.log(undef, empty)

//assignment operator =

let firstName = 'Cagatay'

let a = 13
let b = 3

console.log(a *= b) //39
console.log(a += b) //42

//comparison operators

console.log(a==b) //değerleri karşılaştır
console.log(a===b) //hem değerleri hem veri türünü karşılaştır

console.log(5 == '5') //true
console.log(5 === '5') //false
console.log(5 === 5)  //true

console.log(5 != '5') //false
console.log(5 !== '5') //true

console.log(6 >= '5') //true
console.log(4 <= '5') //true
console.log(4 <= 5) //true
console.log(6 <= 5) //false

console.log('ali' == "ali") //true
console.log('ali' == "Ali") //false

console.log(1 == true) //true
console.log('1' == true) //true
console.log("1" == true) //true
console.log(1 === true) //false
console.log(1 === false) //false

console.log('ali'.length == "123".length) //true
console.log('ali'.length == "123 ".length) //false
console.log('ali'.length <= "1234".length) //true

console.log(true == [1]) //true

//logical operators

//&& and
const check = 4 > 3 && 10 > 5 //true && true -> true
const check2 = 4 > 3 && 10 < 5 //true && false -> false
const check3 = 4 < 3 && 10 < 5 //false && false -> false
console.log(check, check2, check3)

//|| and
const check4 = 4 > 3 || 10 > 5 //true || true -> true
const check5 = 4 > 3 || 10 < 5 //true || false -> true
const check6 = 4 < 3 || 10 < 5 //false || false -> false
console.log(check4, check5, check6)

//! not
console.log(!check, !check2, !check3) //false true true
console.log(!check4, !check5, !check6) //false false true

let isLightOn = true
let isLightOff = !isLightOn
console.log(isLightOff) //false

//increment operator

let count = 0
console.log(++count) //1
console.log(count) //1
console.log(count++) //1

let count2 = 0
console.log(count2++) //0
console.log(count2) //1
console.log(++count2) //2

//decrement operator

let count3 = 0
console.log(--count3) //-1
console.log(count3) //-1
console.log(count3--) //-1

let count4 = 0
console.log(count4--) //0
console.log(count4) //-1
console.log(--count4) //-2

//ternary operator
//koşul ? trueCalistir : degilseCalistir

let isRaining = true
isRaining
    ? console.log('You need a rain coat.') //true ise bunu yazdır
    : console.log('No need for a rain coat') //değilse bunu yazdır.

isRaining = false //false yaptık.

isRaining
    ? console.log('You need a rain coat.') //true ise bunu yazdır
    : console.log('No need for a rain coat') //değilse bunu yazdır.


let result = 4 > 3 ? 'he büyük' : 'yo deel'
console.log(result)

let resultRain = isRaining
    ? 'You need a rain coat.' 
    : 'No need for a rain coat'
console.log('yağıyor mu? = ',resultRain)
   
let number = 5 
number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)
number *= -1

number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)
*/

//operator precendence

//window methods
//window alert method

//alert(message)
//alert('apaçi serkan')

//window prompt() method
/*
prompt('bir sayı girin')

let sayi = prompt('bir sayi girin')
let result2 = sayi*2
console.log(result2)
*/

//window confirm method

//const agree = confirm('Are you sure you like to delete?')

//console.log(agree) //tamam dersek true, iptal dersek false döner.
/*
let isDelete = confirm('silmek istediğine emin misin')
console.log(    
    isDelete ? 'Silme başarılı.' : 'Silme Başarısız. İptal edildi.'
)
VM2060:2 Silme başarılı.
undefined
let isDelete = confirm('silmek istediğine emin misin')
console.log(    
    isDelete ? 'Silme başarılı.' : 'Silme Başarısız. İptal edildi.'
)
VM2094:2 Silme Başarısız. İptal edildi.
*/

//-----------------------------------------
