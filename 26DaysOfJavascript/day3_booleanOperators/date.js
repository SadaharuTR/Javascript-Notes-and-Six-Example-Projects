const date = new Date()

let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hour = date.getHours()-10,
    minute = date.getMinutes(),
    second = date.getSeconds(),
    dayNumber = date.getDay()

//bunu insan okucak insan

let months = ['Ocak', 'Şubat', 'Mart', 'Nisan' ,'Mayıs' , 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']

let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma' ,'Cumartesi']

let humanReadableDate = `${day} ${months[month]} ${year}, ${days[dayNumber]}, ${(hour < 10 ? '0'+hour : hour)}:${(minute < 10 ? '0'+minute : minute)}:${(second < 10 ? '0'+second : second)}`
console.log(humanReadableDate)

//14 Ocak 2023, Cumartesi, 02:08:04

//----------------------
//pratikler
/*
let base = prompt('bir sayi girin')
let height  = prompt('bir sayi daha girin')
let result = base * height / 2
console.log('Üçgenin alan: ', result)
*/
/*
let sideA = parseInt(prompt('bir sayi girin'))
let sideB = parseInt(prompt('bir sayi girin'))
let sideC = parseInt(prompt('bir sayi girin'))

let result = sideA + sideB + sideC
console.log('Üçgenin çevresi: ', result)
*/

