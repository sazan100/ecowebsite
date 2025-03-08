// Sample product data
const products = [
    {
        id: 1,
        name: "Reusable Shopping Bag",
        price: 1599, // Price in NPR
        image: "Screenshot_8-3-2025_141152_www.bing.com.jpeg"
    },
    {
        id: 2,
        name: "Biodegradable Utensils",
        price: 999, // Price in NPR
        image: "Screenshot_8-3-2025_141456_th.bing.com.jpeg"
    },
    {
        id: 3,
        name: "Organic Skincare Set",
        price: 2999, // Price in NPR
        image: "Screenshot_8-3-2025_141526_www.bing.com.jpeg"
    }
];

let cart = [];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: NPR ${product.price.toLocaleString()}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById('cart-count').innerText = cart.length;
    alert(`${product.name} has been added to your cart!`);
}

// Initialize the product display
displayProducts();