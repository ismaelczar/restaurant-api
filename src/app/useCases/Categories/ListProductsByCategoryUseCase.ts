import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function ListProductsByCategoryUseCase(req: Request, res: Response) {
  try {
    const products = await Category.find().where('_id').equals(req.params.id);

    return res.status(200).json(products);
  } catch (error) {
    console.error('Error listing products by category:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
