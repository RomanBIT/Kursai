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
                // getFirstName()
                // getLastName()
                // getAge()
                // getCountry()
                // getCity()
                // getPicture()
                // getTitle()
            }))
}

function getProfileData() {
    picture.src = people[0].picture.large
    title.innerHTML = people[0].name.title
    firstName.innerHTML = people[0].name.first
    lastName.innerHTML = people[0].name.last
    age.innerHTML = people[0].dob.age
    country.innerHTML = people[0].location.country
    city.innerHTML = people[0].location.city
}



// function getPicture() {
//     picture.src = people[0].picture.large
// }

// function getTitle() {
//     title.innerHTML = people[0].name.title
// }

// function getFirstName() {
//     firstName.innerHTML = people[0].name.first
// }

// function getLastName() {
//     lastName.innerHTML = people[0].name.last
// }

// function getAge() {
//     age.innerHTML = people[0].dob.age
// }

// function getCountry() {
//     country.innerHTML = people[0].location.country
// }

// function getCity() {
//     city.innerHTML = people[0].location.city
// }

getPeople();



feedElement.innerHTML += `
            <div>${person}</div>
            <div>${data.activity}</div>
            `