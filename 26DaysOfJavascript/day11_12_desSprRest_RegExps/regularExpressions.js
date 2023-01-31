/*
Düzenli ifadeler arama kriteri oluşturmak için kullanılan özel ifadelerdir.
Metin veri türü içerisinde arama yapmak için düzenli ifadeler kullanılır.
Düzenli ifadeler bir karakterden oluşacağı gibi daha karmaşık karakterlerden oluşabilir.
Düzenli ifadeler metin veri türü içinde arama yapma ve değiştirme işlemleri için kullanılır. 
*/

//1.Yol
//Creating a pattern with RegExp Constructor
/*
//without flag
let pattern = 'love'
let regEx = new RegExp(pattern)

//with flag
let flag = 'gi' //global ve case insensitive flag
let regEx2 = new RegExp(pattern, flag)

//ikisi bir arada da yazabiliriz.
let regEx3 = new RegExp('love', 'gi' )
*/

/*
//RegEx ile sayıları ayıklama,
let str = 'Ben 28 yaşındayım ve 1994 yılında doğdum.'
//username desenine uygunluk kontrolü,
let username = 'cagatay demirtas'
//gibi işlemlerde kullanılabilir.
*/

//2.Yol
//RegEx contructor'u olmadan regular expression deseni hazırlama.

/*
let regex = /love/gi
//ile let regEx = new RegExp('love', 'gi') tamamen aynıdır.
*/

//regExpp Object Methods : Yerleşik fonksiyonlara bakalım.

//Testing for a match
/*
const str = 'I love JavaScript'
const pattern = /love/
const result = pattern.test(str) //içinde geçip geçmediğini test eder.
console.log(result) //true
*/

/* //yasaklı kelime kontrolü
let forbiddenWord = /salak/
let comment = 'sen salak mısın kardeşim? senin anlatacağın dersin içine tüküreyim. Artist. Kafayı godum mu...'

console.log(forbiddenWord.test(comment))
*/

//büyük-küçük harf duyarlılığı kalksın. /i
/*
let forbiddenWord = /salak/i
let comment = prompt('yorumunuzu yazın. küfür kullanmayın.')

if(forbiddenWord.test(comment)){
    alert('hıı sensin o hıı.')
}
*/

//array containing all of the match

/* //global flag kullanmazsak
const str = 'I love JavaScript'
const pattern = /love/
const result = str.match(pattern)

console.log(result) //['love', index: 2, input: 'I love JavaScript', groups: undefined]
*/

//global flag'i kullanırsak,
/*
const str = 'I love JavaScript'
const pattern = /love/g
const result = str.match(pattern)

console.log(result) //['love']
*/
/*
let string = 'I lOve my dog and I love myself.'
console.log(string.match(/love/)) //['love', index: 20, input: 'I lOve my dog and I love myself.', groups: undefined]
console.log(string.match(/love/g)) //['love']
console.log(string.match(/love/gi)) //(2) ['lOve', 'love'] 
*/

//search() : bulursa index'ini döndürür, bulamazsa -1 döndürür.
/*
const str = 'I lOve JavaScript and I Love me.'
const pattern = /love/g
const result = str.search(pattern)

console.log(result) //-1
console.log(str.search(/love/gi)) //2
*/

//Replacing a substring
//replace()
//string içerisinde aranan string'i bulup değiştirmemize yarar.
/*
const txt = 'Java is the most beautiful programming language that a human beign has ever created. I recommend java over anything any day.'

matchReplaced = txt.replace(/Java|java/g, 'C#') //global flag olmadan sadece ilk Java'yı değiştirir.

matchReplaced2 = txt.replace(/(J|j)ava/g, 'C#') //bu şekilde de yapılabilir.

matchReplaced3 = txt.replace(/Java/gi, 'C#')

console.log(matchReplaced)
console.log(matchReplaced2)
console.log(matchReplaced3)
//aynı sonuçlar.
*/

