addEvent()
async function addEvent(){
    var sizeBtn = await document.getElementsByClassName('size-btn')
     for(var i = 0 ; i < sizeBtn.length;i++){    
        sizeBtn[i].addEventListener('click',function(){
            this.getElementsByClassName('choice').value = "checked";
            document.getElementById('amount').max = this.value
        })
        }
    }


