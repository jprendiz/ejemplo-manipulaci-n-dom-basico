
const btnCalcular = document.getElementById('btnCalcular')
const num1 = document.querySelector('#numero1')
const num2 = document.querySelector('#numero2')
const p = document.querySelector('#resp')

const form = document.querySelector('form')

form.addEventListener('submit', sumarValores)

function sumarValores(event) {

    event.preventDefault();

    let suma = Number(num1.value) + Number(num2.value)
    p.innerHTML = suma

}   