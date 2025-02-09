let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
let totalPrice = 0;

function showProductDetail(title, price, imageSrc) {
  console.log("Showing product detail for:", title);
  document.getElementById("popupTitle").textContent = title;
  document.getElementById("popupPrice").textContent = `S$${parseFloat(price).toFixed(2)}`;
  document.getElementById("popupImage").src = imageSrc;
  document.getElementById("productDetailPopup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closePopup() {
  document.getElementById("productDetailPopup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function attachProductDetailListeners() {
  const productItems = document.querySelectorAll('.product_na');
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

function showCartConfirmation() {
  const cartConfirmationPopup = document.getElementById("cartConfirmationPopup");
  const cartItemList = document.getElementById("cartItemList");
  cartItemList.innerHTML = '';
  cart.forEach(item => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <div class="cart-item-info">
        <h3>${item.title}</h3>
        <p>S$${parseFloat(item.price).toFixed(2)}</p>
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
  totalPrice = cart.reduce((total, item) => {
    const itemPrice = parseFloat(item.price);
    if (isNaN(itemPrice)) {
      console.error(`Invalid price for item: ${item.title}`);
      return total;
    }
    return total + (itemPrice * item.quantity);
  }, 0);
  document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
  updateCartIcon();
  cartConfirmationPopup.classList.add("show");
  document.querySelector(".store-section").style.display = "none";
}

function changeQuantity(title, change) {
  let item = cart.find(item => item.title === title);
  if (item) {
    item.quantity += change;
    if (item.quantity < 1) item.quantity = 1;
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }
  showCartConfirmation();
}

function removeItem(title) {
  const initialLength = cart.length;
  cart = cart.filter(item => item.title !== title);
  localStorage.setItem('cartItems', JSON.stringify(cart));
  if (cart.length < initialLength) {
    console.log(`Removed item: ${title}`);
  } else {
    console.error(`Item not found in cart: ${title}`);
  }
  showCartConfirmation();
}

function closeCartPopup() {
  document.getElementById("cartConfirmationPopup").classList.remove("show");
  document.querySelector(".store-section").style.display = "block";
}

function updateCartIcon() {
  const cartCount = document.getElementById("cart-count");
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = itemCount;
}

document.getElementById("addToCartButton").addEventListener("click", function () {
  const title = document.getElementById("popupTitle").textContent;
  const priceText = document.getElementById("popupPrice").textContent;
  const imageSrc = document.getElementById("popupImage").src;
  console.log("Raw price text:", priceText);
  const cleanedPriceText = priceText.replace('S$', '').trim();
  console.log("Cleaned price text:", cleanedPriceText);
  const price = parseFloat(cleanedPriceText);
  if (!title || isNaN(price) || !imageSrc) {
    console.error("Product details are incomplete or price is invalid.");
    return;
  }
  let existingProduct = cart.find(item => item.title === title);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ title, price, image: imageSrc, quantity: 1 });
  }
  localStorage.setItem('cartItems', JSON.stringify(cart));
  showCartConfirmation();
  closePopup();
});

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
          <p>S$${parseFloat(item.price).toFixed(2)}</p>
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

window.onload = function () {
  updateCartIcon();
  attachProductDetailListeners();
  loadCartItems();
  document.getElementById("productDetailPopup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
};

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

document.addEventListener("DOMContentLoaded", () => {
  const addToBagButton = document.getElementById("addToBagButton");
  if (addToBagButton) {
    addToBagButton.addEventListener("click", () => {
      const title = document.getElementById("productTitle").textContent;
      const price = document.getElementById("productPrice").textContent;
      const imageUrl = document.getElementById("productImage").src;
      // Add your logic here
    });
  }
});