/*
const txt = 'Jav%a i%s %the mo%s%t bea%ut%if%ul pro%gram%m%ing %%%lang%ua%ge th%at a hum%an bei%gn ha%s ev%e%r cr%ea%ted.% I rec%ommend ja%va ov%er any%thing avn%y d%ay.'

matches = txt.replace(/%/g, '')
console.log(matches) //Java is the most beautiful programming language that a human beign has ever created. I recommend java over anything avny day.
matches2 = matches.replace(/Java/gi, 'C#')
console.log(matches2) //C# is the most beautiful programming language that a human beign has ever created. I recommend C# over anything avny day.
*/
/*
const txt = 'C%# i%s %the mo%s%t bea%ut%if%ul pro%gram%m%ing %%%lang%ua%ge th%at a hum%an bei%gn ha%s ev%e%r cr%ea%ted.% I rec%ommend C%# ov%er any%thing avn%y d%ay.'
//regEx kullanmadan da replaceAll ile yapabilirdik.
matches = txt.replaceAll('%', '')
console.log(matches)
*/
/*
[]: A set of characters
[a-c] means, a or b or c
[a-z] means, any letter a to z
[A-Z] means, any character A to Z
[0-3] means, 0 or 1 or 2 or 3
[0-9] means any number 0 to 9
[A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
\: uses to escape special characters
\d mean: match where the string contains digits (numbers from 0-9)
\D mean: match where the string does not contain digits
. : any character except new line character(\n)
^: starts with
r'^substring' eg r'^love', a sentence which starts with a word love
r'[^abc] mean not a, not b, not c.
$: ends with
r'substring$' eg r'love$', sentence ends with a word love
*: zero or more times
r'[a]*' means a optional or it can occur many times.
+: one or more times
r'[a]+' means at least once or more times
?: zero or one times
r'[a]?' means zero times or once
\b: word bounder, matches with the beginning or ending of a word
{3}: Exactly 3 characters
{3,}: At least 3 characters
{3,8}: 3 to 8 characters
|: Either or
r'apple|banana' mean either of an apple or a banana
(): Capture and group
*/
/*
const pattern = '[Aa]pple' // A ya da a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt.match(pattern)

console.log(matches)  
*/

/*
const pattern = /[Aa]pple/g // A ya da a ama global flag'li.
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt.match(pattern)

console.log(matches)  
*/

/*
const pattern = /[Aa]pple|[Bb]anana/g // Apple için A ya da a ve Banana için B ya da b
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matches = txt.match(pattern)

console.log(matches)  
*/

/*
const pattern = /\d/g  // d ile numara-numara çıkar demiş oluyoruz.
const txt = 'This regular expression example was made in January 12,  2020.'
const matches = txt. match(pattern)

console.log(matches)  // ["1", "2", "2", "0", "2", "0"], fakat bu istenen bir çıktı değil.
*/
/*
const pattern = /\d+/g  // digit 0-9 ama eşleştirdiğinin tamamını getir.
const txt = 'This regular expression example was made in January 12,  2020.'
const matches = txt. match(pattern)

console.log(matches)  // (2) ['12', '2020']
*/

/*
let name = 'taylan'

console.log(
    /[u|a]n$/.test(name) //un ya da an ile bitiyorsa true.
) //true
*/

/*
let name = 'tayfun'

console.log(
    /a?n$/.test(name) //an ile bitsin ama a opsiyonel olsun.
) //true
*/

/*
let name = 'tayf/n'

console.log(
    /\/?n$/.test(name) // /n ile bitsin ama / opsiyonel olsun. \ ile /'ı kaçırdık.
)//true
*/

/*
const pattern = /[a]./g  // a ve yeni satır karakteri hariç herhangi bir karakter
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)

console.log(matches)  // (5) ['an', 'an', 'an', 'a ', 'ar']
*/

