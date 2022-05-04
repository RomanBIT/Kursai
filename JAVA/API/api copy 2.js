const baseUrl = 'https://randomuser.me/api/';
const people100 = '?results=100';
const title = document.getElementById('title')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const age = document.getElementById('age')
const country = document.getElementById('country')
const city = document.getElementById('city')
const picture = document.getElementById('picture')

let people;

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
            <div class="card shadow-l p-3 mb-5 bg-body rounded" style="width: 12rem;">
            <img src="${person.picture.large}" id="picture" class="card-img-top p-3 shadow p-3 mb-5 bg-body rounded">
            <ul class="list-group list-group-flush">
                <li id="firstName1" class="list-group-item">${person.name.first}</li>
                <li id="lastName1" class="list-group-item">${person.name.last}</li>
                <li id="lastName1" class="list-group-item">${person.activity}</li>
            </ul>
        </div>
            `

                }))
        }
    })
}

getPeople();


console.log('http://www.boredapi.com/api/activity')