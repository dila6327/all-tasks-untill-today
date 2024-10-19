let cart = [];


function renderCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartSubtotal = document.getElementById('cart-subtotal');
    cartItemsDiv.innerHTML = ''; 

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        cartSubtotal.textContent = 'Subtotal: $0.00';
        return;
    }

    let subtotal = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <p>${item.name}</p>
                <p>$${item.price}</p>
                <div class="quantity-controls">
                    <button class="decrease-quantity" data-id="${item.id}"><</button>
                    <span>${item.quantity}</span>
                    <button class="increase-quantity" data-id="${item.id}">></button>
                </div>
            </div>
        `;

        subtotal += item.price * item.quantity;
        cartItemsDiv.appendChild(cartItem);
    });

    
    cartSubtotal.textContent = `Subtotal: $${subtotal.toFixed(2)}`;


    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });

    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });
}


function increaseQuantity(event) {
    const itemId = event.target.getAttribute('data-id');
    const cartItem = cart.find(item => item.id === itemId);
    cartItem.quantity++;
    saveCart();
    renderCart();
}
function decreaseQuantity(event) {
    const itemId = event.target.getAttribute('data-id');
    const cartItem = cart.find(item => item.id === itemId);

    if (cartItem.quantity > 1) {
        cartItem.quantity--;
    } else {
 
        cart = cart.filter(item => item.id !== itemId);
    }
    saveCart(); 
    renderCart();
}

function addToCart(id, name, price, image) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            quantity: 1,
            image: image
        });
    }
    saveCart(); 
    renderCart();
}

function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}


function loadCart() {
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    renderCart();
}

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const id = event.target.getAttribute('data-id');
        const name = event.target.getAttribute('data-name');
        const price = parseFloat(event.target.getAttribute('data-price'));
        const image = event.target.getAttribute('data-image');
        shoppingCart.style.display = 'flex'; 
        addToCart(id, name, price, image);
    });
});

const closeButton = document.getElementById('close-cart');
const shoppingCart = document.querySelector('.cart-section');
const list = document.querySelector('.product-list-section');

closeButton.addEventListener('click', function() {
    shoppingCart.style.display = 'none'; 
    list.style.width = '100%';
});


document.addEventListener('DOMContentLoaded', loadCart);
