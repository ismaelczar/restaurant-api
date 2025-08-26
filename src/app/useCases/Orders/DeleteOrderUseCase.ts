import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function DeleteOrderUseCase(req: Request, res: Response) {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    return res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting order:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
