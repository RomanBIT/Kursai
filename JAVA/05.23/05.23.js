// class Rectangle {
//     constructor(_width, _height) {
//         this.width = _width
//         this.height = _height
//     }
//     calcArea() {
//         return this.height * this.width;
//     }

// }

// const rectangle1 = new Rectangle(10, 15)
// const rectangle2 = new Rectangle(5, 10)
// const rectangle3 = new Rectangle('penkiolika', 'dvidesimt')

// console.log(rectangle1)
// console.log(rectangle1.width)
// console.log(rectangle1.calcArea())


// ///------ PVZ -------- ///

// class Staciakampis {
//     constructor(aukstis, plotis) {
//         this.height = aukstis;
//         this.width = plotis;
//     }
//     // Getter
//     get area() {
//         return this.calcArea();
//     }
//     // Method
//     calcArea() {
//         return this.height * this.width;
//     }
// }

// const rectangle4 = new Staciakampis(20, 30);

// console.log(rectangle4)
// console.log(rectangle4.area); // 600


// ///------------ KLASES TABLE

// class Animal {
//     constructor({ _age, _name }) {
//         this.age = _age
//         this.name = _name
//     }

//     speak() {
//         console.log(`${animal1.name} makes`)
//         console.log(`${dog1.name} makes a`)
//         console.log(`${dog2.name} makes a noise`)
//     }
// }

// class Dog extends Animal {
//     constructor({ _age, _name, _says }) {
//         super({ _age, _name, _says })
//         this.type = 'Dog'
//         this.says = _says
//     }
// }

// class Doggo extends Dog {
//     constructor({ _age, _name, _says }) {
//         super({ _age, _name, _says })
//         this.weight = 34
//     }
// }

// const animal1 = new Animal({ _age: 11, _name: 'Rublis' })
// const dog1 = new Dog({ _age: 1, _name: 'Capucci', _says: 'Woof woof' })
// const dog2 = new Doggo({ _age: 10, _name: 'Mayo', _says: 'Japanese woof' })

// animal1.speak()
// console.log(animal1)
// console.log(dog1)
// console.log(dog2)

//-------- TODO LIST

class ToDoList {
    constructor() {
        this.list = document.getElementById('list')
        this.toDo = []

    }

    add(text) {
        this.toDo.push(text)
        this.update()
    }

    update() {
        this.list.innerHTML = ''


        for (let text of this.toDo) {
            const listItem = document.createElement('li')

            listItem.innerHTML = `
            <div class="input-group mb-3">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="checkbox" value="asd" id="test">
  </div>
  <input type="text" value="${text}" class="form-control" aria-label="Text input with checkbox">
`

            this.list.appendChild(listItem)
        }
    }

    delete(value) {
        if (this.toDo.indexOf(value) > -1) {
            this.toDo.splice(this.toDo.indexOf(value), 1)
            this.update()
        }

    }
}



const input = document.getElementById('input')
const addButton = document.getElementById('add')
const deleteButton = document.getElementById('delete')

const newList = new ToDoList()

addButton.onclick = () => newList.add(input.value)
deleteButton.onclick = () => newList.delete(input.value)


