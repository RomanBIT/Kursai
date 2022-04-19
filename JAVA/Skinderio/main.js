// Issitraukiu diva is html kur desiu savo skaicius
const numberArea = document.getElementById('numberArea');
// Issitraukiu diva is html kur desiu savo suma
const resultArea = document.getElementById('resultArea');
// Priestai buves skaicius arba suma
let prevNumber;
// Visi matematinai simboliai kuriuos priskirsiu is mathActions funkcijos
// +
// -
// *
// /
let symbol;
// Boolean kintamasis tikrinimui ar patys spaudem lygybes zenkla, ar ivykde mathActions funkcija
let isEqualsClicked = false;

// Prideda paspausta skaiciu i numberArea
// number parametras yra paspaustas skaicius
function addNumber(number) {
    // textContent pasivertus i skaiciu pasiziuriu ar tai yra 0 ir tas nulis ateina be tasko
    if (Number(numberArea.textContent) == 0 && numberArea.textContent != '0.') {
        // Prilyginu is funkcijos parametro atejusi skaiciu i savo numberArea.textContent
        numberArea.textContent = number;
        // Else vyksta kai textContent nera lygus 0
    } else {
        // Pridedu is funkcijos parametro atejusi skaiciu i numberArea.textContent
        numberArea.textContent += number;
    }
}

// Prideti taska prie numberArea
function addDot() {
    // numberArea nuvalom pradzioj ir gale esanti whitespace (ateina is html) ir pridedam taska
    numberArea.textContent = numberArea.textContent.trim() + '.';
}

// istrina paskutini skaiciu numberArea
function deleteNumber() {
    // Prilygina textContent, ta pati textContent tik be paskutinio skaiciaus
    // Slice(0 kur pradeti trinti, -1 kur baigti trinti) pradeda trinti nuo galo
    numberArea.textContent = numberArea.textContent.slice(0, -1);

    // Tikrinama ar numberArea ILGIS yra lygus nuliui
    if (numberArea.textContent.length == 0) {
        // numberArea prilyginama 0
        numberArea.textContent = 0;
    }
}

// Gaunamas simbolis su kuriuo atliekami veiksmai
function mathActions(symbolParam) {
    // jei turime prevNumber ir neesame paspaude lygybes zenklo html'e
    if (prevNumber && !isEqualsClicked) {
        // Kvieciama equals funkcija su false kaip parametru, kad funkcija zinotu, jog ne mes spaudeme lygybes zenkla html'e
        equals(false);
    }

    // buvusi skaiciu perrasom i naujaji
    prevNumber = Number(numberArea.textContent);
    // savo symbol kintamajam priskiriam is parametro atejusi simboli + - * /
    symbol = symbolParam;
    // Prilyginamas numberArea laukas 0, kad galetume rasyti naujus skaicius
    numberArea.textContent = 0;
    // Savo rezultatu area prilyginam previousNumber kuris siuo atveju yra musu suma
    resultArea.textContent = prevNumber;
}

// Atlieka veiksmus kad gauti skaiciu suma
// clicked duoda zinoti ar mes paspaudeme mygtuka "lygu" ar atejo is mathActions funkcijos true/false
function equals(clicked) {
    // Prilyginam parametra kad kitur zinotume ar patys spaudem lygu
    isEqualsClicked = clicked;
    // Jei paskutinis paspaustas simbolis yra +
    if (symbol == '+') {
        // Sudedam ir prilyginam numberArea savo buvusi skaiciu ir naujaji
        numberArea.textContent = prevNumber + Number(numberArea.textContent);
        // Jei paskutinis paspaustas simbolis yra -
    } else if (symbol == '-') {
        // Atimam ir prilyginam numberArea savo buvusi skaiciu ir naujaji
        numberArea.textContent = prevNumber - Number(numberArea.textContent);
        // Jei paskutinis paspaustas simbolis yra *
    } else if (symbol == '*') {
        // Padauginam ir prilyginam numberArea savo buvusi skaiciu ir naujaji
        numberArea.textContent = prevNumber * Number(numberArea.textContent);
        // Jei paskutinis paspaustas simbolis yra /
    } else if (symbol == '/') {
        // Dalinam ir prilyginam numberArea savo buvusi skaiciu ir naujaji
        numberArea.textContent = prevNumber / Number(numberArea.textContent);
    }

    // resultArea prilyginam numberArea kuris siuo atveju yra musu skaiciu suma
    resultArea.textContent = numberArea.textContent
}

// Istraukti sakni is numberArea arba resultArea skaiciaus
function getSquareRoot() {
    // Jei numberArea paverstas i skaiciu yra 0
    if (Number(numberArea.textContent) === 0) {
        // resultArea skaiciu prilyginam istraukta sakni is to paties skaiciaus
        resultArea.textContent = Math.sqrt(Number(resultArea.textContent));
        // Jei numberArea paverstas skaicius nera 0
    } else {
        // numberArea skaiciu prilyginam istraukta sakni is to paties skaiciaus
        numberArea.textContent = Math.sqrt(Number(numberArea.textContent))
    }
}

// Apvalinti numberArea irasyta skaiciu
function roundNumber() {
    // suapvalinam numberArea esanti skaiciu ir ji priskiriam atgal i numberArea
    numberArea.textContent = Math.round(Number(numberArea.textContent));
}
