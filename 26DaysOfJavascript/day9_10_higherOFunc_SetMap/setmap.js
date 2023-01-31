//set: bir ögeler bütünüdür. Sadece benzersiz elemanları içerebilir.
/*
const companies = new Set()
console.log(users)
*/
/*
const names = new Set()
console.log(names)
*/

//creating set from array
/*
const languages = [
    'Arabic',
    'Turkish',
    'Turkish',
    'Orkish',
    'Elvish',
    'Arabic',
    'Finnish'
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

for(const language of setOfLanguages){
    console.log(language) //tekrar eden elemanları 1 kere yazar.
}
*/
/*
const names = new Set(['ali', 'veli', 'hakan', 'mahmut', 'mahmut'])
for(let name of names) {
    console.log('Ad:', name)
}

names.forEach(name => console.log(name));

//higher order fonksiyonları kullanabilmek için;

[...names].map(name => console.log(name))
*/

//add ile element ekleme
/*
const names = new Set(['ali', 'veli', 'hakan', 'mahmut', 'mahmut'])

names.add('ali')
names.add('mahmut')
names.add('ahmet')

console.log(names)
*/
//loop ile ekleme
/*
const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microfost']
setOfCompanies = new Set()
for(const company of companies) {
    setOfCompanies.add(company)
}
console.log(setOfCompanies)
*/

//deleting element from a set
/*
const names = ['ali', 'veli', 'hakan', 'ahmet', 'mahmut', 'ahmet']

const namesSet = new Set()
for(let name of names) {
    namesSet.add(name)
}
console.log(namesSet)
namesSet.delete('ahmet')
namesSet.delete('mahmut')
console.log(namesSet)
*/

//checking set length
/*
const names = ['ali', 'veli', 'hakan', 'ahmet', 'mahmut']

const namesSet = new Set()
for(let name of names) {
    namesSet.add(name)
}
console.log(names.length)
console.log(namesSet.size)
*/

//checking an element in the set
/*
const names = ['ali', 'veli', 'hakan', 'ahmet', 'mahmut']

const namesSet = new Set()
for(let name of names) {
    namesSet.add(name)
}
console.log(namesSet.has('ahmet')) //true
namesSet.delete('ahmet')
console.log(namesSet.has('ahmet')) //false
*/

//clear all elements from array
/*
const names = ['ali', 'veli', 'hakan', 'ahmet', 'mahmut']

const namesSet = new Set()
for(let name of names) {
    namesSet.add(name)
}
namesSet.clear()
console.log(namesSet)
console.log(namesSet.has('ahmet')) //false
*/

//array'i unique hale getirmekte de kullanılabilir.
/*
const names = ["Amrinder", "Amrit", "Amro", "Amrit", "Amro", "Andreas", "Andrei", "Amrit", "Andrew", "Amrit", "Amrit", "Anesu", "Angel", "Angelo", "Angus", "Anir", "Amrit", "Amro", "Amrit", "Annan", "Amrit", "Amro", "Anthony", "Amrit-John", "Amrit", "Anton", "Amrit", "Amrit"]

console.log(names)
console.log(names.length) //28
console.log(new Set(names)) //tekrarlıları 1 kabul eder.
console.log(new Set(names).size) //15
*/
//example
/*
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French'
]

const langSet = new Set(languages)
console.log(langSet)
console.log(langSet.size)

const counts = []
const count = {}

for(const l of langSet){
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang)
    counts.push({ lang: l, count: filteredLang.length})
}
console.log(counts)
*/

//Union of Sets
/*
let a = [1,2,3,4,5]
let b = [4,5,6]
let c = [...a, ...b]

let C = new Set(c)

console.log(c)
console.log(C)
*/

//intersection of sets
/*
let a = [1,2,3,4,5]
let b = [3,4,5,6]

let B = new Set(b)

let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(C)
*/

