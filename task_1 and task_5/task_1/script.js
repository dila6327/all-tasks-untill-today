// : Create a createShoppingCart function that allows users to add items to a shopping cart, calculate the total cost, and display the cart contents.
// :
// The createShoppingCart function should return an object with the following methods:
// addItem(itemName, price): Adds an item to the cart.
// removeItem(itemName): Removes an item from the cart if it exists.
// getTotal(): Returns the total cost of the items in the cart.
// showCart(): Displays all items currently in the cart.
// : Use a closure to store the cart items and their prices privately.2

function createShoppingCart()
{
    const card_content=[];
    return obj={
        addItem:function (name,price)
 {
const obj_3={name:name,price:price};
card_content.push(obj_3);

        },
        removItem:function (name_2)
        {
            for(let i=0;i<card_content.length;i++)
            {
                if(card_content[i].name===name_2)
                {
                card_content.splice(i,1);
                }
            }
           
        },
        getTotal:function()
        {
let sum=0;
for(let i=0;i<card_content.length;i++)
{
    sum=sum+card_content[i].price;
}
return 'some of all prices : '+sum;
        },
        showig:function(){
            return card_content;
        }

    }
}

let anoth=createShoppingCart();
anoth.addItem('book',20);
anoth.addItem('pen',10);
anoth.addItem('glass',200);
anoth.removItem('book');
console.log(anoth.showig());
let anoth_2=createShoppingCart();
anoth_2.addItem('pencil',15);
anoth.addItem('copybook',8);
console.log(anoth_2.showig());
console.log(anoth.getTotal());