/*
const pattern = /[a].+/g  // .+ herhangi ve en az 1 ya da daha fazla eleştirdiğinde tamamını getir.
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)

console.log(matches)  // ['and banana are fruits']
*/
/*
const txt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern = /[Ee]-?mail/g  // ? ile - olsun ya da olmasın eşleşenleri getir dedik.
matches = txt.match(pattern)

console.log(matches)  //(4) ['e-mail', 'email', 'Email', 'E-mail']
*/

/*
const txt = 'This regular expression example was made in January 18, 2023.'
const pattern = /\b\w{4}\b/g  //tam olarak 4 karakterli kelimeler
const matches = txt.match(pattern)
console.log(matches)  //(3) ['This', 'made', '2023']
*/
/*
const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\b[a-zA-Z]{4}\b/g  // sayılar hariç tam 4 karakterli kelimeler
const matches = txt.match(pattern)
console.log(matches)  //['This', 'made']
*/

/*
const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\d{4}/g  //4 basamaklı bir sayı olsun.
const matches = txt.match(pattern)
console.log(matches)  // ['2019']
*/

/*
const txt = 'This regular expression 34 example was made in December 6,  2019.'
const pattern = /\d{1,4}/g   // 1 to 4 arası karakterdeki sayılar.
const matches = txt.match(pattern)
console.log(matches)  //(3) ['34', '6', '2019']
*/
/*
let str = 'Ben 28 yasindayim ve 1994* yilinda - dogdum. Telefon no 053333333 @½'

console.log(
    str.match(/\b[a-z]+\b/gi) //sayılar hariç bütün kelimeler
)

console.log(
    str.match(/\b[0-9]+\b/gi) //sadece sayılar
)

console.log(
    str.match(/\W+/gi) //yalnızca özel karakterler
)
*/

//Starts with
/*
const txt = 'This regular expression example was made in January 18, 2023.'
const pattern = /^This/ // this ile başlayanlar
const matches = txt.match(pattern)
console.log(matches)  // ['This']
*/
/*
const txt = 'regular This expression example was made in December 6,  2019.'
const pattern = /^This/ // ^ means starts with
const matches = txt.match(pattern)
console.log(matches)  // null
*/

//Negation-Olumsuzlama
/*
const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /[^A-Za-z,. ]+/g  // A'dan Z'ye harfler, a'dan z'ye harfler, boşluk, virgül, nokta OLMASIN!
const matches = txt.match(pattern)
console.log(matches)  //(2) ['6', '2019']
*/

//Exact match
/*
let pattern = /^[A-Z][a-z]{3,12}$/; //A-Z ile başlasın a-z harfleri ile 3-12 karakter arası devam etsin.
let name = 'Cagatay';
let result = pattern.test(name)

console.log(result) // true

name2 = 'cagatay'
let result2 = pattern.test(name2)
console.log(result2) //false

let pattern2 = /^[A-Z]{2}[a-z]{3,12}$/; //İlk iki harfi A-Z ile başlasın a-z harfleri ile 3-12 karakter arası devam etsin.
let name3 = 'CAgatay';
let result3 = pattern2.test(name3)
console.log(result3) //true
*/

/*
function is_valid_variable(str) {
    console.log(
        /^[a-z_]+$/i.test(str)
    ) 
}

is_valid_variable('first_name') // True
is_valid_variable('first-name')// False
is_valid_variable('1first_name') // False
is_valid_variable('firstname') // True
is_valid_variable('first_name_') // True
is_valid_variable('first_name_2') // False
*/

let date = '2022-12-12'

console.log(
    date.match(/\d{4}-\d{2}-\d{2}/g)
)

//gruplamak istersek;
//parantezler içerisine alırız ve ?<isim> ile de isimlendirebiliriz.
console.log(
    date.match(/(?<Year>\d{4})-(?<Month>\d{2})-(?<Day>\d{2})/)
)

let match = date.match(/(?<Year>\d{4})-(?<Month>\d{2})-(?<Day>\d{2})/)

//sadece group'ları basmak istersek;

console.log(match.groups) //{Year: '2022', Month: '12', Day: '12'}