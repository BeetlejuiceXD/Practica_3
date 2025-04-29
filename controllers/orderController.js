import Order from '../models/Order.js';

// Crear nueva orden
export const createOrder = async (req, res) => {
  try {
    const { products, total } = req.body;
    const order = new Order({
      user: req.user._id,
      products,
      total,
    });
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la orden', error });
  }
};

// Obtener todas las órdenes (admin)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user', 'name email');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las órdenes', error });
  }
};

// Obtener órdenes del usuario autenticado
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate('user', 'name email')
      .populate('products.productId', 'name image');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tus órdenes', error });
  }
};
