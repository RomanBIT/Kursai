// Kintamieji
// __________________________________________________________________________________________

// const kintamuju keyword kuriu negalima keisti
const constVariable = []
constVariable.push('string') // works
// constVariable = [] // Doesnt work
// __________________________________________________________________________________________

// let kintamasis kuri galite prilyginti kazkam kitam
let letVariable = '';
letVariable = 'Kita reiksme' // Works
// __________________________________________________________________________________________

// Operators

// +
// -
// *
// /
// = Prilygina
// == Palygina reiksme
// === Palygina reiksme ir tipa (tarkim ar true === 1 (patirksins ar 1 yra true ir ar tai yra boolean) false)
// != Palygina ar reiksme nera lygi // if (bool != true) kai bool yra false, salyga atitiks ir bus true 
// !== Palygina ar reiksme ir tipas nera lygus kazkam
// > Daugiau negu
// < Maziau negu
// >= Daugiau arba lygu
// <= Maziau arba lygu
// __________________________________________________________________________________________

// Logical operators

// && ir  (1 + 1 === 2 && 2 - 1 === 1) // Veiks jei abi salygos atitinka
// pagrdine naudojama salyguose if (kazkas && kazkas) { ... } 
// function name(boolean) { boolean && daryk kazka... } 

// || arba (1 + 1 === 3 || 2 - 1 === 1) // Veiks jei bent viena salyga atitika
// pagrdine naudojama salyguose if (kazkas || kazkas) { ... } 
// prisilyginant reiksme patikrinti ar ji egzistuoja ir jei ne priskiriam antrine reiksme
// pvz const a = localStorage.getItem('data') || [] // Bandom istraukti localStorage key, jei jo nera, prisilyginam tuscia array

// ! ne (!false) invertuoja reiksme
// string = '';
// (!string) neveiks kai string value yra ne tuscias
// (!string) veiks kai string value yra tuscias
// __________________________________________________________________________________________

// Data types
// __________________________________________________________________________________________

// String
let string = 'Tekstas 123 true false [] {}' // String laisvos formos tekstas
let smartString = `Tekstas ${string} ${constVariable.map((item => { return item }))}` // String laisvos formos tekstas
// __________________________________________________________________________________________

// Number

let number = 3.14; // Priima skaicius
number = number + 20; // Pridejimas
number = number - 20; // Atimimas
number = number * 20; // Daugyba
number = number / 20; // Dalyba
number = NaN // Not a number pvz ('Tekstas' - 20);
// __________________________________________________________________________________________

// Boolean

let boolean = true; // Teisinga reiksme
boolean = false; // Neteisinga reiksme
boolean = !boolean; // Invertuota reiksme
boolean = 1; // True 
boolean = 0; // False
// __________________________________________________________________________________________

// Falsy types
let nullVar = null; // False / Reiskia tuscia reiksme (kuria priskiriam patys noredami nunulint reiksme)
let undefinedVar = undefined; // False / (Niekada nebuvus priskirta jokia reiksme)
let undefinedVar1; // False / Tas pats kas prilygint undefined
let zero = 0 // False
let emptyString = '' // False
let NaNValue = NaN // False
// __________________________________________________________________________________________

// Array

let array = []; // Masyvas i kuri galim deti visus kitus ir net masyvo data types
// pvz
array = [
    'String', // array[0]
    123, // array[1]
    true, // array[2],
    [   // array[3]
        321, // array[3][0]
        false, // array[3][1]
        [ // array[3][2]
            false // array[3][2][0]
        ]
    ],
    { // array[4]
        key: 'value' // array[4].key
    }
]
array = [
    { // array[0]
        key: 'Reiksme', // array[0].key
        key1: 123, // array[0].key1
        key2: true // array[0].key2
    },
    'string', // array[1]
    'string1', // array[2]
    { // array[3]
        key: 'Kita reiksme', //array[3].key
        key1: 321, //array[3].key1
        key2: false //array[3].key2
    }]


