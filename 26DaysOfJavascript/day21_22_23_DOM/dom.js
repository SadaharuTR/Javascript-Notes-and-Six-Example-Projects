/*
DOM (Document Object Module) HTML dökümanları içerisinde bulunan nesnelere kolaylıkla erişim sağlamak ve üzerinde işlemler yapabilmek için tasarlanan bir modeldir. DOM ile HTML dosyamızda bulunan her şeye erişim sağlayabiliriz.
*/

//Getting elements by tag name

//const h1 = document.getElementsByTagName('h1');

// console.log(h1) //HTMLCollection(4) [h1, h1, h1, h1]

/* //h1 bir array değil, html collection'dır. forEach kullanamayız.
h1.array.forEach(element => {
    console.log(element)
});
*/

// console.log(h1.length) //4
// console.log(h1[0])

//tüm elemanlar
/*
let len = h1.length
for (let i = 0; i < len; i++){
    console.log(h1[i])
}
*/

//console.log(...h1)

/* //spread ile 4 elemanlı bir array haline getirme.
[...h1].forEach(item => {
    console.log(item)
})
*/

//--------------------

//Getting elements by class name
/*
const h1 = document.getElementsByClassName('title-1');

console.log(h1) //HTMLCollection(3) [h1.title-1, h1.title-1, div.title-1]

let len = h1.length
for (let i = 0; i < len; i++){
    console.log(h1[i])
}

[...h1].forEach(item => {
    console.log(item)
})
*/

//getting element by Id
/*
const title = document.getElementById('title')
console.log(title)
*/

//getting elemtnt by using querySelector methods
/*
console.log(document.querySelector('.title-1')) //tag ile ilk eşleşen getirilir. //<h1 class="title-1">baslik 1</h1>

console.log(document.querySelector('.title-1 + #title')) //'dan sonra gelen title Id'sine sahip elemanı getir. <h1 id="title">baslik 3</h1>

//querySelector ve querySelectorAll içerisinde direkt css yazarız.

console.log(document.querySelectorAll('.title-1')) //NodeList(3) [h1.title-1, h1.title-1, div.title-1]
//NodeList ile Array metotları ile uyumludur.
console.log(document.querySelectorAll('.title-1').length) //3

document.querySelectorAll('.title-1').forEach(item => console.log(item))

const title = document.querySelectorAll('.title-1')

for (const iterator of title) {
    console.log(iterator)
}
*/

//-------------------------------

//Adding attribute

//getAttribute() metodu ile bir Html öğesinin bir niteliğinin değerini alabiliriz.
//setAttribute() metodu ile bir Html öğesine yeni bir nitelik ekleyebilir ve bu niteliğe istediğimiz değeri verebiliriz.

//Sık kullanılan HTML attribute'leri: id, class, src, style, href, disabled, title, alt.
//const title = document.getElementById('title')

/*
//style. dedikten sonrası css. text-decoration ise textDecoration, animation-iteration-count ise animationIterationCount şeklinde camel case yazıyoruz.
title.style.color = 'blue'
title.style.backgroundColor = 'yellow'
title.title = 'test başlık'
title.className = 'adana'
*/

//setAttibute ile;
/*
title.setAttribute('style', 'color: blue; background-color:yellow')

title.setAttribute('title', 'test baslik')

title.setAttribute('class', 'adana')
*/

//classList kullanımı
/*
title.classList.toggle('test1') //test1 yoksa ekle varsa çıkar.

title.classList.add('adana') //var olan class'ı ezmeden üstüne ekler.
title.classList.remove('tatava') //isimli class'ı siler.
title.classList.remove('tatava', 'test2') //birden fazla silme.
*/

//------------------

//adding text content using textContent
//title.textContent = 'Batman Klarnet.mp3' //düz yazı ekler.

//adding text content using innerHTML
//title.innerHTML = 'Batman Klarnet 3 saat <u>test</u>' //text ile beraber html etiketi de ekleyebiliriz.

