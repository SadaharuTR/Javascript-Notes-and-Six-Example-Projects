// Element.attributes elemana ait nitelikleri döndürür.
/*
const h1 = document.querySelector('h1')

console.log(h1.attributes)
console.log(h1.attributes.title)
console.log(h1.attributes.title.value)

console.log(h1.attributes.style)
console.log(h1.attributes.style.value)

console.log(h1.attributes.class)
console.log(h1.attributes.class.value)

for (attr of h1.attributes){
    console.log(attr.name, ':', attr.value)
}
*/


//childElementCount: Elemanın kaç çocuk ögesi olduğunu döndürür.
/*
const ul = document.querySelector('ul')
const deleteButtons = document.querySelectorAll('.delete-btn')

deleteButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        e.target.remove()
        if(ul.childElementCount == 0){
            ul.innerHTML = 'Gosterilecek veri bulunamadı!'
        }
    })
})

console.log(ul.childElementCount)
*/

//children
/*
//elemanın çocuk ögelerini HTMLCollection objesi olarak döndürür.

const ul = document.querySelector('ul')
//const deleteButtons = document.querySelectorAll('.delete-btn') //NodeList
const deleteButtons = ul.children //HTMLCollection

console.log(deleteButtons);

//forEach'i kullanabilmek için,
[...deleteButtons].forEach(btn => {
    btn.addEventListener('click', e => {
        e.target.remove()
        if(ul.childElementCount == 0){
            ul.innerHTML = 'Gosterilecek veri bulunamadı!'
        }
    })
})

console.log(ul.childElementCount)
*/

//------

/*
//clientHeight: elemanın iç yüksekliğini döndürür. yükseklik + padding varsa scrollbar yüksekliği değerini döndürüyor. Border ve margin değerleri hariç.
//clientWidth: iç genişlik döndürür. genişlik + padding varsa scrollbar. Border ve margin hariç tutulur.

const test = document.querySelector('.test')
console.log(test.clientHeight)
console.log(test.clientWidth)
*/

/*
// firstElementChild: ilk elemanı,
// lastElementChild: son elemenı döndürür.

const ul = document.querySelector('ul')
//const deleteButtons = document.querySelectorAll('.delete-btn') //NodeList
const deleteButtons = ul.children //HTMLCollection

console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
*/

/*
//nextElementSibling: Seçilen elemanın hemen sonrasında gelen elemanı döndürür.
//previousElementSibling: Seçilen elemanın hemen öncesinde gelen elemanı döndürür.

 const title = document.querySelector('.title')
 console.log(title.previousElementSibling)
 console.log(title.nextElementSibling)
 console.log(title.nextElementSibling.nextElementSibling) //sonra gelenin sonrası
 console.log(title.previousElementSibling.previousElementSibling.previousElementSibling)
*/

/*
// scrollHeight:  Elemanın taşan alanlarıda dahil olmak üzere yüksekliğini döndürür.
// scrollWidth: Elemanın taşan alanlarıda dahil olmak üzere genişliğini döndürür.

const scrollContent = document.querySelector('.scroll-content')
console.log(scrollContent.clientHeight) //scroll elemanı olduğu için gerçek yüksekliğini vermez. //70
console.log(scrollContent.scrollHeight) //204

const scrollContent2 = document.querySelector('.scroll-content2')
console.log(scrollContent2.clientWidth) 
console.log(scrollContent2.scrollWidth)
*/
/*
// scrollLeft - Scroll olan elemanın soldan mesafesini döndürür. Ayrıca soldan mesafesini ayarlamak içinde aynı özellik kullanılır.
// scrollTop - Scroll olan elemanın yukarıdan mesafesini döndürür. Ayrıca yukarıdan mesafesini ayarlamak içinde aynı özellik kullanılır.

const scrollContent = document.querySelector('.scroll-content')
const scrollDownBtn = document.getElementById('scroll-down')

scrollDownBtn.addEventListener('click', () => {
    //console.log(scrollContent.scrollTop)//kaydırdığımız mesafeyi yukarıdan itibaren verir.
    scrollContent.scrollTop += 50 //50-50 aşağı kay.
})


const scrollContent2 = document.querySelector('.scroll-content2')
const scrollRightBtn = document.getElementById('scroll-right')
const scrollLeftBtn = document.getElementById('scroll-left')


console.log(scrollContent2.scrollWidth)
console.log(scrollContent2.clientWidth)


scrollRightBtn.addEventListener('click', () => {
    scrollContent2.scrollLeft += 50 
})

scrollLeftBtn.addEventListener('click', () => {
    scrollContent2.scrollLeft -= 50 
})

scrollContent2.addEventListener('scroll', e => {
    if(scrollContent2.scrollWidth - scrollContent2.clientWidth == e.target.scrollLeft.toFixed()){
        scrollRightBtn.setAttribute('disabled', 'disabled')
    }else{
        scrollRightBtn.removeAttribute('disabled')
    }
    if(e.target.scrollLeft == 0){
        scrollLeftBtn.setAttribute('disabled', 'disabled')
    }else{
        scrollLeftBtn.removeAttribute('disabled')
    }
})

//scroll genişliği - content genişliği == scrollLeft değeri ise o zaman sona gelinmiştir.
//Sola kaydır butonu disable edilebilir.
*/

