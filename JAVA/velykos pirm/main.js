const toDoList = document.getElementById('todo')
const doneList = document.getElementById('done')
const inputElement = document.getElementById('input')
const addButton = document.getElementById('addButton')

let todoArray = ['Learn HTML', 'Learn CSS', 'Learn JavaScript']
let doneArray = ['Rest']


function addTodo() {
    const value = inputElement.value
    const isValueEmptyOrExisting = value == '' || todoArray.includes(value)

    if (!isValueEmptyOrExisting) {
        todoArray.push(inputElement.value)
        inputElement.value = ''
        updateList()
        addButton.classList.remove('btn-danger')
        addButton.classList.add('btn-success')
    } else {
        addButton.classList.remove('btn-success')
        addButton.classList.add('btn-success')
    }
}

function updateList() {
    toDoList.innerHTML = ''
    doneList.innerHTML = ''

    for (let i = 0; i < todoArray.length; i++) {
        const listItem = document.createElement('li')
        listItem.textContent = todoArray[i]

        listItem.onclick = () => {
            doneArray.push(todoArray.splice(i, 1))
            updateList()
        }

        toDoList.appendChild(listItem)
    }

    for (let i = 0; i < doneArray.length; i++) {
        const listItem = document.createElement('li')
        listItem.textContent = doneArray[i]

        listItem.onclick = () => {
            todoArray.push(doneArray.splice(i, 1))
            updateList()
        }

        doneList.appendChild(listItem)
    }


}

updateList()

//------- funkcijos rasymo budai ------//

// function oldWay(a, b) { console.log(a, b) }

// const newWay = (a, b) => console.log(a, b)

// oldWay('Labas', 'Rytas')

// newWay('Labukas', 'Rytukas')



// Filtrai 
const array = [16, 24, 46, 34, 66, 88, 13, 5]

for (let i = 0; i < 10; i++) {
    array.push(Math.random())
}

console.log(array);

// Pirmas budas 
// const filteredArray1 = [];

// function filterArray() {
//     for (let number of array) {
//         if (number >= 30) {
//             filteredArray1.push(number)
//         }
//     }
// }

// filterArray() 
// console.log(filteredArray1);

// Dar vienas budas sukti ciklus

array.forEach((value, index) => {
    console.log('ForEach', index, value)
})

array.map((value, index) => {
    console.log('Map', value, index)
})


// Antras budas 

const filteredArray = array.filter((number) => number >= 30);
console.log(filteredArray);

// Reduce 

const reducedArray = filteredArray.reduce((prev, current) => prev + current);
console.log(reducedArray)

// Some. grazina reiksme kaip tik TRUE arba FALSE

const someArray = filteredArray.some((number) => number <=50)
console.log(someArray)
