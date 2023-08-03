const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce', {
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
