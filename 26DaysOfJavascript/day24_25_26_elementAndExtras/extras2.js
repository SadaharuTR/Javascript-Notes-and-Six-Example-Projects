/*
const form1 = document.getElementById('form1')
console.log(form1.elements) //ile formdaki tüm elemanlara erişebiliriz.
*/

//document.forms
//Dökümandaki tüm form elemanlarını döndürür.

// console.log(document.forms[0])

//console.log(document.forms.form1)
// console.log(document.forms.formtest)

//submit(): Bir formu programlamatik olarak göndermek istersek bu metodu kullanabiliriz.
/*
const submitBtn = document.getElementById('submit-btn')
submitBtn.addEventListener('click', () => {
    setTimeout(() => {
        document.forms.form1.submit()
    }, 3000);
})
*/
//reset(): Bir formu varsayılan değerlerine döndürmekte kullanılır.
/*
const resetBtn = document.getElementById('res-btn')

resetBtn.addEventListener('click', () => {
    document.forms.form1.reset()
})
*/
//Validation: Doğrulama.
// validity
// Form elemanına ait validasyon durumlarını döndürür.
/*
Validasyon durumları ise şöyle olabilir:

badInput : Değer belirlenen tipten farklı bir değer içeriyorsa true döner. Örneğin tipi number olan bir input'a sayı haricinde bir değer girildiğinde sonucu görebilirsiniz.
patternMismatch : Değer pattern niteliğindeki desen ile eşleşmezse true döner.
rangeUnderflow : Değer belirtilen minimum değerinin altındaysa true döner.
rangeOverflow : Değer belirtilen maksimum değerinin üstündeyse true döner.
stepMismatch : Değer belirtilen step niteliğine uygun değilse true döner.
tooLong : Değer belirtilen maxlength değerinden daha uzunsa true döner.
tooShort : Değer belirtilen minlength değerinden daha kısaysa true döner.
typeMismatch : Değer belirtilen tipe uygun değilse (örn: email, url) true döner.
valueMissing : Değer required niteliği belirlenmişse ve boş ise true döner.
*/
/*
const submitBtn = document.getElementById('submit-btn')
submitBtn.addEventListener('click', () => {
    [...document.forms.form1.elements].forEach(element => {
        console.log(element.validationMessage)
    })
})

const resetBtn = document.getElementById('reset-btn')

resetBtn.addEventListener('click', () => {
    document.forms.form1.reset()
})
*/
//validationMessage: Validasyon mesajını döndürür. 
/*
function checkValidity(element) {
    if (element.validity.badInput) {
        element.setCustomValidity('Geçersiz bir değer girdiniz')
    } else if (element.validity.patternMismatch) {
        element.setCustomValidity('Geçersiz bir format girdiniz')
    } else if (element.validity.rangeUnderflow) {
        element.setCustomValidity('Minimum değer karşılanmıyor.')
    } else if (element.validity.rangeOverflow) {
        element.setCustomValidity('Minimum değer aşıldı.')
    } else if (element.validity.stepMismatch) {
        element.setCustomValidity('Artırımda bir sıkıntı var')
    } else if (element.validity.tooLong) {
        element.setCustomValidity('Çok uzun! TWSS')
    } else if (element.validity.tooShort) {
        element.setCustomValidity('Bu da çok kısa kaldı. TWSS')
    } else if (element.validity.typeMismatch) {
        element.setCustomValidity('Tip hatalı.')
    } else if (element.validity.valueMissing) {
        element.setCustomValidity('Değer giriniz!!!')
    } else {
        element.setCustomValidity('')
    }
    element.reportValidity()
}

document.forms.form1.addEventListener('submit', e => {
    e.preventDefault();
    [...e.target.elements].reverse().forEach(element => {
        checkValidity(element)
        // elemanın kontrolünü anlık olarak yapmaya devam et
        element.addEventListener('input', function (e) {
            checkValidity(e.target)
        })
        if(e.target.checkValidity()){
            e.target.submit()
        }
    })
})
*/

/*
Event() ve dispatchEvent(): Bir olayı simüle etmek için bu sınıfı kullanıyoruz. Örneğin bir button'a click olayı tanımlayalım ve bunu programlamatik olarak simüle edelim. Simüle edebilmek içinse dispatchEvent() metoduna parametre olarak Event() sınıfını geçiyoruz.
*/
/*
const testBtn = document.getElementById('test')

testBtn.addEventListener('click', e => {
    if(e.isTrusted){
        console.log('butona tıkladın.')
    } else {
    console.log('butona mutona tıklanmadı kardeşim.')
    }
})

testBtn.dispatchEvent(new Event('click'))
*/

//customEvent(): Bazen önceden tanımlı olaylar yerine özel olayları tetiklemek isteyebiliriz. Örneğin bir tab uygulaması yapalım ve tab değiştiğinde bir özel olay fırlatıp bunu yakalayalım.

const tab = document.querySelector('.tab')
const buttons = tab.querySelectorAll('nav button')
const contents = tab.querySelectorAll('.contents section')

//ilk tab'a active class'ı ekle
buttons[0].classList.add('active');
//ilk tab content'i hariç diğerlerini gizle
[...contents].slice(1).forEach(content => content.style.display = 'none')

buttons.forEach((button, index) => button.addEventListener('click', e => {
    buttons.forEach(btn => btn.classList.remove('active'))
    e.target.classList.add('active')
    contents.forEach(content => content.style.display = 'none')
    contents[index].style.display = 'block'
    tab.dispatchEvent(new CustomEvent('tabChanged', {
        detail: {
            tab: index
        }
    }))
}))

tab.addEventListener('tabChanged', e => {
    console.log(e.detail.tab)
})