//difference of sets
/*
let a = [1,2,3,4,5]
let b = [3,4,5,6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => !B.has(num))
let C = new Set(c)

let c2 = b.filter((num) => !A.has(num))
let C2 = new Set(c2)

console.log(C)
console.log(C2)
*/


//map

//objelerde key olarak sadece string ve sembol verebiliyorken map ile istediğimiz herhangi bir veri türünü kullanabiliriz.

/*
Map, anahtar değere sahip veriler tutan bir yapıdır (collection). Tıpkı Obje gibi. Fakat aralarındaki en önemli farklardan biri Mapler anahtar değer olarak herhangi bir tipte olabilirler.

Ana fonksiyonlar şu şekildedir:

new Map() – map yaratır.
map.set(key, value) – Anahtara değer atar.
map.get(key) – Anahtarın değerini döndürür. Eğer öyle bir anahtar yoksa undefined döndürür.
map.has(key) – Eğer öyle bir anahtar varsa true yoksa false döndürür.
map.delete(key) – Verilen anahtara ait değeri siler.
map.clear() – Mapin içini temizler.
map.size – anlık eleman sayısını döndürür.
*/
/*
const obj = {} 
obj['name'] = 'cagatay'
obj[1] = 'ahmet'
obj['1'] = 'murat' //son eklenen 1 geçerli. Çünkü 1 ile '1' objeleirn key'lerinde aynı string kabul edilir.
obj[true] = 'mehmet'
obj['true'] = 'mehmet2'

console.log(obj)
console.log(Object.keys(obj)) //objede string olarak tutar.
*/

//map'te ise,
/*
const mapExample = new Map()

mapExample.set('Name', 'Çağatay')
mapExample.set( 1, 'num1')
mapExample.set( true, 'bool1')
mapExample.set( false, 'bool2')
//her türden key bulunur.
console.log(mapExample)

console.log(mapExample.get(1)) //num1
console.log(mapExample.get(false)) //bool2
console.log(mapExample.get('Name')) //Çağatay

console.log(mapExample.size) //map'in eleman sayısı

//map'ler objeleri key olarak kullanabilir.

let john = { name: "John"}
let cagatay = { name: "Çağatay"}
let samuel = { name: "Samuel"}

let visitsCountMap = new Map()
visitsCountMap.set(john, 123)
visitsCountMap.set(samuel, 1323)
visitsCountMap.set(cagatay, 14423)

console.log(visitsCountMap.get(john))
console.log(visitsCountMap.get(cagatay))
console.log(visitsCountMap.get(samuel))

//chaining 

mapExample.set('1', 'str1')
    .set(1,'num1')
    .set(true,'bool1')
    .set(false, 3)

console.log(mapExample)

console.log(mapExample.keys()) //keyleri
console.log(mapExample.values()) //values'ları
console.log(mapExample.entries()) //ikisini de döndür.

cagatay.surname = 'Demirtas'
for(let u of visitsCountMap.keys()){
    console.log(u)
}

for(let u of visitsCountMap.values()){
    console.log(u)
};
//foreach ile kullanmak için önce bir array'e dönüştürelim.
[...visitsCountMap.keys()].forEach(v => console.log(v));
[...visitsCountMap.values()].forEach(v => console.log(v));
[...visitsCountMap].forEach(([key, val]) => console.log('key:', key, 'value:', val));
[...visitsCountMap].forEach(([key, val]) => console.log(val))

*/

//Object.entries : Map from object
/*
let obj = {
    name: 'John',
    age: 30
}
//eğer ki bu objeden map üretmek istersek;

let map = new Map(Object.entries(obj))
console.log(map)
console.log(map.get('name'))
console.log(map.get('age'))
*/

//Object.fromEntries: Object from Map
/*
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
])
//map'i objeye döbüştürür.
console.log(prices)
*/

const a = [
    ['name', 'cagatay'],
    ['surname', 'demirtas']
]
console.log(
    Object.fromEntries(a)
)

console.log(
    Object.fromEntries(a.entries())
)