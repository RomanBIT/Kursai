// const me = {
//     firstName: 'Roman',
//     lastName: 'Laskov',
//     age: '34',
//     milestones: ['Programuot nemoka', 'Bet mokinasi'],
//     "key with space": "aAa"
// }

// console.log(me.firstName, me.milestones[0])
// console.log(me["key with space"])

const tableBody = document.getElementById('table')
const planetList = document.getElementById('planetlist')
const keys = ['name', 'height', 'mass', 'eye_color', 'gender', 'homeworld'];


let characters = [];
let fetchUrl = 'https://swapi.dev/api/people/';
let previousPage;
let nextPage

function getCharacters(url) {
    tableBody.textContent = 'May the force be with you...'
    fetch(url).then((response) => {
        response.json().then((data) => {
            characters = data.results;
            previousPage = data.previous;
            nextPage = data.next;
            renderTableData(characters)
        })
    })
}

getCharacters(fetchUrl)

function renderTableData(array) {
    tableBody.innerHTML = '';

    array.map((character) => {
        const rowElement = document.createElement('tr')

        for (let key of keys) {
            const dataCellElement = document.createElement('td');

            if (key === 'homeworld') {
                const buttonElement = document.createElement('button')
                buttonElement.classList.add('btn', 'btn-outline-secondary', 'm-1')
                buttonElement.textContent = 'Homeworld'
                buttonElement.onclick = () => getHomeworld(character[key])
                dataCellElement.appendChild(buttonElement)
            } else {
                dataCellElement.textContent = character[key];
            }

            rowElement.appendChild(dataCellElement)
        }

        tableBody.appendChild(rowElement)
    })
    
buildTotalRow();
}

function buildTotalRow() {
    const rowElement = document.createElement('tr')

for (let key of keys) {
    const dataCellElement = document.createElement('td')
    dataCellElement.classList.add('fw-bold');

    if (key === 'name') {
        dataCellElement.textContent = `Simbolių suma ${getCharacterNamesLengthSum()}`
    }

    if (key === 'height' || key === 'mass') {
        dataCellElement.textContent = getCharacterPropertySum(key);
    }

    rowElement.appendChild(dataCellElement)
}
tableBody.appendChild(rowElement)
}


function getHomeworld(url) {
    planetList.innerHTML = 'Super Nova...'
    fetch(url).then((response) => {
        response.json().then((data) => {
            renderHomeworldData(data)
        })
    })
}


function renderHomeworldData(data) {
    planetList.innerHTML = '';
    // const listElement = document.createElement('ul')
    const keys = ['name', 'population', 'terrain', 'climate', 'gravity']

    for (let key of keys) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${data[key]}`;

        planetList.appendChild(listItem)
    }

}

//--------------------- NUO CIA 


function getAllFirstNames() {
    console.log(characters.map((character) => character.name.split('')))
}

const getCharacterPropertySum = (property) =>
characters.reduce((prev, current) => prev + Number(current[property]), 0);

const getCharacterNamesLengthSum = () => characters.reduce((prev, current) => prev + current.name.length, 0);

// Sortinimas

const sortByNumber = (property) => renderTableData(characters.sort((a, b) => a[property] - b[property]));
const sortByAlphabet = (property) => renderTableData(characters.sort((a, b) => a[property].localeCompare(b[property])));

// Filtravimas

const charactersWithGreaterMassThan80 = () => characters.filter((character) => character.mass > 80);
const charactersWithLessHeightThan180 = () => characters.filter((character) => character.height < 180);
const charatersMale = () => characters.filter((character) => character.gender === 'male');
const charatersWithBlueEyes = () => characters.filter((character) => character.eye_color === 'blue');

// Prideti

function addCharacter() {
    const nameInput = document.getElementById('name').value;
    const heightInput = document.getElementById('height').value;
    const massInput = document.getElementById('mass').value;
    const eyeColorInput = document.getElementById('eye_color').value;
    const genderInput = document.getElementById('gender').value;

    const newCharacter = {
        name: nameInput,
        height: heightInput,
        mass: massInput,
        eye_color: eyeColorInput,
        gender: genderInput
    }

    characters.push(newCharacter);

    renderTableData(characters);
}




// function getAllCharactersHeight() {
//     return characters.map((character) => Number(character.height)).reduce((first, second) => first + second);;
// }

// console.log(getAllCharactersHeight())

// //---------------------

// function getAllCharactersMass() {
//     return characters.map((character) => Number(character.mass)).reduce((first, second) => first + second);;
// }

// console.log(getAllCharactersMass())

// // function getAllCharactersHeightSum() {
// //     return getAllCharactersHeight().reduce((first, second) => first + second);

// // }

// // console.log(getAllCharactersHeightSum())

// function buildTotalRowHeight() {

//     const rowElement = document.createElement('tr')

//     const dataCellElement = document.createElement('td')
//     dataCellElement.textContent = getAllCharactersHeight()

//     rowElement.appendChild(dataCellElement)
//     tableBody.appendChild(rowElement)
// }

// //---------------------

// function buildTotalRowMass() {

//     const rowElement = document.createElement('tr')

//     const dataCellElement = document.createElement('td')
//     dataCellElement.textContent = getAllCharactersMass()

//     rowElement.appendChild(dataCellElement)
//     tableBody.appendChild(rowElement)
// }

// // --------------------

// function getAllFirstNames() {
//     const names = characters.map((character) => {
//         return character.name.split(' ')[0]
//     })
//     return names;
// }



// console.log(getAllFirstNames())

// //----- Du skirtingi metodai RL ir RS ---------- //

// function getAllCharactersLettersRL() {
//     const letters = characters.map((character) => {
//         return character.name.length
//     }).reduce((a, b) => a + b)
//     return letters;
// }

// function getAllCharactersLettersRS() {
//     return characters
//         .map((character) => character.name.length)
//         .reduce((a, b) => a + b)
// }


// console.log(getAllCharactersLettersRL())
// console.log(getAllCharactersLettersRS())

// // ------------ filter

// const filteredMass = () => characters.filter((character) => character.mass >= 80);
// console.log(filteredMass);

// const filteredHeight = () => characters.filter((character) => character.height <= 180);
// console.log(filteredHeight);

// const filteredGender = () => characters.filter((character) => character.gender === 'male');
// console.log(filteredGender);

// const filteredEyesColor = characters.filter((character) => character.eye_color === 'blue');
// console.log(filteredEyesColor);

// // ---------------------------

// const someMale = characters.some((character) => character.gender = 'male')
// console.log(someMale)


// //-----------------------------

// const sortHeight = characters.sort(function (a, b) { return b - a })
// console.log(sortHeight)









// renderTableData(characters)



