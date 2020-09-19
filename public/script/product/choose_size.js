addEvent()
async function addEvent(){
    var sizeBtn = await document.getElementsByClassName('size-btn')
     for(var i = 0 ; i < sizeBtn.length;i++){    
        sizeBtn[i].addEventListener('click',function(){
            document.getElementById('amount').max = this.getElementsByClassName('instock')[0].getAttribute('value');
        })
    }
}