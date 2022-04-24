// const date = new Date()
// console.log(date)


const group = [
    {
        firstName: 'Roman',
        lastName: 'Laskov',
        age: 34,
        gender: 'Male',
        hobby:'Sports',
        height: 197,
        programmingSkill: 1
    },

    {
        firstName: "Zilvinas",
        lastName: "Pusnys",
        age: 30,
        gender: "Male",
        hobby: "Napping",
        height: 175,
        programmingSkill: 3
    },

    {
        firstName: "Rokas",
        lastName: "Skinderis",
        age: 28,
        gender: "Male",
        hobby: "Singing",
        height: 194,
        programmingSkill: 5
    },

    {
        firstName: "Ieva",
        lastName: "Staseviciute",
        age: 33,
        gender: "Female",
        hobby: "Ride a  motorcycle",
        height: 174,
        programmingSkill: 3
    },

    {
        firstName: "Eimantas",
        lastName: "Jurenkovas",
        age: 49,
        gender: "Male",
        hobby: "Fishing",
        height: 172,
        programmingSkill: 2
     },

     {
        firstName: "Simona",
        lastName: "Sleviene",
        age: 30,
        gender: "Female",
        hobby: "knitting-toys",
        height: 170,
        programmingSkill: 4
     },

     {
        firstName: 'Rokas',
        lastName: 'Virvicius',
        age: 27,
        gender: 'Male',
        hobby:'Bassketball',
        height: 185,
        programmingSkill: 1
     },

     { 
        firstName: 'Mindaugas',
       lastName: 'Strakšys',
       age: 22,
       gender: 'Male',
       hobby: 'Skydiving',
       height: 176,
       programmingSkill: 4
       },
];

const tableBody = document.getElementById('table')
const keys = Object.keys(group[0])

function renderTableData(array) {
    tableBody.innerHTML = '';

    array.map((character) => {
        const rowElement = document.createElement('tr')
        const keys = Object.keys(character)

        for (let key of keys) {
            const dataCell = document.createElement('td');
            dataCell.textContent = character[key];
            rowElement.appendChild(dataCell)
        }

        tableBody.appendChild(rowElement)
    })
    buildTotalRow()
}




function buildTotalRow() {

    const rowElement = document.createElement('tr');

    for (let key of keys) {
        const dataCellElement = document.createElement('td');
        dataCellElement.classList.add('fw-bold')

        if (key === 'height') {
            dataCellElement.textContent = getAllCharactersHeight();
        }

        rowElement.appendChild(dataCellElement);
    }

    tableBody.appendChild(rowElement)
}

console.log(getAllCharactersHeight())

//---------- FILTRAI


const filteredAge = group.filter((character) => character.age < 30);
console.log(filteredAge);

const filteredMale = group.filter((character) => character.gender === 'Male' );
console.log(filteredMale);

const filteredFemale = group.filter((character) => character.gender === 'Female' );
console.log(filteredFemale);

const filteredHeight = group.filter((character) => character.height > 175 );
console.log(filteredHeight);

const filteredSkill = group.filter((character) => character.programmingSkill < 5 );
console.log(filteredSkill);


//---------- Total ROW

function getAllCharactersHeight() {
    return group.map((character) => Number(character.height)).reduce((first, second) => first + second);
}

// function buildTotalRowHeight() {

//     const rowElement = document.createElement('tr')

//     const dataCellElement = document.createElement('td')
//     dataCellElement.textContent = getAllCharactersHeight()

//     rowElement.appendChild(dataCellElement)
//     tableBody.appendChild(rowElement)
// }

renderTableData(group)
