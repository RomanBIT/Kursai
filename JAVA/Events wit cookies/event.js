const listElement = document.getElementById('list')

const arrayList = [
    {
        name: 'Kreivas0',
        location: 'NULIS',
    },
    {
        name: 'Kreivas1',
        location: 'VIENAS'
    },
    {
        name: 'Kreivas2',
        location: 'DU',
    },
    {
        name: 'Kreivas3',
        location: 'TRYS'
    },
    {
        name: 'Kreivas4',
        location: 'KETURI'
    },
]


function renderList() {
    arrayList.map((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name
        listItem.classList.add('btn', 'btn-outline-secondary', 'm-3', 'px-3')

        const location = document.createElement('div');
        location.textContent = item.location;
        location.style.display = 'none';
        listItem.appendChild(location)

        listItem.addEventListener('mouseenter', () => {
            location.style.display = 'block';
        })

        listItem.addEventListener('mouseleave', () => {
            location.style.display = 'none';
        })

        listElement.appendChild(listItem)
    })
}

renderList()

//-----------------

const buttonElement = document.getElementById('button')


buttonElement.addEventListener('mouseenter', () => {
    buttonElement.textContent = "You`re hovering me"
})

buttonElement.addEventListener('mouseleave', () => {
    buttonElement.textContent = "You`re leaving me"
})

buttonElement.addEventListener('click', () => {
    buttonElement.textContent = "You`re clicking me"
})

//--------------

const input = document.getElementById('inputas')

input.addEventListener('change', (event) => {
    console.log(event.target.value)
})

//--------------------

const input1 = document.getElementById('input')
const validatonE = document.getElementById('validation')



input1.addEventListener('keyup', (e) => {
    if (e.target.value !== 'Labas') {
        validatonE.textContent = "Text should be 'Labas'"

    } else {
        validatonE.textContent = 'Sveikinu protinguoli'
        validatonE.classList.add('bg-warning')
    }
})


//----- COOKIES

const loginElement = document.getElementById('login')

function login() {
    document.cookie = `isLoggedIN=true`;
}

if (document.cookie) {
    loginElement.style.display = 'none'
}


login()