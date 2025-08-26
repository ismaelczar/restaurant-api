import { Router } from 'express';
import { ListProductsUseCase } from './app/useCases/Products/ListProductsUseCase';
import { CreateProductUseCase } from './app/useCases/Products/CreateProductUseCase';
import { ListCategoriesUseCase } from './app/useCases/Categories/ListCategoriesUseCase';
import { CreateCategoryUseCase } from './app/useCases/Categories/CreateCategoryUseCase';
import { ListProductsByCategoryUseCase } from './app/useCases/Categories/ListProductsByCategoryUseCase';
import { upload } from './app/middlewares/uploadConfig';
import { CreateOrderUseCase } from './app/useCases/Orders/CreateOrderUseCase';
import { ListOrdersUseCase } from './app/useCases/Orders/ListOrdersUseCase';
import { ChangeStatusOrderUseCase } from './app/useCases/Orders/ChangeStatusOrderUseCase';
import { DeleteOrderUseCase } from './app/useCases/Orders/DeleteOrderUseCase';

export const route = Router();

// Products
route.get('/products', ListProductsUseCase);
route.post('/products', upload.single('image'), CreateProductUseCase);

// Categories
route.get('/categories', ListCategoriesUseCase);
route.get('/categories/:id/products', ListProductsByCategoryUseCase);
route.post('/categories', CreateCategoryUseCase);

// Orders
route.get('/orders', ListOrdersUseCase);
route.post('/orders', CreateOrderUseCase);
route.put('/orders/:id', ChangeStatusOrderUseCase);
route.delete('/orders/:id', DeleteOrderUseCase);
