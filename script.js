let cart = JSON.parse(localStorage.getItem('cartItems')) || []; // Load cart items from localStorage (or initialize as empty array)
let totalPrice = 0; // Total price of items in cart

// Function to show product detail popup
function showProductDetail(title, price, imageSrc) {
    console.log("Showing product detail for:", title);
    document.getElementById("popupTitle").textContent = title;
    document.getElementById("popupPrice").textContent = `S$${price.toFixed(2)}`;
    document.getElementById("popupImage").src = imageSrc;
    document.getElementById("productDetailPopup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

// Function to close product detail popup
function closePopup() {
    document.getElementById("productDetailPopup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

// Function to dynamically attach click events to product items
function attachProductDetailListeners() {
    const productItems = document.querySelectorAll('.product_na'); // Adjust selector to your HTML
    productItems.forEach(item => {
        item.addEventListener('click', function () {
            const title = this.querySelector('h3').innerText;
            const price = parseFloat(this.querySelector('.price_na').innerText.replace('S$', ''));
            const imageSrc = this.querySelector('img').src;

            if (title && !isNaN(price) && imageSrc) {
                showProductDetail(title, price, imageSrc);
            } else {
                console.error('Product details are missing or invalid.');
            }
        });
    });
}

// Function to show cart confirmation popup
function showCartConfirmation() {
    const cartConfirmationPopup = document.getElementById("cartConfirmationPopup");
    const cartItemList = document.getElementById("cartItemList");

    cartItemList.innerHTML = ''; // Clear the cart item list
    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" />
            <div class="cart-item-info">
                <h3>${item.title}</h3>
                <p>S$${item.price.toFixed(2)}</p>
                <div class="quantity">
                    <button class="quantity-btn" onclick="changeQuantity('${item.title}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="changeQuantity('${item.title}', 1)">+</button>
                </div>
                <button class="remove-item" onclick="removeItem('${item.title}')">Remove</button>
            </div>
        `;
        cartItemList.appendChild(cartItem);
    });

    // Recalculate total price
    totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);

    updateCartIcon(); // Update the cart icon count

    // Make the cart confirmation popup visible
    cartConfirmationPopup.classList.add("show");

    // Optionally hide the store section (for mobile views)
    document.querySelector(".store-section").style.display = "none"; 
}

// Function to change item quantity
function changeQuantity(title, change) {
    let item = cart.find(item => item.title === title);
    if (item) {
        item.quantity += change;
        if (item.quantity < 1) item.quantity = 1; // Prevent quantity from being less than 1
        localStorage.setItem('cartItems', JSON.stringify(cart)); 
    }

    // Re-render cart after quantity change
    showCartConfirmation();
}

// Function to remove item from cart
function removeItem(title) {
    cart = cart.filter(item => item.title !== title);
    localStorage.setItem('cartItems', JSON.stringify(cart));
    showCartConfirmation();
}

// Function to close cart popup
function closeCartPopup() {
    document.getElementById("cartConfirmationPopup").classList.remove("show");

    // Show the store section again (for mobile views)
    document.querySelector(".store-section").style.display = "block";
}

// Function to update cart icon count
function updateCartIcon() {
    const cartCount = document.getElementById("cart-count");
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = itemCount;
}

// Add event listener for "Add to Cart" button
document.getElementById("addToCartButton").addEventListener("click", function () {
    const title = document.getElementById("popupTitle").textContent;
    const price = parseFloat(document.getElementById("popupPrice").textContent.replace('S$', ''));
    const imageSrc = document.getElementById("popupImage").src;

    if (!title || !price || !imageSrc) {
        console.error("Product details are incomplete.");
        return;
    }

    let existingProduct = cart.find(item => item.title === title);
    if (existingProduct) {
        existingProduct.quantity += 1; // If product exists, increase quantity
    } else {
        cart.push({ title, price, image: imageSrc, quantity: 1 }); // Add new product to cart
    }

    localStorage.setItem('cartItems', JSON.stringify(cart)); // Save updated cart to localStorage
    showCartConfirmation(); // Re-render cart with updated data
    closePopup();
});

// Event listener for "Continue Shopping" button
document.getElementById("continueShoppingButton").addEventListener("click", closeCartPopup);

// Event listener for "Go to Cart" button
document.getElementById("goToCartButton").addEventListener("click", function () {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to the cart before checking out.");
    } else {
        window.location.href = "bag.html"; 
    }
});

// Function to load cart items on the cart page
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartItemCount = document.getElementById('cartItemCount');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your bag is empty</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" />
                <div class="cart-item-info">
                    <h3>${item.title}</h3>
                    <p>S$${item.price.toFixed(2)}</p>
                    <div class="quantity">
                        <button class="quantity-btn" onclick="changeQuantity('${item.title}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="changeQuantity('${item.title}', 1)">+</button>
                    </div>
                    <button class="remove-item" onclick="removeItem('${item.title}')">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }

    cartItemCount.textContent = cart.length;
}

// Update cart icon and attach event listeners on every page load
window.onload = function () {
    updateCartIcon();
    attachProductDetailListeners();
    loadCartItems();

    // Ensure popup is hidden on load
    document.getElementById("productDetailPopup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
};

//for productDetail page
function showProductDetail(title, price, imageUrl) {
    localStorage.setItem('productTitle', title);
    localStorage.setItem('productPrice', price);
    localStorage.setItem('productImageUrl', imageUrl);
    window.location.href = 'productDetail.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const title = localStorage.getItem('productTitle');
    const price = localStorage.getItem('productPrice');
    const imageUrl = localStorage.getItem('productImageUrl');

    if (title && price && imageUrl) {
        document.getElementById('productTitle').textContent = title;
        document.getElementById('productPrice').textContent = price;
        document.getElementById('productImage').src = imageUrl;
    }
});