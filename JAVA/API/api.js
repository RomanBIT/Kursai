const baseUrl = 'https://randomuser.me/api/';
const people100 = '?results=100';
const title = document.getElementById('title')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const age = document.getElementById('age')
const country = document.getElementById('country')
const city = document.getElementById('city')
const picture = document.getElementById('picture')

let people

function getPeople() {
    fetch(baseUrl + people100)
        .then((response) => response.json()
            .then((data) => {
                people = data.results
                console.log(people)
                getProfileData()
                feedPeople()
            }))
}

function getProfileData() {
    picture.src = people[6].picture.large
    title.innerHTML = people[6].name.title
    firstName.innerHTML = 'Name: ' + people[6].name.first
    lastName.innerHTML = 'Surname: ' + people[6].name.last
    age.innerHTML = 'Age: ' + people[6].dob.age
    country.innerHTML = 'Country: ' + people[6].location.country
    city.innerHTML = 'City: ' + people[6].location.city
}

const feedElement = document.getElementById('feed')

function feedPeople() {

    people.map((person, index) => {
        if (index <= 5) {
            fetch('http://www.boredapi.com/api/activity').then((response) => response.json()
                .then((data) => {
                    feedElement.innerHTML +=
                        `
            <div class="card shadow-l p-2 mb-3 bg-body rounded" style="width: 14rem;">
            <img src="${person.picture.large}" id="picture" class="card-img-top p-3 shadow p-3 mb-5 bg-body rounded">
            <ul class="list-group list-group-flush">
                <li id="firstName1" class="list-group-item">Name: ${person.name.first}</li>
                <li id="lastName1" class="list-group-item">Surname: ${person.name.last}</li>
                <li id="lastName1" class="list-group-item">Hobby: ${data.activity}</li>
                <button class="btn btn-outline-primary">Poke</button>
                <li id="lastName1" class="list-group-item">Type: ${data.type}</li>
                <li id="lastName1" class="list-group-item">Participants: ${data.participants}</li>
            </ul>
        </div>
            `

                }))
        }
    })

}

const activity = document.getElementById('activity')
const list = document.getElementById('list')
let activeRoom = false

function createActivity() {
    if (!activeRoom) {
        activeRoom = true;
        // people.map((person, index) => {
        //     if (index <= 4) {
        let randomNumber = Math.floor(Math.random() * 100);
        let index = 0

        let a = setInterval(function () {
            let randomNumber = Math.floor(Math.random() * 100);
            list.innerHTML +=
                `
                    <div class="card shadow-l p-2 m-1" style="width: 9rem; height: 12rem;">
        <div>${people[randomNumber].name.first} ${people[randomNumber].name.last}</div>
        <img src="${people[randomNumber].picture.large}">
        </div>`
            index++
            if (index === 10) clearInterval(a);
        }, 500);

        //     }
        // })
    }
}


const searchBar = document.getElementById('searchBar')

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(searchString)




    const listGroup = document.getElementById('listGroup')

    listGroup.innerHTML = '';

    people.filter((person) => {
        if (
            person.name.first.toLowerCase().includes(searchString) ||
            person.name.last.toLowerCase().includes(searchString)
        ) {
            listGroup.innerHTML += `
                <li class="list-group-item" >
                    <img src="${person.picture.large}">
                        ${person.name.first} ${person.name.last}
                    </li>`
        }

    })
})


getPeople();
