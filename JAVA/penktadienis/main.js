const input = document.getElementById('text')
const paragrafas = document.getElementById('paragrafas')

function paverstiDidziosiomis() {
    console.log(input.value.toUpperCase())
    input.value = input.value.toUpperCase()
}

function findtext() {
   console.log(paragrafas.textContent.includes(input.value))

   return paragrafas.textContent.includes(input.value)
}   

function findTextAndReplaceWithBold() {
    if (findtext()) {
        paragrafas.innerHTML = paragrafas.textContent.replace(input.value, input.value.bold())
    }
}