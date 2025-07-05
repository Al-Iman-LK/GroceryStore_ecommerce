# FreshMart.lk - Premium Food & Beverages Ecommerce Website

A comprehensive frontend for a food industry manufacturing company's online store, designed with the exact same UI/UX as laptop.lk but adapted for the food industry.

## 🌟 Features

### Frontend Functionality
- **Responsive Design**: Modern, mobile-first design that works on all devices
- **Product Catalog**: Dynamic product listings with categories and filtering
- **Shopping Cart**: Full cart functionality with add/remove/update quantities
- **Product Search**: Search functionality with real-time results
- **Category Navigation**: Browse products by categories and brands
- **Product Details**: Modal popups with detailed product information
- **Checkout Process**: Complete checkout flow with form validation
- **Order Management**: Order confirmation and receipt generation
- **User Interface**: Modern, clean design with smooth animations

### Product Categories
- Fresh Produce (Fruits & Vegetables)
- Dairy & Eggs
- Beverages (Juices, Tea, Coffee)
- Snacks & Confectionery
- Organic Products
- Pantry Essentials
- Frozen Foods
- Bulk Orders for Corporate Clients

### Key Functionality
- **Add to Cart**: Full shopping cart with quantity management
- **Product Filtering**: Filter by category, brand, price range, availability
- **Search**: Product search with suggestions
- **Checkout**: Multi-step checkout with payment options
- **Order Confirmation**: Complete order tracking and receipt generation
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI/UX**: Clean, professional design inspired by laptop.lk

## 📁 Project Structure

```
project4/
├── index.html              # Homepage with featured products and categories
├── products.html           # Product listing page with filters
├── checkout.html           # Checkout process with payment options
├── order-confirmation.html # Order confirmation and receipt
├── styles.css              # Main stylesheet with responsive design
├── script.js               # JavaScript functionality and interactions
└── README.md              # Project documentation
```

## 🚀 Pages Overview

### 1. Homepage (index.html)
- Hero banner with rotating images
- Featured products section
- Top brands showcase
- Category-wise product sections
- Modern navigation and search

### 2. Products Page (products.html)
- Complete product catalog
- Advanced filtering sidebar
- Sort options (price, name, popularity)
- Grid/List view toggle
- Pagination
- Product quick view

### 3. Checkout (checkout.html)
- Contact information form
- Delivery address with validation
- Multiple delivery options
- Payment method selection
- Credit card form with validation
- Order summary with totals

### 4. Order Confirmation (order-confirmation.html)
- Success confirmation
- Order details and tracking
- Receipt download/print
- Order timeline/progress
- Customer support contact

## 💻 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons and visual elements
- **Google Fonts**: Typography (Inter font family)
- **Responsive Design**: Mobile-first approach

## 🎨 Design Features

- **Color Scheme**: Professional blues, greens, and grays
- **Typography**: Clean, readable Inter font
- **Layout**: Grid-based responsive layout
- **Animations**: Smooth transitions and hover effects
- **Images**: High-quality food product images from Unsplash
- **Icons**: Font Awesome icons throughout

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (Full layout)
- **Tablet**: 768px - 1199px (Adapted layout)
- **Mobile**: Below 768px (Stacked layout)

## ⚙️ Setup Instructions

1. **Clone or Download**: Get the project files
2. **Open in Browser**: Open `index.html` in any modern web browser
3. **Local Server** (Optional): Use a local server for best experience
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have live-server installed)
   npx live-server
   ```
4. **Navigate**: Browse through different pages and test functionality

## 🛍️ User Experience Flow

1. **Landing**: User arrives at homepage with featured products
2. **Browse**: Navigate through categories or use search
3. **Product Details**: Click products for detailed information
4. **Add to Cart**: Add desired items to shopping cart
5. **Cart Review**: Review items in sidebar cart
6. **Checkout**: Proceed through checkout process
7. **Payment**: Select payment method and enter details
8. **Confirmation**: Receive order confirmation and receipt

## 🔧 Key JavaScript Functionality

### Shopping Cart
```javascript
// Add item to cart
function addToCart(productId)

// Update cart quantities
function updateQuantity(productId, change)

// Cart sidebar toggle
function toggleCart()
```

### Product Management
```javascript
// Load products dynamically
function loadFeaturedProducts()

// Filter and search
function applyFilters()
function performSearch()

// Product details modal
function showProductDetails(product)
```

### Form Validation
```javascript
// Checkout form validation
function validateField(e)

// Payment processing
function placeOrder()
```

## 🎯 Features Highlights

### ✅ Fully Functional
- Shopping cart with persistent state
- Product filtering and search
- Form validation
- Responsive design
- Interactive UI elements
- Order processing simulation

### ✅ Modern UI/UX
- Clean, professional design
- Smooth animations
- Intuitive navigation
- Mobile-optimized
- Loading states and feedback

### ✅ Ecommerce Features
- Product catalog
- Category browsing
- Brand filtering
- Price sorting
- Checkout process
- Order confirmation

## 🌐 Browser Compatibility

- **Chrome**: Latest versions ✅
- **Firefox**: Latest versions ✅
- **Safari**: Latest versions ✅
- **Edge**: Latest versions ✅
- **Mobile Browsers**: iOS Safari, Chrome Mobile ✅

## 📋 Sample Data

The website includes comprehensive sample data:
- **18 Sample Products** across different categories
- **12 Brand Partners** with product counts
- **Product Categories** with realistic items
- **Pricing** in Sri Lankan Rupees (LKR)
- **High-quality Images** from Unsplash

## 🔮 Future Enhancements

When connected to a backend, this frontend can easily integrate:
- Real product data from database
- User authentication
- Payment gateway integration
- Order management system
- Inventory tracking
- Customer reviews
- Wishlist functionality
- Email notifications

## 📞 Contact & Support

For any questions or customizations:
- **Email**: support@freshmart.lk
- **Phone**: +94 11 234 5678
- **WhatsApp**: Available 24/7

## 📄 License

This project is created for demonstration purposes. All product images are from Unsplash and are free to use.

---

**Note**: This is a frontend-only implementation. All backend functionality (payments, user accounts, inventory) is simulated with JavaScript. The design is specifically crafted to match the UI/UX of laptop.lk while being perfectly adapted for the food industry.

## 🚀 Quick Start

1. Open `index.html` in your browser
2. Browse products and add them to cart
3. Go through the checkout process
4. Experience the complete ecommerce flow
5. Test on different devices for responsive experience

Enjoy exploring FreshMart.lk - Your premium online food destination! 🛒🥬🍎
