
/*
preventDefault: Bazı etiketlerin varsayılan davranışları vardır. Örneğin, bir a etiketine basınca ilgili linke yönlendirilir ya da form içinde tipi submit olan bir button'a basınca formu gönderir. Bu gibi varsayılan davranışları engellemek için preventDefault kullanabiliriz.
*/
/*
const aTags = document.querySelectorAll('a')

aTags.forEach(a => {
    a.addEventListener('click', e => {
        const href = e.target.getAttribute('href')
        if(href.includes('http') && !confirm('Dış bağlantıya gitmek üzeresiniz! Dikkat!')
        ){
            //dış link
            e.preventDefault()
        }
    })
})
*/

/*
stopPropagation: Varsayılan yayılmayı engellemek içinse bu özellik kullanılır. Bir örnekle anlatmak gerekirse, iç içe 3 tane etiketimiz olduğunu düşünelim ve bu 3 etiketinde bir click olayı olsun. Eğer 3. etikete tıklarsam, ne olmasını beklerim? Gelin bir bakalım.
*/
/*
const test1 = document.querySelector('.test1')
const test2 = document.querySelector('.test2')
const test3 = document.querySelector('.test3')
*/
//içten dışa yayılma
/*
test1.addEventListener('click', () => console.log('test1 yazdırıldı.'))
test2.addEventListener('click', () => console.log('test2 yazdırıldı.'))
test3.addEventListener('click', () => console.log('test3 yazdırıldı.'))
*/
/*
//dıştan içe yayılma
test1.addEventListener('click', () => console.log('test1 yazdırıldı.'), true)
test2.addEventListener('click', () => console.log('test2 yazdırıldı.'), true)
test3.addEventListener('click', () => console.log('test3 yazdırıldı.'), true)
*/
/*
//yayılmayı durdurmak istiyorsak,
test1.addEventListener('click', () => console.log('test1 yazdırıldı.'))
test2.addEventListener('click', () => console.log('test2 yazdırıldı.'))
test3.addEventListener('click', e => {
    e.stopPropagation() //yayılma zortingen şıtrayze.
    console.log('test3 yazdırıldı.')})
*/
/*
const todos = document.getElementById('todos')

todos.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', mahmut => {
        console.log('completed calisti')
        mahmut.target.classList.toggle('completed')
    })
})

todos.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation()
        e.target.closest('li').remove()
    })
})
*/

//stopImmediatePropagation()
/*
const test1 = document.querySelector('.test1')
const test2 = document.querySelector('.test2')
const test3 = document.querySelector('.test3')

test3.addEventListener('click', e => {
    e.stopImmediatePropagation()
    console.log('test3 yazdırıldı.')})
//aynı elemana sahip diğer olayın çalışmasını durdurur.
test3.addEventListener('click', e => {
    console.log('test3 2. event yazdırıldı.')})    
//bu çalışmaz.
*/

//Javascript'de CSS özellikleri eklemek için style objesi içinde tanımlarız. 
//document.styleSheet objesi içindeki stilleri değiştirmek, güncellemek, kaldırmak ya da değerini çekmek içinse kullanabileceğimiz metodlar da vardır.

//setProperty()
/*
const h1 = document.querySelector('h1')

//h1.style.color = 'red'
h1.style.setProperty('color', 'red')
*/
//let propName = 'color'
//h1.style[propName] = 'yellow'
//h1.style.setProperty(propName, 'blue')

//removeProperty()

//h1.style.removeProperty('background-color') //zort
/*
document.styleSheets[0].cssRules[1].style.removeProperty('text-decoration')
document.styleSheets[0].cssRules[1].style.removeProperty('background-color')
*/

//getPropertyValue()

//console.log(h1.style.getPropertyValue('background-color')) //zort

