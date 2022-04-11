// let a = 'hello world'

// a = 'Sveikas pasauli'

// const b = 'b - wassssup'

// console.log(a, b)

// alert('Danger is behind the corner');

let a, b, c, d, e, f, g;

a = "20"; // String
b = 1; // Number
c = true // Boolean true/false

// Sudejus du stringus, jie susijugia

// Sudejus stringa su numeriu gausit stringa su numeriu gale

// Pridedant boolean prie skaiciaus priklausomai ar true ar false, prides


// True = 1, False = 0

d = a * b;

e = a / b;

f = a - c;

g = [a, b, c];

let ff = a + c;

let h = ["labas", 12, true, false]

console.log(d, e, f, ff);
console.log(g[0], g[1], g[2]);
console.log(h)

if (b == 2) {
    // Salyga
    // Vykdis koda, jei salyga atitiks
    console.log('B lygu du')
} else {
    console.log('Salyga nera teisinga')
}

if (b == 2) {
    console.log('B lygu du')
}

if (b == 1) {
    console.log('Salyga nera teisinga')
}


// space //

let x, y, z;

x = 1;
y = 2;
z = 3;

if (x + y > z) {
    console.log('pirmas')
}

else if (z - x == y) {
    console.log('antras')
}

else if (z + x == 1) {
    console.log('trecias')
}

else {
    console.log('Nei viena salyga nera teisinga')
}


// FUNKCIJOS //



const inputElement = document.getElementById('inputas')

const two = 2;

function skaiciavimas() {
    const inputValue = Number(inputElement.value)
    const answer = two + inputValue;

    console.log(answer);

    if (two + inputValue > 10) {
        console.log('Daugiau nei čirikas')
    }
    else if (two + inputValue < 10) {
        console.log('Mažiau nei čirikas')
    }
}