//innerHTML'i genelde var olan elemanı değiştireceğimizde veya tamamen yeni bir eleman ekleyeceğimizde kullanırız.

/*
//index.html'deki ul'ye li'ler ekledik.
const lists = `
            <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`
const ul = document.querySelector('ul')
ul.innerHTML = lists

console.log(ul)

//silme işleminde remove.child() yerine;

ul.innerHTML = '' //önerilir.
*/

/*
document.querySelectorAll('h1').forEach((h1, index) => {
    if(index % 2 === 0) {
        h1.style.color ='green'
        h1.style.fontSize = '55px'
    }else{
        h1.style.color = 'yellow'
        h1.style.backgroundColor = 'blue'
    }
});
*/

//------------------------

//creating an element

//syntax
// document.createElement('tagname')
/*
let h1 = document.createElement('h1')

h1.className = 'test'
h1.style.backgroundColor ='blue'
h1.textContent = 'bu JS ile eklendi.'
//oluşturduk fakat nereye?
*/

//multiple element creation
/*
for (let i = 1; i <= 10; i++) {
    let h1 = document.createElement('h1')

    h1.className = 'test'
    h1.style.backgroundColor = 'blue'
    h1.textContent = 'bu JS ile eklendi.' + i
}
//tamam da sayfada nereye oluşacak bu?
*/

//oluşturduğumuz elemanı sayfada görebilmek için onu bir üst elemana child eleman olarak eklememiz lazım.

//document.body ile html dosyasındaki body etiketine erişmiş oluruz.
/*
let h1 = document.createElement('h1')

    h1.className = 'test'
    h1.style.backgroundColor = 'blue'
    h1.textContent = 'bu JS ile eklendi.'

document.body.appendChild(h1) //append ile body'nin sonuna ekler.
document.body.append(h1)

document.body.prepend(h1) //body'nin başına ekler.
*/
/*
//çoklu ekleme
for (let i = 1; i <= 10; i++) {
    let h1 = document.createElement('h1')

    h1.className = 'test'
    h1.style.backgroundColor = 'blue'
    h1.style.color = '#fff'
    h1.textContent = 'bu JS ile eklendi.' + i
    document.body.append(h1)
    //document.body.prepend(h1)
}
*/
//removing child element from parend node
/*
const allH1Elements = document.querySelectorAll('h1')

for (const h1 of allH1Elements){
    h1.remove()
}

const allUElements = document.querySelectorAll('li')

for (const li of allUElements){
    li.remove()
}

const allDivElements = document.querySelectorAll('div')

for (const div of allDivElements){
    div.remove()
}
*/
//ya da
/*
const ul = document.querySelector('ul')
const lists = document.querySelectorAll('li')
for (const list of lists) {
    ul.removeChild(list)
}
*/

//Event Listeners
//JavaScript addEventListener yöntemi, bir kullanıcı bir düğmeyi tıkladığında olduğu gibi, belirli bir olay gerçekleştiğinde çağrılacak işlevleri ayarlamanıza olanak tanır. Olaylar, kullanıcı veya tarayıcı bir sayfayı manipüle ettiğinde gerçekleşen eylemlerdir.

//Yaygın HTML event'leri:onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload.

/*
selectedElement.addEventListener('eventlistner', function (e) {
    // the activity you want to occur after the event will be in here
})
// or

selectedElement.addEventListener('eventlistner', e => {
    // the activity you want to occur after the event will be in here
})
*/
/*
const button = document.getElementById('btn')

button.addEventListener('event', function(e) {

})

//arrow func ile.
button.addEventListener('event', e => {

})
*/

//Click
/*
const button = document.getElementById('btn')

button.addEventListener('click', function(e) {
    console.log('butona tıkladım.')
    console.log(e) //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
    console.log(e.target) //<button id="btn">Click Me</button>
})

//e , event listener objesini verir.
//e.target seçili elemanı verir.
*/

//Event'ler HTML elemanlarına inline script olarak direkt atanabilir. ((index.html'e bak.))

