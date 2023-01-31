//window scope
/*
ad = 'Cagatay' //window scope
let name = 'Mahmut'

//scope.js

a = 'Javascript' //a and b are windows scope variables
b = 10
function letsLearnScope() {
    console.log(a,b)
    if(true)
    {
        console.log(a,b)
    }
}
console.log(a,b) //accesssible
*/

//Global Scope
//aynı dosyadan her yerden erişilebilir.
/*
let a = 'Javascript' //a ve b dosya içerisinde global
let b = 10

function letsLearnScope() {
    console.log(a,b)
    if(true) {
        let a = 'Python' //a ve b bu if bloğu içerisinde global
        let b = 100
        console.log(a,b) //Python 100
    }
    console.log(a,b)
}
letsLearnScope()
console.log(a,b) //Javascript 10, accessible
*/
/*
let a = 'Javascript'
let b = 10
function letsLearnScope() {
    console.log(a,b)
    if(true) {
        a = 'Python' //let'ler olmadan aşağıdaki tüm değerleri etkiler.
        b = 100      //let ile bu scope'a ait yeni değişken olarak tanımlamış oluruz.
        console.log(a,b) //Python 100
    }
    console.log(a,b)
}
letsLearnScope()
console.log(a,b) 
*/

/*
{
    deneme = 'test'
    console.log(deneme) //konsoldan deneme'ye erişilebilir.
}
*/
/*
{
    let deneme = 'test'
    console.log(deneme) //konsoldan deneme'nin değeri görülebilir ama 
    //kendisine erişilemez. sadece bu bloktan erişilebilir.
}
*/


