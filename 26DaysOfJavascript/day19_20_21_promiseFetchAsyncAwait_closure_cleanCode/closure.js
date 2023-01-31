//Closure, içteki fonksiyonların, dışta bulunan fonksiyon içindeki değişkenleri değerini kaybetmeden kullanabilmesidir. 
/*
function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }
    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
*/
//
/*
function counter() {
    let count = 0 
    function setCount() {
        count++
        return count
    }
    return setCount
}

let count = counter()

console.log(count())
console.log(count())
console.log(count())
*/
/*
function outerFunction(){
    let count = 0 
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }
    return {
        plusOne: plusOne(),
        minusOne: minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
*/

function counter() {
    let count = 0
    function up() {
        count++
        return count
    }
    function down() {
        count--
        return count
    }
    return { //aynı isimde olmak zorunda değil. yukari: up'da olabilir.
        up: up,
        down: down
    }
}

let count = counter()

console.log(count.up())
console.log(count.down())
console.log(count.up())

console.log(count.up())
console.log(count.down())
console.log(count.up())
