const array = ['1', 2, '4']

function add() {
    localStorage.setItem('key', JSON.stringify(array))
    console.log(array)
}

function get() {
    const item = localStorage.getItem('Array') // gaunam tieisog kaip stringa //
    const parsedItem = JSON.parse(item)
    console.log(item)
    console.log(parsedItem)

}

function del() {
    localStorage.removeItem('kazkas')
}
