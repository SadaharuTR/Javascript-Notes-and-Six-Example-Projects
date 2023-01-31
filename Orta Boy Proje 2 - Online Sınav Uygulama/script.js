let sunucudanDonen

let baglanti = new XMLHttpRequest();
baglanti.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        sunucudanDonen = JSON.parse(baglanti.responseText)
        soruGetir()
    }
    return sunucudanDonen
};
baglanti.open("GET", "data.json", true);
baglanti.send();

const sonucAlani = document.getElementsByClassName('soruAlani')[0]
const soru = document.getElementById('soru')
const secenekler = document.getElementsByName('secenek')

const aciklamaA = document.getElementById('aciklamaA')
const aciklamaB = document.getElementById('aciklamaB')
const aciklamaC = document.getElementById('aciklamaC')
const aciklamaD = document.getElementById('aciklamaD')

const gonderButonu = document.getElementById('gonder')

let puan = 0
let sira = 0

function soruGetir() {
    secimiTemizle()
    console.log(sunucudanDonen)
    let siradakiSoru = sunucudanDonen.sorular[sira]
    soru.innerHTML = siradakiSoru.soru

    aciklamaA.innerText = siradakiSoru.secenekA
    aciklamaB.innerText = siradakiSoru.secenekB
    aciklamaC.innerText = siradakiSoru.secenekC
    aciklamaD.innerText = siradakiSoru.secenekD

}

function secimiTemizle(){
    secenekler.forEach(secenek => secenek.checked = false)
}

function secimiAl () {
    let secim;
    secenekler.forEach(secenek => {
        if(secenek.checked == true) {
            secim = secenek.id
        }
    })
    return secim
}

gonderButonu.addEventListener('click', () => {
    const secilen = secimiAl()
    console.log(secilen)

    // var audio = new Audio('countdown.mp3');
    // audio.play();

    if(secilen) {
        if(secilen === sunucudanDonen.sorular[sira].cevap){
            puan += 10
        }
        sira++

        if(sira < sunucudanDonen.sorular.length){
            soruGetir()
        }
        else {
            sonucAlani.innerHTML = 
            `<h2>Mevcut sorular içerisinden ${puan}/100 oranında başarı sağladınız.</h2>`
            if(puan > 50){
                let audio = new Audio('good.mp3');
                audio.play();
            }
            else {
                var audio = new Audio('bad.mp3');
                audio.play();
            }
            gonderButonu.setAttribute('onclick', 'location.reload()');
            gonderButonu.innerHTML = ("Yeniden Başlat!");
        }
    }
})