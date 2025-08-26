import { Request, Response } from 'express';
import { Product } from '../../models/Products';

export async function ListProductsUseCase(req: Request, res: Response) {
  try {
    const products = await Product.find();

    const productsWithImageUrl = products.map(product => ({
      ...product.toObject(),
      imageUrl: product.imagePath
        ? `${req.protocol}://${req.get('host')}/uploads/${product.imagePath}`
        : null,
    }));

    return res.status(200).json(productsWithImageUrl);
  } catch (error) {
    console.error('Error listing products:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
