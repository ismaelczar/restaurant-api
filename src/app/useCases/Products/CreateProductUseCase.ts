import path from 'path';
import fs from 'fs';
import { Request, Response } from 'express';
import { Product } from '../../models/Products';
import sharp from 'sharp';

export async function CreateProductUseCase(req: Request, res: Response) {
  try {
    const { name, description, price, ingredients, category } = req.body;

    let imagePath = '';

    if (req.file) {
      const uploadDir = path.resolve(__dirname, '..', '..', '..', '..', 'uploads');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const filename = Date.now() + '-' + req.file.originalname.split(' ').join('_');
      imagePath = filename;

      await sharp(req.file.buffer)
        .resize(800)
        .webp({ quality: 80 })
        .toFile(path.resolve(uploadDir, filename));
    }

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      imagePath,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      category,
    });

    return res.status(201).json(product);
  } catch (error) {
    console.error('Error create products:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
