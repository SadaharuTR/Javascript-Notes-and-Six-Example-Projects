/*
Web Storage verileri tarayıcıda depolamak için kullanılır. Local Storage ve Session Storage olmak üzere iki depolama türü vardır. HTML5 öncesinde bu işlem çerezler ile yapılıyordu ama güvenli değildi. HTML5 Web Storage artık daha güvenli daha hızlı ve büyük verileri saklamaya imkan veriyor.
*/

/*
API (Application Programming Interface), bir uygulamanın, servisin ve/veya platformun (örn. Chrome, Firefox, HTML, macOS, Youtube, MailChimp, Twitter, HubSpot, Facebook, Google, WordPress, DigitalOcean, Grav, Nginx, Ubuntu, Android, jQuery, ...) sahip olduğu yeteneklere izin verilen sınırlandırmalar dahilinde dışarıdan erişilebilmesini sağlayan bir arayüzdür.

Bu kullanım sürecinde uygulamanın kendisine ihtiyaç duymadan sunulan özellikleri, fonksiyonları, içerikleri edinebilir ve/veya gönderim yapabilirsiniz. Elbette -çoğunlukla- erişimler belirli sınırlandırmalara sahiptir ve loglanırlar. Ayrıca, gerçekleştirmek istediğiniz işlemler için erişim sağlamak istediğiniz uygulama tarafından size özel sunulan erişim bilgilerini kullanmanız gerekir.
*/

/*
Cookies (Çerezler) Nedir?

İnternette gezinirken ziyaret ettiğiniz web sayfaları, bilgisayarınıza ve telefonunuza küçük bilgi dosyaları kaydeder. Bu dosyalar telefon veya bilgisayarınızın hafızasında saklanır. Daha sonra aynı siteleri ziyaret ettiğinizde bu kayıtlı bilgi dosyaları sayesinde siteler sizi tanıyabilir. Çerezlerin işlevleri genelde bu yöndedir. Bilgileriniz bu dosyalara yazıldığından dolayı tekrar aynı web sayfalarını ziyaret ettiğinizde bilgilerinizi yeniden girmeye gerek duymazsınız. İşte bu kayıtlı bilgi dosyalarına cookie denir. Türkçede karşılığı ise çerez olarak adlandırılır. Çerezlerin işlevleri, kullanıcıyı web sitesine hatırlatmaktır. Çerezlerin işlevleri doğru kullanıldığında kullanıcı deneyimi kaliteli hale gelir.
*/

//------------

//Local ile Session arasındaki fark Local Storage'da tanımladığımız verilerin expire time'ı yoktur. Veri, kullanıcı silmediği sürece daima ulaşılırdır. Seesion'da i se aktif oturum sonlandığı anda o kaydedilen veri de gider.

//Local ya da Session key ve value'ler her zaman string olmak zorundadır.

//Farklı tarayıcılar arasında aynı storage verisine erişemeyiz. Chrome'da oluşturulan local storage'a firefox'dan erişemeyiz. 

//Local storage'da 5 temel metot vardır.

//setItem(), getItem(), removeItem(), clear(), key()

//Web Storage Kullanım Amaçları: Geçici data depolama, alışveriş sepeti gibi yerlerde ürünlerin durması, offline olarak kullanım, istekleri azaltmak konusunda, oturum doğrulama vs.

//setting item to local storage: her zaman string olarak depolar. Eğer ki bir obje ya da array depolamak istersek  veri türünü kaybetmemek için mutlaka stringify kullanmalıyız.
//localStorage.setItem('name', 'Cagatay')
/*
const names = ['cagatay', 'mert', 'mahmut']

const user = {
    name: 'ali',
    surname: 'velidiken'
}

localStorage.setItem('names', JSON.stringify(names))
localStorage.setItem('user', JSON.stringify(user))

console.log(localStorage)
*/
/*
console.log(typeof localStorage.getItem('user')) //string

console.log(JSON.parse(localStorage.getItem('user'))) //string'i parse ettiğimiz zaman objemizi verecektir.

//bu şekilde local veya session storage'da obje ve dizilerimizi tutabiliriz.

localStorage.setItem('age', 200)
console.log(localStorage)
*/
/*
const skills = ['HTML', 'CSS', 'JS', 'Angular']

const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)
*/


//getting item from localStorage

//syntax
//localStorage.getItem('key')

//clear localStorage : her şeyi uçur.
//localStorage.clear()

//removing from localStorage //belirli bir veriyi uçur.
//localStorage.removeItem('key')

//examle : alışveriş sepeti

let basket = JSON.parse(localStorage.getItem('basket')) || [] //localStorage'da varsa getir yoksa boş dizi döndür.
const products = [
    {
        id: 1,
        title: 'Boombook Pro 2020',
        price: 40_000
    },
    {
        id: 2,
        title: 'Corsair K70 Rapid',
        price: 380
    },
    {
        id: 3,
        title: 'Huawei D16',
        price: 21520
    }
]

function saveToStorage() {
    localStorage.setItem('basket', JSON.stringify(basket))
}

function addBasket(productId){
    const basketIndex = basket.findIndex(b => b.productId == productId)
    if(basketIndex > -1) {
        basket[basketIndex] = {
            ...basket[basketIndex],
            amount: basket[basketIndex].amount + 1
        }
    } else {
        basket.push({
            productId,
            amount: 1
        })
    }
    saveToStorage()
}

function removeBasket(productId) {
    const item = basket.find(p => p.productId == productId)
    if(item){
        if (item.amount == 1){
            basket = basket.filter(p => p.productId != productId)
            }else {
                basket = basket.map(i => {
                    if(i.productId == productId) {
                        i.amount -= 1
                    }
                    return i
                })
            }
    }
    saveToStorage()
}

function totalPrice() {
    return basket.reduce((prev, basket) => {
        const product = products.find(p => p.id == basket.productId)
        return prev += (product.price * basket.amount)
    }, 0)
}

// addBasket(1)
// addBasket(1)
// addBasket(2)
// addBasket(2)
// addBasket(2)
// addBasket(3)
// addBasket(3)
// addBasket(3)


//localStorage.clear()

removeBasket(1)

console.log(totalPrice())