// Masyvai prasideda nuo 0
array.length // Gauname masyvo ilgi (skaiciuojamas nuo 1)

// Is masyvo noredami pasiekti reiksmes, nurodome skaiciu (index) kelinta reiksme norim istraukti
array[0] // istrauks pirma reiksme
array[1] // istrauks antra reiksme
array[array.length - 1] // istrauks paskutine reiksme

// Pakeisti reiksme masyve
array[0] = 'Nebe string'; // Perrasysit pirma reiksme masyve
// Prideti reiksme masyve
array[array.length] = 'Nauja reiksme'; // Geriau naudoti push() metoda, maziau bugu
// __________________________________________________________________________________________

// Object

let object = {}; // Objecto iniciavimas
object = {
    key: 'value', // object.key
    array: [ // object.array
        'string', // object.array[0]
        123 // object.array[1]
    ],
    bool: true, // object.bool
    number: 123, // object.number
    string: 'string', // object.string
    undefined // object.undefined // nepriskirta reiksme, tai is key ir gausime undefined kaip reiksme
};

// Priskirt kazkokia reiskme
object.undefined = 'Nebe undefined' // Per taska pasiekt savybe
object['undefined'] = 'Dar karta perarasom' // Kaip array, tik vietoj indexo duodam key kaip string

// __________________________________________________________________________________________
// METODAI
// __________________________________________________________________________________________
// String metodai

string.toLowerCase() // Pavers visa teksta mazosiom raidem
string.toUpperCase() // Pavers visa teksta didziosiom raidem
string.replace('Ka keiciam', 'I ka keiciam') // Pakeis stringe esanti teksta kitu
string.concat('Tekstas1', 'Tekstas2') // Sujungs abu tekstus
string.trim() // Iskerpa whitespace (tarpai, enter simboliai ir t.t.) is abieju pusiu
string.split('Per ka perskiriam') // Padalins stringa per perskiriama simboli ir grazins array su atskirtom dalim
// pvz let username = 'username=Vardas'
// username = string.split('=')[1] // Gausim 'Vardas'
string.includes('Reiksme') // Grazins boolean ar paduota reiksme egzistuoja viduj stringo
string.slice(5, 10) // istrins nuo 5 simbolio iki 10
string.localeCompare('Kitas string') // Naudoja rikiavimui ir grazina -1, 1, 0 (for before, after, or equal).
// __________________________________________________________________________________________

// Number metodai

// Number(someVariable) // Patikrinam ar reiksme yra skaicisu ir pakeiciam jo tipa i skaiciu arba jei ne i NaN 
// parseInt(someVariable) // Patikrinam/Paverciam ar reiksme yra skaicius ... pavercia i sveika skaiciu
// parseFloat(someVariable) // Patikrinam/Paverciam ar reiksme yra skaicius ... pavercia i skaiciu su desimtaine
// __________________________________________________________________________________________

// Math metodai

Math.round(number) // Suapvalins skaiciu i didesne puse 3.5 === 4/ 3.4 === 3
Math.floor(number) // Nuleis skaiciu i mazesne puse 3.9 === 3
Math.ceil(number) // Pakels skaiciu i didesne puse 3.1 === 4 
Math.abs(-number) // Grazins teigiama arba neigiama skaiciu pagal paduota skaicu
Math.min(1, 2, 3, 4, 5, 6) // Grazina maziausia skaiciu / 1
Math.max(1, 2, 3, 4, 5, 6) // Grazina didziausia skaiciu / 6
Math.random() // Grazina skaiciu nuo 0 iki 1 pvz // 0.5186488843399155
// __________________________________________________________________________________________

// Array metodai

