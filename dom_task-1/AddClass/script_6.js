
function DeleteClass()
{
    let arr=[{name:'coming',type:'definition'},{name:'highlight',type:'unordered'},{name:'choosing',type:'ordered'}];
    let newElem=document.createElement('button');
    let bodyy=document.body;
    bodyy.appendChild(newElem);
    newElem.innerText="Delete button";
    Object.assign(newElem.style,{
    color:'white',
        backgroundColor:'pink',
         borderRadius:'10px'
    });
    newElem.onclick=function()
    {
   let modified_arr=arr.filter(item=>item.name!=='highlight');
console.log('modified_array',modified_arr);
    }
return arr;
}
console.log(DeleteClass());