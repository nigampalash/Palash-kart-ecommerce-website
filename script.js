// 24 Mobile Products
const products = [
  {id: 1, name: "Samsung Galaxy S24", price: 64999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 128 GB ROM | 6.1 inch Display"},
  {id: 2, name: "Apple iPhone 15", price: 72999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "6 GB RAM | 128 GB ROM | 6.1 inch Display"},
  {id: 3, name: "OnePlus Nord CE 4", price: 24999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 128 GB ROM | 6.7 inch Display"},
  {id: 4, name: "Realme 12 Pro+", price: 28999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 256 GB ROM | 6.7 inch Display"},
  {id: 5, name: "Vivo V30 Pro", price: 41999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "12 GB RAM | 512 GB ROM | 6.78 inch Display"},
  {id: 6, name: "Xiaomi Redmi Note 13 Pro", price: 23999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 256 GB ROM | 6.67 inch Display"},
  {id: 7, name: "Motorola Edge 50 Pro", price: 31999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 256 GB ROM | 6.7 inch Display"},
  {id: 8, name: "Google Pixel 8", price: 59999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 128 GB ROM | 6.2 inch Display"},
  {id: 9, name: "Nothing Phone 2a", price: 23999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 128 GB ROM | 6.7 inch Display"},
  {id: 10, name: "POCO X6 Pro", price: 26999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "12 GB RAM | 512 GB ROM | 6.67 inch Display"},
  {id: 11, name: "Infinix Note 40 Pro", price: 19999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 256 GB ROM | 6.78 inch Display"},
  {id: 12, name: "Tecno Camon 30 Pro", price: 17999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 256 GB ROM | 6.78 inch Display"},
  {id: 13, name: "OPPO F25 Pro", price: 23999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 128 GB ROM | 6.7 inch Display"},
  {id: 14, name: "iQOO Z9", price: 18999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 128 GB ROM | 6.67 inch Display"},
  {id: 15, name: "Lava Blaze Curve 5G", price: 17999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 128 GB ROM | 6.67 inch Display"},
  {id: 16, name: "Samsung Galaxy M55", price: 24999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 128 GB ROM | 6.7 inch Display"},
  {id: 17, name: "Redmi 13C", price: 8999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "4 GB RAM | 128 GB ROM | 6.74 inch Display"},
  {id: 18, name: "Vivo T3x", price: 14999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "6 GB RAM | 128 GB ROM | 6.72 inch Display"},
  {id: 19, name: "POCO M6 Pro", price: 10999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "4 GB RAM | 64 GB ROM | 6.79 inch Display"},
  {id: 20, name: "Realme Narzo 70 Pro", price: 19999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 128 GB ROM | 6.67 inch Display"},
  {id: 21, name: "Samsung Galaxy F15", price: 13999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "6 GB RAM | 128 GB ROM | 6.5 inch Display"},
  {id: 22, name: "Infinix Smart 8", price: 7499, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "4 GB RAM | 64 GB ROM | 6.6 inch Display"},
  {id: 23, name: "Tecno Spark 20", price: 9999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 128 GB ROM | 6.56 inch Display"},
  {id: 24, name: "OPPO A59 5G", price: 14999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "4 GB RAM | 128 GB ROM | 6.56 inch Display"}
];

// Cart logic (localStorage for persistence)
let cart = JSON.parse(localStorage.getItem('palashkart_cart') || '[]');

function saveCart() {
  localStorage.setItem('palashkart_cart', JSON.stringify(cart));
}

function renderProducts(filter = "") {
  if (!document.getElementById('productGrid')) return;
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase()) ||
    p.desc.toLowerCase().includes(filter.toLowerCase())
  );
  if (filtered.length === 0) {
    grid.innerHTML = "<div class='col-12 text-center text-muted py-5'>No products found.</div>";
    return;
  }
  filtered.forEach(product => {
    grid.innerHTML += `
      <div class="col-md-4 col-sm-6 mb-4">
        <div class="card h-100 product-card glass-card" data-id="${product.id}" style="cursor:pointer">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.desc}</p>
            <div class="mt-auto d-flex justify-content-between align-items-center">
              <span class="price">₹${product.price.toLocaleString()}</span>
              <a href="detail.html?id=${product.id}" class="btn btn-outline-primary btn-sm glass-btn">View</a>
              <button class="btn btn-add glass-btn" onclick="addToCart(${product.id});event.stopPropagation();">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  // Card click (except on Add to Cart/View)
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function(e) {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;
      const id = Number(this.getAttribute('data-id'));
      window.location.href = `detail.html?id=${id}`;
    });
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartCount();
  saveCart();
}

function updateCartCount() {
  if (!document.getElementById('cartCount')) return;
  document.getElementById('cartCount').textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

function renderCart() {
  if (!document.getElementById('cartItems')) return;
  const cartItems = document.getElementById('cartItems');
  if (cart.length === 0) {
    cartItems.innerHTML = "<p class='text-center text-muted'>Your cart is empty.</p>";
    if (document.getElementById('cartTotal')) document.getElementById('cartTotal').textContent = "";
    if (document.getElementById('checkoutBtn')) document.getElementById('checkoutBtn').disabled = true;
    return;
  }
  let total = 0;
  cartItems.innerHTML = cart.map(item => {
    total += item.price * item.qty;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-title">${item.name} <br><small>Qty: ${item.qty}</small></div>
        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</div>
        <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Remove"><i class="bi bi-trash"></i></button>
      </div>
    `;
  }).join('');
  if (document.getElementById('cartTotal')) document.getElementById('cartTotal').textContent = "Total: ₹" + total.toLocaleString();
  if (document.getElementById('checkoutBtn')) document.getElementById('checkoutBtn').disabled = false;
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartCount();
  saveCart();
  renderCart();
}

if (document.getElementById('cartBtn')) document.getElementById('cartBtn').addEventListener('click', renderCart);

// Payment Gateway Logic
if (document.getElementById('paymentForm')) {
  document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (cart.length === 0) return;
    // Animation for payment
    document.querySelector('.pay-animate').textContent = "Processing...";
    setTimeout(() => {
      alert('Payment Successful! Thank you for shopping with PalashKart!');
      cart = [];
      updateCartCount();
      saveCart();
      renderCart();
      bootstrap.Modal.getInstance(document.getElementById('paymentModal')).hide();
      if (document.getElementById('cartModal')) bootstrap.Modal.getInstance(document.getElementById('cartModal')).hide();
      document.querySelector('.pay-animate').textContent = "Pay Now";
    }, 1200);
  });
}

// Live search
if (document.getElementById('searchInput')) {
  document.getElementById('searchInput').addEventListener('input', function() {
    renderProducts(this.value);
  });
}

// Initial render
renderProducts();
updateCartCount();