let cartItems = [];
let total = 0;

function addToCart(plantName, price) {

    cartItems.push({ name: plantName, price: price });
    total += price;

    displayCart();
}

function displayCart() {
    const cartItemsContainer = document.getElementById("cartItems");
    const totalPriceContainer = document.getElementById("totalPrice");

    cartItemsContainer.innerHTML = "";

    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("cart-item");
        li.textContent = "$${item.name} - $${item.price}";
        cartItemsContainer.appendChild(li);
    });

    totalPriceContainer.textContent = "Total: $${total}";
}