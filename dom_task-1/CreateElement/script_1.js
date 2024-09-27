function createElement()
{
    let newElem=document.createElement('div');
    let adding=document.body;
    newElem.innerText="Hello world!";
Object.assign(newElem.style,{
    height:'200px',
    width:'200px',
    backgroundColor:'pink',
    color:'white',
    textAlign:'center'
    
})
   adding.appendChild(newElem);

}
createElement();
console.log(document.documentElement);
