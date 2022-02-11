let pepperoniPrice = document.getElementById('pepperoni-price').textContent
let hawaiiPrice = document.getElementById('hawaii-price').textContent
let vesuvioPrice = document.getElementById('vesuvio-price').textContent
let marheritaPrice = document.getElementById('marherita-price').textContent

let pepperoni = document.getElementById('pepperoni')
let hawaii = document.getElementById('hawaii')
let vesuvio = document.getElementById('vesuvio')
let marherita = document.getElementById('marherita')

let totalPrice = document.getElementById('total-price')





pepperoni.addEventListener('click', () => {
    totalPrice.innerText = 'Your total is: ' + pepperoniPrice
})

hawaii.addEventListener('click', () => {
    console.log('');
})