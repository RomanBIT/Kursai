// const me = {
//     firstName: 'Roman',
//     lastName: 'Laskov',
//     age: '34',
//     milestones: ['Programuot nemoka', 'Bet mokinasi'],
//     "key with space": "aAa"
// }

// console.log(me.firstName, me.milestones[0])
// console.log(me["key with space"])

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];


const tableBody = document.getElementById('table')


function renderTableData() {

    characters.map((character) => {
        const rowElement = document.createElement('tr')
        const keys = Object.keys(character)

        for (let key of keys) {
            const dataCell = document.createElement('td');
            dataCell.textContent = character[key];
            rowElement.appendChild(dataCell)
        }

        tableBody.appendChild(rowElement)
    })
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

renderTableData()
buildTotalRowHeight()
buildTotalRowMass()