/**
JSON (JavaScript Object Notation), basit veri yapılarını temsil etmek için tasarlanmış bağımsız bir veri değişim formatıdır. Esas olarak iki sistem arasındaki veri alışverişi için kullanılır. Örneğin JSON kullanarak sunucu ile web uygulaması arasında veri aktarabilirsiniz.
 */

//JSON'da keyler her zaman "" içerisinde olmalıdır.
/*
{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }
*/

//ya {} ile ya da birden fazla user varsa [] ile başlar.

/*
[
    {
        "name": "Cagatay",
        "surname" : "Demirtas"
    },
    {
        "name": "Tarçın",
        "surname" : "Demirtas"
    },
    {
        "name": "İsmail",
        "surname" : "Demirtas"
    }
]
 */

//converting json to JS Object

//Genellikle json datalarını bir backend'den ya da bir dosyada alırız. Bunu JS'de kullanabilmemiz için parse() etmemiz gerekli.
/*
let sampleJSON = `[
{
    "name": "Cagatay",
    "surname" : "Demirtas"
},
{
    "name": "Tarçın",
    "surname" : "Demirtas"
},
{
    "name": "İsmail",
    "surname" : "Demirtas"
}
]`

try {
let users = JSON.parse(sampleJSON)

console.log(typeof sampleJSON) //string
console.log(typeof users) //object
} catch (err){
    console.log(err.message)
}

//bir JS objesini JSON'a dönüştürmek için; 

let categories = [
    {
        name: 'css',
        count: 5 
    },
    {
        name: 'JS',
        count: 16 
    }
]

let categoriesJSON = JSON.stringify(categories)

console.log(categories)
console.log(categoriesJSON)

console.log(typeof categories)
console.log(typeof categoriesJSON)
*/

//example
/*
const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`

const usersObj = JSON.parse(usersText, (key, value) => {
    let newValue =
        typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
    return newValue
})
console.log(usersObj)

let users = JSON.parse(usersText, (key, value) => {
    console.log('KEY', key)
    console.log('VALUE', value)
})
console.log(users)


let users1 = JSON.parse(usersText, (key, value) => {
    return key == 'firstName' ? value.toLowerCase() : value
})
console.log(users1)
*/

//example
/*
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Redux',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
  const txt = JSON.stringify(users, undefined, 4)
  console.log(txt)
  */

//using a filter array with JSON.stringify

const user = {
    firstName: 'Cagatay',
    lastName: 'Demirtas',
    country: 'Turkey',
    city: 'Mersin',
    email: 'ronaldo@messi.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
    age: 28,
    isLoggedIn: false,
    points: 30
  }
  //ilk parametre stringify edilecek obje, ikincisi istenilen key'ler, üçüncüsü bırakılacak boşluk
  const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'], 4)
  console.log(txt)

  const txt1 = JSON.stringify(user,['age', 'country'], 4)
  console.log(txt1)
