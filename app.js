localStorage.getItem('pepperoniPrice')
localStorage.getItem('hawaiiPrice')
localStorage.getItem('vesuvioPrice')
localStorage.getItem('margheritaPrice')

let pepperoniPrice = document.getElementById('pepperoni-price').textContent
let hawaiiPrice = document.getElementById('hawaii-price').textContent
let vesuvioPrice = document.getElementById('vesuvio-price').textContent
let margheritaPrice = document.getElementById('margherita-price').textContent

let pepperoni = document.getElementById('pepperoni')
let hawaii = document.getElementById('hawaii')
let vesuvio = document.getElementById('vesuvio')
let margherita = document.getElementById('margherita')

let totalPrice = document.getElementById('total-cost')

let totalPriceValue = 0;



pepperoni.addEventListener('click', () => {
    totalPriceValue += pepperoniPrice;
    totalPrice.innerText = totalPriceValue;
    localStorage.setItem('pepperoniPrice', pepperoniPrice)
})

hawaii.addEventListener('click', () => {
    totalPriceValue += hawaiiPrice;
    totalPrice.innerText = totalPriceValue;
    localStorage.setItem('hawaiiPrice', hawaiiPrice)
})

vesuvio.addEventListener('click', () => {
    totalPriceValue += vesuvioPrice;
    totalPrice.innerText = totalPriceValue;
    localStorage.setItem('vesuvioPrice', vesuvioPrice)
})

margherita.addEventListener('click', () => {
    totalPriceValue += margheritaPrice;
    totalPrice.innerText = totalPriceValue;
    localStorage.setItem('margheritaPrice', margheritaPrice)
})