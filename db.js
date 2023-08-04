const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://kaviyaraja0906:6Bk19zR0EGltq7R4@e-com.6ixovnz.mongodb.net/E-commerce', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

mongoose.set('debug', true); // Enable Mongoose debugging


module.exports = connectDB;
