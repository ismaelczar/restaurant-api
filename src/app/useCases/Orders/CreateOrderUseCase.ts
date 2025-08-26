import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function CreateOrderUseCase(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    const order = await Order.create({ table, products });

    return res.status(201).json(order);
  } catch (error) {
    console.error('Error create orders:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
