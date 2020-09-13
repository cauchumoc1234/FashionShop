var allPrice = document.getElementsByClassName('price');
for(var i = 0 ; i < allPrice.length ; i++){
    console.log(allPrice[i].textContent);
    allPrice[i].textContent = Intl.NumberFormat().format(allPrice[i].textContent) + " VND"
}