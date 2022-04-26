// const me = {
//     firstName: 'Roman',
//     lastName: 'Laskov',
//     age: '34',
//     milestones: ['Programuot nemoka', 'Bet mokinasi'],
//     "key with space": "aAa"
// }

// console.log(me.firstName, me.milestones[0])
// console.log(me["key with space"])

let characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
        homeworld: '',
    },
];


const tableBody = document.getElementById('table')
const keys = Object.keys(characters[0])


function renderTableData(array) {
    tableBody.innerHTML = '';

    array.map((character) => {
        const rowElement = document.createElement('tr')

        for (let key of keys) {
            const dataCell = document.createElement('td');

            if (key === 'homeworld') {
                const buttonElement = document.createElement('button')
                buttonElement.classList.add('btn', 'btn-outline-secondary', 'm-1')
                buttonElement.textContent = 'Homeworld'
                buttonElement.onclick = () => getHomeworld(character[key])
                rowElement.appendChild(buttonElement)
            } else {
                dataCell.textContent = character[key];
            }
           
            rowElement.appendChild(dataCell)
        }

        tableBody.appendChild(rowElement)
    })
    buildTotalRowHeight()
    buildTotalRowMass()

}


//---------------------

function getAllCharactersHeight() {
    return characters.map((character) => Number(character.height)).reduce((first, second) => first + second);;
}

console.log(getAllCharactersHeight())

//---------------------

function getAllCharactersMass() {
    return characters.map((character) => Number(character.mass)).reduce((first, second) => first + second);;
}

console.log(getAllCharactersMass())

// function getAllCharactersHeightSum() {
//     return getAllCharactersHeight().reduce((first, second) => first + second);

// }

// console.log(getAllCharactersHeightSum())

function buildTotalRowHeight() {

    const rowElement = document.createElement('tr')

    const dataCellElement = document.createElement('td')
    dataCellElement.textContent = getAllCharactersHeight()

    rowElement.appendChild(dataCellElement)
    tableBody.appendChild(rowElement)
}

//---------------------

function buildTotalRowMass() {

    const rowElement = document.createElement('tr')

    const dataCellElement = document.createElement('td')
    dataCellElement.textContent = getAllCharactersMass()

    rowElement.appendChild(dataCellElement)
    tableBody.appendChild(rowElement)
}

// --------------------

function getAllFirstNames() {
    const names = characters.map((character) => {
        return character.name.split(' ')[0]
    })
    return names;
}



console.log(getAllFirstNames())

//----- Du skirtingi metodai RL ir RS ---------- //

function getAllCharactersLettersRL() {
    const letters = characters.map((character) => {
        return character.name.length
    }).reduce((a, b) => a + b)
    return letters;
}

function getAllCharactersLettersRS() {
    return characters
        .map((character) => character.name.length)
        .reduce((a, b) => a + b)
}


console.log(getAllCharactersLettersRL())
console.log(getAllCharactersLettersRS())

// ------------ filter

const filteredMass = characters.filter((character) => character.mass >= 80);
console.log(filteredMass);

const filteredHeight = characters.filter((character) => character.height <= 180);
console.log(filteredHeight);

const filteredGender = characters.filter((character) => character.gender === 'male');
console.log(filteredGender);

const filteredEyesColor = characters.filter((character) => character.eye_color === 'blue');
console.log(filteredEyesColor);

// ---------------------------

const someMale = characters.some((character) => character.gender = 'male')
console.log(someMale)


//-----------------------------

const sortHeight = characters.sort(function (a, b) { return b - a })
console.log(sortHeight)

let fetchUrl = 'https://swapi.dev/api/people/';
let previousPage;
let nextPage

function getCharacters(url) {
    fetch(url).then((response) => {
        response.json().then((data) => {
            characters = data.results;
            previousPage = data.previous;
            nextPage = data.next;
            renderTableData(characters)
        })
    })
}

function getHomeworld(url) {
    fetch(url).then((response) => {
        response.json().then((data) => {
            console.log(data)
        })
    })
}

getCharacters(fetchUrl)
renderTableData(characters)



