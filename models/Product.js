

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor agrega el nombre del producto']
  },
  description: {
    type: String,
    required: [true, 'Por favor agrega una descripción']
  },
  price: {
    type: Number,
    required: [true, 'Por favor agrega el precio']
  },
  image: {
    type: String,
    required: [true, 'Por favor agrega la imagen del producto']
  },
  stock: {
    type: Number,
    required: [true, 'Por favor agrega la cantidad en stock'],
    default: 0
  },
  category: {
    type: String,
    required: [true, 'Por favor especifica una categoría']
  }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;