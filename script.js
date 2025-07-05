// Sample data for products and categories
const sampleProducts = {
    featured: [
        {
            id: 1,
            name: "Premium Organic Rice - 5kg",
            price: 2500.00,
            originalPrice: 2800.00,
            image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop&crop=center",
            categories: ["Organic", "Rice", "Pantry"],
            brand: "Lanka Organic",
            inStock: true,
            description: "Premium quality organic white rice, perfect for daily consumption. Grown without pesticides in the organic farms of Polonnaruwa.",
            weight: "5kg",
            discount: 10
        },
        {
            id: 2,
            name: "Fresh Milk - 1L",
            price: 380.00,
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=200&fit=crop&crop=center",
            categories: ["Dairy", "Fresh", "Beverages"],
            brand: "Anchor",
            inStock: true,
            description: "Fresh pasteurized full cream milk, rich in calcium and protein. Perfect for the whole family.",
            weight: "1L"
        },
        {
            id: 3,
            name: "Ceylon Black Tea - 200g",
            price: 850.00,
            image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop&crop=center",
            categories: ["Tea", "Beverages", "Ceylon"],
            brand: "Dilmah",
            inStock: true,
            description: "Premium Ceylon black tea from the hill country. Rich aroma and authentic taste.",
            weight: "200g"
        },
        {
            id: 4,
            name: "Mixed Fruit Jam - 450g",
            price: 650.00,
            originalPrice: 720.00,
            image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=200&fit=crop&crop=center",
            categories: ["Spreads", "Fruit", "Breakfast"],
            brand: "Keells",
            inStock: true,
            description: "Delicious mixed fruit jam made from the finest local fruits. Perfect for breakfast toast.",
            weight: "450g",
            discount: 10
        },
        {
            id: 5,
            name: "Coconut Oil - 500ml",
            price: 420.00,
            image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=200&fit=crop&crop=center",
            categories: ["Oil", "Cooking", "Coconut"],
            brand: "Kelani Valley",
            inStock: true,
            description: "Pure coconut oil extracted from fresh coconuts. Ideal for cooking and health benefits.",
            weight: "500ml"
        },
        {
            id: 6,
            name: "Fresh Bananas - 1kg",
            price: 180.00,
            image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=200&fit=crop&crop=center",
            categories: ["Fruits", "Fresh", "Local"],
            brand: "Local Farm",
            inStock: true,
            description: "Fresh ripe bananas from local farms. Rich in potassium and natural sugars.",
            weight: "1kg"
        }
    ],
    freshProduce: [
        {
            id: 7,
            name: "Fresh Tomatoes - 500g",
            price: 120.00,
            image: "https://images.unsplash.com/photo-1546470427-e615de6824ba?w=300&h=200&fit=crop&crop=center",
            categories: ["Vegetables", "Fresh", "Local"],
            brand: "Local Farm",
            inStock: true,
            description: "Fresh red tomatoes perfect for cooking and salads.",
            weight: "500g"
        },
        {
            id: 8,
            name: "Green Beans - 250g",
            price: 85.00,
            image: "https://images.unsplash.com/photo-1553395572-0b75b06862fe?w=300&h=200&fit=crop&crop=center",
            categories: ["Vegetables", "Fresh", "Green"],
            brand: "Local Farm",
            inStock: true,
            description: "Fresh green beans, perfect for stir-fry and curries.",
            weight: "250g"
        },
        {
            id: 9,
            name: "Fresh Apples - 1kg",
            price: 680.00,
            image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=200&fit=crop&crop=center",
            categories: ["Fruits", "Fresh", "Imported"],
            brand: "Premium Imports",
            inStock: true,
            description: "Crisp and sweet imported apples, perfect for snacking.",
            weight: "1kg"
        },
        {
            id: 10,
            name: "Organic Carrots - 500g",
            price: 160.00,
            image: "https://images.unsplash.com/photo-1552658037-4a9e3f8a9978?w=300&h=200&fit=crop&crop=center",
            categories: ["Vegetables", "Organic", "Fresh"],
            brand: "Lanka Organic",
            inStock: true,
            description: "Organic carrots grown without pesticides. Perfect for cooking and juicing.",
            weight: "500g"
        }
    ],
    dairyBeverages: [
        {
            id: 11,
            name: "Greek Yogurt - 200g",
            price: 320.00,
            image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=200&fit=crop&crop=center",
            categories: ["Dairy", "Yogurt", "Protein"],
            brand: "Anchor",
            inStock: true,
            description: "Thick and creamy Greek yogurt, high in protein and probiotics.",
            weight: "200g"
        },
        {
            id: 12,
            name: "Orange Juice - 1L",
            price: 450.00,
            image: "https://images.unsplash.com/photo-1534353341328-4e9bb9bb6f44?w=300&h=200&fit=crop&crop=center",
            categories: ["Beverages", "Juice", "Vitamin C"],
            brand: "Elephant House",
            inStock: true,
            description: "Fresh orange juice packed with vitamin C and natural flavors.",
            weight: "1L"
        },
        {
            id: 13,
            name: "Cheese Slices - 200g",
            price: 580.00,
            image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300&h=200&fit=crop&crop=center",
            categories: ["Dairy", "Cheese", "Processed"],
            brand: "Anchor",
            inStock: true,
            description: "Processed cheese slices perfect for sandwiches and burgers.",
            weight: "200g"
        },
        {
            id: 14,
            name: "Coconut Water - 330ml",
            price: 120.00,
            image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=300&h=200&fit=crop&crop=center",
            categories: ["Beverages", "Natural", "Coconut"],
            brand: "King Coconut",
            inStock: true,
            description: "Pure coconut water from young coconuts. Natural electrolytes.",
            weight: "330ml"
        }
    ],
    snacks: [
        {
            id: 15,
            name: "Chocolate Cookies - 200g",
            price: 280.00,
            image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=200&fit=crop&crop=center",
            categories: ["Cookies", "Chocolate", "Snacks"],
            brand: "Maliban",
            inStock: true,
            description: "Delicious chocolate chip cookies perfect for tea time.",
            weight: "200g"
        },
        {
            id: 16,
            name: "Mixed Nuts - 150g",
            price: 520.00,
            image: "https://images.unsplash.com/photo-1599599810694-57a2ca389e92?w=300&h=200&fit=crop&crop=center",
            categories: ["Nuts", "Healthy", "Snacks"],
            brand: "Premium Mix",
            inStock: true,
            description: "Premium mixed nuts including cashews, almonds, and walnuts.",
            weight: "150g"
        },
        {
            id: 17,
            name: "Potato Chips - 90g",
            price: 180.00,
            image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=300&h=200&fit=crop&crop=center",
            categories: ["Chips", "Snacks", "Crispy"],
            brand: "Lays",
            inStock: false,
            description: "Crispy potato chips with natural flavors.",
            weight: "90g"
        },
        {
            id: 18,
            name: "Dark Chocolate Bar - 100g",
            price: 380.00,
            image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=300&h=200&fit=crop&crop=center",
            categories: ["Chocolate", "Dark", "Premium"],
            brand: "Kandos",
            inStock: true,
            description: "Premium dark chocolate with 70% cocoa content.",
            weight: "100g"
        }
    ]
};