//setProperty() hariç diğer CSS özellikleri ile ilgili metotlar dökümanlardaki stylesheet objesindeki işlemleri yapmak için kullanılır.
/*
console.log(document.styleSheets[0].cssRules[1].style.getPropertyValue('color'))
//color'u JS ile eklediğimiz için gözükmez.

//background-color html içindeki style içerisinde. O yüzden gözükür.
console.log(document.styleSheets[0].cssRules[1].style.getPropertyValue('background-color'))
//yellow
console.log(document.styleSheets[0].cssRules[1].style.getPropertyValue('text-decoration'))
//underline

//getPropertyPriority()
//!important CSS özelliği, CSS belirli uygulanan bir stili öncelikli duruma getirmek için kullanabileceğimiz bir önem derecesidir. 
console.log(document.styleSheets[0].cssRules[1].style.getPropertyPriority('background-color')) //important
*/

//MediaQueryList: Responsive tasarımda kullandığımız css sorgularını JS'de kullanmamıza yarar.

//window.matchmedia()
/*
const isMobile = window.matchMedia('(max-width: 480px)')

function mobileDetectHandle() {
    if(isMobile.matches){
        document.body.classList.add('mobile')
    }else{
        document.body.classList.remove('mobile')
    }
}

mobileDetectHandle()
isMobile.addEventListener('change', mobileDetectHandle)
*/
/*
designMode: Bir belgenin tasarım modunda olup olmadığını belirlememizi sağlar.
document.designMode = 'on'
*/

//selectionStart ve selectionEnd: Kullanıcıdan bilgi aldığımız input ve textarea elemanlarında seçilen yazının başlangıç ve bitiş index değerlerini döndürür. Örneğin textarea içinde seçilen yazıyı konsola basmak için;

/*
Metodun 4. parametresinde seçimden sonraki konumu ayarlanıyor.

select - ekleme yaptıktan sonra ekleneni,
start - ekleme yaptıktan sonra eklenenin başını,
end - ekleme yaptıktan sonra eklenenin sonunu seçer.
*/
/*
const input = document.querySelector('input')
input.addEventListener('select', e => {
    console.log(e.target.value.substring(e.target.selectionStart, e.target.selectionEnd))
})
*/
//setRangeText(): Başlangıç ve bitiş indexlerine göre seçilen değeri belirlenen değer ile değiştirir.
/*
const textarea = document.querySelector('textarea')
const actionButtons = document.querySelectorAll('.action-btn')

actionButtons.forEach(button => {
    button.addEventListener('click', e => {
        let selectedText = textarea.value.substring(
            textarea.selectionStart, textarea.selectionEnd
        )

        switch(e.target.dataset.type){
            case 'bold':
                selectedText = `<b>${selectedText}</b>`
                break
            case 'italic':
                selectedText = `<i>${selectedText}</i>`
                break
            case 'uppercase':
                selectedText = selectedText.toLocaleUpperCase('TR')
                break
        }

        textarea.setRangeText(
            selectedText,
            textarea.selectionStart,
            textarea.selectionEnd,
            'select'
        )
        textarea.focus()
        preview.innerHTML = textarea.value
    })

    const preview = document.getElementById('preview')
    textarea.addEventListener('keyup', e => {
        preview.innerHTML = e.target.value
    })

})
*/

//setSelectionRange()
/*
const textarea = document.getElementById('test-textarea')
const button = document.getElementById('button')

button.addEventListener('click', () => {
    textarea.focus()
    textarea.setSelectionRange(9, 11)
})
*/


//stepDown() ve stepUp()
/*
const inputNumber = document.querySelector('input[type=number]')

const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')

incrementBtn.addEventListener('click', e => {
    inputNumber.stepUp()
})

decrementBtn.addEventListener('click', e => {
    inputNumber.stepDown()
})
*/

/*
const inputs = document.querySelectorAll('input.test')
const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')

incrementBtn.addEventListener('click', e => {
    inputs.forEach(input => {
        input.stepUp()
    })
})

decrementBtn.addEventListener('click', e => {
    inputs.forEach(input => {
        input.stepDown()
    })
})

const pickerBtn = document.getElementById('picker-btn')
const timeInput = document.querySelector('.time')
const dateInput = document.querySelector('.date')
const fileInput = document.querySelector('.file')
const colorInput = document.querySelector('.color')

pickerBtn.addEventListener('click', e => {
    colorInput.showPicker()
})
*/