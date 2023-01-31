const user = {}
console.log(user)

/*
const person = { 
    //key - value
    firstName : 'Cagatay',
    lastName : 'Demirtas',
    age : 28,
    country: 'Türkiye',
    city: 'Mersin',
    skills: [
        'Womenizer',
        'HTML',
        'CSS',
        'JS',
        'EF Core',
        'C#',
        'OOP',
        'Gamer'
    ],
    isMarried: false,
    parents: [
        {
            name: "İsmail",
            surname: "Demirtas"
        },
        {
            name: "Fatma",
            surname: "Demirtas"
        }
    ],
    test: {
        deneme: 'Deneme text'
    },
    'phone number': 5323221233
}
console.log(person)

//getting values from object
//using . followed by key name if its one word
//using square bracket and a quote

console.log(person.firstName)
console.log(person.parents)
console.log(user.isMarried ? 'Evli' : 'Bekar')
console.log(person.test.deneme)
console.log(person.skills[1])
console.log(person.parents[1].name)
console.log('+90', person['phone number'])
console.log(person['lastName'])

let keyName = 'age'
console.log(person[keyName])
*/
/*
const person = { 
    //key - value
    firstName : 'Cagatay',
    lastName : 'Demirtas',
    age : 28,
    country: 'Türkiye',
    city: 'Mersin',
    skills: [
        'Womenizer',
        'HTML',
        'CSS',
        'JS',
        'EF Core',
        'C#',
        'OOP',
        'Gamer'
    ],
    isMarried: false,
    parents: [
        {
            name: "İsmail",
            surname: "Demirtas"
        },
        {
            name: "Fatma",
            surname: "Demirtas"
        }
    ],
    test: {
        deneme: 'Deneme text'
    },
    'phone number': 5323221233,

    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    //this bu objenin kendisini temsil eder.

    getFullNameArrow: () => `${person.firstName} ${person.lastName}`
}

console.log(person.getFullName())
console.log(person.getFullNameArrow())

//arrow fonksiyonları object metodu olarak kullanamayız. arrow function içerisindeki this, objenin
//kendisi yerine window'u referans alır.
*/
/*
const person = { 
    //key - value
    firstName : 'Cagatay',
    lastName : 'Demirtas',
    age : 28,
    country: 'Türkiye',
    city: 'Mersin',
    title:'Gentlemen',
    skills: [
        'Womenizer',
        'HTML',
        'CSS',
        'JS',
        'EF Core',
        'C#',
        'OOP',
        'Gamer'
    ],
    isMarried: false,
    parents: [
        {
            name: "İsmail",
            surname: "Demirtas"
        },
        {
            name: "Fatma",
            surname: "Demirtas"
        }
    ],
    test: {
        deneme: 'Deneme text'
    },
    'phone number': 5323221233,

    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    //this bu objenin kendisini temsil eder.

    getFullNameArrow: () => `${person.firstName} ${person.lastName}`
}

person.firstName = 'Ahmet Cagatay'
console.log(person.firstName)

person.skills.push('Hayvansever')
person.skills.push('Terminator')
console.log(person)
*/
/*
person.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length-1)
    .join(' ')
    let lastSkill = this.skills.splice(this.skills.length-1)[0]
    //let lastSkill = this.skills.at(-1)
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}. \nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
}

console.log(person.getPersonInfo())
*/
/*
const formatter = new Intl.ListFormat('tr', {
    style: 'long',
    type: 'conjunction'
});

person.getPersonInfo = function() {
    
    let skills = formatter.format(this.skills)
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}. \nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
}

console.log(person.getPersonInfo())
*/

//object methods

const person = { 
    firstName : 'Cagatay',
    lastName : 'Demirtas',
    age : 28,
    country: 'Türkiye',
    city: 'Mersin',
    title:'Gentlemen',
    skills: [
        'Womenizer',
        'HTML',
        'CSS',
        'JS',
        'EF Core',
        'C#',
        'OOP',
        'Gamer'
    ],
    isMarried: false,
    parents: [
        {
            name: "İsmail",
            surname: "Demirtas"
        },
        {
            name: "Fatma",
            surname: "Demirtas"
        }
    ],
    test: {
        deneme: 'Deneme text'
    },
    'phone number': 5323221233,

    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}

//Object.assign() ile orjinal objeyi bozmadan kopyalayabiliriz.
/*
//referansı person olduğu için,
let newPerson = person
console.log(person) //Cagatay
newPerson.firstName = 'Muratti'
console.log(person) //Murat'a dönüştü. newPerson'ı değiştirmemize rağmen.
*/
/*
let newPerson = Object.assign({}, person)
console.log(person) //Cagatay
newPerson.firstName = 'Muratti'
console.log(person) //Cagatay
console.log(newPerson) //Muratti
*/
/*
//Object.keys() oluşturulan bütün keyleri döner.
console.log(Object.keys(person))

//bu da values'ları döner.
console.log(Object.values(person))
*/

//hem keyler hem values'lar
/*
for(let [key, val] of Object.entries(person)) {
    console.log(key, val)
}
*/

//böyle bir property var mı?
console.log(person.hasOwnProperty('name'))
console.log(person.hasOwnProperty('parents'))
console.log(person.hasOwnProperty('lelelo'))

//Object.freeze() ile objemizin içindekileri değişitirilemez yapabiliriz.

Object.freeze(person)

person.firstName = 'Ali'
console.log(person)

//Object.seal() ile olan property değerleri değiştirilebilir ama yeni property eklenemez ya da silinemez.