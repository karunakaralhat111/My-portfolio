let list=document.querySelectorAll(".list");
let itembox=document.querySelectorAll(".item-box");
for(var index=0; index<list.length;index++){
    list[index].addEventListener('click',function(){
        for(var j=0;j<list.length;j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter=this.getAttribute('data-filter');
        for(k=0; k<itembox.length;k++){
            itembox[k].classList.remove('active');
            itembox[k].classList.add('hide');


            if(itembox[k].getAttribute('data-item')== dataFilter || dataFilter == "all"){
                itembox[k].classList.remove('hide');
                itembox[k].classList.add('active');
            }
        }
    })
}
