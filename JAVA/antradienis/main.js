const ekranelis = document.getElementById('ekranelis');

let firstNumber

function addNumber(number) {
    if (Number(ekranelis.textContent) == 0) {
        ekranelis.textContent = number;
    } else {
        ekranelis.textContent += number;
    }
}

function deleteNumber() {
    ekranelis.textContent = ekranelis.textContent.slice(0, -1)

    if (ekranelis.textContent.length == 0) {
        ekranelis.textContent = 0
    }
}


function add() {
    firstNumber = Number(ekranelis.textContent)
    ekranelis.textContent = 0
}

function equals() {
    ekranelis.textContent = firstNumber + Number(ekranelis.textContent)
}
