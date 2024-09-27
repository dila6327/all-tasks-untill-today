function Addli(n)
{
    let ul_elem=document.querySelector('ul');
   for(let i=0;i<n;i++)
   {
    let li_elements=document.createElement('li');
    li_elements.innerText=i+1;
    ul_elem.appendChild(li_elements);
   }
   return ul_elem;
}
console.log(Addli(12));
