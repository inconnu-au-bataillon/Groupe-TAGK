let cart = [];

function addToCart (product, price) {

    cart.push ({ product, price });

    updateCart ();

}

function removeFromCart (index) {

    cart.splice (index, 1);

    updateCartDisplay ();

}

function updateCartDisplay () {

    const cartItemsElement = document.getElementById ('cart-items');

    const totalElement = document.getElementById ('total');

    const cartDataElement = document.getElementById ('cart_data');

    cartItemsElement.innerHTML = '';

    let total = 0;

    cart.forEach ((item, index) => {

        const itemElement = document.createElement ('li');

        itemElement.textContent = `${item.product} - €${item.price.toFixed(2)} `;

        const removeButton = document.createElement ('button');

        removeButton.textContent = 'Retirer';

        removeButton.onclick = () => removeFromCart (index);

        itemElement.appendChild (removeButton);

        cartItemsElement.appendChild (itemElement);

        total += item.price;

    });

    totalElement.textContent = total.toFixed (2);

    cartDataElement.value =JSON.stringify (cart);

}

function updateCart () {

    let cartItems = document.getElementById ('cart-items');

    let total = document.getElementById ('total');
    
    let cartData = document.getElementById ('cart_data');

    cartItems.innerHTML = '';

    let totalPrice = 0;

    cart.forEach (item => {

        let li = document.createElement ('li');

        li.textContent = `${item.product} - $${item.price.toFixed (2)}`;

        cartItems.appendChild (li);

        totalPrice += item.price;

    });

    total.textContent = totalPrice.toFixed (2);

    cartData.value = JSON.stringify (cart);

}