//tagName: seçilen ögenin etiket ismini döndürür.
//...
/*
scrollRightBtn.addEventListener('click', e => {
    scrollContent2.scrollLeft += 50 
    console.log(e.target.tagName) //BUTTON
})
*/
//...

//after() ve before(): seçilen elemanın öncesine ve sonrasına öğe eklemek için kullanılır.
/*
let adana = document.getElementById('adana')

let h1 = document.createElement('h1')
h1.textContent = 'baslik'

let p = document.createElement('p')
p.textContent = 'paragraf'

//adana.before(h1)
//adana.after(p)

//adana.after(h1, p)
//adana.before(h1, p)
*/

//append() ve prepend(): after() ve before() metodlarından farklı olarak bu iki metod ile seçilen öğenin içinde öncesine ve sonrasına öğeler eklenir.
/*
let adana = document.getElementById('adana')

let h1 = document.createElement('h1')
h1.textContent = 'baslik'

let p = document.createElement('p')
p.textContent = 'paragraf'

// adana.append(h1)
// adana.prepend(p)

//adana.append(h1, p, 'Badana')
//adana.prepend(h1, p, 'Badana')
*/

//closest(): Seçilen elemana en yakın öğeyi döndürür.
/*
const ul = document.querySelector('ul')
const deleteButtons = document.querySelectorAll('.delete-button')

deleteButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        e.target.closest('li').remove()
        if(ul.childElementCount == 0){
            ul.innerHTML = 'Gösterilecek veri kalmadı.'
        }
    })
})

console.log(ul.childElementCount)
*/

// getBoundingClientRect(): Seçilen öğenin boyutlarını ve pozisyon bilgilerini DOMRect objesi olarak döndürür.
/*
let adana = document.getElementById('adana')

console.log(adana.getBoundingClientRect())
*/

/*
//hasAttribute() : seçilen elemanın belirtilen niteliğinin olup olmadığını kontrol eder.
const aElements = document.querySelectorAll('a')

aElements.forEach(a => {
    if(a.hasAttribute('title')) {
        a.style.backgroundColor = 'yellow'
    }
})
*/
/*
//hasAttributes(): seçilen elemana ait herhangi bir nitelik olup olmadığını kontrol eder.
const h1Elements = document.querySelectorAll('h1')

h1Elements.forEach(h => {
    if(!h.hasAttributes()) { //niteliksizi sarıla.
        h.style.backgroundColor = 'yellow'
    }
})
*/
/*
//matched(): Seçilen elemanın belirtilen CSS seçicisiyle eşleşip eşleşmediğini kontrol eder.

//normalde css'de button[type=submit][disabled] {font-size: 50px} yazarak normal submit butonu ile disabled submit'i ayırabiliriz. JS'de yazmak için;

const buttons = document.querySelectorAll('button')
for(const button of buttons){
    if(button.matches('button[type=submit][disabled]')){
        console.log(button)
    }
}
*/

//toggleAttribute(): Seçilen elemana belirtilen nitelik varsa kaldırılmasını yoksa eklenmesini sağlar.

const button = document.querySelector('button')
const input = document.querySelector('input')

button.addEventListener('click', () => {
    input.toggleAttribute('disabled')
})

//input.toggleAttribute('disabled') aşağıdaki kod ile aynı işlemi yapar.
/*
if(input.hasAttribute('disabled')){
    input.removeAttribute('disabled')
}else {
    input.setAttribute('disabled', 'disabled')
}
*/