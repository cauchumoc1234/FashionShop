var price = document.getElementById("price").textContent
console.log(typeof Intl.NumberFormat().format(price));
document.getElementById('price').innerHTML = Intl.NumberFormat().format(price)