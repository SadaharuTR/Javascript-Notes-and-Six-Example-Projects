//JS, OOP bir dildir.
/*
//syntax
class ClassName {
    //codes
}
*/
/*
class Person {
    //codes
}
*/

//creating object from a class
/*
class Person {
    //codes
}
const person = new Person()
console.log(person)
*/

//class constructor :Nesne özelliklerini başlatmak için kullanılırlar. Yani kısaca sınıf başladığında bir işlem yaptırmak istiyorsak ilk olarak bu metot çalışır. 
//Eğer bir constructor tanımlamazsanız Javascript otomatik olarak boş bir constructor çalıştırır.
/*
class Person{
    constructor(firstName, lastName) {
        console.log(this) //this person class'ını temsil eder.
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person = new Person()
console.log(person) //şu an undefined
*/
/*
class Person{
    constructor(firstName, lastName) {
        //console.log(this) //this person class'ını temsil eder.
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person1 = new Person('Cagatay', 'Demirtas')
console.log(person1)


// {
//     "firstName": "Cagatay",
//     "lastName": "Demirtas"
// }


const person2 = new Person('Ali Erkin', 'Mahmudov')
const person3 = new Person('Akrep', 'Fikri')

console.log(person2, person3)
*/
/*
class Person{
    constructor(firstName, lastName, age, country, city ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = 28
        this.country = country
        this.city = city
    }
}

const person1 = new Person('Cagatay', 'Demirtaş', 28, 'Türkiye', 'Mersin')
const person2 = new Person('Tarantula', 'Hakan', 34, 'Türkiye', 'Ankara')
const person3 = new Person('Sansar', 'Necmi', 77, 'Türkiye', 'Adana')

console.log(person1, person2, person3)
*/

//bir değer göndermiyorsak constructor'da varsayılan bir değer verebiliriz.
/*
class Person{
    constructor(firstName, lastName, age, country = 'Finland', city ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = 28
        this.country = country
        this.city = 'Helsinki'
    }
}

const person1 = new Person('Cagatay', 'Demirtaş', 28, 'Türkiye', 'Mersin')
const person2 = new Person('Tarantula', 'Hakan', 34, 'Türkiye', 'Ankara')
const person3 = new Person('Sansar', 'Necmi', 77) //otomatik olarak ülke ve şehir isimleri doldurulur.

console.log(person1, person2, person3)
*/

//---------------------------------

//Class Mehods
/*
class Person{
    constructor(firstName, lastName, age, country, city ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = 28
        this.country = country
        this.city = city
    }
    getFullName(){
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}

const person1 = new Person('Cagatay', 'Demirtaş', 28, 'Türkiye', 'Mersin')
const person2 = new Person('Tarantula', 'Hakan', 34, 'Türkiye', 'Ankara')

console.log(person1, person2)
console.log(person1.getFullName())
console.log(person2.getFullName())
*/
//properties with initial value
/*
class Person{
    constructor(firstName, lastName, age, country, city ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = 28
        this.country = country
        this.city = city
        this.skills = [] //sonradan doldurulabilmesi için boş tanımlayabiliriz.
        this.score = 0
    }
    getFullName(){
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}

const person1 = new Person('Cagatay', 'Demirtaş', 28, 'Türkiye', 'Mersin')
const person2 = new Person('Tarantula', 'Hakan', 34, 'Türkiye', 'Ankara')

console.log(person1.skills, person1.score, person2.skills, person2.score)
*/

//getter-setter metotlar da tanımlayabiliriz. getter, değer getiren; setter değer atayan.

