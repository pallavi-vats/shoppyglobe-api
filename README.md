# ShoppyGlobe API

A simple **Node.js + Express + MongoDB** API for an e-commerce platform, built as per project requirements.  
Features authentication with JWT, product listing, and cart management (add, update, delete).

---

## 🚀 Features
- User Registration & Login with hashed passwords (`bcryptjs`)
- JWT-based authentication for protected routes
- Products listing and product details
- Add to cart, update quantity, remove from cart
- MongoDB database connection (Atlas or Local)
- Seed script to insert sample products
- Thunder Client/Postman testing support

---

## 📂 Project Structure
shoppyglobe-api/
├─ index.js
├─ package.json
├─ .env
├─ src/
│ ├─ config/db.js
│ ├─ models/User.js
│ ├─ models/Product.js
│ ├─ models/Cart.js
│ ├─ routes/auth.js
│ ├─ routes/products.js
│ ├─ routes/cart.js
│ ├─ controllers/authController.js
│ ├─ controllers/productController.js
│ ├─ controllers/cartController.js
│ └─ middleware/auth.js
└─ seed.js