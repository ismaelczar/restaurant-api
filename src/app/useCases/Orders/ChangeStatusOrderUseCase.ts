import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function ChangeStatusOrderUseCase(req: Request, res: Response) {
  try {
    const { status } = req.body;

    if (status === 'WAITING') {
      return res.status(400).json({ error: 'Cannot set status to WAITING' });
    }

    if (status !== 'IN_PRODUCTION' && status !== 'DONE') {
      return res.status(400).json({ error: 'Invalid status value' });
    }

    await Order.findByIdAndUpdate(req.params.id, { status });

    return res.sendStatus(204);
  } catch (error) {
    console.error('Error updating order status:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
