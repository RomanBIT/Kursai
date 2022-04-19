const numberArea = document.getElementById('numberArea');
const resultArea = document.getElementById('resultArea');

let prevNumber;
let symbol;
let isEqualsClicked = false;
let sum = 0;

function addNumber(number) {
    if (Number(numberArea.textContent) == 0) {
        numberArea.textContent = number;
    } else {
        numberArea.textContent += number;
    }
}

function deleteNumber() {
    numberArea.textContent = numberArea.textContent.slice(0, -1);

    if (numberArea.textContent.length == 0) {
        numberArea.textContent = 0;
    }
}

function mathActions(symbolParam) {
    if (prevNumber && !isEqualsClicked) {
        equals(false);
    } else {
        resultArea.textContent = Number(numberArea.textContent);
    }

    prevNumber = Number(numberArea.textContent);
    symbol = symbolParam;
    numberArea.textContent = 0;
}

function equals(clicked) {
    isEqualsClicked = clicked;
    if (symbol == '+') {
        sum = prevNumber + Number(numberArea.textContent);
    } else if (symbol == '-') {
        sum = prevNumber - Number(numberArea.textContent);
    } else if (symbol == '*') {
        sum = prevNumber * Number(numberArea.textContent);
    } else if (symbol == '/') {
        sum = prevNumber / Number(numberArea.textContent);
    }

    numberArea.textContent = sum;
    resultArea.textContent = sum;
}
function getSquareRoot() {
    if (Number(numberArea.textContent) === 0) {
        resultArea.textContent = Math.sqrt(Number(resultArea.textContent));
    } else {
    numberArea.textContent = Math.sqrt(Number(numberArea.textContent))
}
}

function addDot() {
    numberArea.textContent = numberArea.textContent.trim() + '.'
}

function addSurprise() {
    numberArea.textContent = ''
    numberArea.textContent = numberArea.textContent.trim() + 'Trojan installed'
}

