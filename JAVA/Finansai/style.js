

let array = JSON.parse(localStorage.getItem('key')) || []

const addItem = document.getElementById('addItem')
// addItem.addEventListener("click", displayDetails)

const inputDescription = document.getElementById('inputDescription')
const inputQuantity = document.getElementById('inputQuantity')

function add() {
    if (!inputDescription.value || !inputQuantity.value) {
        alert("Please fill all the boxes");
        return
    }

    let object = {
        inputDescription: inputDescription.value,
        inputQuantity: inputQuantity.value,
        date: getDate()
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
   
    array.map(item => {
        let newRow = display.insertRow()

        //-- mygtukai 

        const editButton = document.createElement('button')
        editButton.textContent = 'Edit'

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'




        let cell1 = newRow.insertCell(0)
        let cell2 = newRow.insertCell(1)
        let cell3 = newRow.insertCell(2)
        let cell4 = newRow.insertCell(3).appendChild(editButton)
        let cell5 = newRow.insertCell(4).appendChild(deleteButton)

        cell1.innerHTML = item.inputDescription
        cell2.innerHTML = item.inputQuantity
        cell3.innerHTML = item.date

        
        
    })

}

displayDetails()
//-----------

