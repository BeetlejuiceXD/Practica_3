import express from 'express';
import {
  createOrder,
  getAllOrders,
  getUserOrders
} from '../controllers/orderController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Crear una nueva orden
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                     quantity:
 *                       type: number
 *     responses:
 *       201:
 *         description: Orden creada exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', protect, createOrder);
/**
 * @swagger
 * /api/orders/myorders:
 *   get:
 *     summary: Obtener las órdenes del usuario autenticado
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de órdenes del usuario
 */
router.get('/myorders', protect, getUserOrders);
/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Obtener todas las órdenes (admin)
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de todas las órdenes
 *       403:
 *         description: No autorizado
 */
router.get('/', protect, admin, getAllOrders);

export default router;
