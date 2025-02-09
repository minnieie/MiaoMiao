document.addEventListener("DOMContentLoaded", () => {
    const checkoutForm = document.getElementById("checkout-form");
    const completeCheckoutBtn = document.getElementById("complete-checkout");
    const thankYouMessage = document.getElementById("thank-you-message");

    const errorMessageContainer = document.getElementById("error-message");

    completeCheckoutBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Clear any previous error messages
        errorMessageContainer.style.display = "none";
        errorMessageContainer.innerHTML = "";

        // Get user inputs
        const email = document.getElementById("email").value;
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const address = document.getElementById("address").value;
        const postalCode = document.getElementById("postal-code").value;

        let isValid = true;

        // Input validation
        if (!email) {
            errorMessageContainer.innerHTML += "<p>Please enter your email address.</p>";
            isValid = false;
        }

        if (!firstName) {
            errorMessageContainer.innerHTML += "<p>Please enter your first name.</p>";
            isValid = false;
        }

        if (!lastName) {
            errorMessageContainer.innerHTML += "<p>Please enter your last name.</p>";
            isValid = false;
        }

        if (!address) {
            errorMessageContainer.innerHTML += "<p>Please enter your address.</p>";
            isValid = false;
        }

        if (!postalCode) {
            errorMessageContainer.innerHTML += "<p>Please enter your postal code.</p>";
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email && !emailPattern.test(email)) {
            errorMessageContainer.innerHTML += "<p>Please enter a valid email address.</p>";
            isValid = false;
        }

        // If valid, proceed with form submission and hide checkout
        if (isValid) {
            checkoutForm.style.display = "none";
            thankYouMessage.style.display = "block";
            checkoutForm.reset();
            localStorage.removeItem('cartItems');  // Optionally clear cart
        } else {
            errorMessageContainer.style.display = "block"; // Show error messages
        }
    });
});

// You can also add your order summary functionality here
function updateOrderSummary() {
    const orderItems = document.querySelector('#order-items');
    const totalFee = document.querySelector('#total-fee');
    orderItems.innerHTML = ''; // Clear previous items

    let total = 0;
    const cart = JSON.parse(localStorage.getItem('cartItems')) || []; 
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('order-item');
        itemElement.innerHTML = `
            <div class="order-item-image">
                <img src="${item.image}" alt="${item.title}" />
            </div>
            <div class="order-item-details">
                <p>${item.title} - ${item.quantity} x $${item.price.toFixed(2)}</p>
                <p><strong>Total: $${(item.quantity * item.price).toFixed(2)}</strong></p>
            </div>
        `;
        orderItems.appendChild(itemElement);
        total += item.quantity * item.price;
    });

    totalFee.textContent = total.toFixed(2);
}

// Call the updateOrderSummary function on page load to populate the order details
window.onload = updateOrderSummary;