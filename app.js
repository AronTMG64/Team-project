
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
    totalPriceValue += parseFloat(pepperoniPrice);
    localStorage.setItem('pepperoniPrice', Math.round(totalPriceValue * 100) / 100)
    console.log(Math.round(totalPriceValue * 100) / 100);
    let getPepperoniPrice = localStorage.getItem('pepperoniPrice')
    console.log(parseFloat(getPepperoniPrice));
    totalPrice.innerHTML += getPepperoniPrice

})

hawaii.addEventListener('click', () => {
    totalPriceValue += parseFloat(hawaiiPrice);
    localStorage.setItem('hawaiiPrice', Math.round(hawaiiPrice * 100) / 100)
    console.log(Math.round(totalPriceValue * 100) / 100);
})

vesuvio.addEventListener('click', () => {
    totalPriceValue += parseFloat(vesuvioPrice);
    localStorage.setItem('vesuvioPrice', vesuvioPrice)
    console.log(Math.round(totalPriceValue * 100) / 100);
})

margherita.addEventListener('click', () => {
    totalPriceValue += parseFloat(margheritaPrice);
    localStorage.setItem('margheritaPrice', margheritaPrice)
    console.log(Math.round(totalPriceValue * 100) / 100);
})