

let array = JSON.parse(localStorage.getItem('key')) || []

const addItem = document.getElementById('addItem')
// addItem.addEventListener("click", displayDetails)

const inputDescription = document.getElementById('inputDescription')
const inputQuantity = document.getElementById('inputQuantity')
let idFlow = 1

function add() {

    if (!inputDescription.value || !inputQuantity.value) {
        alert("Please fill all the boxes");
        return
    }

    let object = {
        inputDescription: inputDescription.value,
        inputQuantity: inputQuantity.value,
        date: getDate(),
        id: idFlow++
    }

    array.push(object)

    localStorage.setItem('key', JSON.stringify(array))
    displayDetails()


}





function getDate() {
    let date = new Date()
    let ss = String(date.getSeconds()).padStart(2, '0')
    let min = String(date.getMinutes()).padStart(2, '0')
    let hh = String(date.getHours()).padStart(2, '0')
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();

    today = `${yyyy}/${mm}/${dd}  ${hh}:${min}:${ss}`

    return today

}
function displayDetails() {

    display.innerHTML = ''
    inputDescription.value = ''
    inputQuantity.value = ''

    array.map(item => {
        let newRow = display.insertRow()

        //-- mygtukai 

        const editButton = document.createElement('button')
        editButton.classList.add('btn', 'btn-outline-info')
        editButton.textContent = 'Edit'
        editButton.onclick = () => edit(item)


        const deleteButton = document.createElement('button')
        deleteButton.classList.add('btn', 'btn-outline-danger')
        deleteButton.textContent = 'Delete'
        deleteButton.onclick = () => myFunction(item)




        let cell1 = newRow.insertCell(0)
        let cell2 = newRow.insertCell(1)
        let cell3 = newRow.insertCell(2)
        let cell4 = newRow.insertCell(3)
        let cell5 = newRow.insertCell(4).appendChild(editButton)
        let cell6 = newRow.insertCell(5).appendChild(deleteButton)


        cell1.innerHTML = item.id
        cell2.innerHTML = item.inputDescription
        cell3.innerHTML = item.inputQuantity
        cell4.innerHTML = item.date

    })

}

function del(id) {
    array = array.filter(item => item.id !== id)
    localStorage.setItem('key', JSON.stringify(array))
    displayDetails()

}


function edit(item) {



    const popup = document.createElement('dialog')
    popup.classList.add('bg-info', 'bg-opacity-25')
    popup.open = true

    const input1 = document.createElement('input')
    input1.classList.add('ms-2', 'me-3')
    input1.placeholder = 'Description...'
    input1.value = item.inputDescription

    const input2 = document.createElement('input')
    input2.classList.add('m-2')
    input2.placeholder = 'Quantity...'
    input2.value = item.inputQuantity

    const save = document.createElement('button')
    save.classList.add('btn', 'btn-success', 'ms-3')
    save.textContent = 'Save'
    save.onclick = () => {

        if (!input1.value || !input2.value) {
            alert("Prašome nemalti š*do ir užpildyti visus langelius");
            return
        }

        item.inputDescription = input1.value
        item.inputQuantity = input2.value
        localStorage.setItem('key', JSON.stringify(array))
        displayDetails()
        popup.open = false
    }

    const cancel = document.createElement('button')
    cancel.classList.add('btn', 'btn-warning', 'm-2')
    cancel.textContent = 'Cancel'
    cancel.onclick = () => {
        popup.open = false
    }

    popup.append(input1, input2, save, cancel)
    document.body.appendChild(popup)
}


// const sortQuantity = () => {
//     // array.sort(function(a, b){return a.inputQuantity - b.inputQuantity})
//     array.sort((a, b) => a.inputQuantity - b.inputQuantity)
//     displayDetails()
// }

let order = true
function sortQuantity() {
    order = !order
    if (order) {
        array.sort((a, b) => a.inputQuantity - b.inputQuantity)
    } else {
        array.sort((a, b) => b.inputQuantity - a.inputQuantity)
    }
    displayDetails()
}


function sortId() {
    order = !order
    if (order) {
        array.sort((a, b) => a.id - b.id)
    } else {
        array.sort((a, b) => b.id - a.id)
    }
    displayDetails()
}


function sortDescription() {
    order = !order
    if (order) {
        array.sort(function (a, b) {
            let nameA = a.inputDescription.toLowerCase(), nameB = b.inputDescription.toLowerCase();
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            return 0;
        });
    } else {
        array.sort(function (a, b) {
            let nameA = a.inputDescription.toLowerCase(), nameB = b.inputDescription.toLowerCase();
            if (nameA < nameB)
                return 1;
            if (nameA > nameB)
                return -1;
            return 0;
        });
    }
    displayDetails()
}

function myFunction(item) {
    if (confirm("Ar ju šuje?")) {
        del(item.id)
    } else {
    }

}


displayDetails()