array.push('Some value') // Prides nauja reiksme i array gala
array.pop() // Isims reiksme is array galo
array.shift() // Isims reiksme is array pradzios
array.splice(1, 3) // Trins is array reiksmes pagal indexa, prades nuo [1] ir istrins 3 (imtinai)
array.sort() // isrykiuos pagal nurodyta salyga
array.reverse() // Apvers visus array index
array.infexOf('Value') // Suras index pagal reiksme
array.forEach((value, index) => { }) // Suks cikla per visa array, pirmas parametras reiksme, antras index
array.map((value, index) => { }) // Suks cikla per visa array, ir grazins nauja array
array.filter((value, index) => value === 'kazkas' && index !== 2) // Suks cikla per visa array, ir grazins nauja array pagal nurodyta salyga
// __________________________________________________________________________________________

// Object metodai

let target = { a: 'a' }
let source = { b: 'b' }

Object.assign(target, source) // Grazins ir priskirs source ideta i target // { a: 'a', b: 'b' }
Object.keys(target) // Grazins array visu objekto savybiu (keys/properties) ['a', b']
Object.values(target) // Grazins array visu objekto reiksmiu ['a', b']
Object.entries(target) // Grazins array visu objekto savybiu ir reiksmiu [['a', a'], ['b', 'b']]
// __________________________________________________________________________________________

// Date

const date = new Date(); // Sukuria nauja date string/object
const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()]; // Issitraukti menesi/diena/metus
const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()]; // Issitraukti valandas/minutes/sekundes
// Kiti budai issitraukt konkrecias reikmes
new Date().toISOString()
"2016-02-18T23:59:48.039Z"
new Date().toISOString().split('T')[0];
"2016-02-18"
new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/');
"2016/02/18"
new Date().toLocaleString().split(',')[0]
"2/18/2016"

// __________________________________________________________________________________________
// Salygos (if/else if/else/switch/ternary)
// __________________________________________________________________________________________

// if / else if / else

if (boolean) { // Jei boolean bus true
    // Vykdomas kodas
} else if (number === 3) { // Jei pirma salyga false, tikrins sita
    // Vykdomas kodas
} else { // Jei nei viena salyga neatitiko
    // Vykdomas kodas
}

if (boolean) boolean = !boolean // oneliner kur galima ivykdyti koda be riestiniu skliaustu

// __________________________________________________________________________________________
// Switch
let horoscope = 'Cancer'
switch (horoscope) { // Paduodamas kintamasis (veikia kaip salyga)
    case 'Cancer': // Jei kintamasis atininka case, bus vykdomas sito case kodas
        // Vykdomas kodas
        break;
    case 'Capricorn': // Jei kintamasis atininka case, bus vykdomas sito case kodas
        // Vykdomas kodas
        break;
    case 'Virgo': // Jei kintamasis atininka case, bus vykdomas sito case kodas
        // Vykdomas kodas
        break;
    default: // Tuo atveju jei tarkim undefined arba kazkokio kito tipo/reiksmes (veikia kaip else)
        // Vykdomas kodas
        break;
}

// __________________________________________________________________________________________
// Ternary

let a = boolean === true // Boolean veikia kaip salyga
    ? // Nurodo salygos pradzia (panasiai kaip if)
    1 // Jei salyga atininka bus prilygintas 1
    : // Jei salyga neatitiko (Veikia kaip else)
    0 // Bus prilygintas 0

// Butinai turi but tiek ? tiek :
let b = horoscope === 'Virgo' ? console.log('Hi Virgo') : console.log('Not a Virgo') // oneliner
// Jei atitiks salyga vykdis koda
horoscope === 'Virgo' && console.log('Hi Virgo') // oneliner

// __________________________________________________________________________________________

// Cycles/Loops/Iterators

// Basic loop, naudojam pagal index (i atitinka index)
for (
    let i = 0; // Susikuriam indexa, kuris prasideda nuo 0 // Pasiekiamas tik ciklo viduj
    i < 10; // (Salyga) tikrinam ar i maziau negu 10
    i++ // Kiekvienoj naujoj iteracijoj, pakeliam i vienu (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
) {
    // Vykdomas kodas 10 kartu
}

