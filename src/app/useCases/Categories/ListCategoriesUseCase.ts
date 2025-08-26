import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function ListCategoriesUseCase(req: Request, res: Response) {
  try {
    const category = await Category.find();

    return res.status(200).json(category);
  } catch (error) {
    console.error('Error listing category:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
