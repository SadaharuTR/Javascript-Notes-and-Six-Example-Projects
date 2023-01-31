//if-else

//syntax
/*
if (condition){
    //doğruysa burayı çalıştırsın.
}
*/
/*
let num = 3

if (num > 0) {
    console.log(`${num} is a positive number`)
}
*/
/*
let isRaining = true

if (isRaining) {
    console.log('şemşiye al.')
}
*/
//syntax
/*
if(condition){
    //doğruysa burayı yap
} else {
    //değilse burayı yap.
}
*/

/*
let num = 3
if(num > 0) {
    console.log(`${num} is a positive number.`)
}else {
    console.log(`${num} is a negative number.`)
}

let num = -3
if(num > 0) {
    console.log(`${num} is a positive number.`)
}else {
    console.log(`${num} is a negative number.`)
}
*/
/*
let result = prompt('2 + 5 kaç yapar?', '2 + 5')

if(result == '7'){
    console.log('Doğrudur.')
} else {
    console.log('Yanlış cevap. 7 olmalıydı.')
}
*/

//syntax
/*
if (condition){
    //
} else if (condition) {
    //
} else {
    //
}
*/
/*
let number = 4
if (number == 5){
    console.log("sayı 5'e eşit")
} else if ( number >= 5) {
    console.log("sayı 5'ten büyük")
} else {
    console.log("sayı 5'ten küçük.")
}
*/
/*
let weather = 'dd'
if (weather == 'rainy') {
    console.log('Need a rain coat.')
} else if (weather =='cloudy') {
    console.log('Might need a jacket.')
} else if (weather == 'sunny') {
    console.log('No need for anything.')
} else {
    console.log('Just go out.')
}
*/

//------------------------

//switch case

//syntax
/*
switch(caseValue)
{
    case 1:
        //code
        break;
    case 2:
        //code
        break;
    case 3:
        //bla bla
        break;
    default:
        //la la
}
*/
/*
let weather = 'sunny'
switch (weather){
    case 'rainy':
        console.log('Need a rain coat')
        break;
    case 'cloudy':
        console.log('Need a warm coat')
        break;
    case 'sunny':
        console.log('No need a rain coat')
        break;
    default:
        console.log('Just go out and have fun')
}
*/
/*
let num = prompt('Enter a number');
switch (true) { //blog'a girsin diye
    case num > 0:
        console.log('Number is positive.');
        break;
    case num == 0:
        console.log('Number is zero.');
        break;
    case num < 0:
        console.log('Number is negative.');
        break;
    default:
        console.log('Value is not a number!')
}
*/

//ternary operators
/*
let result = prompt('Hava durumunu girin:', 'Seçenekler: sunny, rainy, cloudy')
console.log(
    result == 'sunny' ? 'bişi giyme' : result == 'rainy' ? 'yağmurluk giy' : result == 'cloudy' ? 'ceket giy' : 'bir şey giyme'
)
*/

//exercise
/*
let num = prompt('Enter a number');
switch (true) {
    case num >= 90 && num <= 100:
        console.log('A');
        break;
    case num >= 70 && num <= 89:
        console.log('B');
        break;
    case num >= 60 && num <= 69:
        console.log('C');
        break;
    case num >= 50 && num <= 59:
        console.log('D');
        break;
    case num <= 50:
        console.log('Çocuğunuz patates.');
        break;        
    default:
        console.log('Sayı gir sayı.')
}
*/