//get metodu nesneden değere erişmemizi sağlar.
/*
class Person{
    constructor(firstName, lastName, age, country, city ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = 28
        this.country = country
        this.city = city
        this.skills = [] 
        this.score = 0
    }
    getFullName(){
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills
    }
}

const person1 = new Person('Cagatay', 'Demirtaş', 28, 'Türkiye', 'Mersin')
const person2 = new Person('Tarantula', 'Hakan', 34, 'Türkiye', 'Ankara')

console.log(person1.getSkills) //() paranteze gerek yok çağırırken.
console.log(person2.getScore)
*/
/*
class Person{
    constructor(firstName, lastName, age, country, city ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = 28
        this.country = country
        this.city = city
        this.skills = [] 
        this.score = 0
    }
    getFullName(){
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills
    }
    set setSkill(skill){
        this.skills.push(skill)
    }
    appendSkill(skill) {
        this.skills.push(skill)
    }
}

const person1 = new Person('Cagatay', 'Demirtaş', 28, 'Türkiye', 'Mersin')
const person2 = new Person('Tarantula', 'Hakan', 34, 'Türkiye', 'Ankara')

person1.setSkill = 'JS' 
person1.setSkill = 'Angular'
person1.appendSkill('MongoDB')

console.log(person1.getSkills)
console.log(person1)
*/
/*
class Person{
    constructor(firstName, lastName, age, country, city ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = 28
        this.country = country
        this.city = city
        this.skills = [] 
        this.score = 0
    }
    getFullName(){
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills
    }
    set setSkill(skill){
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1). join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
}

const person1 = new Person('Cagatay', 'Demirtas', 34, 'Türkiye', 'Adana')
const person2 = new Person('Farukcan', 'Su', 28, 'Finland', 'Espoo')
const person3 = new Person('John', 'Doe', 50, 'Mars', 'Marsupilami')

person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JS'

person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'
person2.setSkill = 'Flying'

console.log(person1.getScore)
console.log(person2.getScore)

console.log(person1.getSkills)
console.log(person2.getSkills)
console.log(person3.getSkills)

console.log(person1.getPersonInfo())
console.log(person2.getPersonInfo())
console.log(person3.getPersonInfo())
*/

//Static metot
/*
Static metotlar ES6 ile gelen özelliklerden biridir. Normalde bir class içindeki metot ya da özelliklere ulaşmak istiyorsak new classAdı() şeklinde yeni bir sınıf örneği oluşturup bu sınıf örneği üzerinden istediğimiz özelliklere ulaşabiliyoruz. Static metotlar bize new anahtar kelimesini kullanmadan sınıfAdı.ozellik şeklinde objesiz ulaşabilme imkanı sağlar. */
/*
class Person{
    constructor(firstName, lastName, age, country, city ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = 28
        this.country = country
        this.city = city
        this.skills = [] 
        this.score = 0
    }
    getFullName(){
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills
    }
    set setSkill(skill){
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1). join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
    static getTimestamp() {
        return +(new Date())
    }
    static getVersion() {
        return '1.0.2'
    }
}

console.log(Person.getTimestamp())
console.log(Person.getVersion())
*/

//Inheritance - Kalıtım

//syntax 
/*
class ChildClassName extends {
    //codes
}
*/
/*
class Person{
    constructor(firstName, lastName, age, country, city ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = 28
        this.country = country
        this.city = city
        this.skills = [] 
        this.score = 0
    }
    getFullName(){
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills
    }
    set setSkill(skill){
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1). join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
    static getTimestamp() {
        return +(new Date())
    }
    static getVersion() {
        return '1.0.2'
    }
}

class Teacher extends Person {
    teach(){
        return 'ders öğretiliyor.'
    }
}

class Student extends Person {
    learn() {
        return 'ders dinleniyor.'
    }
}

const teacher1 = new Teacher('Cagatay', 'Demirtas', 29, 'Türkiye', 'Mersin')
const student1 = new Student('Hasan', 'Herkeseloviç', 29, 'Türkiye', 'Adana')

console.log(teacher1.teach())
//console.log(teacher1.learn()) //olmaz student class'ına özel.
console.log(student1.learn())
//console.log(student1.teach()) //olmaz

console.log(teacher1.city)
console.log(teacher1.age)
console.log(student1.city)
console.log(student1.lastName)
*/

//Overriding methods
/*
class Person{
    constructor(firstName, lastName, age, country, city ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = 28
        this.country = country
        this.city = city
        this.skills = [] 
        this.score = 0
    }
    getFullName(){
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills
    }
    set setSkill(skill){
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1). join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
    static getTimestamp() {
        return +(new Date())
    }
    static getVersion() {
        return '1.0.2'
    }
    
}

class Teacher extends Person {
    constructor(firstName, lastName, age, country, city, gender){
        super(firstName, lastName, age, country, city) //bunları üst class'tan al.
        this.gender = gender //ve gender'ı ek olarak ekle.
    }
    teach(){
        return 'ders öğretiliyor.'
    }
    
    get getGender(){
        return this.gender == 1 ? 'Erkek' : 'Kadın'
    }

    getFullName() { //içinde gender bilgisini de barındıran şekilde belirtmek için yukarıdaki getFullName'i ezmemiz lazım.
        return super.getFullName() + '(' + this.getGender + ')'
    }
}

class Student extends Person {
    learn() {
        return 'ders dinleniyor.'
    }
    
}


const teacher1 = new Teacher ('Cagatay', 'Demirtas', 28 , 'Türkiye', 'Mersin', 1)

console.log(teacher1.getFullName())

*/