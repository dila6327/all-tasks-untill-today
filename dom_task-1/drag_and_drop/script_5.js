
let draggableBox=document.querySelectorAll('.draggable');
let droppableBox=document.querySelector('.droppable');
draggableBox.forEach(element=>{
    element.ondragstart=function(event)
    {
        let id = this.getAttribute('id');
         event.dataTransfer.setData('id', id);
    };
})

droppableBox.ondragover=(event)=>event.preventDefault();
droppableBox.ondrop=function(event)
{
        const myElementId = event.dataTransfer.getData('id');
         const element = document.getElementById(myElementId);
         this.appendChild(element);
    
}




