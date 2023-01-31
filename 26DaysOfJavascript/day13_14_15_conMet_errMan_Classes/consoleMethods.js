//console.log()
/*
console.log('30 Days of JS')

console.log('%d %s of JS', '30', 'Days')

console.log(['cagatay', 'demirtas', 'transformers'])

console.log({
    name: 'cagatay',
    surname: 'demirtas'
})

let age = 29
console.log('%d %s of JS', age , 'Days')

let yil = 1994
console.log('%d %s of JS ve sene %d yılında doğdum.', '30', 'Days', yil )

//css ile stillendirilebilir

console.log('%cDur!', 'font-size: 50px; font-family: Arial; color:red; text-shadow: 0 0 10px rgb(255,255,255,0.3')

console.log('%c30 Days of JavaScript', 'color: green')

console.log(
    '%c30 Days%c %cof%c %cJavaScript%c',
    'color: green',
    '',
    'color: red',
    '',
    'color: yellow',
    '')
*/

//console.warn()
//console.warn('Uyarı mesajı')

//console.error()
//console.error('Kırdın kırdın.')

//console.table() : aldığı parametre bir dizi ya da obje olmalıdır.
/*
const names = ['Cagatay', 'Mahmut', 'Tarçın', 'Sertaç', 'Dracula']
console.table(names)

const info = {
    name: 'cagatay',
    surname: 'demirtas',
    age: 28,
}
console.table(info)
*/

//console.time() : bir işlemin ne kadar sürdüğünü hesaplayabiliriz.
/*
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
    ['Turkey', 'Ankara']
]

console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [name, city] of countries) {
    console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries.forEach(([name, city]) => {
    console.log(name, city)
})
console.timeEnd('forEach loop')
*/
/*
console.time('calculate 1m array')
console.log(
    new Array(10e5).fill().map((value, index) => index)
)
console.timeEnd('calculate 1m array')
*/

//console.info() :log'un aynısı
//console.info('30 Days of JS')

//console.assert() : ilk parametrede verdiğimiz işlem eğer doğruysa bir şey olmaz. False ise error mesajı verir.
/*
console.assert(4>3, '4 is greater than 3')
console.assert(3>4, '3 is greater than 4') //Onaylama başarısız: 3 is greater than 4 (Assertion failed)
*/
/*
for (let i = 0; i <= 10; i += 1){
    let errorMessage = `${i} is not even`
    console.log('the # is ' + i)
    console.assert(i % 2 === 0, {number: i, errorMessage: errorMessage})
}
*/

//console.group()
/*
const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}
const users = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]

console.group('Names') //Names altında names'leri
console.log(names)
console.groupEnd()

console.group('Countries') //Countries altında countries'i
console.log(countries)
console.groupEnd()

console.group('Users') //Users altında hem user'ı hem user'ı grupladı.
console.log(user)
console.log(users)
console.groupEnd()
*/

//console.count() : bir fonksiyon kaç kere çağırıldı.
/*
const test = () => {
    console.count('test called')
}

test()
test()
test()
*/
/*
test called: 1
test called: 2
test called: 3 
*/

//console.clear() : konsolu temizler.
//console.clear()
