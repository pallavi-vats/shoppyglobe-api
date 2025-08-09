const mongoose = require('mongoose');
const Product = require('./src/models/Product');
require('dotenv').config();

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany({});
  await Product.insertMany([
    { name: 'Lipstick', price: 499, description: 'Matte finish lipstick', stock: 10 },
    { name: 'Moisturizer', price: 299, description: 'Daily hydration', stock: 15 }
  ]);
  console.log('✅ Products seeded');
  process.exit();
}

seed();
