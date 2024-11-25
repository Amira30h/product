const products = [
  { id: 1, name:  'Sunglasses ' ,price: '100', discount:'20' , image: './img2/product1.jpg'   },
  { id: 2, name: "Solitaire Series", price: '150' , discount: '10', image: "./img2/product2.jpg " },
  { id: 3, name: "Wristwatches", price: '200', discount: '15', image: "./img2/product3.jpg " },
  { id: 4, name: "Knitted bag", price: '180', discount: '10', image: "./img2/product4.jpg " },
  { id: 5, name: "Decorative chairs", price: '200', discount: '15', image: "./img2/product5.jpg" },
  { id: 6, name: "Outfit clothes", price: '250', discount: '20', image: "./img2/product6.jpg" },
  { id: 7, name: "shoemaker", price: '300', discount: '12', image: "./img2/product7.jpg" },
  { id: 8, name: "Lucky", price: '70', discount: '5', image: "./img2/product8.jpg" },
  { id: 9, name: "Backpack", price: '400', discount: 7, image: "./img2/product9.jpg" },
  { id: 10, name: "Wall clock", price: '700', discount: '10', image: "./img2/product10.jpg" },
  { id: 11, name: "Mirrors", price: '900', discount: '8', image: "./img2/product11.jpg" },
  { id: 12, name: "Ansialat", price: '350', discount: '10', image: "./img2/product12.jpg" },
  { id: 13, name: "Phone case", price: '200', discount: '5', image: "./img2/product13.jpg" },
  { id: 14, name: "Laptop bag", price:'900' , discount: '15', image: "./img2/product14.jpg" },
  { id: 15, name: "Blouse", price: '700', discount: '20', image: "./img2/product15.jpg" },
  { id: 16, name: "Smart wristwatch", price: '500', discount: '10', image: "./img2/product16.jpg" },
];


const cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        
        displayCartItems();
    }
}

function displayProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const productCard = `
            <div class="col-md-3 col-sm-6">
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-details">
                        <h5>${product.name}</h5>
                        <p>Price: ${product.price}$</p>
                        <p>Discount: ${product.discount}%</p>
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalContainer = document.getElementById("cart-total");
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>No items in the cart yet.</p>";
        cartTotalContainer.innerHTML = "Total: $0.00";
    } else {
        let total = 0;
        cartItemsContainer.innerHTML = cart.map(item => {
            const discountedPrice = item.price - (item.price * (item.discount / 100));
            total += discountedPrice;
            return `
                <div class="cart-item">
                    <h5>${item.name}</h5>
                    <p>Price: ${item.price}$</p>
                    <p>Discount: ${item.discount}%</p>
                    <p>Discounted Price: ${discountedPrice.toFixed(2)}$</p>
                </div>
            `;
        }).join('');
        
         
        cartTotalContainer.innerHTML = `Total: ${total.toFixed(2)}$`;
    }
}

document.getElementById("cart-button").addEventListener("click", function() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.style.display = cartContainer.style.display === "none" ? "block" : "none"; 
});

document.addEventListener("DOMContentLoaded", displayProducts);