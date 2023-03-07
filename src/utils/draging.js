let drag=null;
let box=document.querySelectorAll(".box");
export function dragItem(){
    let items=document.querySelectorAll("#item");
    items.forEach(item=>{
        item.addEventListener('dragstart',function(){
            drag=item;
            item.style.opacity="0.5";
            console.log('start');

        })
        item.addEventListener('dragend',function(){
            drag=null;
            item.style.opacity="1";
        })
        box.forEach(bx=>{
            bx.addEventListener('dragover',function(e){
                e.preventDefault();
                this.style.background='green';
                this.style.color='#eee';
            })
            bx.addEventListener('dragleave',function(){
                this.style.background='#eee';
                this.style.color='Black';
            })
            bx.addEventListener('drop',function(){
                bx.append(drag);
                this.style.background='#eee';
                this.style.color='Black';
            })
        })
    })
}
