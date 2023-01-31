//Promise bir işlemin sonucunu temsil eden bir Javascript nesnesidir. 
/*
Diyelim ki bir hamburgerciye gittiniz ve kasada siparişinizi verdiniz. Kasiyer de size siparişinizi hazırladıklarında haber vermek üzere bir elektronik alet teslim etti. Şu anda hamburger bizim için gelecekte elde edebileceğimiz bir değer. Elimizdeki aygıt da bu değere ulaşmamız için müessesenin bize verdiği sözün (işte promise) bir göstergesi.
Aygıt bildirim alıncaya kadar bekleme (pending) durumundadır. Bildirim geldiğinde ise ya hamburgerimiz başarılı (resolved) bir şekilde hazırlanmıştır, ya da beklenenin dışına çıkarak başarısız (rejected) olmuştur. 
*/

//Callback Hatırlatma: Bir fonksiyon çalışmasını tamamladıktan sonra başka bir fonksiyonun çalışmasını sağlayan fonksiyonlara callback fonksiyon denir. 
/*
const test = callback => {
    setTimeout(() => {
        callback('Hata Oluştu.', [])
    }, 2000)

}

const callback = (err, data) => {
    if(err){
        console.log('Hata', err)
    } else
    console.log('data', data)
}

test(callback)
*/
/*
const doSomething = callback => {
    setTimeout (() => {
        const skills = ['HTML', 'CSS', 'JS']
        callback(false, skills)
    }, 2000)
}

doSomething ((err, result) => {
    if (err) {
        return console.log(err)
    }
    return console.log(result)
})
*/

//Promise Constructor

//syntax 
/*
const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
})
*/
/*
const promise = new Promise((resolve, reject) => {
    //resolve('işlem başarılı')
    //reject('işlem başarısız.')
})

console.log(promise) //pending
*/
/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        reject('işlem başarılı')
    }, 3500)

})

promise.then((data) => { //promise başarılı ise resolve, başarısız ise reject'i çalıştırır.
    console.log(data) //bu promise her zaman ya then ya da catch ile yakalanır.
}).catch(err => {
    console.warn(err)
})
*/
/*
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if (skills.includes('Node')) {
            resolve('full stack developer')
        }
        else {
            reject('bir şeyler ters gitti.')
        }

    }, 2000)
})

doPromise.then(result => {
    console.log(result)
}).catch( error => console.error(error))
*/

//Fetch API
/*
Fetch API, tıpkı Ajax gibi veri alma, veri gönderme işlemlerinde kullanılan asenkron bir yapıdır. Fetch ile yapılan işlemler bize resolved, rejected şeklinde yani promise yapısı ile döner.
*/
/*
const API_url = 'https://jsonplaceholder.typicode.com/posts'

fetch(API_url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
*/
/*
const url = 'https://restcountries.com/v3.1/all'

fetch(url)
    .then(response => response.json()) //access the API data as JSON
    .then(data => {
        console.log(data)
    })
    .catch(error => console.warn(error))
*/
//Async and Await
/*
const API_url = 'https://jsonplaceholder.typicode.com/posts'

async function getPosts(){
    const response = await fetch(API_url) //önce burayı yap,
    const data = await response.json //sonra burayı.
    console.log(data) //en son yukarıdaki işlemler bitince burasını yap.
}
*/

//hatalar try-catch ile yönetilir
/*
const API_url = 'https://jsonplaceholder.typicode.com/posts'

async function getPosts(){
    try {
    const response = await fetch(API_url) //önce burayı yap,
    const data = await response.json //sonra burayı.
    console.log(data) //en son yukarıdaki işlemler bitince burasını yap.
    } catch (err) {
        console.error(err)
    }
}
*/

/*
const square = async function (n) {
    return n*n
}

square(2)
*/
//Promise {<fulfilled>: 4}

//Async kullandığımız zaman bir değer yerine promise döndürür.
//Değere ulaşmak için;
/*
const square = async function (n) {
    return n * n
}

async function getData()
{
    const value = await square(2)
    console.log(value)
}

getData()
*/
/*
const url = 'https://restcountries.com/v3.1/all'

const fetchData = async() => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
    } catch (err) {
        console.error(err)
    }
}

console.log('==== async and await ====')
fetchData()
*/
/*
const API_url = 'https://jsonplaceholder.typicode.com/posts'

const getPosts = async () => {
    try {
        const response = await fetch(API_url)
        const data = await response.json 
        console.log(data) 
    } catch (err) {
        console.error(err)
    }
}
*/