// Of loop, naudojam pagal reiksme
for (let item of array) { // Deklaruojam kintamaji "item" kuris bus kiekviena iteracijos reiksme is musu array

}
// __________________________________________________________________________________________
// while 
while (boolean) { // Kol boolean bus true (labai lengva padaryt infinte loop)
    // Vykdomas kodas
    array.push('a')
    if (array.length < 100) break; // Jei norim nutraukti pagal papildoma salyga
}

// Kiti metodai kaip map(), filter(), reduce() ir t.t. irgi suka ciklus per array

// break; Nutraukti cikla (nebevykdis daugiau iteraciju)
// continue; Persoks i sekancia iteracija (jei tarkim nenorim nieko daryt toj iteracijoj)

// __________________________________________________________________________________________
// Funkcijos

// Standartine funkcija
say('Lape') // Veiks (nesvarbu kur deklaruota funkcija)
function say(word) { // Keyword function, tada pavadinimas, skliaustuose parametrai (word: kazkoks zodis)
    console.log(`Say ${word}`); // Consoleje atprintis musu paduota zodi
}

function a() {
    //... 
    randomReiksme = Math.random() * 3;

    // Funkcijos iskvietimas kitoj funkcijoj su random parametru
    say(randomReiksme)
}

// funkcijos kvietimas
say('Lape') // Veiks (nesvarbu kur deklaruota funkcija)
// __________________________________________________________________________________________
sayButInArrowFunction() // Neveiks // Nes arrow funckija deklaruota veliau
// Arrow funkcija (nusirodo kaip kintamasis)
const sayButInArrowFunction = (zodis) => {
    console.log(zodis)
    // Vykdomas kodas
}

sayButInArrowFunction() // Veiks

// Kiti pvz kur naudojamos arrow func
array.map((value, index) => {
    // Vykdomas kodas
})
// __________________________________________________________________________________________
// DOM (Document Object Model)

document // Visas jusu html dokumentas

// issitraukti konkrecius arba nebutina elementus

document.getElementById('kazoksID') // Istrauks viena elementa pagal jo id
document.getElementsByTagName('div') // Istrauks elementus pagal taga (pvz: div, input, form, button) grazins array su tais elementais
document.getElementsByClassName('kazkokiaKlase') // Istrauks elementus pagal klase, grazins array su tais elementais
// query pagal betkuria uzklausa
document.querySelector('#kazoksID') // istrauks pagal id nes nurodom # pradzioj
document.querySelector('.kazkokiaKlase') // istrauks pagal klase nes nurodom . pradzioj
document.querySelector('input') // istrauks pagal taga nes nurodom konkretu tag (elementa) (istrauks pirma)

document.querySelectorAll('.button') // Istrauks visus .button klase turincius elementus ir grazins ju array
// pvz
// <button class="button"></button>
// <button class="button"></button>
// <button></button> // sito neistrauks
// <button class="button"></button>
// <button class="button"></button>

document.querySelectorAll('.button')[2] // istrauks trecia elementa turinti .button klase

// __________________________________________________________________________________________
// Kurti elementus su js
// vienas budas
document.createElement('button'); // Sukurs javascripte mygtuka (html jis dar neatsiras)
// kitas budas
let element = `<button></button>`

// __________________________________________________________________________________________
// Ideti/isimti i html elementus
// vienas budas (mano manymu prastesnis)
document.body.innerHTML += `<button></button>`; // I dokumento body idesim button
document.body.innerHTML += document.createElement('button'); // I dokumento body idesim button

// Antras budas (veiks document.createElement())
document.body.append(document.createElement('button'), document.createElement('input')); // Naujesne versija nepalaikoma internet explorer (bet leidzia prideti kelis elementus is kart)
document.body.appendChild(document.createElement('button')); // Senesne versija palaikoma visus narsykliu

// isimti elementus
document.body.remove(...document.querySelectorAll('input')) // istrins visus input is body
document.body.removeChild(document.querySelector('input')); // Panaikins input is body