/*
function clickHandle(e) {
    console.log('butona mı tıkladınız acaba?')
    console.log(e)
    console.log(e.id)
    console.log(e.getAttribute('id'))
}
*/

/* //onclick'i burada da belirtebiliriz.
function clickHandle(e) {
    console.log(e.getAttribute('id'))
}

const button = document.getElementById('btn')

button.onclick = e => {
    console.log(e)
}
*/

//double click
/*
const button = document.getElementById('btn')

button.addEventListener('dblclick', function(e) {
    console.log(e)
})
*/

//mouseenter: mouse üzerine geldiği an çalış.
/*
const button = document.getElementById('btn')

button.addEventListener('mouseenter', function(e) {
    console.log(e)
})
*/

//mousemove: mouse üzerinde hareket ederken çalış.
/*
const button = document.getElementById('btn')

button.addEventListener('mousemove', function(e) {
    console.log(e)
})
*/

/*
click - when the element clicked
dblclick - when the element double clicked
mouseenter - when the mouse point enter to the element
mouseleave - when the mouse pointer leave the element
mousemove - when the mouse pointer move on the element
mouseover - when the mouse pointer move on the element
mouseout - when the mouse pointer out from the element
input - when value enter to input field
change - when value change on input field
blur - when the element is not focused
keydown - when a key is down
keyup - when a key is up
keypress - when we press any key
onload - when the browser has finished loading a page
*/


const img = document.querySelector('img')
img.style.opacity = 0 
img.addEventListener('load', function (e) {
    console.log('gorsel yuklendi.')
    img.style.opacity = 1
})

img.addEventListener('error', function(e){
    console.log('resim yüklenirken bir hata oluştu.', e)
    e.target.src = './noimage.jpg' //görsel yüklenmezse bu görseli ver.
})

/*
const input = document.getElementById('name')

input.addEventListener('input', e => {
    if(e.target.value) {
        e.target.classList.remove('error')
    }
    console.log('birşeyler yazılıyor..', e.target.value)
})

input.addEventListener('blur', e => {
    if(e.target.value == '') {
        e.target.classList.add('error')
    }
})
*/

/*
input.addEventListener('keyup', e => {
    console.log('birşeyler yazılıyor...', e.target.value)
})
*/
/*
input.addEventListener('keydown', e => {
    console.log('birşeyler yazılıyor...', e.target.value)
})
*/
/*
input.addEventListener('keypress', e => {
    console.log('birşeyler yazılıyor...', e.target.value)
})
*/
/*
const colorInput = document.getElementById('color-picker')
colorInput.addEventListener('input', e => {
    document.body.style.backgroundColor = e.target.value
})

const genderSelect = document.getElementById('gender')
genderSelect.addEventListener('change', e => { //select box'un değiştiğini change metodu ile anlarız.
    if(e.target.value == 'kadin'){
        document.body.style.backgroundColor = 'pink'
    } else if(e.target.value == 'erkek'){
        document.body.style.backgroundColor = 'black'
    } else{
        document.body.style.backgroundColor = 'white'
    }
})
*/
/*
const genderSelect = document.getElementById('gender')
genderSelect.addEventListener('change', e => { //select box'un değiştiğini change metodu ile anlarız.
    console.log(
        [...e.target.selectedOptions].map(el => el.value))
})
*/
/*
const saveRulesCheckbox = document.getElementById('save-rules')

console.log(
    document.querySelector('input[name=stack]').checked
)

const form = document.getElementById('form')

const saveButton = document.getElementById('save-btn')
saveButton.addEventListener('click', e => {
    console.log(
        input.value,
        colorInput.value,
        saveRulesCheckbox.checked,
        form.elements.stack.value
    )
})
*/
/*
const mass = document.querySelector('#mass')
const height = document.querySelector('#height')
const button = document.querySelector('button')

let bmi

button.addEventListener('click', () => {
    bmi = mass.value / height.value ** 2
    alert(`Your bmi is ${bmi.toFixed(2)}`)
    console.log(bmi)
})
*/

