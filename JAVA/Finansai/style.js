

let row = 1;

const addItem = document.getElementById('addItem')
addItem.addEventListener("click", displayDetails)


function displayDetails() {
    const inputDescription = document.getElementById('inputDescription').value;
    const inputQuantity = document.getElementById('inputQuantity').value;
    let date = new Date()
   
    let ss = String(date.getSeconds()).padStart(2, '0')
    let min = String(date.getMinutes()).padStart(2, '0')
    let hh = String(date.getHours()).padStart(2, '0')
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();

    today = `${yyyy}/${mm}/${dd}  ${hh}:${min}:${ss}`


// Table content adding

    if (!inputDescription || !inputQuantity) {
        alert("Please fill all the boxes");
        return
    }
    let display = document.getElementById('display')

    let newRow = display.insertRow(row)

let editButton = `<button id="editItem" class="btn btn-outline-warning">Edit</button>
`
let deleteButton = `<button id="deleteItem" class="btn btn-outline-danger">Delete</button>
`

    let cell1 = newRow.insertCell(0)
    let cell2 = newRow.insertCell(1)
    let cell3 = newRow.insertCell(2)
    let cell4 = newRow.insertCell(3)
    let cell5 = newRow.insertCell(4)

    cell1.innerHTML = inputDescription
    cell2.innerHTML = inputQuantity
    cell3.innerHTML = today
    cell4.innerHTML = editButton
    cell5.innerHTML = deleteButton

    row++
}

