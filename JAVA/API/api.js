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
            }))
}

function getProfileData() {
    picture.src = people[0].picture.large
    title.innerHTML = people[0].name.title
    firstName.innerHTML = 'Name: ' + people[0].name.first
    lastName.innerHTML = 'Surname: ' + people[0].name.last
    age.innerHTML = 'Age: ' + people[0].dob.age
    country.innerHTML = 'Country: ' +  people[0].location.country
    city.innerHTML = 'City: ' + people[0].location.city
}

getPeople();

