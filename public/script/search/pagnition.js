
var list = document.getElementsByClassName('link');
// for(var i of list){
//     var link = i.getElementsByClassName('link')
//     console.log(link);
// }
for(var i=0 ; i< list.length ; i++){
    var x = list[i];
    var index = x.getAttribute('href').indexOf('&page');
    if(index <= 0 ) index = x.getAttribute('href').length
    x.setAttribute('href',x.getAttribute('href').slice(0,index) + "&page="+x.textContent)
}