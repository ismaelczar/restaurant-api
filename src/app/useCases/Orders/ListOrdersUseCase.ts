import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function ListOrdersUseCase(req: Request, res: Response) {
  try {
    const orders = await Order.find().populate('products.product');

    return res.status(200).json(orders);
  } catch (error) {
    console.error('Error listing orders:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