const brands = [
    { name: "Nestle", image: "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?w=120&h=80&fit=crop&crop=center", products: 45 },
    { name: "Unilever", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=80&fit=crop&crop=center", products: 38 },
    { name: "Keells", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=120&h=80&fit=crop&crop=center", products: 52 },
    { name: "Anchor", image: "https://images.unsplash.com/photo-1556909289-bec6fa6cd875?w=120&h=80&fit=crop&crop=center", products: 28 },
    { name: "Elephant House", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=120&h=80&fit=crop&crop=center", products: 34 },
    { name: "Maliban", image: "https://images.unsplash.com/photo-1555617981-dac3880eac6b?w=120&h=80&fit=crop&crop=center", products: 26 },
    { name: "Dilmah", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=120&h=80&fit=crop&crop=center", products: 42 },
    { name: "Lanka Organic", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=80&fit=crop&crop=center", products: 19 },
    { name: "Kelani Valley", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=120&h=80&fit=crop&crop=center", products: 15 },
    { name: "Local Farm", image: "https://images.unsplash.com/photo-1546470427-e615de6824ba?w=120&h=80&fit=crop&crop=center", products: 23 },
    { name: "Premium Imports", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=120&h=80&fit=crop&crop=center", products: 31 },
    { name: "King Coconut", image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=120&h=80&fit=crop&crop=center", products: 12 }
];

// Shopping cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentBannerIndex = 0;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedProducts();
    loadTopBrands();
    loadCategoryProducts();
    startBannerRotation();
    updateCartDisplay();
    initializeSearchAutocomplete();
    updateAccountUI();
});

// Banner rotation
function startBannerRotation() {
    const banners = document.querySelectorAll('.banner');
    setInterval(() => {
        banners[currentBannerIndex].classList.remove('active');
        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
        banners[currentBannerIndex].classList.add('active');
    }, 5000);
}

// Load featured products
function loadFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    container.innerHTML = '';
    
    sampleProducts.featured.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// Load top brands
function loadTopBrands() {
    const container = document.getElementById('topBrands');
    container.innerHTML = '';
    
    brands.forEach(brand => {
        const brandCard = createBrandCard(brand);
        container.appendChild(brandCard);
    });
}

// Load category products
function loadCategoryProducts() {
    // Fresh Produce
    const freshProduceContainer = document.getElementById('freshProduceProducts');
    freshProduceContainer.innerHTML = '';
    sampleProducts.freshProduce.forEach(product => {
        const productCard = createProductCard(product);
        freshProduceContainer.appendChild(productCard);
    });

    // Dairy & Beverages
    const dairyBeveragesContainer = document.getElementById('dairyBeveragesProducts');
    dairyBeveragesContainer.innerHTML = '';
    sampleProducts.dairyBeverages.forEach(product => {
        const productCard = createProductCard(product);
        dairyBeveragesContainer.appendChild(productCard);
    });

    // Snacks
    const snacksContainer = document.getElementById('snacksProducts');
    snacksContainer.innerHTML = '';
    sampleProducts.snacks.forEach(product => {
        const productCard = createProductCard(product);
        snacksContainer.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in';
    card.onclick = () => showProductDetails(product);
    
    const hasDiscount = product.originalPrice && product.originalPrice > product.price;
    const discountPercent = hasDiscount ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    card.innerHTML = `
        ${hasDiscount ? `<div class="special-offer discount">${discountPercent}% OFF</div>` : ''}
        ${!product.inStock ? '<div class="stock-status">Out Of Stock</div>' : '<div class="stock-status in-stock">In Stock</div>'}
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3>${product.name}</h3>
            <div class="product-categories">
                ${product.categories.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
            </div>
            <div class="product-price">
                Rs. ${product.price.toLocaleString()}
                ${hasDiscount ? `<span class="original-price">Rs. ${product.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            <div class="product-actions">
                <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                    ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
                <button class="btn-quote" onclick="event.stopPropagation(); addToQuote(${product.id})">
                    <i class="fas fa-quote-right"></i>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Create brand card
function createBrandCard(brand) {
    const card = document.createElement('div');
    card.className = 'brand-card fade-in';
    card.onclick = () => filterByBrand(brand.name.toLowerCase().replace(' ', '-'));
    
    card.innerHTML = `
        <img src="${brand.image}" alt="${brand.name}">
        <h4>${brand.name}</h4>
        <p>${brand.products} Products</p>
    `;
    
    return card;
}

// Show product details in modal
function showProductDetails(product) {
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    const hasDiscount = product.originalPrice && product.originalPrice > product.price;
    
    modalBody.innerHTML = `
        <div class="modal-product">
            <div>
                <img src="${product.image}" alt="${product.name}" class="modal-product-image">
            </div>
            <div class="modal-product-info">
                <h2>${product.name}</h2>
                <div class="product-categories">
                    ${product.categories.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
                </div>
                <p class="modal-product-description">${product.description}</p>
                <div class="product-details">
                    <p><strong>Brand:</strong> ${product.brand}</p>
                    <p><strong>Weight/Volume:</strong> ${product.weight}</p>
                    <p><strong>Stock Status:</strong> ${product.inStock ? 'In Stock' : 'Out of Stock'}</p>
                </div>
                <div class="modal-product-price">
                    Rs. ${product.price.toLocaleString()}
                    ${hasDiscount ? `<span class="original-price">Rs. ${product.originalPrice.toLocaleString()}</span>` : ''}
                </div>
                <div class="modal-product-actions">
                    <button class="btn-add-cart" onclick="addToCart(${product.id}); closeProductModal();" ${!product.inStock ? 'disabled' : ''}>
                        ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                    <button class="btn-quote" onclick="addToQuote(${product.id}); closeProductModal();">
                        Add to Quote
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
}

// Close product modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('show');
}

// Add to cart functionality
function addToCart(productId) {
    const product = findProductById(productId);
    if (!product || !product.inStock) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    showNotification(`${product.name} added to cart!`, 'success');
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Update quantity in cart
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}

// Update cart display
function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const cartContent = document.getElementById('cartContent');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
    
    if (cartContent) {
        if (cart.length === 0) {
            cartContent.innerHTML = '<p class="empty-cart">No products in the cart.</p>';
            if (cartFooter) cartFooter.style.display = 'none';
        } else {
            cartContent.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">Rs. ${item.price.toLocaleString()}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                            <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="background: #e74c3c; margin-left: 10px;">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            if (cartTotal) cartTotal.textContent = total.toLocaleString();
            if (cartFooter) cartFooter.style.display = 'block';
        }
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    cartSidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}

// Add to quote functionality
function addToQuote(productId) {
    const product = findProductById(productId);
    if (!product) return;
    
    showNotification(`${product.name} added to quote request!`, 'info');
}

// Search functionality
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim().toLowerCase();
    
    if (query) {
        showNotification(`Searching for "${query}"...`, 'info');
        // In a real app, this would search the backend
        setTimeout(() => {
            showNotification(`Search results for "${query}" would be displayed here.`, 'info');
        }, 1000);
    }
}

// Category navigation
function showCategory(category) {
    showNotification(`Showing ${category.replace('-', ' ')} category...`, 'info');
    // In a real app, this would navigate to category page or filter products
}

// Show all products
function showAllProducts() {
    showNotification('Showing all products...', 'info');
    // In a real app, this would navigate to products page
}

// Filter by brand
function filterByBrand(brand) {
    showNotification(`Filtering products by ${brand} brand...`, 'info');
    // In a real app, this would filter products by brand
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    // Save cart to localStorage before navigating
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Navigate to checkout page
    window.location.href = 'checkout.html';
}

// Helper functions
function findProductById(id) {
    const allProducts = [
        ...sampleProducts.featured,
        ...sampleProducts.freshProduce,
        ...sampleProducts.dairyBeverages,
        ...sampleProducts.snacks
    ];
    return allProducts.find(product => product.id === id);
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Search on Enter key
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('productModal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProductModal();
        }
    });
});

// Smooth scrolling for navigation
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Load more products functionality
function loadMoreProducts(category) {
    showNotification('Loading more products...', 'info');
    // In a real app, this would load more products from the backend
}

// Product wishlist functionality
let wishlist = [];

function addToWishlist(productId) {
    const product = findProductById(productId);
    if (!product) return;
    
    if (!wishlist.find(item => item.id === productId)) {
        wishlist.push(product);
        showNotification(`${product.name} added to wishlist!`, 'success');
    } else {
        showNotification(`${product.name} is already in your wishlist!`, 'info');
    }
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    showNotification('Item removed from wishlist!', 'info');
}

// Price range filter
function filterByPriceRange(min, max) {
    showNotification(`Filtering products between Rs. ${min} - Rs. ${max}`, 'info');
    // In a real app, this would filter products by price range
}

// Sort products
function sortProducts(sortBy) {
    const sortOptions = {
        'price-low': 'Price: Low to High',
        'price-high': 'Price: High to Low',
        'name': 'Name: A to Z',
        'popularity': 'Popularity',
        'newest': 'Newest First'
    };
    
    showNotification(`Sorting by: ${sortOptions[sortBy]}`, 'info');
    // In a real app, this would sort the products
}

// Newsletter subscription
function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail');
    if (email && email.value.trim()) {
        showNotification('Thank you for subscribing to our newsletter!', 'success');
        email.value = '';
    } else {
        showNotification('Please enter a valid email address!', 'error');
    }
}

// Initialize tooltips and additional UI elements
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.product-card, .brand-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Back to top functionality
function createBackToTopButton() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #3498db;
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 20px;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
}

// Initialize back to top button
document.addEventListener('DOMContentLoaded', createBackToTopButton);

// Quick view functionality
function quickView(productId) {
    const product = findProductById(productId);
    if (product) {
        showProductDetails(product);
    }
}

// Compare products functionality
let compareList = [];

function addToCompare(productId) {
    const product = findProductById(productId);
    if (!product) return;
    
    if (compareList.length >= 3) {
        showNotification('You can compare maximum 3 products!', 'error');
        return;
    }
    
    if (!compareList.find(item => item.id === productId)) {
        compareList.push(product);
        showNotification(`${product.name} added to compare list!`, 'success');
    } else {
        showNotification(`${product.name} is already in compare list!`, 'info');
    }
}

function removeFromCompare(productId) {
    compareList = compareList.filter(item => item.id !== productId);
    showNotification('Product removed from compare list!', 'info');
}

function showCompareList() {
    if (compareList.length === 0) {
        showNotification('No products to compare!', 'info');
        return;
    }
    
    showNotification(`Comparing ${compareList.length} products...`, 'info');
    // In a real app, this would show a comparison table
}

// Initialize search autocomplete
function initializeSearchAutocomplete() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) return;
        
        // Get all products for search
        const allProducts = [
            ...sampleProducts.featured,
            ...sampleProducts.freshProduce,
            ...sampleProducts.dairyBeverages,
            ...sampleProducts.snacks
        ];
        
        // Filter products based on search query
        const suggestions = allProducts.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.categories.some(cat => cat.toLowerCase().includes(query)) ||
            product.brand.toLowerCase().includes(query)
        ).slice(0, 5);
        
        showSearchSuggestions(suggestions, query);
    });
}

// Show search suggestions
function showSearchSuggestions(suggestions, query) {
    let suggestionBox = document.getElementById('searchSuggestions');
    
    if (!suggestionBox) {
        suggestionBox = document.createElement('div');
        suggestionBox.id = 'searchSuggestions';
        suggestionBox.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border: 1px solid #ddd;
            border-top: none;
            border-radius: 0 0 10px 10px;
            max-height: 300px;
            overflow-y: auto;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        `;
        document.querySelector('.search-bar').style.position = 'relative';
        document.querySelector('.search-bar').appendChild(suggestionBox);
    }
    
    if (suggestions.length === 0) {
        suggestionBox.innerHTML = `<div style="padding: 15px; color: #7f8c8d; text-align: center;">No products found for "${query}"</div>`;
    } else {
        suggestionBox.innerHTML = suggestions.map(product => `
            <div class="suggestion-item" style="padding: 10px 15px; cursor: pointer; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center; gap: 10px;" onclick="selectProduct(${product.id})" onmouseover="this.style.background='#f8f9fa'" onmouseout="this.style.background='white'">
                <img src="${product.image}" alt="${product.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 5px;">
                <div>
                    <div style="font-weight: 600; color: #2c3e50;">${product.name}</div>
                    <div style="font-size: 12px; color: #7f8c8d;">${product.brand} • Rs. ${product.price.toLocaleString()}</div>
                </div>
            </div>
        `).join('');
    }
    
    suggestionBox.style.display = 'block';
}

// Select product from suggestions
function selectProduct(productId) {
    const product = findProductById(productId);
    if (product) {
        showProductDetails(product);
        hideSuggestions();
    }
}

// Hide search suggestions
function hideSuggestions() {
    const suggestionBox = document.getElementById('searchSuggestions');
    if (suggestionBox) {
        suggestionBox.style.display = 'none';
    }
}

// Hide suggestions when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-bar')) {
        hideSuggestions();
    }
});

// Enhanced product filtering
function filterProducts(filters) {
    const allProducts = [
        ...sampleProducts.featured,
        ...sampleProducts.freshProduce,
        ...sampleProducts.dairyBeverages,
        ...sampleProducts.snacks
    ];
    
    return allProducts.filter(product => {
        // Category filter
        if (filters.category && !product.categories.some(cat => 
            cat.toLowerCase().includes(filters.category.toLowerCase())
        )) {
            return false;
        }
        
        // Brand filter
        if (filters.brand && !product.brand.toLowerCase().includes(filters.brand.toLowerCase())) {
            return false;
        }
        
        // Price range filter
        if (filters.minPrice && product.price < filters.minPrice) {
            return false;
        }
        if (filters.maxPrice && product.price > filters.maxPrice) {
            return false;
        }
        
        // Stock filter
        if (filters.inStockOnly && !product.inStock) {
            return false;
        }
        
        return true;
    });
}

// Enhanced sort functionality
function sortProductsArray(products, sortBy) {
    const sortedProducts = [...products];
    
    switch (sortBy) {
        case 'price-low':
            return sortedProducts.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sortedProducts.sort((a, b) => b.price - a.price);
        case 'name':
            return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        case 'newest':
            return sortedProducts.sort((a, b) => b.id - a.id);
        case 'popularity':
        default:
            return sortedProducts.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    }
}

// --- Account Dropdown & Auth Modal Logic ---

// Toggle account dropdown menu
function toggleAccountMenu() {
    console.log('toggleAccountMenu called'); // Debug log
    const menu = document.getElementById('accountMenu');
    if (!menu) {
        console.error('Account menu not found!');
        return;
    }
    console.log('Menu found, toggling class'); // Debug log
    menu.classList.toggle('show');
    console.log('Menu classes:', menu.className); // Debug log
    
    // Hide on outside click
    document.addEventListener('mousedown', function handler(e) {
        if (!menu.contains(e.target) && !e.target.closest('#accountButton')) {
            menu.classList.remove('show');
            document.removeEventListener('mousedown', handler);
        }
    });
}

// Show login modal
function showLoginModal() {
    closeAllAuthModals();
    document.getElementById('loginModal').style.display = 'flex';
}

// Show register modal
function showRegisterModal() {
    closeAllAuthModals();
    document.getElementById('registerModal').style.display = 'flex';
}

// Show forgot password modal
function showForgotPassword() {
    closeAllAuthModals();
    document.getElementById('forgotModal').style.display = 'flex';
}

// Switch between login/register/forgot
function switchToRegister() { showRegisterModal(); }
function switchToLogin() { showLoginModal(); }

// Close all auth modals
function closeAllAuthModals() {
    ['loginModal','registerModal','forgotModal'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
}
function closeAuthModal() { closeAllAuthModals(); }

// Toggle password visibility
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}

// --- Fake User Auth (localStorage) ---
function getUser() {
    return JSON.parse(localStorage.getItem('fm_user'));
}
function setUser(user) {
    localStorage.setItem('fm_user', JSON.stringify(user));
}
function clearUser() {
    localStorage.removeItem('fm_user');
}

// --- Login/Register/Forgot Handlers ---
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    // Fake check: accept any email/password, but require both
    if (!email || !password) {
        showNotification('Please enter email and password', 'error');
        return;
    }
    // Simulate user
    setUser({
        name: email.split('@')[0],
        email: email
    });
    closeAllAuthModals();
    updateAccountUI();
    showNotification('Signed in successfully!', 'success');
}

function handleRegister(e) {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const agree = document.getElementById('agreeTerms').checked;
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        showNotification('Please fill all required fields', 'error');
        return;
    }
    if (password !== confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return;
    }
    if (!agree) {
        showNotification('You must agree to the terms', 'error');
        return;
    }
    setUser({
        name: firstName + ' ' + lastName,
        email: email
    });
    closeAllAuthModals();
    updateAccountUI();
    showNotification('Account created & signed in!', 'success');
}

function handleForgotPassword(e) {
    e.preventDefault();
    const email = document.getElementById('forgotEmail').value.trim();
    if (!email) {
        showNotification('Please enter your email', 'error');
        return;
    }
    closeAllAuthModals();
    showNotification('Password reset link sent to your email!', 'success');
}

// --- Update Account UI ---
function updateAccountUI() {
    const user = getUser();
    const guestMenu = document.getElementById('guestMenu');
    const userMenu = document.getElementById('userMenu');
    const accountText = document.getElementById('accountText');
    if (user) {
        guestMenu.style.display = 'none';
        userMenu.style.display = 'block';
        document.getElementById('userName').textContent = 'Welcome, ' + user.name + '!';
        document.getElementById('userEmail').textContent = user.email;
        accountText.textContent = user.name.split(' ')[0];
    } else {
        guestMenu.style.display = 'block';
        userMenu.style.display = 'none';
        accountText.textContent = 'Account';
    }
}

// --- Logout ---
function logout() {
    clearUser();
    updateAccountUI();
    showNotification('Logged out successfully!', 'success');
}

// --- Dummy Profile/Orders/Wishlist/Addresses ---
function showProfile() { showNotification('Profile page coming soon!', 'info'); }
function showOrders() { showNotification('Orders page coming soon!', 'info'); }
function showWishlist() { showNotification('Wishlist coming soon!', 'info'); }
function showAddresses() { showNotification('Addresses page coming soon!', 'info'); }

// --- Social login/register (fake) ---
function loginWithGoogle() { showNotification('Google login coming soon!', 'info'); }
function loginWithFacebook() { showNotification('Facebook login coming soon!', 'info'); }
function registerWithGoogle() { showNotification('Google signup coming soon!', 'info'); }
function registerWithFacebook() { showNotification('Facebook signup coming soon!', 'info'); }

// --- Terms/Privacy (fake) ---
function showTerms() { showNotification('Terms & Conditions coming soon!', 'info'); }
function showPrivacy() { showNotification('Privacy Policy coming soon!', 'info'); }

// --- Password Strength (register) ---
const registerPassword = document.getElementById('registerPassword');
if (registerPassword) {
    registerPassword.addEventListener('input', function() {
        const val = registerPassword.value;
        const strength = document.getElementById('passwordStrength');
        if (!val) { strength.textContent = ''; return; }
        let score = 0;
        if (val.length >= 8) score++;
        if (/[A-Z]/.test(val)) score++;
        if (/[0-9]/.test(val)) score++;
        if (/[^A-Za-z0-9]/.test(val)) score++;
        const levels = ['Weak','Fair','Good','Strong'];
        strength.textContent = 'Strength: ' + levels[score-1] || 'Weak';
        strength.style.color = ['#e74c3c','#f39c12','#27ae60','#2ecc71'][score-1] || '#e74c3c';
    });
}

// --- On page load, update account UI ---
document.addEventListener('DOMContentLoaded', updateAccountUI);
